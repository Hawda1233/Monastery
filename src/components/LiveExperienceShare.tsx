import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { MapPin, Send, Users, Globe, Clock, MessageCircle } from "lucide-react";

interface LiveExperience {
  id: string;
  user_name: string;
  user_country?: string;
  experience_text: string;
  location?: string;
  experience_type: string;
  created_at: string;
}

const LiveExperienceShare = () => {
  const { user } = useAuth();
  const [experiences, setExperiences] = useState<LiveExperience[]>([]);
  const [newExperience, setNewExperience] = useState({
    text: "",
    location: "",
    type: "general"
  });
  const [isSharing, setIsSharing] = useState(false);
  const [showShareForm, setShowShareForm] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    // Fetch initial experiences
    fetchExperiences();

    // Set up real-time subscription for new experiences
    const channel = supabase
      .channel('live-experiences')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'live_experiences'
        },
        (payload) => {
          const newExp = payload.new as LiveExperience;
          setExperiences(prev => [newExp, ...prev]);
          
          // Show toast for new experiences from other users
          if (newExp.user_name !== user?.email?.split('@')[0]) {
            toast.success(`${newExp.user_name} shared a live experience!`);
          }
        }
      )
      .subscribe();

    // Set up presence tracking
    const presenceChannel = supabase.channel('live-presence');
    
    presenceChannel
      .on('presence', { event: 'sync' }, () => {
        const newState = presenceChannel.presenceState();
        setOnlineUsers(Object.keys(newState).length);
      })
      .on('presence', { event: 'join' }, ({ key, newPresences }) => {
        console.log('User joined:', key, newPresences);
      })
      .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
        console.log('User left:', key, leftPresences);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await presenceChannel.track({
            user: user?.email || 'Anonymous',
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
      supabase.removeChannel(presenceChannel);
    };
  }, [user]);

  const fetchExperiences = async () => {
    try {
      const { data, error } = await supabase
        .from('live_experiences')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setExperiences(data || []);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  const handleShareExperience = async () => {
    if (!newExperience.text.trim()) {
      toast.error('Please enter your experience');
      return;
    }

    try {
      setIsSharing(true);
      
      const { error } = await supabase
        .from('live_experiences')
        .insert({
          user_id: user?.id || null,
          user_name: user?.email?.split('@')[0] || 'Anonymous Traveler',
          user_country: 'Unknown', // Could be enhanced to detect location
          experience_text: newExperience.text.trim(),
          location: newExperience.location.trim() || null,
          experience_type: newExperience.type,
          is_active: true
        });

      if (error) throw error;

      setNewExperience({ text: "", location: "", type: "general" });
      setShowShareForm(false);
      toast.success('Experience shared successfully!');
    } catch (error) {
      console.error('Error sharing experience:', error);
      toast.error('Failed to share experience');
    } finally {
      setIsSharing(false);
    }
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - past.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getExperienceTypeColor = (type: string) => {
    const colors = {
      general: 'bg-gray-100 text-gray-700',
      monastery: 'bg-purple-100 text-purple-700',
      festival: 'bg-orange-100 text-orange-700',
      homestay: 'bg-green-100 text-green-700',
      trekking: 'bg-blue-100 text-blue-700',
      food: 'bg-red-100 text-red-700'
    };
    return colors[type as keyof typeof colors] || colors.general;
  };

  return (
    <div className="space-y-6">
      {/* Live Experience Header */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Live Travel Experiences
              <Badge variant="secondary" className="animate-pulse">
                LIVE
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {onlineUsers} online
              </div>
              <Button 
                onClick={() => setShowShareForm(!showShareForm)}
                size="sm"
                variant={showShareForm ? "outline" : "default"}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                {showShareForm ? 'Cancel' : 'Share Now'}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Share Experience Form */}
      {showShareForm && (
        <Card className="border-primary/20 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Share Your Live Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Experience Type</label>
                <select 
                  value={newExperience.type}
                  onChange={(e) => setNewExperience(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full p-2 border rounded-lg bg-background"
                >
                  <option value="general">General Experience</option>
                  <option value="monastery">Monastery Visit</option>
                  <option value="festival">Festival/Event</option>
                  <option value="homestay">Homestay</option>
                  <option value="trekking">Trekking/Adventure</option>
                  <option value="food">Food & Culture</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location (Optional)</label>
                <Input
                  placeholder="e.g., Rumtek Monastery, Gangtok"
                  value={newExperience.location}
                  onChange={(e) => setNewExperience(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">What's happening right now?</label>
              <Textarea
                placeholder="Share what you're experiencing right now... The view, the atmosphere, your feelings..."
                value={newExperience.text}
                onChange={(e) => setNewExperience(prev => ({ ...prev, text: e.target.value }))}
                className="min-h-[100px]"
                maxLength={500}
              />
              <div className="text-xs text-muted-foreground mt-1">
                {newExperience.text.length}/500 characters
              </div>
            </div>
            <Button 
              onClick={handleShareExperience}
              disabled={isSharing || !newExperience.text.trim()}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              {isSharing ? 'Sharing...' : 'Share Live Experience'}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Live Experiences Feed */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Live Experiences
        </h3>
        
        {experiences.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              No live experiences yet. Be the first to share what you're experiencing right now!
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {experiences.map((experience) => (
              <Card key={experience.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {experience.user_name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm">
                          {experience.user_name}
                        </span>
                        {experience.user_country && (
                          <span className="text-xs text-muted-foreground">
                            from {experience.user_country}
                          </span>
                        )}
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getExperienceTypeColor(experience.experience_type)}`}
                        >
                          {experience.experience_type}
                        </Badge>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {getTimeAgo(experience.created_at)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-foreground mb-2">
                        "{experience.experience_text}"
                      </p>
                      
                      {experience.location && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {experience.location}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveExperienceShare;
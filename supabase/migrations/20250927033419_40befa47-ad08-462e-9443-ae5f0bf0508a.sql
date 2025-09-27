-- Create function to update timestamps (if it doesn't exist)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create table for live experience sharing
CREATE TABLE public.live_experiences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_country TEXT,
  experience_text TEXT NOT NULL,
  location TEXT,
  experience_type TEXT DEFAULT 'general',
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.live_experiences ENABLE ROW LEVEL SECURITY;

-- Create policies for live experiences
CREATE POLICY "Live experiences are viewable by everyone" 
ON public.live_experiences 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own live experiences" 
ON public.live_experiences 
FOR INSERT 
WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL);

CREATE POLICY "Users can update their own live experiences" 
ON public.live_experiences 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own live experiences" 
ON public.live_experiences 
FOR DELETE 
USING (auth.uid() = user_id);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_live_experiences_updated_at
BEFORE UPDATE ON public.live_experiences
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for live experiences
ALTER TABLE public.live_experiences REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.live_experiences;
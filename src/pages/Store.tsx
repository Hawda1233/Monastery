import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter, 
  Search, 
  Plus, 
  Minus,
  Package,
  Truck,
  Shield,
  Award,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import prayerAltar from "@/assets/prayer-altar.png";
import lepchaTextile from "@/assets/lepcha-textile.png";
import traditionalEarrings from "@/assets/traditional-earrings.png";
import panchiNecklace from "@/assets/panchi-necklace.png";

const Store = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Products", count: 24 },
    { id: "handicrafts", name: "Handicrafts", count: 8 },
    { id: "prayer-items", name: "Prayer Items", count: 5 },
    { id: "textiles", name: "Traditional Textiles", count: 5 },
    { id: "jewelry", name: "Jewelry", count: 4 },
    { id: "books", name: "Books & Manuscripts", count: 2 }
  ];

  const products = [
    {
      id: 1,
      name: "Traditional Thangka Painting",
      category: "handicrafts",
      price: 2500,
      originalPrice: 3000,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      rating: 4.8,
      reviews: 24,
      description: "Authentic hand-painted Thangka by local artisan",
      artisan: "Lama Tenzin",
      location: "Gangtok",
      inStock: true,
      bestseller: true,
      discount: 17
    },
    {
      id: 2,
      name: "Puja Ghar",
      category: "prayer-items",
      price: 4999,
      originalPrice: 6249,
      image: prayerAltar,
      rating: 4.9,
      reviews: 16,
      description: "Handcrafted traditional Buddhist prayer altar with intricate artwork and decorative carvings",
      artisan: "Master Craftsman Tashi",
      location: "Gangtok",
      inStock: true,
      bestseller: true,
      discount: 20
    },
    {
      id: 3,
      name: "Traditional Lepcha Textile",
      category: "textiles",
      price: 1499,
      originalPrice: 1999,
      image: lepchaTextile,
      rating: 4.8,
      reviews: 12,
      description: "Authentic handwoven Lepcha textile with traditional geometric patterns",
      artisan: "Lepcha Weaving Collective",
      location: "Kalimpong",
      inStock: true,
      bestseller: false,
      discount: 25
    },
    {
      id: 4,
      name: "Meditation Cushion Set",
      category: "prayer-items",
      price: 2200,
      originalPrice: 2800,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      rating: 4.7,
      reviews: 14,
      description: "Traditional meditation cushions with Buddhist symbols",
      artisan: "Dolma Tsering",
      location: "Pelling",
      inStock: true,
      bestseller: false,
      discount: 21
    },
    {
      id: 5,
      name: "Traditional Gold Earrings",
      category: "jewelry",
      price: 199,
      originalPrice: 299,
      image: traditionalEarrings,
      rating: 4.7,
      reviews: 18,
      description: "Beautiful traditional gold-plated earrings with colorful gemstones",
      artisan: "Local Jewelry Artisan",
      location: "Gangtok",
      inStock: true,
      bestseller: true,
      discount: 33
    },
    {
      id: 6,
      name: "Panchi Traditional Necklace",
      category: "jewelry",
      price: 399,
      originalPrice: 499,
      image: panchiNecklace,
      rating: 4.8,
      reviews: 15,
      description: "Authentic Panchi necklace with traditional beadwork and pendant",
      artisan: "Traditional Jewelry Collective",
      location: "Sikkim",
      inStock: true,
      bestseller: false,
      discount: 20
    },
    {
      id: 7,
      name: "Buddhist Scripture Book",
      category: "books",
      price: 800,
      originalPrice: 1000,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      rating: 4.8,
      reviews: 8,
      description: "Traditional Buddhist texts in English and Tibetan",
      artisan: "Monastery Publications",
      location: "Pemayangtse",
      inStock: true,
      bestseller: false,
      discount: 20
    }
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const toggleWishlist = (product) => {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    if (isWishlisted) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      toast.success("Removed from wishlist");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist");
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return b.bestseller ? 1 : -1;
    }
  });

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Monastery
            </span>
            <br />
            <span className="text-foreground">Store</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover authentic handicrafts, prayer items, and cultural treasures handmade by 
            local artisans supporting Sikkim's monasteries and communities.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>Authentic Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-blue-500" />
              <span>Free Shipping ₹2000+</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-yellow-500" />
              <span>Supporting Local Artisans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Store Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:w-64 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Cart ({cartCount})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {cart.slice(0, 2).map((item) => (
                        <div key={item.id} className="flex items-center gap-2 text-sm">
                          <span className="flex-1 truncate">{item.name}</span>
                          <span>×{item.quantity}</span>
                        </div>
                      ))}
                      {cart.length > 2 && (
                        <p className="text-xs text-muted-foreground">
                          +{cart.length - 2} more items
                        </p>
                      )}
                    </div>
                    <div className="border-t pt-2 mb-4">
                      <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span>₹{cartTotal.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => setIsCheckoutOpen(true)}
                    >
                      Checkout
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Sort and View Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedCategory === "all" ? "All Products" : 
                     categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {sortedProducts.length} products found
                  </p>
                </div>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                          {product.discount}% OFF
                        </Badge>
                      )}
                      {product.bestseller && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500 text-white">
                          Bestseller
                        </Badge>
                      )}
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={`absolute bottom-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors ${
                          wishlist.some(item => item.id === product.id)
                            ? "text-red-500"
                            : "text-muted-foreground hover:text-red-500"
                        }`}
                      >
                        <Heart className="h-4 w-4" fill={wishlist.some(item => item.id === product.id) ? "currentColor" : "none"} />
                      </button>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                        {!product.inStock && (
                          <Badge variant="secondary" className="text-xs">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="mb-3 line-clamp-2">
                        {product.description}
                      </CardDescription>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <MapPin className="h-3 w-3" />
                        <span>By {product.artisan}, {product.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <Button
                        className="w-full"
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
            <DialogDescription>
              Complete your order and support local artisans
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Cart Items */}
            <div>
              <h3 className="font-semibold mb-3">Your Items</h3>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">₹{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <h3 className="font-semibold">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div>
                <Label htmlFor="address">Shipping Address</Label>
                <Textarea id="address" required />
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{cartTotal >= 2000 ? "Free" : "₹200"}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>₹{(cartTotal + (cartTotal >= 2000 ? 0 : 200)).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Button 
              className="w-full" 
              onClick={() => {
                toast.success("Order placed successfully! We'll contact you soon.");
                setCart([]);
                setIsCheckoutOpen(false);
              }}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Place Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Store;
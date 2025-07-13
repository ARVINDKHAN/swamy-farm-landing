
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export const ProduceGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "chicken", label: "Country Chicken" },
    { id: "herbs", label: "Herbal Plants" },
    { id: "fruits", label: "Seasonal Fruits" },
    { id: "eggs", label: "Organic Eggs" }
  ];

  const produce = [
    {
      name: "Country Chicken",
      category: "chicken",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      season: "Available",
      description: "🐔 Raised in natural habitats — no hormones, just wholesome nutrition."
    },
    {
      name: "Herbal Plants",
      category: "herbs",
      image: "/herbal-plants.jpg",
      season: "Year-round",
      description: "🍃 Medicinal greens grown sustainably, like Tulsi, Brahmi, and Aloe Vera."
    },
    {
      name: "Seasonal Fruits",
      category: "fruits",
      image: "/seasonal-fruits.jpg",
      season: "Seasonal",
      description: "🍇 Naturally ripened and hand-picked — mangoes, guavas, bananas, and more."
    },
    {
      name: "Organic Eggs",
      category: "eggs",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      season: "Daily Fresh",
      description: "🥚 Fresh from free-range hens, packed with farm-raised goodness."
    }
  ];

  const filteredProduce = activeCategory === "all" 
    ? produce 
    : produce.filter(item => item.category === activeCategory);

  return (
    <section id="produce" className="section-padding bg-gradient-to-br from-white to-farm-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-farm-sun mr-2 animate-float" />
            <span className="text-farm-leaf font-semibold uppercase tracking-wide">
              Fresh from the Farm
            </span>
            <Sparkles className="h-6 w-6 text-farm-sun ml-2 animate-float" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-farm-earth mb-6">
            Our <span className="text-gradient">Natural Products</span>
          </h2>
          <p className="text-xl text-farm-soil max-w-3xl mx-auto">
            From farm-fresh eggs to medicinal herbs, every product is cultivated with care, 
            ensuring the highest quality and natural goodness for your family.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-farm-leaf text-white shadow-lg animate-glow"
                  : "bg-white/80 text-farm-earth hover:bg-farm-leaf/10 border border-farm-leaf/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProduce.map((item, index) => (
            <Card 
              key={index} 
              className="group hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-farm-sun text-farm-earth font-semibold">
                    {item.season}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-farm-earth mb-3">
                  {item.name}
                </h3>
                <p className="text-farm-soil leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

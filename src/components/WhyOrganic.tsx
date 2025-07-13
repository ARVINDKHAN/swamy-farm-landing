
import { Shield, Heart, Leaf, Globe, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyOrganic = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Pure & Safe",
      description: "No harmful chemicals, pesticides, or synthetic fertilizers - just nature's own protection"
    },
    {
      icon: Heart,
      title: "Better Health",
      description: "Higher nutritional value, antioxidants, and natural vitamins that support your well-being"
    },
    {
      icon: Leaf,
      title: "Earth Friendly",
      description: "Sustainable farming practices that preserve soil health and protect our ecosystem"
    },
    {
      icon: Globe,
      title: "Future Focused",
      description: "Supporting organic farming helps ensure a sustainable future for coming generations"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Fair practices that support local farmers and strengthen rural communities"
    },
    {
      icon: Star,
      title: "Superior Taste",
      description: "Natural growing methods result in richer, more authentic flavors that you can truly taste"
    }
  ];

  return (
    <section id="why-organic" className="section-padding bg-gradient-to-br from-farm-leaf/5 to-farm-earth/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-farm-earth mb-6">
            Why Choose <span className="text-gradient">Organic?</span>
          </h2>
          <p className="text-xl text-farm-soil max-w-4xl mx-auto leading-relaxed">
            Organic farming isn't just a method - it's a philosophy of respect for nature, health, and the future. 
            Here's why making the organic choice matters for you, your family, and our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-farm-leaf to-farm-earth rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-farm-earth mb-4">
                  {benefit.title}
                </h3>
                <p className="text-farm-soil leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-farm-earth mb-6">
                The Science Behind Organic
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-farm-leaf rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-farm-earth mb-2">Soil Health</h4>
                    <p className="text-farm-soil">Organic farming builds soil fertility naturally, creating a living ecosystem underground that supports plant health.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-farm-leaf rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-farm-earth mb-2">Biodiversity</h4>
                    <p className="text-farm-soil">Our farms support beneficial insects, birds, and microorganisms that create balanced ecosystems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-farm-leaf rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-farm-earth mb-2">Water Conservation</h4>
                    <p className="text-farm-soil">Organic methods improve water retention and reduce contamination of groundwater sources.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-farm-sun/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-farm-earth mb-2">40%</div>
                <div className="text-sm text-farm-soil">Higher Antioxidants</div>
              </div>
              <div className="bg-farm-leaf/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-farm-earth mb-2">30%</div>
                <div className="text-sm text-farm-soil">Less Water Usage</div>
              </div>
              <div className="bg-farm-harvest/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-farm-earth mb-2">0</div>
                <div className="text-sm text-farm-soil">Chemical Residues</div>
              </div>
              <div className="bg-farm-earth/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-farm-earth mb-2">95%</div>
                <div className="text-sm text-farm-soil">Soil Health Improved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

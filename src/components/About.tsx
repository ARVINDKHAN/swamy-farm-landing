
import { Heart, Users, Leaf, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Heritage & Heart",
      description: "Three generations of farming wisdom passed down through love and dedication to the land."
    },
    {
      icon: Leaf,
      title: "Pure & Natural",
      description: "100% organic methods, no chemicals, just nature's own way of nurturing life."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections between farmers, families, and the future of sustainable agriculture."
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Recognized for our commitment to quality, sustainability, and educational outreach."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-farm-cream to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-farm-earth mb-6">
            Rooted in <span className="text-gradient">Tradition</span>
          </h2>
          <p className="text-xl text-farm-soil max-w-3xl mx-auto leading-relaxed">
            ASN Swamy Organic Farm began with a simple belief: that the earth provides everything we need, 
            if we listen to its wisdom. Founded on the principles passed down from Arvin's grandfather, 
            our farm is a living testament to sustainable agriculture and the power of organic living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-farm-leaf/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-farm-leaf" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-farm-earth mb-3">
                  {value.title}
                </h3>
                <p className="text-farm-soil leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-farm-earth mb-6">
                Our Journey, Your Future
              </h3>
              <p className="text-farm-soil mb-6 leading-relaxed">
                What started as a small family farm has grown into a beacon of organic excellence. 
                We've maintained our commitment to traditional farming methods while embracing 
                modern sustainable practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-farm-leaf rounded-full mr-3"></div>
                  <span className="text-farm-soil">Over 50 varieties of organic produce</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-farm-leaf rounded-full mr-3"></div>
                  <span className="text-farm-soil">Zero chemical pesticides or fertilizers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-farm-leaf rounded-full mr-3"></div>
                  <span className="text-farm-soil">Educational programs for all ages</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-farm-leaf rounded-full mr-3"></div>
                  <span className="text-farm-soil">Certified organic by leading authorities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/about-img.jpg"
                alt="Organic farming heritage"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-farm-sun text-farm-earth p-4 rounded-xl shadow-xl animate-glow">
                <span className="text-2xl font-bold">50+</span>
                <br />
                <span className="text-sm">Years of Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

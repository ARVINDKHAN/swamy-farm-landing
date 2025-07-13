
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, CheckCircle, ExternalLink } from "lucide-react";

export const BookingSection = () => {
  const visitPackages = [
    {
      title: "Educational Farm Tour",
      duration: "2-3 hours",
      groupSize: "5-30 people",
      price: "Free",
      features: [
        "Guided tour of organic fields",
        "Traditional farming demonstrations",
        "Soil and composting workshop",
        "Fresh produce tasting",
        "Photo opportunities"
      ]
    },
    {
      title: "Farming Experience Program",
      duration: "Full day (6 hours)",
      groupSize: "10-25 people",
      price: "Free",
      features: [
        "Hands-on farming activities",
        "Seed planting experience",
        "Organic farming certification",
        "Traditional lunch included",
        "Take-home organic produce"
      ]
    },
    {
      title: "Weekend Farm Stay",
      duration: "2 days, 1 night",
      groupSize: "5-15 people",
      price: "Free",
      features: [
        "Rural accommodation",
        "All organic meals",
        "Multiple farming workshops",
        "Basic Farming Certificate",
        "Cultural activities"
      ]
    }
  ];

  const handleBookingClick = () => {
    window.open('https://forms.gle/5hYnwVFugMnjDYji8', '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-br from-farm-leaf/5 to-farm-earth/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-farm-earth mb-6">
            Book Your <span className="text-gradient">Farm Experience</span>
          </h2>
          <p className="text-xl text-farm-soil max-w-4xl mx-auto leading-relaxed mb-8">
            <em>"Come learn with your hands in the soil. Whether you're a student or farmer, 
            ASN welcomes you to experience authentic organic farming and earn your Basic Farming Certificate."</em>
          </p>
          <div className="flex items-center justify-center">
            <Award className="h-6 w-6 text-farm-sun mr-2" />
            <span className="text-farm-leaf font-semibold">Certified Learning Experience</span>
          </div>
        </div>

        {/* Visit Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {visitPackages.map((pkg, index) => (
            <Card key={index} className="hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-playfair text-farm-earth mb-2">
                  {pkg.title}
                </CardTitle>
                <div className="space-y-2 text-sm text-farm-soil">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {pkg.groupSize}
                  </div>
                  <div className="text-2xl font-bold text-farm-leaf mt-4">
                    {pkg.price}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-farm-leaf mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-farm-soil text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Button */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold text-farm-earth mb-4">
                Reserve Your Visit
              </h3>
              <p className="text-farm-soil mb-8">
                Click the button below to fill out our booking form and reserve your farm experience.
              </p>
              
              <Button 
                onClick={handleBookingClick}
                size="lg"
                className="bg-farm-leaf hover:bg-farm-leaf/90 text-white px-6 sm:px-12 py-4 text-lg font-semibold rounded-full shadow-xl hover-lift w-full sm:w-auto"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Book Your Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

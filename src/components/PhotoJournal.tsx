
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, MapPin } from "lucide-react";

export const PhotoJournal = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      image: "/img.jpg",
      title: "Pondicherry CM Honored for Organic Vision",
      date: "March 2024",
      location: "Pondicherry",
      description: "Celebrating the Chief Ministes dedication to promoting sustainable farming practices, this moment marks a key milestone in the journey toward organic production."
    },
    {
      id: 2,
      image: "/img2.jpg", // updated image source
      title: "Police Officer Honored at ASN",
      date: "February 2024",
      location: "Vellore",
      description: "In recognition of dedicated service and community support, a police officer was recently awarded at ASN Swamy Organic Farm. The moment celebrates unity between public service and sustainable agricultural efforts.",
    },
    {
      id: 3,
      image: "/img3.jpg",
      title: "Pasumai Vikatan Features ASN",
      date: "January 2024",
      location: "Chennai", 
      description: "Honored to be showcased as the cover story in *Pasumai Vikatan*, ASN Swamy Organic Farm takes pride in its journey toward sustainable agriculture.",
    },
    {
      id: 4,
      image: "/img4.jpg",
      // image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "College Students Visit ASN Swamy Organic Farm",
      date: "April 2024",
      location: "Adanur village",
      description: "A group of enthusiastic students visited ASN Swamy Organic Farm for an inspiring hands-on experience in organic agriculture.",
    },
    {
      id: 5,
      image: "/img5.jpg",
      // image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Farmers visit ASN Swamy Organic Farm",
      date: "March 2024",
      location: "Adanur village",
      description: "Farmers from nearby villages visited ASN Swamy Organic Farm to learn about organic farming practices and sustainable agriculture.",
    },
    {
      id: 6,
      image: "/img6.jpg",
      // image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Learning Together",
      date: "February 2024",
      location: "Education Center",
      description: "Students and farmers gather to share knowledge about sustainable agriculture and organic methods."
    }
  ];

  return (
    <section id="journal" className="section-padding bg-gradient-to-br from-farm-cream to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-6 w-6 text-farm-leaf mr-2" />
            <span className="text-farm-leaf font-semibold uppercase tracking-wide">
              Life at the Farm
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-farm-earth mb-6">
            Our <span className="text-gradient">Photo Journal</span>
          </h2>
          <p className="text-xl text-farm-soil max-w-3xl mx-auto">
            Experience the beauty, tradition, and daily rhythm of organic farming through 
            candid moments captured across our fields and seasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <Card 
              key={photo.id}
              className="group hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedPhoto(selectedPhoto === photo.id ? null : photo.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-farm-sun text-farm-earth font-semibold">
                    {photo.date}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-farm-earth mb-3">
                  {photo.title}
                </h3>
                
                <div className="flex items-center text-farm-soil mb-3 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{photo.date}</span>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{photo.location}</span>
                </div>
                
                {selectedPhoto === photo.id && (
                  <div className="animate-fade-in">
                    <p className="text-farm-soil leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                )}
                
                {selectedPhoto !== photo.id && (
                  <p className="text-farm-soil text-sm opacity-75">
                    Click to read more...
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

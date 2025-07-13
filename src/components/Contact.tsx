
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = contactForm;
    const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    window.open(`https://wa.me/919442311505?text=${text}`, "_blank");
    // Optionally, show a toast or reset the form here
    toast({
      title: "WhatsApp Message Ready!",
      description: "Your details are ready to send in WhatsApp. Please press send in the WhatsApp window.",
    });
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-farm-earth/5 to-farm-leaf/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-farm-earth mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-farm-soil max-w-3xl mx-auto">
            Ready to start your organic journey? We'd love to hear from you. 
            Reach out for visits, partnerships, or just to learn more about sustainable farming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-farm-earth mb-6">
                Visit Our Farm
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-farm-leaf rounded-full p-3 mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-farm-earth mb-1">Address</h4>
                    <p className="text-farm-soil">
                      ASN Swamy Organic Farm<br />
                      Adanur Village, Arani Taluk,<br />
                      Tiruvannamalai District, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-farm-leaf rounded-full p-3 mr-4 mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-farm-earth mb-1">Phone</h4>
                    <p className="text-farm-soil">
                      94423 11505<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-farm-leaf rounded-full p-3 mr-4 mt-1">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-farm-earth mb-1">Email</h4>
                    <p className="text-farm-soil">
                      info@asnswamyfarm.com<br />
                      visits@asnswamyfarm.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-farm-leaf rounded-full p-3 mr-4 mt-1">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-farm-earth mb-1">Visit Hours</h4>
                    <p className="text-farm-soil">
                      Monday - Saturday: 8:00 AM - 6:00 PM<br />
                      Sunday: 9:00 AM - 5:00 PM<br />
                      <span className="text-sm text-farm-soil/70">*Advance booking required</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder replaced with Google Maps embed */}
            <div className="rounded-lg text-card-foreground bg-white/80 backdrop-blur-sm border-0 shadow-lg p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Adanur+Village,+Arani+Taluk,+Tiruvannamalai+District,+Tamil+Nadu,+India&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '0.75rem', width: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ASN Swamy Organic Farm Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-farm-earth mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => handleContactChange("name", e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleContactChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    value={contactForm.subject}
                    onChange={(e) => handleContactChange("subject", e.target.value)}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => handleContactChange("message", e.target.value)}
                    placeholder="Tell us about your interest in organic farming, questions, or how we can help..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-farm-leaf hover:bg-farm-leaf/90 text-white py-3 text-lg font-semibold rounded-full shadow-lg hover-lift"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

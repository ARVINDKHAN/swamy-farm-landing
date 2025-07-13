
import { Leaf, Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-farm-earth to-farm-soil text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-farm-sun p-2 rounded-full animate-glow">
                <Leaf className="h-6 w-6 text-farm-earth" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">ASN Swamy Organic Farm</h3>
                <p className="text-farm-cream text-sm">Tradition Meets Tomorrow</p>
              </div>
            </div>
            <p className="text-farm-cream leading-relaxed mb-6">
              Rooted in heritage, growing towards a sustainable future. We're committed to 
              providing pure, organic produce while educating the next generation about 
              traditional farming wisdom.
            </p>
            <div className="flex items-center text-farm-sun">
              <Heart className="h-4 w-4 mr-2" />
              <span className="text-sm">Cultivating with love since generations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-farm-cream hover:text-farm-sun transition-colors">
                  About Our Farm
                </a>
              </li>
              <li>
                <a href="#produce" className="text-farm-cream hover:text-farm-sun transition-colors">
                  Organic Produce
                </a>
              </li>
              <li>
                <a href="#why-organic" className="text-farm-cream hover:text-farm-sun transition-colors">
                  Why Choose Organic
                </a>
              </li>
              <li>
                <a href="#booking" className="text-farm-cream hover:text-farm-sun transition-colors">
                  Book Farm Visit
                </a>
              </li>
              <li>
                <a href="#journal" className="text-farm-cream hover:text-farm-sun transition-colors">
                  Photo Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-farm-sun mr-3 mt-1 flex-shrink-0" />
                <span className="text-farm-cream text-sm">
                  Adanur Village, Arani Taluk,<br />
                  Tiruvannamalai District, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-farm-sun mr-3" />
                <span className="text-farm-cream text-sm">94423 11505</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-farm-sun mr-3" />
                <span className="text-farm-cream text-sm">info@asnswamyfarm.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-farm-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-farm-cream text-sm mb-4 md:mb-0">
              ©2025  ASN Swamy Organic Farm  • Powered by AGNI NEXT-GEN Technologies
            </p>
            <div className="flex items-center space-x-6 text-sm text-farm-cream">
              <a href="#" className="hover:text-farm-sun transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-farm-sun transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-farm-sun transition-colors">Sustainability</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

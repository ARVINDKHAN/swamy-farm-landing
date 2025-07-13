
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t('nav.about') },
    { href: "#produce", label: t('nav.produce') },
    { href: "#why-organic", label: t('nav.whyOrganic') },
    { href: "#journal", label: t('nav.journal') },
    { href: "#booking", label: t('nav.booking') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-farm-leaf p-2 rounded-full animate-glow">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-farm-earth">
                ASN Swamy Organic Farm
              </h1>
              <p className="text-xs text-farm-soil">Tradition Meets Tomorrow</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-farm-earth hover:text-farm-leaf transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            {/* Language Switcher */}
            <div className="ml-8 flex gap-2">
              <button className="px-3 py-1 rounded bg-farm-leaf text-white font-semibold" onClick={() => i18n.changeLanguage('ta')}>தமிழ்</button>
              <button className="px-3 py-1 rounded bg-farm-sun text-farm-earth font-semibold" onClick={() => i18n.changeLanguage('en')}>English</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-farm-earth/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-farm-earth hover:text-farm-leaf transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

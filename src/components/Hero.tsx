
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-farm-earth/10 via-farm-leaf/10 to-farm-soil/20">
      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <div className="container-custom">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-farm-sun animate-float mr-3" />
              <span className="text-farm-sun font-inter font-medium tracking-wide uppercase text-sm">
                {t('hero.banner', 'Nature’s Promise, 100% Organic')}
              </span>
              <Sparkles className="h-8 w-8 text-farm-sun animate-float ml-3" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-farm-earth leading-tight">
              {t('hero.title')}
              <br />
              <span className="text-gradient">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-farm-soil mb-8 max-w-3xl mx-auto leading-relaxed">
              <em>{t('hero.description')}</em>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Removed 'Discover Our Story' button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSccSqUDqvqWTT-WKLOfv22YZMeYN6Ao3EqqV5rYNL9HrloFig/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-farm-sun text-farm-sun hover:bg-farm-sun hover:text-farm-earth px-8 py-4 text-lg font-semibold rounded-full shadow-xl backdrop-blur-sm"
                >
                  {t('hero.button', 'Book Farm Visit')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-farm-earth" />
      </div>
    </section>
  );
};

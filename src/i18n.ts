import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        produce: 'Produce',
        whyOrganic: 'Why Organic',
        journal: 'Photo Journal',
        booking: 'Book Visit',
        contact: 'Contact',
      },
      hero: {
        title: 'ASN Swamy',
        subtitle: 'Organic Farm',
        description: 'From my grandfather\'s wisdom to tomorrow\'s harvest - experience the pure essence of organic living, where every seed tells a story of tradition and sustainability.',
        banner: "Nature’s Promise, 100% Organic",
        button: "Book Farm Visit"
      }
    }
  },
  ta: {
    translation: {
      nav: {
        about: 'பற்றி',
        produce: 'உற்பத்தி',
        whyOrganic: 'ஏன் காரிகம்',
        journal: 'புகைப்பட இதழ்',
        booking: 'பண்ணை வருகை',
        contact: 'தொடர்பு',
      },
      hero: {
        title: 'ஏ.எஸ்.என். சுவாமி',
        subtitle: 'ஆர்கானிக் பண்ணை',
        description: 'என் தாத்தாவின் ஞானத்திலிருந்து நாளைய அறுவடைக்கு - இயற்கை வாழ்வின் தூய சாரத்தை அனுபவியுங்கள், ஒவ்வொரு விதையும் பாரம்பரியமும் நிலைத்திருக்கும் கதையையும் சொல்கிறது.',
        banner: "இயற்கையின் வாக்குறுதி, 100% காரிகம்",
        button: "பண்ணை வருகை"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 
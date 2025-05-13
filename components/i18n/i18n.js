// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      splash1_title: 'Welcome to the world of Taj machinery!',
      splash1_subtitle: 'Discover top-quality cars, verified sellers, and unbeatable deals — all in one place.',
      splash2_title: 'Buy Smarter, Sell Faster',
      splash2_subtitle: 'List your car in minutes or browse thousands of verified listings near you.',
      splash3_title: 'Buy From The Best',
      splash3_subtitle: 'Welcome back! Please enter your credentials to access your account.',
      skip: 'Skip',
      continue: 'Continue',
      select_language: 'Select Language',
      all_languages: 'All Languages',
      search_languages: 'Search Languages'
    },
  },
  ar: {
    translation: {
      splash1_title: 'مرحبًا بك في عالم تاج للمعدات!',
      splash1_subtitle: 'اكتشف السيارات عالية الجودة، البائعين الموثوقين، والعروض التي لا تُقاوَم — كل ذلك في مكان واحد.',
      splash2_title: 'اشترِ بذكاء، وبِع أسرع',
      splash2_subtitle: 'قم بإدراج سيارتك في دقائق أو تصفح آلاف القوائم الموثوقة القريبة منك.',
      splash3_title: 'اشترِ من الأفضل',
      splash3_subtitle: 'مرحبًا بعودتك! الرجاء إدخال بيانات الاعتماد الخاصة بك للوصول إلى حسابك.',
      skip: 'تخطي',
      continue: 'استمرار',
      select_language: 'اختر اللغة',
      all_languages: 'جميع اللغات',
      search_languages: 'ابحث عن اللغات'
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

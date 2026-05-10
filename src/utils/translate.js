import { useTranslation } from 'react-i18next';

export const useTranslate = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  const tText = (en, ar) => {
    return isAr ? ar : en;
  };

  return { tText, isAr };
};

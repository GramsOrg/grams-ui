import i18n from '../i18n/i18n';

const useDirection = () => (['ar'].includes(i18n.language) ? 'rtl' : 'ltr');

export default useDirection;

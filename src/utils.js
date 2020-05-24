export const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

// Проверяем, открыто ли приложение отдельно или в браузере
export const isInStandaloneMode = () =>
  'standalone' in window.navigator && window.navigator.standalone;

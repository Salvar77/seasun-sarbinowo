

export const pageview = (url) => {
    window.gtag('config', 'G-64FJ5CKMYE', {
      page_path: 'https://www.googletagmanager.com/gtag/js?id=G-64FJ5CKMYE',
    });
  };
  
  export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };
import { HomePage } from './pages/HomePage';
import { EbookPage } from './pages/EbookPage';
import { EbookThankYouPage } from './pages/EbookThankYouPage';

function resolvePage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/ebook') {
    return <EbookPage />;
  }

  if (path === '/obrigado-ebook') {
    return <EbookThankYouPage />;
  }

  return <HomePage />;
}

export default function App() {
  return resolvePage();
}

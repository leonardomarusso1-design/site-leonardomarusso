import { HomePage } from './pages/HomePage';
import { EbookPage } from './pages/EbookPage';
import { EbookThankYouPage } from './pages/EbookThankYouPage';
import { KitThankYouPage } from './pages/KitThankYouPage';

function resolvePage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/ebook') {
    return <EbookPage />;
  }

  if (path === '/obrigado-ebook') {
    return <EbookThankYouPage />;
  }

  if (path === '/obrigado-kit') {
    return <KitThankYouPage />;
  }

  return <HomePage />;
}

export default function App() {
  return resolvePage();
}

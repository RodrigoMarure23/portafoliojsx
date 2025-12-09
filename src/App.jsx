import { Portfolio } from './pages/Portfolio';
import { LanguageProvider } from './hooks/useLanguage';
export function App() {
  return <LanguageProvider>
      <Portfolio />
    </LanguageProvider>;
}
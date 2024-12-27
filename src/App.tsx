import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import ChannelAnalysis from './components/channel-metrics';
import EQAnalysis from './components/eq-analysis';
import FunnelConversion from './components/funnel-conversion';
import InstagramFunnel from './components/instagram-funnel';
import VKFunnel from './components/vk-funnel';
import TelegramFunnel from './components/telegram-funnel';
import WhatsAppFunnel from './components/whatsapp-funnel';
import SocialLayout from './components/social-layout';
import KazakhstanComplete from './components/kazakhstan-complete';
import LandingPagesComparison from './components/landing-pages-comparison';
import MainSitePages from './components/main-pages-analysis';
import RegionalComparison from './components/regional-comparison';
import StorePages from './components/store-pages-analysis';
import YandexFunnels from './components/yandex-funnels';
import YouTubeFunnel from './components/youtube-funnel';
import RFFunnel from './components/rf-funnel';
import UAEAnalysis from './components/uae-analysis';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/channel-metrics" element={<ChannelAnalysis />} />
            <Route path="/eq-analysis" element={<EQAnalysis />} />
            <Route path="/funnel-conversion" element={<FunnelConversion />} />
            <Route path="/instagram-funnel" element={<SocialLayout><InstagramFunnel /></SocialLayout>} />
            <Route path="/vk-funnel" element={<SocialLayout><VKFunnel /></SocialLayout>} />
            <Route path="/telegram-funnel" element={<SocialLayout><TelegramFunnel /></SocialLayout>} />
            <Route path="/whatsapp-funnel" element={<SocialLayout><WhatsAppFunnel /></SocialLayout>} />
            <Route path="/kazakhstan" element={<KazakhstanComplete />} />
            <Route path="/landing-pages" element={<LandingPagesComparison />} />
            <Route path="/main-pages" element={<MainSitePages />} />
            <Route path="/regional" element={<RegionalComparison />} />
            <Route path="/store-pages" element={<StorePages />} />
            <Route path="/yandex-funnels" element={<YandexFunnels />} />
            <Route path="/youtube-funnel" element={<YouTubeFunnel />} />
            <Route path="/rf" element={<RFFunnel />} />
            <Route path="/uae" element={<UAEAnalysis />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

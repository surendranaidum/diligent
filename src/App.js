import './App.css';
import TopNav from './Components/TopNav';
import MainMenu from './Components/MainMenu';
import MainLayout from './Components/MainLayout';
import ClientsLayout from './Components/ClientsLayout';
import StatsLayout from './Components/StatsLayout';
import AclAnalytics from './Components/AclAnalytics';
import PerformanceReport from './Components/PerformanceReport';
import PricingLayout from './Components/PricingLayout';
import ClientStories from './Components/ClientStories';
import Compliance from './Components/Compliance';
import SupportLayout from './Components/SupportLayout';

function App() {
  return (
    <div className='w-full'>
      <TopNav/>
      <MainMenu/>
      <MainLayout/>
      <ClientsLayout/>
      <StatsLayout/>
      <AclAnalytics/>
      <PerformanceReport/>
      <PricingLayout/>
      <ClientStories/>
      <Compliance/>
      <SupportLayout/>
    </div>
  );
}

export default App;

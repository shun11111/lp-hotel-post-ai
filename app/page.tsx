// app/page.tsx
import FirstView from './components/FirstView';
import Benefits from './components/Benefits';
// import SuccessStories from './components/SuccessStories';
import Campaigns from './components/Campaigns';
import CTA from './components/CTA';

export default function Home() {
  return (
    <div>
      <FirstView />
      <div className="border-b border-gray-300">
        <Benefits />
      </div>
      {/* <div className="border-b border-gray-300">
        <SuccessStories />
      </div> */}
      <div className="border-b border-gray-300">
        <Campaigns />
      </div>
      <div className="border-b border-gray-300">
        <CTA />
      </div>
    </div>
  );
}
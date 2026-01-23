import HeroSection from "@/components/wedding/HeroSection";
import EventDetails from "@/components/wedding/EventDetails";
import PhotoFrame from "@/components/wedding/PhotoFrame";
import Countdown from "@/components/wedding/Countdown";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPForm from "@/components/wedding/RSVPForm";
import Footer from "@/components/wedding/Footer";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import patternOverlay from "@/assets/pattern-overlay.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Global Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `url(${patternOverlay})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Event Details */}
        <EventDetails />
        
        {/* Photo 1 */}
        <section className="py-12 px-6">
          <PhotoFrame caption="ذكريات جميلة" />
        </section>
        
        {/* Countdown */}
        <Countdown />
        
        {/* Photo 2 */}
        <section className="py-12 px-6">
          <PhotoFrame caption="لحظات الخطوبة" />
        </section>
        
        {/* Location */}
        <LocationSection />
        
        {/* Photo 3 */}
        <section className="py-12 px-6">
          <PhotoFrame caption="معاً نبني المستقبل" />
        </section>
        
        {/* RSVP Form */}
        <RSVPForm />
        
        {/* Photo 4 */}
        <section className="py-12 px-6">
          <PhotoFrame caption="في انتظاركم" />
        </section>
        
        {/* Footer */}
        <Footer />
      </main>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;

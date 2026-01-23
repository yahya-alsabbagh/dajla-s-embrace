import HeroSection from "@/components/wedding/HeroSection";
import EventDetails from "@/components/wedding/EventDetails";
import PhotoFrame from "@/components/wedding/PhotoFrame";
import Countdown from "@/components/wedding/Countdown";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPForm from "@/components/wedding/RSVPForm";
import Footer from "@/components/wedding/Footer";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import patternOverlay from "@/assets/pattern-overlay.png";
import heroImage from "@/assets/hero-tigris.jpg";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden min-h-screen" style={{ backgroundColor: '#f5f0e8' }}>
      {/* Fixed Full-Page Background - Image at top, gradient continues */}
      <div className="fixed inset-0 w-full h-full">
        {/* Hero image - positioned at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-screen"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Gradient that blends image into warm cream/ivory */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              transparent 40%,
              rgba(245, 240, 232, 0.3) 60%,
              rgba(245, 240, 232, 0.7) 80%,
              rgba(245, 240, 232, 0.9) 100%
            )`
          }}
        />
        
        {/* Subtle pattern continues across page */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `url(${patternOverlay})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />
      </div>
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Event Details */}
        <EventDetails />
        
      {/* Photos Grid (2x2) */}
      <section className="py-12 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <PhotoFrame
              caption="ضحكتها الحلوة"
              src={`${import.meta.env.BASE_URL}1.jpg`}
            />
            <PhotoFrame
              caption="لحظات الخطوبة"
              src={`${import.meta.env.BASE_URL}2.jpg`}
            />
            <PhotoFrame
              caption="تخرج أيوتة"
              src={`${import.meta.env.BASE_URL}3.jpg`}
            />
            <PhotoFrame
              caption="الحب مالي"
              src={`${import.meta.env.BASE_URL}4.jpg`}
            />
          </div>
        </div>
      </section>


        
        {/* Countdown */}
        <Countdown />
        
        
        {/* Location */}
        <LocationSection />
        
        
        {/* RSVP Form */}
        <RSVPForm />

        
        {/* Footer */}
        <Footer />
      </main>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;

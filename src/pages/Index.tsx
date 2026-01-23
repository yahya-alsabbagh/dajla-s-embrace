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
        
        /* {/* Photo 1 - Right aligned */}
        <section className="py-12 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="flex justify-end">
              <PhotoFrame caption="ذكريات جميلة" className="mr-0 md:mr-12" />
            </div>
          </div>
        </section> */


        {/* Photos Grid (2x2) */}
        <section className="py-12 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <PhotoFrame caption="ذكريات جميلة" />
              <PhotoFrame caption="لحظات الخطوبة" />
              <PhotoFrame caption="معاً نبني المستقبل" />
              <PhotoFrame caption="في انتظاركم" />
            </div>
          </div>
        </section>


        
        {/* Countdown */}
        <Countdown />
        
        /* {/* Photo 2 - Left aligned */}
        <section className="py-12 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="flex justify-start">
              <PhotoFrame caption="لحظات الخطوبة" className="ml-0 md:ml-12" />
            </div>
          </div>
        </section> */
        
        {/* Location */}
        <LocationSection />
        
        /* {/* Photo 3 - Center */}
        <section className="py-12 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="flex justify-center">
              <PhotoFrame caption="معاً نبني المستقبل" />
            </div>
          </div>
        </section> */
        
        {/* RSVP Form */}
        <RSVPForm />
        
        /* {/* Photo 4 - Right aligned */}
        <section className="py-12 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="flex justify-end">
              <PhotoFrame caption="في انتظاركم" className="mr-0 md:mr-20" />
            </div>
          </div>
        </section> */


        
        {/* Footer */}
        <Footer />
      </main>
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;

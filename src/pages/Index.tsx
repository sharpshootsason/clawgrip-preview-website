import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <HeroSection />
      <ContentSection />
      
      {/* Blur overlay for bottom half */}
      <div className="fixed inset-0 top-1/2 bg-gradient-to-b from-transparent via-background/50 to-background backdrop-blur-xl pointer-events-none z-50" />
    </div>
  );
};

export default Index;

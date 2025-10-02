import { Button } from '@/components/ui/button';
import { Check, Shield, Lock, Zap, Mail } from 'lucide-react';
import heroBg1 from '@/assets/hero-bg-1.png';
import newReleasesWoman from '@/assets/new-releases-woman.png';
import ProductSection from './ProductSection';

const ContentSection = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Features Section */}
      <section id="directory" className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card/30 p-12 border border-border/30">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 font-light">
                  Resistant and breathable material
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 font-light">
                  Support for fingers and knuckles
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 font-light">
                  Designed for combat sports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wide">
              New Releases
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
              For early rounds, late rounds, and zero distractions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="overflow-hidden border border-border/30 bg-card/20">
              <img 
                src={heroBg1} 
                alt="ClawGrip Wraps - Man" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="overflow-hidden border border-border/30 bg-card/20">
              <img 
                src={newReleasesWoman} 
                alt="ClawGrip Wraps - Woman" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="bg-white text-background border-0 hover:bg-white/90 px-12 py-6 text-sm uppercase tracking-widest font-bold transition-all duration-300"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <ProductSection />

      {/* Benefits Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 border border-border/50 flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base uppercase tracking-wider font-semibold">
                Maximum protection
              </h3>
            </div>

            <div className="text-center space-y-4">
              <div className="w-14 h-14 border border-border/50 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base uppercase tracking-wider font-semibold">
                Firm adjustment
              </h3>
            </div>

            <div className="text-center space-y-4">
              <div className="w-14 h-14 border border-border/50 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base uppercase tracking-wider font-semibold">
                Unique style
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              Ready to Elevate Your Game?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Join thousands of fighters who've already discovered the ClawGrip advantage. 
              Your competition won't know what hit them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/80 text-white px-12 py-6 text-base uppercase tracking-wider font-semibold transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border border-border hover:border-foreground hover:bg-foreground hover:text-background px-12 py-6 text-base uppercase tracking-wider font-semibold transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 uppercase tracking-wide">
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-3 text-xl">
            <Mail className="w-6 h-6 text-accent" />
            <a 
              href="mailto:clawgripbrand@gmail.com" 
              className="text-accent hover:underline font-semibold"
            >
              clawgripbrand@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-light">
            © 2024 ClawGrip. All rights reserved. | Designed for champions by UFC fighters.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContentSection;
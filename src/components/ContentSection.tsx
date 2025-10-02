import { Button } from '@/components/ui/button';
import { Check, Shield, Lock, Zap, Mail, User, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import heroBg1 from '@/assets/hero-bg-1.png';
import newReleasesWoman from '@/assets/new-releases-woman.png';
import ProductSection from './ProductSection';

const ContentSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!name.trim() || name.length > 100) {
      toast({
        title: "Invalid name",
        description: "Please enter a valid name (max 100 characters)",
        variant: "destructive",
      });
      return;
    }

    if (!email.trim() || !email.includes('@') || email.length > 255) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (!message.trim() || message.length > 1000) {
      toast({
        title: "Invalid message",
        description: "Please enter a message (max 1000 characters)",
        variant: "destructive",
      });
      return;
    }

    // Encode the data for mailto
    const subject = encodeURIComponent(`Contact from ${name.trim()}`);
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`);
    const mailtoLink = `mailto:clawgripbrand@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear form
    setName('');
    setEmail('');
    setMessage('');
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with your message",
    });
  };

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
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wide">
              Contact Us
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">
              Have a question? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4" />
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                required
                className="bg-background border-border/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
                className="bg-background border-border/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                rows={6}
                required
                className="bg-background border-border/50 resize-none"
              />
              <p className="text-xs text-muted-foreground text-right">
                {message.length}/1000 characters
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold transition-all duration-300"
            >
              Send Message
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Or email us directly at{' '}
              <a 
                href="mailto:clawgripbrand@gmail.com" 
                className="text-accent hover:underline"
              >
                clawgripbrand@gmail.com
              </a>
            </p>
          </form>
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
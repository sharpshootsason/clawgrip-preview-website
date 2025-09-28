import { Button } from '@/components/ui/button';

const ContentSection = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Features Section */}
      <section id="directory" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-accent">ClawGrip</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Advanced grip technology that responds instantly to your every move.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision Control</h3>
              <p className="text-muted-foreground">
                Engineered for accuracy with micro-textured surfaces for maximum control.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">💪</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Built to Last</h3>
              <p className="text-muted-foreground">
                Premium materials designed to withstand the most intense gaming sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-accent/10 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of gamers who've already discovered the ClawGrip advantage. 
            Your competition won't know what hit them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-12 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              Shop Here Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-12 py-4 text-xl font-bold transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 ClawGrip. All rights reserved. | Designed for champions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContentSection;
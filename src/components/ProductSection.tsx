import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import clawgripWraps from '@/assets/clawgrip-pro-wraps-product.png';
import clawgripClassicWraps from '@/assets/clawgrip-classic-wraps-product.png';

const ProductSection = () => {
  return (
    <section id="products" className="py-24 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider">
          New Wraps
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Shadow Black Wraps */}
          <div className="group max-w-md w-full mx-auto">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer mb-4 overflow-hidden bg-card/30 border border-border/30 transition-all duration-300 hover:border-accent/50">
                  <img
                    src={clawgripWraps}
                    alt="ClawGrip Shadow Black Wraps"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={clawgripWraps}
                  alt="ClawGrip Shadow Black Wraps"
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold uppercase tracking-wide">
                  ClawGrip Shadow Black Wraps
                </h3>
                <p className="text-xs text-muted-foreground mt-1">comes in pair</p>
              </div>
              <p className="text-lg font-bold">$12.99</p>
              <p className="text-sm text-muted-foreground">Size: 180"</p>
            </div>
          </div>

          {/* Classic Black Wraps */}
          <div className="group max-w-md w-full mx-auto">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer mb-4 overflow-hidden bg-card/30 border border-border/30 transition-all duration-300 hover:border-accent/50">
                  <img
                    src={clawgripClassicWraps}
                    alt="ClawGrip Classic Black Wraps"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={clawgripClassicWraps}
                  alt="ClawGrip Classic Black Wraps"
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold uppercase tracking-wide">
                  ClawGrip Classic Black Wraps
                </h3>
                <p className="text-xs text-muted-foreground mt-1">comes in pair</p>
              </div>
              <p className="text-lg font-bold">$12.99</p>
              <p className="text-sm text-muted-foreground">Size: 180"</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <a href="https://cjugav-sx.myshopify.com" target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

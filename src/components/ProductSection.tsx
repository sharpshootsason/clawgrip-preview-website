import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import clawgripWraps from '@/assets/clawgrip-pro-wraps-product.png';

const ProductSection = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: 'clawgrip-pro-wraps',
      name: 'ClawGrip Pro Wraps',
      price: 12.99,
      image: clawgripWraps,
    });
    
    toast({
      title: "Added to cart",
      description: "ClawGrip Pro Wraps has been added to your cart.",
    });
  };
  return (
    <section className="py-24 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider">
          New Wraps
        </h2>
        
        <div className="flex justify-center">
          <div className="group max-w-md w-full">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer mb-4 overflow-hidden bg-card/30 border border-border/30 transition-all duration-300 hover:border-accent/50">
                  <img
                    src={clawgripWraps}
                    alt="ClawGrip Pro Wraps"
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={clawgripWraps}
                  alt="ClawGrip Pro Wraps"
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
            
            <div className="space-y-3">
              <h3 className="text-base font-semibold uppercase tracking-wide">
                ClawGrip Pro Wraps
              </h3>
              <p className="text-lg font-bold">$12.99</p>
              <Button 
                className="w-full bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold transition-all duration-300"
                size="lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

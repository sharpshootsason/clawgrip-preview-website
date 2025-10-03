import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import clawgripWraps from '@/assets/clawgrip-pro-wraps-product.png';
import clawgripClassicWraps from '@/assets/clawgrip-classic-wraps-product.png';

const ProductSection = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (productId: string, productName: string, productImage: string) => {
    addItem({
      id: productId,
      name: productName,
      price: 12.99,
      image: productImage,
    });
    
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    });
  };
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
              <h3 className="text-base font-semibold uppercase tracking-wide">
                ClawGrip Shadow Black Wraps
              </h3>
              <p className="text-lg font-bold">$12.99</p>
              <Button 
                className="w-full bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold transition-all duration-300"
                size="lg"
                onClick={() => handleAddToCart('clawgrip-shadow-wraps', 'ClawGrip Shadow Black Wraps', clawgripWraps)}
              >
                Add to Cart
              </Button>
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
              <h3 className="text-base font-semibold uppercase tracking-wide">
                ClawGrip Classic Black Wraps
              </h3>
              <p className="text-lg font-bold">$12.99</p>
              <Button 
                className="w-full bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold transition-all duration-300"
                size="lg"
                onClick={() => handleAddToCart('clawgrip-classic-wraps', 'ClawGrip Classic Black Wraps', clawgripClassicWraps)}
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

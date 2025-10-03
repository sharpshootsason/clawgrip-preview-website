import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useShopify } from '@/contexts/ShopifyContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import clawgripWraps from '@/assets/clawgrip-pro-wraps-product.png';
import clawgripClassicWraps from '@/assets/clawgrip-classic-wraps-product.png';

const ProductSection = () => {
  const { client, isLoading } = useShopify();
  const { toast } = useToast();
  const [shadowSize, setShadowSize] = useState<string>('180"');
  const [classicSize, setClassicSize] = useState<string>('180"');

  const handleAddToCart = async (variantId: string, productName: string) => {
    if (!client || isLoading) {
      toast({
        title: "Please wait",
        description: "Shopify is loading...",
        variant: "destructive",
      });
      return;
    }

    try {
      // Create checkout with the product
      const checkout = await client.checkout.create();
      const lineItemsToAdd = [{ variantId, quantity: 1 }];
      const updatedCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
      
      // Redirect to Shopify checkout
      window.location.href = updatedCheckout.webUrl;
      
      toast({
        title: "Redirecting to checkout",
        description: `${productName} added to cart.`,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    }
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
              <div>
                <h3 className="text-base font-semibold uppercase tracking-wide">
                  ClawGrip Shadow Black Wraps
                </h3>
                <p className="text-xs text-muted-foreground mt-1">comes in pair</p>
              </div>
              <p className="text-lg font-bold">$12.99</p>
              
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wide">Size</label>
                <Select value={shadowSize} onValueChange={setShadowSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='180"'>180"</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="w-full bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold transition-all duration-300"
                size="lg"
                onClick={() => handleAddToCart('gid://shopify/ProductVariant/YOUR_SHADOW_VARIANT_ID', 'ClawGrip Shadow Black Wraps')}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Add to Cart'}
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
              <div>
                <h3 className="text-base font-semibold uppercase tracking-wide">
                  ClawGrip Classic Black Wraps
                </h3>
                <p className="text-xs text-muted-foreground mt-1">comes in pair</p>
              </div>
              <p className="text-lg font-bold">$12.99</p>
              
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wide">Size</label>
                <Select value={classicSize} onValueChange={setClassicSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='180"'>180"</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="w-full bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold transition-all duration-300"
                size="lg"
                onClick={() => handleAddToCart('gid://shopify/ProductVariant/YOUR_CLASSIC_VARIANT_ID', 'ClawGrip Classic Black Wraps')}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

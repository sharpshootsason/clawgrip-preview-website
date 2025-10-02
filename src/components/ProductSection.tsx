import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import boxingWrap from '@/assets/boxing-wrap.png';

const ProductSection = () => {
  const products = [
    { id: 1, name: 'ClawGrip Pro Wraps', price: '$29.95', image: boxingWrap },
    { id: 2, name: 'ClawGrip Elite Wraps', price: '$34.95', image: boxingWrap },
    { id: 3, name: 'ClawGrip Champion Wraps', price: '$39.95', image: boxingWrap },
    { id: 4, name: 'ClawGrip Ultimate Wraps', price: '$44.95', image: boxingWrap },
  ];

  return (
    <section className="py-24 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider">
          New Wraps
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer mb-4 overflow-hidden bg-card/30 border border-border/30 transition-all duration-300 hover:border-accent/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
              
              <div className="space-y-3">
                <h3 className="text-base font-semibold uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="text-lg font-bold">{product.price}</p>
                <Button 
                  className="w-full bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold transition-all duration-300"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

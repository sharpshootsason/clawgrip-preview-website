import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 pt-32 pb-24">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
          
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4 uppercase tracking-wider">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Add some items to get started</p>
            <Button
              onClick={() => navigate('/')}
              className="bg-accent hover:bg-accent/80 text-white uppercase tracking-wider"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>

        <h1 className="text-4xl font-bold mb-12 uppercase tracking-wider">Shopping Cart</h1>

        <div className="space-y-6 mb-12">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 bg-card/20 border border-border/30"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">
                  {item.name}
                </h3>
                <p className="text-xl font-bold mb-4">
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold uppercase tracking-wider">Total</span>
            <span className="text-3xl font-bold">${getTotalPrice().toFixed(2)}</span>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => clearCart()}
              className="flex-1 uppercase tracking-wider"
            >
              Clear Cart
            </Button>
            <Button
              className="flex-1 bg-accent hover:bg-accent/80 text-white uppercase tracking-wider font-semibold"
              size="lg"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

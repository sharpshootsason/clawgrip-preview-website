import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Client from 'shopify-buy';

interface ShopifyContextType {
  client: any;
  isLoading: boolean;
}

const ShopifyContext = createContext<ShopifyContextType | undefined>(undefined);

export const ShopifyProvider = ({ children }: { children: ReactNode }) => {
  const [client, setClient] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Shopify Buy SDK
    // IMPORTANT: Replace these with your actual Shopify store credentials
    const shopifyClient = Client.buildClient({
      domain: 'your-store.myshopify.com', // Replace with your store domain
      storefrontAccessToken: 'your-storefront-access-token' // Replace with your token
    });

    setClient(shopifyClient);
    setIsLoading(false);
  }, []);

  return (
    <ShopifyContext.Provider value={{ client, isLoading }}>
      {children}
    </ShopifyContext.Provider>
  );
};

export const useShopify = () => {
  const context = useContext(ShopifyContext);
  if (!context) {
    throw new Error('useShopify must be used within a ShopifyProvider');
  }
  return context;
};

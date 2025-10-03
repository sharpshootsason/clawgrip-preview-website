# Shopify Integration Setup Guide

Your website is now ready to connect to Shopify! Follow these steps to complete the integration.

## Step 1: Create a Shopify Store

1. Go to [Shopify](https://www.shopify.com/) and create an account
2. Set up your store with your business information
3. Choose a plan (you can start with a free trial)

## Step 2: Add Your Products

1. In your Shopify admin, go to **Products** → **Add product**
2. Add both products:
   - **ClawGrip Shadow Black Wraps** - $12.99
   - **ClawGrip Classic Black Wraps** - $12.99
3. Upload the product images from your assets folder
4. Add variants for size (180")
5. Save each product

## Step 3: Get Storefront API Credentials

1. In Shopify admin, go to **Settings** → **Apps and sales channels**
2. Click **Develop apps** (or **Manage private apps** in older Shopify versions)
3. Click **Create an app** or **Allow custom app development**
4. Name it "ClawGrip Website Integration"
5. Click **Configure Storefront API scopes**
6. Enable these permissions:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
7. Click **Save**
8. Click **Install app**

## Step 4: Get Your Credentials

After installing the app, you'll see:
- **Storefront access token** (copy this)
- Your **store domain** (e.g., `your-store.myshopify.com`)

## Step 5: Get Product Variant IDs

1. In Shopify admin, open each product
2. In the browser URL, you'll see something like: `admin.shopify.com/store/YOUR_STORE/products/1234567890`
3. Copy the product ID number
4. The variant ID format will be: `gid://shopify/ProductVariant/VARIANT_ID`

**To get the exact variant ID:**
- Install the [Shopify GraphiQL App](https://shopify.dev/tools/graphiql-admin-api) from Shopify admin
- Run this query:
```graphql
{
  products(first: 10) {
    edges {
      node {
        id
        title
        variants(first: 5) {
          edges {
            node {
              id
              title
              price
            }
          }
        }
      }
    }
  }
}
```
- Copy the variant IDs for your products

## Step 6: Update Your Website Code

Open `src/contexts/ShopifyContext.tsx` and replace:

```typescript
domain: 'your-store.myshopify.com', // Replace with YOUR store domain
storefrontAccessToken: 'your-storefront-access-token' // Replace with YOUR token
```

Then open `src/components/ProductSection.tsx` and replace the variant IDs:

```typescript
// Shadow Black Wraps button (around line 82)
onClick={() => handleAddToCart('gid://shopify/ProductVariant/YOUR_SHADOW_VARIANT_ID', 'ClawGrip Shadow Black Wraps')}

// Classic Black Wraps button (around line 134)
onClick={() => handleAddToCart('gid://shopify/ProductVariant/YOUR_CLASSIC_VARIANT_ID', 'ClawGrip Classic Black Wraps')}
```

## Step 7: Test Your Integration

1. Click "Add to Cart" on your website
2. You should be redirected to Shopify's checkout
3. Complete a test purchase
4. Check your Shopify admin for the order

## Payment Setup in Shopify

1. Go to **Settings** → **Payments** in Shopify admin
2. Activate Shopify Payments or connect your preferred payment processor
3. Configure your payment methods (credit cards, PayPal, etc.)
4. Add your bank account for payouts

## What's Included

✅ Secure checkout hosted by Shopify (PCI compliant)
✅ Payment processing (credit cards, PayPal, etc.)
✅ Order management and tracking
✅ Customer email notifications
✅ Inventory management
✅ Shipping calculations
✅ Tax calculations

## Support

- [Shopify Help Center](https://help.shopify.com/)
- [Shopify Community Forums](https://community.shopify.com/)
- [Shopify API Documentation](https://shopify.dev/docs)

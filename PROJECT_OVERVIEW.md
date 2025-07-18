# QuickCart - E-Commerce Platform

## Project Overview

QuickCart is a modern e-commerce platform built with Next.js, featuring user authentication, product management, shopping cart functionality, and automated workflows. The project integrates Clerk for authentication, Inngest for workflow automation, and MongoDB for data persistence.

## Technology Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Authentication**: Clerk
- **Database**: MongoDB with Mongoose
- **Workflow Automation**: Inngest
- **Styling**: Tailwind CSS, Custom CSS
- **UI Components**: React Hot Toast for notifications
- **Font**: Google Fonts (Outfit)

## Project Structure

```
ecommerce-inngest/
├── app/                          # Next.js App Router pages
│   ├── add-address/             # Address management page
│   ├── all-products/            # Product listing page
│   ├── api/                     # API routes
│   │   └── inngest/            # Inngest webhook endpoint
│   ├── cart/                    # Shopping cart page
│   ├── my-orders/              # User orders page
│   ├── order-placed/           # Order confirmation page
│   ├── product/                # Individual product pages
│   ├── seller/                 # Seller dashboard
│   │   ├── orders/            # Seller order management
│   │   └── product-list/      # Seller product management
│   ├── favicon.ico
│   ├── globals.css             # Global styles
│   ├── layout.js               # Root layout with providers
│   └── page.jsx                # Home page
├── assets/                      # Static assets and images
│   ├── [various product images]
│   ├── assets.js               # Asset exports
│   └── productData.js          # Dummy product data
├── components/                  # Reusable React components
│   ├── Banner.jsx              # Promotional banner
│   ├── FeaturedProduct.jsx     # Featured product showcase
│   ├── Footer.jsx              # Site footer
│   ├── HeaderSlider.jsx        # Main carousel slider
│   ├── HomeProducts.jsx        # Product grid for home page
│   ├── Loading.jsx             # Loading component
│   ├── Navbar.jsx              # Navigation bar
│   ├── NewsLetter.jsx          # Newsletter signup
│   ├── OrderSummary.jsx        # Order summary component
│   ├── ProductCard.jsx         # Individual product card
│   └── seller/                 # Seller-specific components
├── config/                      # Configuration files
│   ├── db.js                   # MongoDB connection
│   └── inngest.js              # Inngest functions and workflows
├── context/                     # React Context providers
│   └── AppContext.jsx          # Global app state management
├── lib/                         # Utility libraries
│   └── authSeller.js           # Seller authentication utilities
├── models/                      # Database models
│   └── User.js                 # User schema for MongoDB
├── public/                      # Public static files
│   └── [Next.js default icons]
├── middleware.ts                # Clerk middleware for auth
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.mjs         # Tailwind CSS configuration
└── README.md                   # Project documentation
```

## Key Features

### 1. Authentication & User Management
- **Clerk Integration**: Complete authentication system with sign-up, sign-in, and user management
- **Automatic User Sync**: Inngest workflows automatically sync user data between Clerk and MongoDB
- **User Profiles**: Persistent user data storage with cart items

### 2. Product Management
- **Product Catalog**: Comprehensive product listing with images, prices, and descriptions
- **Product Details**: Detailed product pages with multiple images and specifications
- **Search & Filter**: Product search and filtering capabilities
- **Categories**: Organized product categories for easy navigation

### 3. Shopping Cart & Orders
- **Cart Management**: Add, update, and remove items from cart
- **Persistent Cart**: Cart items saved to user profile
- **Order Processing**: Complete order workflow from cart to confirmation
- **Order History**: Users can view their past orders

### 4. Seller Dashboard
- **Seller Authentication**: Separate seller login and management
- **Product Management**: Sellers can add, edit, and manage their products
- **Order Management**: Sellers can view and manage customer orders
- **Dashboard Analytics**: Basic seller analytics and insights

### 5. Responsive Design
- **Mobile-First**: Responsive design that works on all devices
- **Modern UI**: Clean, modern interface with Tailwind CSS
- **Interactive Elements**: Smooth animations and user interactions

## Configuration Files

### package.json
```json
{
  "name": "ecommerce-inngest",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@clerk/nextjs": "^6.23.3",
    "inngest": "^3.40.0",
    "mongoose": "^8.16.1",
    "next": "^15.2.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.1"
  }
}
```

### Environment Variables Required
- `NEXT_PUBLIC_CURRENCY`: Currency symbol for the store
- `MONGODB_URI`: MongoDB connection string
- `CLERK_SECRET_KEY`: Clerk authentication secret
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk public key
- `INNGEST_SIGNING_KEY`: Inngest webhook signing key

## Key Components

### App Context (Global State)
- Manages global application state including user data, products, and cart
- Handles cart operations (add, update, remove items)
- Calculates cart totals and quantities
- Integrates with Clerk for user authentication

### Inngest Workflows
- **User Creation**: Automatically creates user records in MongoDB when new users sign up via Clerk
- **User Updates**: Syncs user profile changes from Clerk to MongoDB
- **User Deletion**: Removes user data from MongoDB when users are deleted from Clerk

### Database Models
- **User Model**: Stores user information including cart items and profile data
- MongoDB connection with caching for optimal performance

## Pages & Routes

### Public Pages
- `/` - Home page with featured products and promotional content
- `/all-products` - Complete product catalog
- `/product/[id]` - Individual product detail pages
- `/cart` - Shopping cart and checkout

### Protected Pages
- `/my-orders` - User order history
- `/add-address` - Address management
- `/order-placed` - Order confirmation

### Seller Pages
- `/seller` - Seller dashboard
- `/seller/product-list` - Seller product management
- `/seller/orders` - Seller order management

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**: Create a `.env.local` file with required environment variables

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Development Features

- **Hot Reload**: Fast development with Next.js hot reloading
- **TypeScript Support**: Middleware written in TypeScript
- **ESLint**: Code quality and consistency
- **Tailwind CSS**: Utility-first CSS framework
- **Modern React**: Uses React 19 with latest features

## Architecture Highlights

1. **App Router**: Uses Next.js 13+ App Router for improved routing and layouts
2. **Server Components**: Leverages React Server Components for optimal performance
3. **Middleware**: Custom middleware for authentication and routing
4. **Context API**: Centralized state management with React Context
5. **Automated Workflows**: Inngest for reliable background job processing
6. **Responsive Design**: Mobile-first approach with Tailwind CSS

This project represents a complete, production-ready e-commerce platform with modern web development practices and comprehensive feature set for both customers and sellers.
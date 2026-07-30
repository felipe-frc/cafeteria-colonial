import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    items,
    totalItems,
    totalPrice,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-950 text-white">
      <Header cartItemsCount={totalItems} onCartOpen={openCart} />

      <main>
        <HeroSection />

        <div className="site-textured-background">
          <AboutSection />
          <MenuSection onAddToCart={addItem} onCartOpen={openCart} />
          <ReviewsSection />
          <ContactSection />
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        totalPrice={totalPrice}
        onClose={closeCart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeItem}
        onClear={clearCart}
      />
    </div>
  );
}

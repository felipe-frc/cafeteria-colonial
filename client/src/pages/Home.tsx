import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { useCart } from "@/hooks/useCart";
import { Leaf } from "lucide-react";
import { useState } from "react";

function SectionDivider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-10" aria-hidden="true">
      <div className="relative flex items-center justify-center">
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(191,97,43,0.32),rgba(39,67,56,0.32),transparent)]" />
        <span className="absolute flex size-8 items-center justify-center bg-[rgb(var(--cream-rgb)/0.9)]">
          <Leaf className="size-3.5 text-[rgb(var(--green-rgb)/0.82)]" />
        </span>
      </div>
    </div>
  );
}

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
    <div className="site-background min-h-screen overflow-x-hidden bg-[#f4ebdd]">
      <Header cartItemsCount={totalItems} onCartOpen={openCart} />

      <main>
        <HeroSection />

        <AboutSection />
        <SectionDivider />
        <MenuSection onAddToCart={addItem} onCartOpen={openCart} />
        <SectionDivider />
        <ReviewsSection />
        <SectionDivider />
        <ContactSection />
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

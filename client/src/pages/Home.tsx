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

function DividerLeaf() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="size-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 36.5C12 24.4 21.7 14.2 34.8 12.4C41.7 11.4 49.2 12.4 54 14.3C53.2 19.2 50.9 26.4 46.7 32.2C39.2 42.3 25.7 46.5 12 36.5Z"
        fill="rgb(var(--green-rgb))"
      />
      <path
        d="M18 37.1C27.1 30.1 35.7 23.9 48.6 18.8"
        stroke="rgb(var(--cream-rgb))"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M25.3 31.7L22.5 24.2"
        stroke="rgb(var(--cream-rgb))"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M31.8 27.4L29.4 20.2"
        stroke="rgb(var(--cream-rgb))"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M38.6 23L36.5 16.5"
        stroke="rgb(var(--cream-rgb))"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M28.8 37.1L36.1 33.7"
        stroke="rgb(var(--cream-rgb))"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M35.3 32.2L42.2 29"
        stroke="rgb(var(--cream-rgb))"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-10" aria-hidden="true">
      <div className="relative flex items-center justify-center">
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(191,97,43,0.32),rgba(39,67,56,0.32),transparent)]" />
        <span className="absolute flex size-8 items-center justify-center">
          <DividerLeaf />
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

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-7xl md:text-8xl font-playfair font-black text-foreground mb-4">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
          Página não encontrada
        </h2>
        <p className="text-xl text-foreground/70 font-lato font-light mb-12">
          Desculpe, a página que você está procurando não existe. Que tal voltar para a página inicial e explorar nosso café?
        </p>
        <Link href="/">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 px-12 py-6 text-lg font-montserrat"
          >
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

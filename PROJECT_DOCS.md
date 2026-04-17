# Cafeteria Raízes - Documentação do Projeto

## Visão Geral

**Cafeteria Raízes** é um site sofisticado e acolhedor que representa uma cafeteria colonial com essência tradicional e design contemporâneo. O projeto foi completamente repaginado com foco em luxo minimalista, transmitindo a essência de "Sabor e Tradição".

## Design System

### Filosofia de Design

O design segue a abordagem de **Luxo Minimalista Contemporâneo com Essência Colonial**, que combina:

- **Espaço Generoso:** Layouts com muito respiro visual e whitespace
- **Tipografia Protagonista:** Fontes elegantes em tamanhos generosos
- **Imagens em Destaque:** Fotografia como elemento central
- **Minimalismo Sofisticado:** Apenas elementos essenciais, sem distrações
- **Paleta Colonial:** Cores que remetem à tradição com sofisticação moderna

### Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Ouro Polido | #d4af37 | Acentos, botões, links |
| Preto Profundo | #1a1a1a | Texto, foreground |
| Branco Puro | #ffffff | Background principal |
| Marrom Escuro | #2d1810 | Modo escuro, acentos |
| Cinza Claro | #e8e8e8 | Backgrounds secundários |
| Marrom Médio | #8b7355 | Texto muted |

### Tipografia

| Fonte | Uso | Pesos |
|-------|-----|-------|
| Playfair Display | Títulos e headings | 400, 500, 700, 900 |
| Lato | Corpo de texto | 300, 400, 700 |
| Montserrat | UI e botões | 400, 500, 700 |

## Estrutura do Projeto

```
cafeteria-colonial/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── custom.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
└── README.md
```

## Seções do Site

### 1. Header/Navegação
- Logo da Cafeteria Raízes
- Menu de navegação responsivo
- Botão "Reservar Mesa"
- Design fixo no topo com border sutil

### 2. Hero Section
- Vídeo de fundo (Preparo do Café)
- Overlay escuro para legibilidade
- Título grande em Playfair Display
- Subtitle com lema "Sabor e Tradição"
- CTA "Conheça Nossa História"

### 3. Seção Sobre
- Imagem de identidade (painel decorativo)
- Texto descritivo sobre a cafeteria
- Divisor dourado decorativo
- Botão "Saiba Mais Sobre Nós"

### 4. Menu
- Abas para alternar entre Bebidas e Alimentos
- Cards minimalistas com nome, descrição e preço
- Grid responsivo (1-3 colunas)
- Hover effects elegantes

### 5. Avaliações
- Cards de depoimentos de clientes
- Sistema de estrelas (5 estrelas)
- Design limpo e legível
- Citações em itálico

### 6. Localização
- Informações de contato (endereço, telefone, email, horário)
- Ícones informativos
- Mapa integrado do Google Maps
- Layout responsivo

### 7. Footer
- Logo reduzida
- Links rápidos
- Informações de contato
- Copyright

## Ativos Utilizados

| Ativo | URL | Descrição |
|-------|-----|-----------|
| Logo | `/manus-storage/cafeteria-logo_d49c42ba.png` | Logo da Cafeteria Raízes |
| Identidade | `/manus-storage/cafeteria-identidade_eafa7ea9.png` | Painel decorativo com xícara |
| Interior | `/manus-storage/cafeteria-interno_b6bd34c1.png` | Ambiente interno da cafeteria |
| Vídeo | `/manus-storage/Preparo do café_8ae565b2.mp4` | Vídeo de preparo de café |

## Componentes Customizados

### MenuItem
Card minimalista para exibir itens do menu com título, descrição e preço.

### ReviewCard
Card para exibir avaliações de clientes com sistema de estrelas.

## Estilos Customizados

O arquivo `custom.css` contém estilos adicionais:

- Animações de entrada (fadeInDown, fadeInUp)
- Efeitos de hover em cards
- Estilos de botões customizados
- Scrollbar customizada
- Tipografia elegante
- Transições suaves

## Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

Todos os componentes se adaptam perfeitamente a diferentes tamanhos de tela.

## Acessibilidade

- Focus states visíveis em links e botões
- Contraste adequado entre texto e background
- Semântica HTML correta
- Navegação por teclado funcional
- Alt text em todas as imagens

## Performance

- Imagens otimizadas via storage webdev
- Vídeo com autoplay e muted para melhor performance
- CSS minificado via Tailwind
- Fontes carregadas do Google Fonts com preconnect

## Desenvolvimento

### Instalar Dependências
```bash
pnpm install
```

### Rodar Servidor de Desenvolvimento
```bash
pnpm dev
```

### Build para Produção
```bash
pnpm build
```

### Preview de Produção
```bash
pnpm preview
```

## Customizações Futuras

Possíveis melhorias e extensões:

1. **Sistema de Reservas:** Integração com calendário de reservas
2. **Galeria de Fotos:** Seção com mais imagens do ambiente
3. **Blog:** Artigos sobre café e tradição
4. **Newsletter:** Formulário de inscrição
5. **Integração Social:** Links para redes sociais
6. **Modo Escuro:** Toggle para tema escuro
7. **Multilíngue:** Suporte para outros idiomas
8. **E-commerce:** Venda de café e produtos

## Notas de Design

- O design prioriza a legibilidade e a sofisticação
- Cada elemento tem um propósito específico
- O espaço em branco é um elemento de design ativo
- As imagens são protagonistas, não decoração
- A tipografia cria hierarquia clara
- As cores transmitem elegância e tradição

## Suporte

Para dúvidas ou sugestões sobre o design, consulte a documentação de design em `ideas.md`.

---

**Desenvolvido com cuidado e sofisticação para a Cafeteria Raízes**
*Sabor e Tradição desde 1985*

# ☕ Cafeteria Raízes

![Frontend CI](https://github.com/felipe-frc/cafeteria-raizes/actions/workflows/frontend-ci.yml/badge.svg)
![Vercel](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Landing page institucional para uma cafeteria fictícia, com cardápio interativo, carrinho persistente e envio de pedido por WhatsApp.

## Visão geral

O projeto foi desenvolvido com foco em:

- interface visual forte para portfólio
- componentização com React
- tipagem com TypeScript
- testes automatizados com Vitest e Testing Library
- deploy estático com Vercel

## Demo

- Deploy: [cafeteria-raizes-livid.vercel.app](https://cafeteria-raizes-livid.vercel.app/)
- Repositório: [github.com/felipe-frc/cafeteria-raizes](https://github.com/felipe-frc/cafeteria-raizes)

## Funcionalidades

- hero institucional com identidade visual própria
- navegação por âncoras com header fixo
- seção de apresentação da marca com vídeo
- cardápio dividido entre bebidas e quitandas
- carrinho lateral com controle de quantidade
- persistência do carrinho com `localStorage`
- geração de pedido formatado para WhatsApp
- seção de contato com links acionáveis e mapa incorporado
- depoimentos com rotação automática
- layout responsivo e cuidados básicos de acessibilidade

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Vitest
- Testing Library
- GitHub Actions
- Vercel

## Estrutura

```txt
client/
  public/
    images/
      backgrounds/
      branding/
      hero/
      menu/
    video/
  src/
    components/
      cart/
      layout/
      sections/
      ui/
    data/
    hooks/
    pages/
    utils/
.github/
  workflows/
```

## Como executar

### Pré-requisitos

- Node.js
- Git

### Instalação

```bash
git clone https://github.com/felipe-frc/cafeteria-raizes.git
cd cafeteria-raizes
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Aplicação disponível em `http://localhost:5173`.

### Qualidade

```bash
npm run lint
npm run check
npm run test
npm run build
```

## Testes e CI

O repositório possui:

- lint com ESLint
- validação de tipos com TypeScript
- testes unitários e de comportamento com Vitest
- build de produção com Vite
- pipeline de CI no GitHub Actions para `push` e `pull request` na branch `main`

## Decisões técnicas

- O projeto foi mantido como front-end estático para simplificar o deploy e concentrar o esforço em experiência visual e usabilidade.
- O carrinho funciona integralmente no cliente e o pedido é finalizado via WhatsApp, aproximando o fluxo da realidade de pequenos negócios.
- Os dados de cardápio, contato e depoimentos ficam separados da interface para facilitar manutenção e evolução do conteúdo.
- Os assets foram organizados por função (`branding`, `hero`, `backgrounds`, `menu`) para evitar duplicidade e melhorar a arquitetura do repositório.

## Próximos passos

- revisar responsividade com inspeção visual detalhada em mais resoluções
- expandir testes para fluxos mais completos de navegação e pedido
- adicionar capturas de tela do projeto no README
- documentar decisões de UI e acessibilidade de forma mais aprofundada

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE`.

## Autor

**Marcos Felipe França**

[LinkedIn](https://www.linkedin.com/in/marcosfelipefrc) · [GitHub](https://github.com/felipe-frc)

# ☕ Cafeteria Raízes

![Frontend CI](https://github.com/felipe-frc/cafeteria-raizes/actions/workflows/frontend-ci.yml/badge.svg)
![Vercel](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Landing page institucional para uma cafeteria fictícia, com menu interativo, carrinho persistente e envio de pedido por WhatsApp.

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

- Hero section com proposta de valor e CTA
- Navegação por seções com header fixo
- Menu dividido entre bebidas e quitandas
- Carrinho lateral com controle de quantidade
- Persistência do carrinho com `localStorage`
- Geração de pedido formatado para WhatsApp
- Seção de contato com links acionáveis
- Depoimentos com rotação automática
- Layout responsivo e com cuidados básicos de acessibilidade

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Vitest
- Testing Library
- GitHub Actions
- Vercel

## Estrutura

```txt
client/
  public/
  src/
    components/
    data/
    hooks/
    lib/
    pages/
    utils/
.github/
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

Aplicação disponível em `http://localhost:3000`.

### Qualidade

```bash
npm run lint
npm run check
npm run test
npm run build
```

## Testes e CI

O repositório possui:

- testes unitários e de comportamento com Vitest
- lint com ESLint
- validação de TypeScript
- build de produção
- pipeline de CI no GitHub Actions

## Decisões técnicas

- O projeto foi mantido como front-end estático para simplificar deploy e foco em experiência.
- O carrinho funciona no cliente e o pedido é enviado via WhatsApp, o que aproxima o fluxo de pequenos negócios reais.
- Os dados do menu, contato e depoimentos ficam separados da UI para facilitar manutenção.

## Próximos passos

- adicionar testes end-to-end para o fluxo de pedido
- expandir testes de acessibilidade e interação
- medir performance com Lighthouse e documentar resultados
- evoluir o conteúdo visual com screenshots e GIF do fluxo principal

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE`.

## Autor

**Marcos Felipe França**

[LinkedIn](https://www.linkedin.com/in/marcosfelipefrc) · [GitHub](https://github.com/felipe-frc)

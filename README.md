# Simulador de Vestibular 🎓

Um sistema web para criação e gerenciamento de simulados de vestibular, permitindo a geração automática de provas com questões categorizadas por matéria.&#8203;:contentReference[oaicite:0]{index=0}

## 📋 Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 📖 Descrição

O **Simulador de Vestibular** é uma aplicação desenvolvida com Node.js, Express e Prisma ORM, que permite a criação de simulados personalizados para vestibulares. O sistema seleciona automaticamente questões de um banco de dados, distribuídas conforme uma configuração pré-definida por matéria.&#8203;:contentReference[oaicite:1]{index=1}

## ✅ Funcionalidades

- Criação de simulados com distribuição específica de questões por matéria.
- Validação da disponibilidade de questões antes da geração do simulado.
- Listagem de simulados existentes.
- Visualização das questões de um simulado, ordenadas por posição.&#8203;:contentReference[oaicite:2]{index=2}

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.sqlite.org/) (ou outro banco de dados suportado pelo Prisma)

## 🚀 Instalação

1. Clone o repositório:&#8203;:contentReference[oaicite:4]{index=4}
   ```bash
   git clone https://github.com/brunojohannn/simulador-vestibular.git

2. Navegue até o diretório do projeto:​
    ```bash
    cd simulador-vestibular

3. Instale as dependências:​
    ```bash
    npm install

4. Configure o banco de dados com o Prisma:​
    ```bash
    npx prisma migrate dev

5. Inicie o servidor:​
    ```bash
    npm run dev

📌 Uso
Acesse http://localhost:3000 para interagir com a API.

Utilize ferramentas como Postman ou Insomnia para testar as rotas disponíveis.

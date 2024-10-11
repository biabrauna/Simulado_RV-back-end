# Projeto de Back-end para Simulados

Este é o back-end do projeto de simulados, desenvolvido com Node.js e integrado a uma aplicação de front-end. O back-end é responsável por gerenciar a lógica de negócios, manipular dados e fornecer uma API para a interface do usuário.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Drizzle**: ORM para interação com o banco de dados.
- **Zod**: Biblioteca para validação de esquemas TypeScript.
- **Fastify**: Framework web de alta performance para Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Containerização do ambiente de banco de dados.
- **Biome**: Ferramenta de linting e formatação.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:


## Banco de Dados

O schema do banco de dados contém as seguintes tabelas:

- **users**: Armazena informações sobre os usuários.
- **tests**: Contém detalhes dos simulados.
- **questions**: Perguntas associadas aos simulados.
- **answers**: Respostas dos usuários aos simulados.

Os dados iniciais são preenchidos através do script de seed.

### Configuração do Banco de Dados

1. **Docker**: Certifique-se de ter o Docker instalado e execute o container do PostgreSQL:

   ```bash
   docker run --name postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -e POSTGRES_DB=simulado -p 5432:5432 -d postgres

Rotas da API
GET [/api/infos](http://localhost:3333/infos) Retorna detalhes de todos os simulados.
POST [ /api/tests:](http://localhost:3333/tests) Cria um novo simulado.

Como Executar o Projeto
Clone o repositório:
            bash
            Copiar código
            git clone https://github.com/seuusuario/seu-repositorio.git
            cd seu-repositorio
Instale as dependências:

    bash
    Copiar código
    npm install
Inicie o servidor:

    bash
    Copiar código
    npm run dev

# Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

## Nota ao avaliador

Caro avaliador, a resolução do teste de backend foi desenvolvida utilizando as melhores práticas com as quais
já trabalhei: Clean Archutecture, Domain Driven Design (DDD) e Test-Driven Development (TDD). Sei que isto pode,
porventura, ser visto como overengineering quando se avalia pela perspectiva da problemática do desafio técnico
(um único endpoint), porém estou convicto de que o uso de testes e uma de arquitetura robusta e desacoplada entregam
qualidade e longevidade a sistemas do mundo real, pela facilitação de sua manutenção, testabilidade e extensibilidade.

Deixei comentários pontuais no código para sinalizar pontos de injeção de dependência, abstração, uso de patterns, etc.

## Setup

**Importante**: A resolução foi feita utilizando o Node.js na versão v20.11.1, e também foi necessário atualizar o `typescript` para a versão 5.4.3.
Portanto, para garantir que tudo ocorra bem, garanta que seu Node.js esteja o mais próximo possível dessa versão.

### 1. Inicie o banco de dados localmente via docker-compose utilizando o seguinte comando:

    docker-compose up -d

o docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário **root** é **senha_root_123**

### 2. Instale as dependências do projeto

    npm install
    ou
    yarn install

### 3. Aplique o schema do ORM Prisma no banco de dados:

    npm run prisma:pull

### 4. Inicie o projeto em modo de desenvolvimento:

    npm run dev

### 4.1 Ou faça o build para rodar em modo produção (opcional):

    npm run build
    npm start

### 5. Rode as suite de testes unitários e de integração (opcional):

Rode as suite de testes unitários e de integração para ver a cobertura do projeto:

    npm run test:coverage

NOTA: Para que todos os testes passem é fundamental ter realizado o passo 3, pois sem o banco
de dados pronto os testes de integração não irão passar!

### 6. Acesse a documentação da API

Para saber de todos os campos necessários para a requisição POST, bem como as possíveis respostas, acesse a documentação da API via seu browser:

    http://localhost:4568/api/docs

NOTA: A documentação foi gerada utilizando o TSOA, uma biblioteca que facilita a geração de documentações
OpenAPI/Swagger pelo uso de decorators diretamente dentro do código de produção. Fica a dica ;)

Boa sorte =)

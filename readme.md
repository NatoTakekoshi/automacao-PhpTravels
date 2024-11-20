# Testes automatizados - PhpTravels
Projeto de automação de testes do site PhpTravels, utilizando o framework Cypress.

## Funcionalidades automatizadas
Login

Formulario de requisição do demo

Acesso aos sub-itens dos menus de Product, Features e Company

## Requisitos necessarios:
Node.js
Mochawsome

## Estrutura de pastas:
**e2e**: Cntem os scripts de automação, separado por funcionalidades do site.

**results**: Onde é armazenado as evidencias dos testes executados via terminal.

**Screenshots**: Armazena as imagens dos teste executados via terminal.

**support**: Contem os comandos que foram criados para o projeto.

## Instalaçao e execução
Clonar repositorio

    git clone (a definir)

No terminal, dentro da pasta do projeto, executar os camandos para a instalação das dependencias

    npm install
    npm install cypress --save-dev
    npm install --save-dev mochawsome

Executar o cypress

    Executar os cenarios no modo GUI (Interface grafica do usuario)

        npx cypress open

    Executar todos os cenarios no headless (no terminal)

        npx cypress run

    Executar um cenario especifico no headless

        npx cypress run --spec "[caminho para spec]"

## Autor
**Renato Takekoshi Miranda**


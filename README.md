# xp-wallet
Boas vindas ao XP Wallet, o site onde você pode comprar e vender ações!

## Objetivos:

O objetivo do projeto é facilitar a compra e venda de de ações.

## Para acessar o link da aplicação e ver seu funcionamento, clique no link abaixo:
[XP-WALLET](https://xp-felippe-fernandes.vercel.app/)

Se preferir, pode instalar o projeto em sua máquina e rodá-lo localmente seguindo os passos abaixo:

## Como rodar a aplicação no computador:

#### Seu computador precisa de Git (para versionamento do código) e Node.js & npm (para executar a aplicação). Clique nos links, caso ainda não tenha instalado algum desses:

 - [ ] [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 - [ ] [Node.js e npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Agora estamos prontos para instalar o projeto.

## Instalando a aplicação:

1. Primeiro, abra um novo terminal e clone o repositório utilizando o comando 
`git clone git@github.com:felippe-fernandes/xp-wallet.git`

2. Em seguida, digite `cd xp-wallet` para entrar no diretório (pasta) do projeto, que acabou de ser criada.

3. Execute `npm install` no terminal para instalar as dependências necessárias.

4. Execute `npm start` no terminal para rodar o site no seu LocalHost no navegador.

5. O site será aberto no seu navegador de preferencia.

<hr size=100%/>

## Utilizando o site:

1. Para acessar o site, você precisa colocar um e-mail válido e sua senha precisar ter mais de 6 caracteres.

2. No cabeçalho você poderá visualizar o usuário e o seu saldo. O saldo começa borrado por questão de privacidade, mas é só clicar no ícone do olho para visualizar o saldo.

3. Na pagina principal, você encontrara duas tabelas: uma com as ações que você possui e outra com ações disponíveis para compra.

4. Voce pode vender ações que você já possui ou comprar novas ações. Para fazer isso é só clicar em um dos botões da coluna `Negociar`.

5. No modal aberto para negociar você poderá ver mais informações das ações escolhidas. Para comprar ou vender só digitar a quantidade desejada nos respectivos inputs. 

LEMBRE-SE: Você não pode comprar um valor maior do que o do seu saldo e nem vender mais ações do que você possui.

6. Se tudo der certo a transação será confirmada e você pode apertar no botão `OK` para retorna a tela principal.

7. Caso você deseje depositar ou retirar um valor do seu saldo é só clicar no botão `Depósito/Retirada`.

8. Para concluir o processo basta escolher se você deseja fazer um depósito ou uma retirada e digitar a quantia desejada.

9. Se tudo der certo a transação será confirmada e você pode apertar no botão `OK` para retorna a tela principal.

10. Caso queira sair da sua conta é só clicar no nome do seu usuário e selecionar `Logout`

<hr size='100%'/>

## Rodando os testes:

1. Execute `npm test` no terminal para rodar todos os testes.

2. Execute `npm  test 'nome-do-teste'` no terminal para rodar somente o teste desejado. Ex: `npm test login`;
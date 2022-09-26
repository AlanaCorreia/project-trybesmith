# Projeto Trybers and Dragons

## Contexto do projeto:

Projeto back-end para desenvolver um CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API com todas as camadas da aplicação (Models, Service e Controllers), utilizando Typescript. Através da criação de  alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.

<details>
  <summary>
    <strong>:computer: Habilidades:</strong>
  </summary> </br>

  - Declarar variáveis e funções com tipagens Typescript;
  - Construir uma API Node Express utilizando o Typescript.

</details>

<details>
  <summary>
    <strong>🔧 Construído com:</strong>
  </summary><br>

  * Node.js;
  * Express.js;
  * TypeScript;
  * MySQL;
  * JWT Web Token;

</details>

<details>
  <summary>
    <strong>:bicyclist: Começando:</strong>
  </summary><br>

  ### :hammer_and_wrench: Instalação
  1- Clone o projeto em sua maquina rodando o seguinte comando no terminal:

  ``` git clone git@github.com:https://github.com/AlanaCorreia/trybers-and-dragons.git ```

  2- Depois de clonado, entre no diretório:

  ``` cd trybers-and-dragons ```
  
  3- Execute o docker-compose.yml através do script:
  
  ``` docker-compose up -d ``` 

  4 - A partir daqui você pode rodar o container trybers_and_dragons via CLI ou abri-lo no VS Code.
    Use o comando:
      
  ``` docker exec -it trybers_and_dragons bash ```

    Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
    
  5- Instale as dependências
    Para isso, use o seguinte comando: ``` npm install ```

  **TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

</details>
# Pokedéx with RTL 🐙

This project was developed while I was studying React Testing Library (RTL) at Trybe Programming School.

I wrote tests for a React application, using Jest and the RTL.

In this project, I used RTL's selectors (queries) in automated tests and I simulated events with RTL in automated tests.

Regular deadline: March 8, 2023 at 2:00 pm

<details>
  <summary><strong>🏗 Project structure</strong></summary><br />

📁 In the `tests` folder:

The files created by me:
`App.test.js`
`About.test.js`
`FavoritePokemon.test.js`
`NotFound.test.js`
`Pokedex.test.js`
`Pokemon.test.js`
`PokemonDetails.test.js`

</details>

<details>
  <summary><strong>🔎 Linter</strong></summary><br />

### ESLint e Stylelint

To ensure code quality, the `ESLint` and `Stylelint` linters were used in this project.

ESLint is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code. In many ways it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses Espree for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely 'pluggable', each of the rules is a plugin and you can add […]

To run them locally, run the commands below:
`npm run lint`
`npm run lint:styles`

</details>

<details>
  <summary><strong>🖥️ To access</strong></summary><br />

1 - Clone the repository:
`git clone git@github.com:VicSales28/project-pokedex-with-RLT.git`

2 - Enter the repository folder you just cloned.

You must be using node version 16 (or higher).

To check your version, use the command:
`nvm --version`

3 - With the required version, install the dependencies:
`npm install`

4 - To view the application, use the command:
`npm start`

5 - You can run all unit tests locally to verify the proposed solution with the command below:
`npm test`

An automated evaluator tests my tests. 
There is a folder called `./stryker` with several `filename.conf.json` files. 
Each of these files is this evaluator's configuration for a test file created. 
6 - To test it individually, run the command below:
`npx stryker run ./stryker/filename.conf.json`

</details>

<details>
  <summary><strong>🗣 Feedbacks</strong></summary><br />
  
_Give me feedbacks, I'm open to new ideas_ 😉

</details>

<p align="center">
  <img
    src=""
    alt="result-gif" height="320" style="border-radius:50px;">
</p>

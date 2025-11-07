# React
React is an open source library for building user interfaces

## Why learn React?
1. For building a reusable component (Component Based Architecture)
2. Easy DOM manipulations
3. React is Declarative (Tell React what you want and React will build the actual UI)
4. Seamlessly integrate react into  any of your applications
5. React native for mobile application

## Prerequisites
- HTML, CSS, JavaScript fundamentals

- ES6

- JavaScript - 'this' keyword, filter, map, and reduce

- ES6- let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.

## The Create-react-app  (installing new react project)
- Using npx => (which is an NPM package runner which gets  installed when you install node.js). npx helps to run create react app without necessarily installing it.
(npx create-react-app <project_name>)

- npm install create-react-app -g (install the package globally using the command npm and once that is used you can straight-away using create-react-app <project_name>) but this approach may need constantly updating the create-react-app package.

## Running npx run dev
index.html file is served in the browser (it contains the root DOM node) --> the control enters the main.tsx (.js,.jsx) and reactDOM renders the (App component) onto the rootDOM node. --> the (App component) contains the HTML which is ultimately displayed in the browser.

## Component Types
Components describes a part of the user interface, they are re-usable and can be nested inside other components
Two Types =
 * Function Components
 * Class Components

* Function Components (SFC) => are javascript functions that accept input properties (props) and return HTML (jsx) output that represent the UI.

* Class Components are ES6 class that receives properties (props) and render a return output that represent the UI

## Functional vs Class Components

### Functional                                  Class
-------------------------------------------------------------------------------------
* Simple functions                           | More feature rich
* Use Func components as much as possible    | Maintain their own private data-state
* Absence of 'this' keyword                  | Complex UI logic
* Solution without using state               | Provide lifecycle hooks
* Mainly responsible for the UI              | Stateful / Smart / Container
* Stateless / Dumb/ Presentational           |
-----------------------------------------------------------------------------------


# GraphQL Deploy app

Boilerplate for deploying Apollo Server with React app. Deploy `server` and `client` separately for it to work.

## Development server

### Install packages

Run `npm install` at the root of the project to install [Concurrently](https://www.npmjs.com/package/concurrently). With this, you will be able to run the project locally without having to open two terminals. This command will also install packages for both `server` and `client`.

### Run project

Run `npm run dev` at the root.

## Server

### Environment variables

Rename the file `server/template.env` to `.env`, and replace the values with your email, password, etc.

### Packages

-   [@apollo/server](https://www.apollographql.com/docs/apollo-server/)
-   [GraphQL](https://graphql.org/)
-   [JSON web token](https://jwt.io/)
-   [Bcrypt js](https://www.npmjs.com/package/bcryptjs)
-   [Mongoose](https://mongoosejs.com/)
-   [Nodemailer](https://nodemailer.com/about/)
-   [TS Node dev](https://www.npmjs.com/package/ts-node-dev)
-   [TS utils](https://www.npmjs.com/package/ts-utils-julseb): own package, with basic functions written in JavaScript

## Client

### Environment variables

Rename the file `client/template.env` to `.env`, and replace the values with the right `URIs`.

### Packages

-   [React](https://reactjs.org/)
-   [React router dom](https://reactrouter.com/en/v6.3.0/getting-started/overview)
-   [@apollo/client](https://www.apollographql.com/docs/react/)
-   [GraphQL](https://graphql.org/)
-   [Styled components](https://styled-components.com/)
-   [TSX library](https://documentation-components-react.vercel.app/): own package, with basic React UI components

### Makefile

To create components or pages, you can run `make component name=NameOfComponent` (for components) or `make page pageName=NameOfPage` (for pages). This will create automatically files with the same structure as the one we are using here.

# What is this? ![readmeLogo](https://github.com/user-attachments/assets/952cd8c9-7c15-41b7-9da0-a83186991296)
> Answer: I wanted to make my own portfolio, but doing the typical static single-page website for me was kind of boring... so I decided to add blog codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://realworld.io/) spec and API.

This project was created to demonstrate a fully fledged fullstack application built with **React / Vite + TypeScript / Node.js / MongoDB** including CRUD operations, authentication, routing, pagination, and more.


## Getting Started

This README will help you install and run the project on your local machine for development and testing.

### Prerequisites

Before you run the project, make sure that you have the following tools and software installed on your computer:

- Text editor/IDE (e.g., VS Code, Sublime Text, Atom)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) `v18.11.0+`
- [NPM](https://www.npmjs.com/) (usually included with Node.js)

### Installation

To install the project on your computer, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/dmsosa/portfolio.git
   ```

2. Navigate to the project directory.

   ```bash
   cd portfolio
   ```

3. Install project dependencies by running the command:

   ```bash
   npm install
   ```

4. You're ready to go with the frontend side of the app, which will provide static data when no backend is available, you can run it with:

```bash
npm run dev
```
5. If you want to use also the backend, you will need to clone its repository.

   ```bash
   cd portfolio-backend
   ```
   and then
   
   ```bash
   git clone https://github.com/dmsosa/portfolio-backend.git
   ```

   The backend of the app needs some environmental variables to:
   a. Connect to database,
   b. provide JWT Secrets,
   c. define admin user (this will just define name and password to create a dummy ADMIN user in the Database).

6. Create a `.env` file in the root directory of the project
   
7. Add the required environment variables as specified in the [`.env.example`](backend/.env.example) file

### Usage

If you want to load some initial data in the DB, run:
   ```bash
   npm run seed
   ```
#### Development Server

To run the project, follow these steps:

1. Start the development server by executing the command:

   ```bash
   npm run dev
   ```

2. Open a web browser and navigate to:
   - Home page should be available at [`http://localhost:3000/`](http://localhost:3000).
   - API endpoints should be available at [`http://localhost:3001/api`](http://localhost:3001/api).

#### Running Tests

To run tests, simply run the following command:

```bash
npm run test
```

#### Production

The following command will build the production version of the app:

```bash
npm run start
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [RealWorld](https://realworld.io/)
- [RealWorld (GitHub)](https://github.com/gothinkster/realworld)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

# Talk To You
Talk to You is a Next.js application that helps users practice speaking English by interacting with AI.

## Features
- Start conversations with AI with different context scenarios
- Manage conversations
- Speak with AI using speech recognition
- Hear the AI responses using text to speech
- OAuth authentication using Auth.js

## Tech Stack
- Next.js
- PostgreSQL
- Drizzle ORM
- ShadcdnUI
- TailwindCSS
- Auth.js

## Getting Started

### Prerequisites
- Node.js
- npm
- PostgreSQL or Docker

### Installation

1. **Clone the repository**

    ```bash
    https://github.com/DanieII/talk-to-you.git
    cd talk-to-you
    ```
    
2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    AUTH_SECRET=
    AUTH_GOOGLE_ID=
    AUTH_GOOGLE_SECRET=
    DATABASE_URL=
    AUTH_DRIZZLE_URL=
    OPENAI_API_KEY=
    ```

    - `AUTH_SECRET`: Generate a random secret key. You can use tools like [randomkeygen](https://randomkeygen.com/).
    - `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET`: Obtain these from the [Google Developer Console](https://console.developers.google.com/) by creating OAuth 2.0 credentials.
    - `DATABASE_URL`: Use the format `postgresql://user:password@localhost:5432/database` for your PostgreSQL database.
    - `AUTH_DRIZZLE_URL`: Typically the same as `DATABASE_URL`.
    - `OPENAI_API_KEY`: Obtain this from [OpenAI](https://beta.openai.com/signup/).

4. Set up database

    [Get Started with Drizzle and PostgreSQL](https://orm.drizzle.team/docs/get-started/postgresql-new)
    
    ```bash
    docker run --name drizzle-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
    ```
  
    ```bash
    npx drizzle-kit push
    ```

4. Start the development server

    ```bash
    npm run dev
    ```

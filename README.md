## Basic API
Simple API using Expressjs, Prisma, And Mysql Database

## Setup Dependencies

Make sure to install the dependencies:

```bash
# yarn
yarn install

## Development Server

Start the development server on http://localhost:3000

yarn run dev
```

## Setup Prisma

```bash
# prisma
npx prisma migrate dev --name init

#push update on schema.primsa
npx prisma db push

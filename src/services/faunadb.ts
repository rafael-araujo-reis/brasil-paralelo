import { Client as FaunaClient } from 'faunadb';

export const clientFauna = new FaunaClient({
  secret: process.env.FAUNA_DB_KEY,
});
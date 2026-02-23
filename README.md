# GraphQL Practice API

This project is a **practice GraphQL server** built while learning how GraphQL works, including schemas, queries, mutations, and resolver relationships.
The data models used are just sample data for learning purposes.

---

## Purpose

This repo exists to demonstrate:

* GraphQL schema design
* Query + mutation structure
* Resolver logic
* Input types
* Relationships between types

---

## 📦 Features

* `Query games, reviews, and authors`
* `Fetch single records by ID`
* `Add new games`
* `Update existing games`
* `Delete games`
* `Nested relational data (games ↔ reviews ↔ authors)`

## Server Endpoint

```
http://localhost:4000/graphql
```

Open this in your browser or Postman to run queries and mutations.

---

## Available Operations

### Queries

* `games`
* `reviews`
* `authors`
* `singleGame(id)`
* `singleReview(id)`
* `singleAuthor(id)`

### Mutations

* `addGame(game)`
* `deleteGame(id)`
* `updateGame(id, edits)`

---

## Run Locally

```bash
npm install
npm run dev
```

---

## Notes

* Data is stored in memory
* Restarting the server resets data
* Built purely for learning and experimentation

---



# FlashCards

FlashCards is a fullstack app to help you with memorization.

## Table of contents
- [FlashCards](#flashcards)
  - [Table of contents](#table-of-contents)
  - [Demo](#demo)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Run Locally](#run-locally)
  - [Environment Variables](#environment-variables)

## Demo

https://yap-flashcards.herokuapp.com/

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MongoDB

## Features
- Authorization & authentication
- Fully responsive
- Light and dark theme

## Run Locally

Clone the project

```bash
  git clone https://github.com/yap8/flashcards.git
```

Go to the project directory

```bash
  cd flashcards
```

Install backend dependencies

```bash
  npm i
```

Install frontend dependencies

```bash
  cd client
  npm i
  cd ..
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI=<mongodb_connection_uri>`

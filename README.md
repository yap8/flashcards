
# FlashCards

FlashCards is a fullstack app to help you with memorization.

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MongoDB


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


## Demo

https://yap-flashcards.herokuapp.com/


## Todo

- Fix the alert bug
- Replace gap css property
- Fix mobile safari(?) card flip animations
- Rework menu component
- Add flip all
- Add collection settings

# lukemorton.tech

## Getting started

First you will want to install dependencies, create an initial build of data files (blog posts, etc.), and then start the development server:

```
npm install
npm run build
npm run dev
```

The app will be served on [http://localhost:3000](http://localhost:3000). Cool huh?

There are a bunch of other things you might like to do, I've listed a reference below.

**Install dependencies:**

```
npm install
```

**Compile data files:**

```
npm run build
```

**Run development server:**

```
npm run dev
```

Or run with `now dev` for a production-like environment. I recommend running the following command if you've experienced production not behaving like your development environment.

```
node_modules/.bin/now dev
```

**When writing blog posts:**

You will want to continuously build data files when writing blog posts. I usually have `npm run dev` running in one tab on the terminal, and in another I run the following:

```
npm run blog
```

This will watch for changes and recompile. You will need to refresh the browser as next.js doesn't pick up the changes :'(

**Run tests and linting:**

```
npm test
npm run lint
```

## Deploying

We deploy on Zeit Now. It's automatically configured to deploy production from the master branch on GitHub.

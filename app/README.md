# REFERENCE: Create a Next.js app from scratch

```sh
# Navigate to your desired directory (such as app)
$ cd app

# Use npm init to create a package.json with typical values for your app
$ npm init

# Install required Next.js and React dependencies
$ npm install next react react-dom

# Create a pages directory
$ mkdir pages

# Create a default page
$ cd pages
$ touch index.js
```

Create a simple default page:

```jsx
// app/pages/index.js
const DefaultPage = () => {
  return <div>Welcome to Next.js!</div>
}

export default DefaultPage
```

Once you have created the default page, you can now run your app with `$ npm run dev`

You should be able to view your application at [http://localhost:3000](http://localhost:3000). 🤓

## Add TypeScript

To add [TypeScript](https://www.typescriptlang.org) to your [Next.js](https://nextjs.org) app:

```sh
# Navigate to your app directory
$ cd app

# Install TypeScript dev dependencies
$ npm i -D typescript @types/react @types/node

# Create an empty tsconfig.json file
$ touch tsconfig.json

# Run your app, and Next.js will automatically discover and configure TypeScript for you
$ npm run dev
```

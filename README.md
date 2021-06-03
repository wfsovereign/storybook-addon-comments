# Storybook Comments

Sometimes, I want to leave some comments for awesome component use storybook preview, 
but currently open source does not work. So this project born.


## Usage

Install with: `yarn add storybook-comments`

Add this line to `.storybook/main.js`:

```javascript

module.exports = {
  "addons": [
    ...
    "storybook-addon-comments",
  ]
}
```

Within your `.storybook/preview.js` file, add this:

```javascript

export const parameters = {
  comments: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
  }
}
```
> You can find the values necessary by visiting your Firebase console.


### Run
This project base on [addon-kit](https://github.com/storybookjs/addon-kit) and [storybook-feedback](https://github.com/trevorkirpaul/storybook-feedback),
thanks them for their contribution.

#### Install
```shell script
yarn 
```

#### Local dev
```shell script
yarn start
```


- `npm run start` runs babel in watch mode and starts Storybook
- `npm run build` build and package your addon code

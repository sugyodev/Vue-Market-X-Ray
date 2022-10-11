# Vue-Market-X-Ray

Vue.js Webvie & Mobileview project from Figma Design

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Created file `postcss.config.js` and added:

```js
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ]
}
```

Deleted `postcss` entry from `package.json`

```json
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
```

## Compiles and hot-reloads for development
```
npm install -g @vue/cli-service-global
```
```
npm run serve
```

Production Mode
```
npm build
```


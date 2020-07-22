# PostCSS First Plugin

[PostCSS] plugin does something with input CSS files.

[postcss]: https://github.com/postcss/postcss

```css
.foo {
  color: red;
}
```

```css
.foo {
  color: rgb(255, 0, 0);
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-first-plugin'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage

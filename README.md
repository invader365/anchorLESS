# ![Logo](http://invader365.github.io/anchorLESS/img/logo-main-small.png) [ Anchor LESS](http://invader365.github.io/anchorLESS)

> The most extensive **Less mixins library**

Anchor less is a collection of less Mixins, Assets and Utilities to write better and faster CSS. [Documentation](http://invader365.github.io/anchorLESS)

Features:

- Responsive mixins, helpers and shortcuts.
- Seamless integration with html5 frameworks.
- Faster performance (Less.js build-in functions).
- The most extensive LESS mixins library.
- A single 'anchor.less' file, no other dependencies.

## Library

01. .align(@top, @right, @bottom, @left);
00. .background(@color, @image, @position, @repeat, @origin, @clip, @attachment);
00. .border(@width, @style, @color);
00. .color(@text, @background, @border);
00. .font(@size, @line-height, @width, @family);
00. .gradient(@direction, @start, @stop1, @stop2, @stop3);
00. .paragraph(@line-height, @align, @indent);
00. .rounded(@top-left, @top-right, @bottom-right, @bottom-left);
00. .shadow(@spread, @color, @alpha);
00. .size(@width, @height);
00. .spacing(@margin, @padding);
00. .transition(@property, @durations, @function, @delay);

See the **[full list](http://invader365.github.io/anchorLESS/reference.html)**

## Usage
Import the relative url at the top of your less file

```css
@import "../node_modules/anchorless/anchor.less";
```
Example:
```css
      button {
        .border(0 1px 2px, solid, #dcdcdc);
        .background('../image.png');
        .gradient(to-bottom, #ededed, #dfdfdf);
        .spacing(_, 0.5em);
        .rounded(5px);
        .size(33%, _);
        .size(25%, _, 640px);
      }
```
CSS output:
```css
      button {
        background-image: url('../images.png');
        background: #ededed none repeat-x center;
        background-image: -webkit-linear-gradient(180deg, #ededed, #dfdfdf);
        background-image: -moz-linear-gradient(180deg, #ededed, #dfdfdf);
        background-image: linear-gradient(180deg, #ededed, #dfdfdf);
        border-width: 0 1px 2px;
        border-style: solid;
        border-color: #dcdcdc;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        padding: 0.5em;
        width: 33%;
      }

      @media all and (min-width: 640px) {
        button {
          width: 25%;
        }
      }
```
## Example
1. Install npm modules
```
  npm install
```
2. Run npm
```
  npm start
```
3. Edit styles.less located on the example folder
```
  cd /example
```
Your browser will reload after saving

Try the less [compiler](http://invader365.github.io/anchorLESS/compiler.html) to see how it works!
## License

Copyright © 2020 Licensed under the [Apache License Version 2.0](LICENSE).

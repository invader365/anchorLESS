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
00. .background(@color, @image, @position, @size @repeat, @origin, @clip, @attachment);
00. .border(@width, @style, @color);
00. .color(@text, @background, @border);
00. .font(@size, @line-height, @width, @style, @family, @family2, @family3, @family4, @family5);
00. .gradient(@direction, @start, @stop1, @stop2, @stop3);
00. .text(@align, @indent, @transform);
00. .rounded(@top-left, @top-right, @bottom-right, @bottom-left);
00. .shadow(@spread, @color, @alpha, @mode);
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
        .display(flex, center, center);
        .font(2em, 40px, bold);
        .rounded(5px);
        .background(#fb292d);
        .query({
          .rounded(20px);
          .size(200px, 40px);
          .spacing(0 auto, _);
          .gradient(#fb292d, #470103);
        }, 800px);
      }
```
CSS output:
```css
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        line-height: 40px;
        font-weight: bold;
        border-radius: 5px;
        background: #fb292d;
      }
      @media all and (min-width: 800px)  {
        button {
          border-radius: 20px;
          width: 200px;
          height: 40px;
          margin: 0 auto;
          background-image: -webkit-linear-gradient(180deg, #fb292d, #470103);
          background-image: -moz-linear-gradient(180deg, #fb292d, #470103);
          background-image: linear-gradient(180deg, #fb292d, #470103);
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

<sub>* Requires LessJS 3.0+ or gulp-less 4.0.1+</sub>

## License

Copyright © 2020 Licensed under the [Apache License Version 2.0](LICENSE).

# ![Logo](http://invader365.github.io/anchorLESS/img/logo-main-small.png) [ Anchor LESS](http://invader365.github.io/anchorLESS)

> The most extensive **Less mixins library**

Anchor less is a collection of less Mixins, Assets and Utilities to write better and faster CSS. [Documentation](http://invader365.github.io/anchorLESS)

Features:

- Responsive mixins (mobile-first approach), assets and utilities.
- Seamless integration with html5 frameworks.
- Faster performance (Less.js build-in functions).
- The most extensive (and growing) LESS mixins library.

## Library

Mixins list:

00. .align (top, right, bottom, left, query);
00. .back (color, image, repeat, position, [min-width-query, max-width-query]);
00. .border (width, style, color, [min-width-query, max-width-query]);
00. .color (color, back-color, border-color, [min-width-query, max-width-query]);
00. .font (font, family);
00. .gradient (start, stop, degrees, image);
00. .opacity (opacity, query);
00. .pseudo (content, width, height)
00. .rounded (top-left, top-right, bottom-right, bottom-left, [min-width-query, max-width-query]);
00. .shadow (spread, color, alpha, offset);
00. .size (width, height, [min-width-query, max-width-query]);
00. .spacing (width, height, [min-width-query, max-width-query]);
00. .transition (property, durations, function, delay);
00. **[...](core/README.md)**

See the **[full list](http://invader365.github.io/anchorLESS/reference.html)**

## Usage
Import the relative url at the top of your less file

```css
@import "../node_modules/anchorless/anchor.less";
```
Example:
```css
      #button {
        .border(0 1px 2px, solid, #dcdcdc);
        .image('../images/logo.png');
        .gradient.to-bottom(#ededed, #dfdfdf);
        .padding(0.5em);
        .rounded(5px);
        .width(33%);
        .width(25%, 640px);
      }
```
CSS output:
```css
      #button {
        background-image: url('../images/logo.png');
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
        #button {
          width: 25%;
        }
      }
```
##Example
1. Install npm modules
```
  npm install
```
2. Run gulp example
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

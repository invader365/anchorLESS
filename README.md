# ![Logo](http://invader365.github.io/anchorLESS/img/logo-main-small.png) [ Anchor LESS](http://invader365.github.io/anchorLESS)

> The most extensive **Less mixins library**

Anchor less is a collection of less Mixins, Assets and Utilities to write better and faster CSS. [Documentation](http://invader365.github.io/anchorLESS)

Features:

- Responsive mixins (mobile-first approach), assets and utilities.
- Seamless integration with html5 frameworks.
- Faster performance (Less.js build-in functions).
- The most extensive (and growing) LESS mixins library.
- A single 'anchor.less' file, no other dependencies.

## Library

Common mixins list:

00. .align (top, right, bottom, left, query);
00. .back (color, image, repeat, position, query);
00. .border (width, style, color, query);
00. .color (color, back-color);
00. .font (font, family);
00. .gradient (start, stop, degrees, image);
00. .image (url);
00. .opacity (opacity, query);
00. .pseudo (content, width, height)
00. .rounded (radius);
00. .shadow (spread, color, alpha, offset);
00. .size (width, height, query);
00. .transition (property, durations, function, delay);
00. .width (width, query);
00. **[..](src/README.md)**

To see the **[full list](http://invader365.github.io/anchorLESS/html/reference.html)**.

## Usage
```css
@import "anchor.less";
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
## License

Copyright © 2014 Licensed under the [Apache License Version 2.0](LICENSE).

# Anchor LESS

> A harder, better, faster, stronger **LESS library**!

Anchor LESS is a LESS/CSS library build to save time. Highlights:

- Harder. The most extensive LESS mixins library!
- Better. The best complement to your prefered html framework.
- Faster. Less.js build-in functions for faster performance.
- Stronger. Responsive mixins (mobile-first approach), assets and utilities.

## Install
```css
@import "anchor.less";
    
#foo {
   .border(1px 1px 3px, solid, gray);
   .rounded(5px);
}
```

## Mixins:

Anchor LESS comes with a set of mixins, assets and utilities. Common mixins:

00. .back (color, image, repeat, position, query);
00. .color (color, back, border);
00. .font (font, family);
00. .gradient (start, stop, degrees, image);
00. .image (image);
00. .opacity (opacity, query);
00. .pseudo (content, width, height)
00. .rounded (radius);
00. .shadow (spread, color, alpha, offset);
00. .size (width, height, query);
00. .square (size, query);
00. .transition (property, durations, function, delay);
00. .width (width, query);
00. ..

See the **[full list](partials/LIST.md)**
  
## Usage

Example:

    #foo {
        .back(#222, '../images/logo.png', no-repeat, left top);
        .width(100%);
        .width(50%, 640px);
        .width(20%, 960px);
        .rounded(5px);
    }

CSS output:

    #foo {
        background: #222 url('../images/logo.png') no-repeat left top;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        width: 100%;
    }
    @media all and (min-width: 640px) {
        #foo {
            width: 50%;
        }
    }
    @media all and (min-width: 960px) {
        #foo {
            width: 20%;
        }
    }

## License

Copyright © 2014 Licensed under the [Apache 2.0 License](LICENSE).

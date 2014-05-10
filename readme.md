# Anchor LESS

> A harder, better, faster, stronger **LESS library**!

<<<<<<< HEAD
Anchor LESS is the most extensive mixins library made to speed up your code. Higlights:

- Better: Feel free to use it with your favourite html framework.
- Faster: Anchor uses less.js build-in functions for a faster compilation.

=======
Anchor LESS is the most extensive mixins library made to speed up your code. Designed to be counterpart of Compass. 

>>>>>>> f75f8668cac78da0262d6bcbd62971f05cd35b00
## Install
```css
@import "anchor/anchor.less";
    
#foo {
   .border(1px 1px 3px, solid, gray);
   .rounded(5px);
}
```

## Mixins:

Anchor LESS comes with a set of mixins, assets and helpers. Common mixins:

00. .align (top, right, bottom, left, query);
00. .back (color, image, repeat, position, query);
00. .color (color, back, border);
00. .font (font, family);
00. .gradient.horizontal(start, end, image);
00. .image (url);
00. .opacity (opacity, query);
00. .pseudo (content, width, height)
00. .rounded (radius);
00. .shadow (spread, color, alpha, offset);
00. .size (width, height, query);
00. .square (size, query);
00. .transition (property, durations, function, delay);
00. .width (width, query);
00. ..

See the **[full list](anchor/contents.md)**

  
## Usage
    
From this:

    #foo {
        .back(#222, '../images/logo.png', no-repeat, left top);
        .width(70%, 800px);
        .rounded(5px);
    }
    
to this:

    #foo {
        background: #222 url('../images/logo.png') no-repeat left top;
        -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;
    }
    @media all and (min-width: 800px) {
        #foo {
            width: 70%;
        }
    }

## License

Copyright © 2014 Licensed under the [Apache License](license).

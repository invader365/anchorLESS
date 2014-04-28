# Anchor LESS

> A harder, better, faster, stronger **LESS library**!

Anchor LESS is the most extensive mixins library made to speed up your code. Intended to be equivalent to Compass. 

## Usage
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

See the **[full list](anchor/fulllist.md)**

  
## Example

Syntax:

    .back (color, image, repeat, position, query);
    
example:

    #foo {
        .back(#222, '../images/logo.png');
        .width(70%, 800px);
    }
    
result:

    #foo {
        background: #222 url('../images/logo.png') repeat 0 0;
    }

    @media all and (min-width: 800px) {
        #foo {
            width: 70%;
        }
    }

## License

Copyright © 2014 Licensed under the [Apache License](license).
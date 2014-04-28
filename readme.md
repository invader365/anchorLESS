# Anchor LESS

> A harder, better, faster, stronger **LESS library**!

Anchor LESS is the most extensive mixins library made to speed up your code. Intended to be an equivalent to Compass. 

## Usage

    @import "anchor/anchor";
    
    #foo {
       .shadow(0 0, black, 0.5);
       .rounded(5px);
    }

## Mixins:

Anchor LESS comes with a set of mixins, assets and helpers. Common mixins:

00. .align (top, left, bottom, right, query);
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
        .back();
        .back(#222, '../images/logo.png', no-repeat, center, 800px);
    }
    
result:

    #foo {
        background: transparent none repeat 0 0;
    }

    @media all and (min-width: 800px) {
        #foo {
            background: #222 url('../images/logo.png') no-repeat center;
        }
    }

## License

Copyright © 2014 Licensed under the [Apache License](license).
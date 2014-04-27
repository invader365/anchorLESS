# Anchor LESS

> A harder, better, faster, stronger **LESS library**!

Anchor LESS is the most extensive mixins library made to speed up your code.

## Sintax

    .back (color, image, repeat, position, query);
    
**Default**

    background: transparent none repeat 0 0;

  
### Usage
```css
.foo {
  .back(#222, '../images/logo.png', no-repeat, center, 800px);
}
```
    
**Ouput:**
```css
@media all and (min-width: 800px) {
   .foo {
     background: #222 url('../images/logo.png') no-repeat center;
   }
}
```

## Mixins:

Common mixins:

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

to see the full list **[click here](fulllist.md)**

## License

Copyright © 2014 Licensed under the [Apache License](license).
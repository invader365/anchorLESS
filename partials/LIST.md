# Anchor LESS

## Mixins:

00. .align (top, right, bottom, left, query);
00. .align.left.top (left, top);
00. .align.left.bottom (left, bottom);
00. .align.right.top (right, top);
00. .align.right.bottom (right, bottom);
00. .appearance (appearance);
00. .back (color, image, repeat, position, query);
00. .back.attachment (attachment);
00. .back.color (color);
00. .back.clip (clip);
00. .back.position (position);
00. .back.repeat (repeat);
00. .back.size (size);
00. .backface (visibility);
00. .border (width, style, color);
00. .box-sizing(box-model);
00. .color (color, back, border);
00. .columns (count, gap, width);
00. .display (display, query);
00. .float (float, query);
00. .font (font, family);
00. .font-face (name, path);
00. .font-size (size, query);
00. .gradient(degrees, start, stop, image);
00. .gradient.to-bottom(start, stop, image);
00. .gradient.to-left(start, stop, image);
00. .gradient.to-right(start, stop, image);
00. .gradient.to-top(start, stop, image);
00. .gradient.radial(inner, outer, image);
00. .height (height, query);
00. .highlight (highlight);
00. .image (image);
00. .index (index, query);
00. .inner-shadow (spread, color, alpha);
00. .margin (margin, query);
00. .max-width (width, query);
00. .min-size (width, height, query);
00. .min-width (width, query);
00. .opacity (opacity, query);
00. .overflow (x, y);
00. .padding (padding, query);
00. .perspective(perspective) {
00. .placeholder (color);
00. .position (position, query);
00. .resize (direction);
00. .rotate (degrees);
00. .rounded (radius);
00. .rounded.top (radius);
00. .rounded.right (radius);
00. .rounded.bottom (radius);
00. .rounded.left (radius);
00. .rounded.left.top (radius);
00. .rounded.left.bottom (radius);
00. .rounded.right.top (radius);
00. .rounded.right.bottom (radius);
00. .rgba (hex-color, alpha);
00. .size (width, height, query);
00. .scale (factor);
00. .shadow (spread, color, alpha);
00. .skew (x, y);
00. .spacing (margin, padding, query);
00. .square (size, query);
00. .text-align (align, query);
00. .text-indent (indent, query);
00. .text-shadow (spread, color, alpha, query);
00. .transform (transform);
00. .transition (property, durations, function, delay);
00. .transitions (first, second);
00. .translate (x, y);
00. .translate3d (x, y, z);
00. .user-select (select);
00. .width (width, query);

## Assets:

00. .arrow.top (width, color);
00. .arrow.bottom (width, color);
00. .arrow.right (width, color);
00. .arrow.left (width, color);
00. .center-block (width, query)
00. .center-inline (display, query)
00. .center-vertical (height)
00. .offset (padding, query)
00. .reset-center (margin-left, query)
00. .reset-vertical (margin-top, query)
00. .list-style (type, image);
00. .pseudo-container (display);
00. .pseudo (content, width, height);
00. .color.normal (color, bgcolor);
00. .color.hover (color, bgcolor);
00. .color.active (color, bgcolor);
00. .color.focus (color, bgcolor);
00. .color.visited (color, bgcolor);
00. .color.hover-focus (color, bgcolor);
00. .color.normal-active (color, bgcolor);
00. .gradient.normal (degrees, start, stop, image);
00. .gradient.hover (degrees, start, stop, image);
00. .gradient.active (degrees, start, stop, image);
00. .gradient.focus (degrees, start, stop, image);
00. .gradient.visited (degrees, start, stop, image);
00. .gradient.hover-focus (degrees, start, stop, image);
00. .gradient.normal-active (degrees, start, stop, image);
00. .table.backcolor (count, color);
00. .table.border (width, style, color);
00. .table.cell-border (width, style, color);
00. .table.padding (padding);
00. .table.rounded (radius);

## Helpers:

00. .absolute();
00. .block();
00. .clearfix();
00. .ellipsis();
00. .hidetext();
00. .hyphens();
00. .inline();
00. .inline-block();
00. .linebreak();
00. .relative();
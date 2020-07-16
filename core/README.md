# Anchor LESS Core

Contains categorized partial files for "anchor.less".

## Contents

### Mixins

00. .align (top, right, bottom, left, query);
00. .align.left-top (left, top);
00. .align.left-bottom (left, bottom);
00. .align.right-top (right, top);
00. .align.right-bottom (right, bottom);
00. .animation (name, duration, ease, delay, iteration, direction, [min-width-query, max-width-query]);
00. .appearance (appearance, [min-width-query, max-width-query]);
00. .back (color, image, repeat, position, [min-width-query, max-width-query]);
00. .backface (visibility, [min-width-query, max-width-query]);
00. .border (width, style, color, query, [min-width-query, max-width-query]);
00. .box-sizing (box-model, [min-width-query, max-width-query]);
00. .color (color, back-color, border-color, [min-width-query, max-width-query]);
00. .columns (count, gap, width);
00. .display (display, query);
00. .float (float, query);
00. .font (font, family, [min-width-query, max-width-query]);
00. .font-face (name, path);
00. .font-size (size, query);
00. .gradient (start, stop, degrees, [min-width-query, max-width-query]);
00. .gradient.linear (start, stop, degrees, [min-width-query, max-width-query]);
00. .gradient.to-bottom (start, stop, [min-width-query, max-width-query]);
00. .gradient.to-left (start, stop, [min-width-query, max-width-query]);
00. .gradient.to-right (start, stop, [min-width-query, max-width-query]);
00. .gradient.to-top (start, stop, [min-width-query, max-width-query]);
00. .gradient.radial (inner, outer, [min-width-query, max-width-query])
00. .highlight (highlight);
00. .indent (indent, query);
00. .index (index, query);
00. .inner-shadow (spread, color, alpha);
00. .opacity (opacity, query);
00. .overflow (x, y);
00. .perspective (perspective);
00. .placeholder (color);
00. .position (position, [min-width-query]);
00. .position.align (position, top, right, bottom, left, [min-width-query]);
00. .resize (direction);
00. .rotate (degrees);
00. .rounded (top-left, top-right, bottom-right, bottom-left, [min-width-query, max-width-query])
00. .size (width, height, [min-width-query, max-width-query]);
00. .min-size (min-width, min-height, [min-width-query, max-width-query]);
00. .scale (factor);
00. .shadow (spread, color, alpha);
00. .skew (x, y);
00. .spacing (margin, padding, [min-width-query, max-width-query]);
00. .text-align (align, query);
00. .text-shadow (spread, color, alpha, query);
00. .transform (transform);
00. .transition (property, durations, function, delay, [min-width-query, max-width-query]);
00. .transitions (first, second);
00. .translate (x, y);
00. .translate3d (x, y, z);
00. .user-select (select);

### Assets

00. .arrow.top (width, color, query);
00. .arrow.bottom (width, color, query);
00. .arrow.right (width, color, query);
00. .arrow.left (width, color, query);
00. .arrow.left-top (width, color, ratio, query);
00. .arrow.right-top (width, color, ratio, query);
00. .arrow.left-bottom (width, color, ratio, query);
00. .arrow.right-bottom (width, color, ratio, query);
00. .center-block (width, query);
00. .center-inline (display, query);
00. .center-vertical (height);
00. .offset (padding, query);
00. .reset-center (margin-left, query);
00. .reset-vertical (margin-top, query);
00. .list-style (type, image);
00. .pseudo-container (display);
00. .pseudo (content, width, height);
00. .color.normal (color, back-color);
00. .color.hover (color, back-color);
00. .color.active (color, back-color);
00. .color.focus (color, back-color);
00. .color.visited (color, back-color);
00. .color.hover-focus (color, back-color);
00. .color.normal-active (color, back-color);
00. .gradient.normal (start, stop, degrees, image);
00. .gradient.hover (start, stop, degrees, image);
00. .gradient.active (start, stop, degrees, image);
00. .gradient.focus (start, stop, degrees, image);
00. .gradient.visited (start, stop, degrees, image);
00. .gradient.hover-focus (start, stop, degrees, image);
00. .gradient.normal-active (start, stop, degrees, image);
00. .table.border (width, style, color);
00. .table.cell-border (width, style, color);
00. .table.padding (padding);
00. .table.rounded (radius);
00. .table.tbody-color (color, back-color, rows);
00. .table.thead-font (font, family);

### Utilities

00. .block();
00. .clearfix();
00. .ellipsis();
00. .hide-text();
00. .hyphens();
00. .inline();
00. .inline-block();
00. .line-break();
00. .nowrap();
00. .word-break();
00. .wrap();
00. Shades of gray: @hex0 .. @hexf
00. Color codes: @aqua .. @yellow
00. Web safe fonts: @font-mono -sans -script -serif

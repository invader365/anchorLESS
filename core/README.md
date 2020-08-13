# Anchor LESS Core

Contains categorized partial files for "anchor.less".

## Contents

### Mixins

00. .align(top, right, bottom, left);
00. .animation(name, duration, ease, delay, iteration, direction);
00. .appearance(appearance);
00. .back(color, image, repeat, position);
00. .backface(visibility);
00. .border(width, style, color);
00. .box-sizing(box-model);
00. .color(color, back-color, border-color);
00. .columns(count, gap, width);
00. .display(display);
00. .float(float);
00. .font(font, family);
00. .font-face(name, path);
00. .font-size(size);
00. .gradient(start, stop, degrees);
00. .gradient.linear(start, stop, degrees);
00. .gradient.to-bottom(start, stop);
00. .gradient.to-left(start, stop);
00. .gradient.to-right(start, stop);
00. .gradient.to-top(start, stop);
00. .gradient.radial(inner, outer)
00. .highlight(highlight);
00. .indent(indent);
00. .index(index);
00. .opacity(opacity);
00. .overflow(overflow-x, overflow-y);
00. .perspective(perspective);
00. .placeholder(property, value);
00. .position(position);
00. .position.align(position, top, right, bottom, left);
00. .resize(direction);
00. .rotate(degrees);
00. .rounded(top-left, top-right, bottom-right, bottom-left)
00. .size(width, height);
00. .min-size(min-width, min-height);
00. .scale(factor);
00. .shadow(spread, color, [alpha, min-width-query, max-width-query]);
00. .shadow.inset(spread, color, [alpha, min-width-query, max-width-query]);
00. .skew(x, y);
00. .spacing(margin, padding);
00. .text-align(align);
00. .text-shadow(spread, color, alpha);
00. .transform(transform);
00. .transition(property, durations, function, delay);
00. .transitions(first, second);
00. .translate(x, y);
00. .translate3d(x, y, z);
00. .user-select(select);

### Assets

00. .arrow.top(width, color);
00. .arrow.bottom(width, color);
00. .arrow.right(width, color);
00. .arrow.left(width, color);
00. .arrow.left-top(width, color, ratio);
00. .arrow.right-top(width, color, ratio);
00. .arrow.left-bottom(width, color, ratio);
00. .arrow.right-bottom(width, color, ratio);
00. .center-block(width);
00. .center-inline(display);
00. .center-vertical(height);
00. .offset(padding);
00. .reset-center(margin-left);
00. .reset-vertical(margin-top);
00. .list-style(type, image);
00. .pseudo-container(display);
00. .pseudo(content, width, height);
00. .color.normal(color, back-color);
00. .color.hover(color, back-color);
00. .color.active(color, back-color);
00. .color.focus(color, back-color);
00. .color.visited(color, back-color);
00. .color.hover-focus(color, back-color);
00. .color.normal-active(color, back-color);
00. .gradient.normal(start, stop, degrees, image);
00. .gradient.hover(start, stop, degrees, image);
00. .gradient.active(start, stop, degrees, image);
00. .gradient.focus(start, stop, degrees, image);
00. .gradient.visited(start, stop, degrees, image);
00. .gradient.hover-focus(start, stop, degrees, image);
00. .gradient.normal-active(start, stop, degrees, image);
00. .table.border(width, style, color);
00. .table.cell-border(width, style, color);
00. .table.padding(padding);
00. .table.rounded(radius);
00. .table.tbody-color(color, back-color, rows);
00. .table.thead-font(font, family);

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
00. Shades of gray: hex0 .. hexf
00. Color codes: aqua .. yellow
00. Web safe fonts: font-mono -sans -script -serif

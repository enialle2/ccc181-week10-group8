# CCC181 Week 10: CampusConnect Mobile-First Login Page

React + TypeScript starter for the Week 10 group activity. The page is already
built. Your group's job is the **mobile-first CSS** and the **GitHub teamwork**.

## Run it

```bash
npm install
npm run dev          # open the local URL it prints
npm run dev:phone    # same, but your phone (same Wi-Fi) can open the Network URL
npm run build        # must finish with no errors before you submit
```

## Rules

- Edit only the CSS files in `src/styles/` (one member = one file). Do not edit `reset.css`.
- Plain CSS only. No Tailwind, Bootstrap, Material UI, styled-components, or any UI library.
- Phone styles first (no media query), then `min-width` queries only. Never `max-width`.
- Do not edit the `.tsx` files or rename classes. If you must, tell the group first.

## Group information (fill in)

| Item           | Your answer |
| -------------- | ----------- |
| Group number   |             |
| Section        |             |
| Repository URL |             |

## Members (each member fills in their own row in their own commit)

| Member     | Name             | GitHub username | CSS file   | What I did                                                                             |
| ---------- | ---------------- | --------------- | ---------- | -------------------------------------------------------------------------------------- |
| 1 (leader) | Ellaine Dulalas | enialle2 | `base.css` | I wrote base.css (page layout and brand panel from phone to 1280px) and added the viewport meta tag. |
| 2 | Anrica Tinoy | anricatinoy | `nav.css` | I styled navigation bar (Flexbox) & footer (CSS Grid)|
| 3 | Zemeco M. Buntag | zemecobuntag | `form.css` | Styled the login card, form fields, and buttons for phone, tablet, and laptop screens. |


## Experiment 0: the page without the viewport tag

What did the page look like in DevTools phone mode **before** adding the viewport meta tag?
What changed **after** adding it?

> Before adding the viewport meta tag in DevTools phone mode, the entire page appears to be tiny and zoomed out. Because of this it tends to be difficult to read or interact without manually pinch-zooming. After adding the viewport meta tag, the page layout then correctly fits the true width of the device screen instead of pretending that the screen is a wide desktop canvas.

## DevTools test results

| Width   | What must be true                                                                                                  | Pass? |
| ------- | ------------------------------------------------------------------------------------------------------------------ | ----- |
| 360 px  | 1 column. Nav links stacked and 48px tall. Options and buttons stacked. Footer in 1 column. No sideways scrollbar. |       |
| 768 px  | Nav in one row (brand left, links right). Checkbox and link in one row. Two buttons side by side.                  |       |
| 1024 px | Brand panel and login card side by side. Footer in 3 columns. Heading is larger.                                   |       |
| 1280 px | Content centered and stops at 1200px.                                                                              |       |

## Breakpoints I observed

Using **Show media queries** and dragging slowly from 360 px to 1280 px, the layout changed at these exact widths:


Using Show media queries and dragging slowly from 360px to 1280px, the layout changed at 768px and 1024px. At 768px the nav moved into one row, the checkbox and link shared a row, and the two buttons sat side by side. At 1024px the brand panel and login card moved side by side, the footer went to 3 columns, and the heading got larger. No width looked broken.
feature/nav-tinoy
- 360 px (starting point, no media query):** The brand is on top, the nav links are stacked with 48 px tap targets, and the footer is in 1 column.
- 768 px: The navbar changed from stacked links to one row, with the brand on the left and links on the right.
- 1024 px: The footer changed from 1 column to 3 columns.
- 1280 px: No new nav or footer change.

No width looked broken for the navbar and footer. There was no sideways scrollbar from 360 px to 1280 px.

360px: Single-column layout. The welcome hero card and the Sign-in form are stacked vertically.
768px: Still follows a stacked, single-column layout (similar structure to 360px, but scaled to a wider container).
1024px: The major structural breakpoint occurs here—the layout shifts from a single stacked column to a 2-column grid/flex row, placing the welcome hero card side-by-side with the Sign-in form.
1280px: Maintains the same 2-column layout as seen at 1024px, but with wider outer side margins.

No width looked broken, and there was no sideways scrollbar.
main


Screenshots are in `screenshots/` as `360.png`, `768.png`, `1024.png`, `1280.png`.

## What our group learned (leader writes this last)

> (write your answer here)

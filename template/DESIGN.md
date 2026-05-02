---
name: Tonecraft
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#831ada'
  on-secondary: '#ffffff'
  secondary-container: '#9e41f5'
  on-secondary-container: '#fffbff'
  tertiary: '#87165b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a63274'
  on-tertiary-container: '#ffcee2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6800b4'
  tertiary-fixed: '#ffd8e7'
  tertiary-fixed-dim: '#ffafd3'
  on-tertiary-fixed: '#3d0026'
  on-tertiary-fixed-variant: '#85145a'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 4rem
  section: 8rem
  container_max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is built for a premium AI writing assistant, focusing on a balance of technical sophistication and creative fluidity. The aesthetic direction is a refined blend of **Modern Minimalism** and **Glassmorphism**. 

The UI communicates intelligence and speed through high-contrast typography and vast negative space, while maintaining a tactile, high-end feel through the use of translucent layers and vibrant gradients. The target audience is modern professionals and creators who value tools that feel both powerful and invisible. The emotional response is one of clarity, inspiration, and effortless productivity.

## Colors

The palette is anchored by a deep Indigo and vibrant Purple, used primarily in gradients to signify "AI energy" and creative flow. 

- **Primary & Secondary:** These colors should rarely be used in isolation; instead, apply them as a linear gradient for key actions and focal points.
- **Surface Colors:** Use a soft Slate-50 for the main background to allow the glass effects to pop.
- **Accents:** Use Tertiary Pink sparingly for notification pips or small highlights within the AI's "thinking" state.
- **Contrast:** Ensure all text on indigo/purple backgrounds is pure white to maintain AA/AAA accessibility standards.

## Typography

This design system utilizes **Inter** for its utilitarian precision and high legibility at all scales. 

- **Headlines:** Use tight letter-spacing for large display text to create a compact, modern "editorial" look. Apply the primary gradient to the most critical word in the H1.
- **Body:** Use a generous line height (1.6) to ensure the AI-generated long-form content is easy to digest.
- **Hierarchy:** Maintain a clear distinction by using weight (Bold/ExtraBold) for structural elements and Regular for informative text.

## Layout & Spacing

This design system follows a **Fixed-to-Fluid Grid** model. On desktop, content is contained within a 1200px max-width, while mobile layouts utilize a 16px (2-unit) margin.

- **Rhythm:** Use an 8px base unit for all padding and margins.
- **Sectioning:** Large vertical gaps (8rem) between landing page sections create a premium, uncrowded feel.
- **Feature Grid:** A 3x2 grid that collapses to a 1x6 on mobile. Use 24px gutters to allow for the shadow-based elevation of the cards.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and multi-layered shadows rather than solid borders.

- **The Glass Layer:** Use a background blur of 12px to 20px with a 70% white opacity. Apply a subtle 1px white border (20% opacity) to simulate the edge of a glass pane.
- **Shadows:** Use "Ambient Shadows"—large blur radii (30px-60px) with very low opacity (5-10%) and a slight indigo tint (`rgba(79, 70, 229, 0.1)`).
- **Z-Axis:**
  - Level 0: Main background (Slate-50).
  - Level 1: Feature cards and Pricing cards.
  - Level 2: Modals, Pop-overs, and Floating Navigation.

## Shapes

The shape language is friendly and approachable.

- **Standard Elements:** Use a 0.5rem (8px) radius for inputs and small cards.
- **Large Components:** Feature grid cards and pricing tables should use `rounded-xl` (1.5rem) to emphasize the soft, modern aesthetic.
- **Interaction:** Buttons and badges use a fully rounded "pill" shape to distinguish them as actionable items.

## Components

### Buttons
- **Primary:** High-contrast pill-shaped buttons using the Indigo-to-Purple gradient. On hover, increase the gradient brightness or add a subtle 4px glow (drop shadow) of the same color.
- **Secondary:** Outline style with a 1.5px border. Use the primary indigo color for the border and text.

### Feature Grid (3x2)
- **Cards:** Glassmorphic background with `rounded-xl` corners. 
- **Hover Effect:** On hover, the card should lift (translateY -4px) and the border opacity should increase. The icon within should transition from a flat color to the brand gradient.

### Pricing Table
- **'Most Popular' Badge:** A small, floating pill badge above the card using the primary gradient with white text.
- **Featured Plan:** Scale the popular plan card slightly larger (1.05x) and apply a thin gradient border to differentiate it from other tiers.

### FAQ Accordion
- **Style:** Clean, borderless rows with a subtle divider line.
- **Interaction:** Use a chevron icon that rotates 180 degrees. The transition for the answer panel must be a smooth "slide-and-fade" rather than a hard toggle.

### Input Fields
- **Design:** Soft gray background (Slate-100) that shifts to white with an indigo ring on focus. Use `rounded-md`.
# Skybound Systems

# Portfolio Master Design Style Guide

## 1. Design Direction

### Core Concept

**From Structure to Possibility**

The portfolio should feel like a living digital environment rather than a conventional developer portfolio.

The experience is a continuous visual journey:

**Sky → Systems → Work → Research → About → Playground → Constellation → Contact**

The recurring visual element is a **small, realistic/stylised spaceship** travelling through the website as the user scrolls.

The spaceship represents movement, exploration, progression and the connection between different areas of the portfolio. It must be an original visual language for this portfolio and must not imitate the paper-plane interaction from any reference website.

### Design Language

**Editorial × Technical × Playful**

The visual identity should balance:

* Editorial restraint
* Strong typography and whitespace
* Technical/system-oriented visual language
* Playful and unexpected interactions
* Premium motion
* Atmospheric depth
* Human, tactile imperfections
* Clear information architecture

The guiding principle is:

> **Clean at first glance. Interesting when you interact with it.**

The site must feel deliberately designed by a human. It must not feel like an AI-generated template, an animation showcase, or a collection of unrelated visual effects.

---

# 2. Core Experience Principles

## 2.1 Content First

The visual experience must never make the actual portfolio difficult to understand.

A visitor should immediately understand:

**Who I am → What I do → What I have built → What I research → How to contact me**

Interactions should reveal additional depth rather than obscure the information.

Existing content, project names, descriptions and routes must be preserved unless explicitly instructed otherwise.

Do not invent:

* Employers
* Qualifications
* Institutions
* Achievements
* Experience
* Projects
* Technical claims
* Portraits
* Research findings

Use only information supplied by the portfolio.

---

## 2.2 Motion Has Purpose

Do not animate everything.

Use the hierarchy:

**Static → Responsive → Alive**

### Static

Normal content, typography, layouts and information.

### Responsive

Subtle reactions to:

* Cursor movement
* Hover
* Scrolling
* Focus
* Touch interaction

### Alive

Major moments where the environment itself changes.

Animation should communicate:

* Movement
* Relationships
* Hierarchy
* Progression
* Transformation
* Exploration

The site should feel premium because the motion is **well designed and well timed**, not because there is a large quantity of animation.

Avoid:

* Excessive bouncing
* Constant floating
* Random rotations
* Aggressive zooms
* Long loading animations
* Animation on every element
* Effects that delay access to content

---

# 3. One Continuous Digital Environment

The homepage should feel like one connected world rather than a series of unrelated pages.

The visual connection between sections should come from:

* The spaceship
* Atmospheric backgrounds
* Data points
* Network structures
* Colour transitions
* Typography
* Repeated spacing and component rules

The user should feel that they are travelling through one environment that changes character as they progress.

---

# 4. Homepage Atmosphere

## Realistic Atmospheric Sky

The hero must begin with a **realistic atmospheric sky environment**.

Do not use a simple flat CSS gradient as the primary visual.

The sky should contain:

* Realistic blue atmospheric depth
* Soft volumetric clouds
* Natural variation in cloud density
* Subtle depth between cloud layers
* Soft sunlight
* Natural lighting
* Very restrained grain/noise
* Subtle atmospheric haze
* Small integrated point/data elements

The sky should feel like looking upward into an actual atmosphere.

Avoid an obviously synthetic, overly saturated or generic "AI sky" appearance.

The sky is an **environment**, not the entire visual identity.

Typography must remain readable against it.

---

# 5. Colour System

The previous green/acid-green accent system is completely removed.

## Primary Accent

**Sun Yellow — `#FFC220`**

Yellow should feel like sunlight entering the interface rather than a generic neon accent.

Use it selectively for:

* Hover states
* Active interactions
* Spaceship details
* Smoke/trail highlights where appropriate
* Sun/decorative elements
* Data points
* Diagram connections
* Links
* Selected skills
* Interactive typography
* Cursor states
* Small UI indicators

Do not flood the interface with yellow.

---

## Homepage Sky

| Token         | Colour                | Purpose                  |
| ------------- | --------------------- | ------------------------ |
| Sky Top       | `#7AB2E1`             | Upper atmospheric region |
| Sky Mid       | `#A8D4F7`             | Middle/lower atmosphere  |
| Sun Yellow    | `#FFC220`             | Primary accent           |
| Canvas White  | `#FFFFFF`             | Main content canvas      |
| Primary Ink   | `#12171E`             | Main text                |
| Secondary Ink | `#4A5568`             | Supporting text          |
| Border        | `rgba(18,23,30,0.08)` | Fine borders             |

---

## About Environment

The About section becomes warmer and more tactile.

| Token           | Colour    | Purpose           |
| --------------- | --------- | ----------------- |
| Light Cream     | `#F9F3EE` | Upper background  |
| Warm Sand       | `#EAD4C4` | Lower background  |
| Primary Ink     | `#12171E` | Main text         |
| Secondary Ink   | `#4A5568` | Supporting text   |
| Sun Yellow      | `#FFC220` | Accent            |
| Scrapbook White | `#FFFFFF` | Polaroid frames   |
| Terracotta      | Muted     | Botanical accents |
| Sage            | Muted     | Botanical accents |

---

## Playground Environment

| Token         | Colour    | Purpose               |
| ------------- | --------- | --------------------- |
| Warm Cream    | `#FAF8F5` | Main background       |
| White         | `#FFFFFF` | Controls and surfaces |
| Primary Ink   | `#12171E` | Main text             |
| Secondary Ink | `#4A5568` | Supporting text       |
| Sun Yellow    | `#FFC220` | Occasional accent     |

---

# 6. Smooth Environmental Colour Journey

Background transitions must be continuous and scroll-linked.

Do not make each section abruptly change colour.

The approximate environmental progression is:

**Atmospheric Blue Sky**

↓

**Soft Blue / White**

↓

**Canvas White**

↓

**Dark Research Environment**

↓

**Warm Sand About**

↓

**Cream Playground**

↓

**Dark / Atmospheric Final Contact**

The transitions should be gradual enough that the user feels they are travelling through different environments within the same world.

Colour should never transition so aggressively that it harms readability.

---

# 7. Cover-Over Scroll Transition

The hero should remain visually present while the next section moves over it.

Use a sticky hero/container where appropriate:

```css
position: sticky;
top: 0;
```

Following sections should have appropriate stacking order and opaque/semi-opaque surfaces so they visually cover the hero.

The effect should create:

* Depth
* Layering
* Continuity
* A sense of entering the next environment

It must remain performant and must not interfere with normal document flow or accessibility.

---

# 8. Floating Navigation

Use a centred floating pill navigation.

Conceptually:

```text
┌─────────────────────────────────────────────┐
│   WORK   ABOUT   RESEARCH   PLAYGROUND      │
└─────────────────────────────────────────────┘
```

### Structure

* Centred floating pill
* `border-radius: 9999px`
* `backdrop-filter: blur(12px)`
* Semi-transparent glass background
* Subtle 1px border
* Restrained shadow
* Fixed or sticky positioning
* Responsive behaviour

### Inactive State

```text
background: transparent / glass
color: #1D2633
```

### Hover State

```text
background: rgba(255,255,255,0.4)
```

### Active State

```text
background: #1D2633
color: #FFFFFF
```

The active state must be clear without becoming oversized.

Navigation must remain accessible by keyboard and touch.

---

# 9. Typography

Use three complementary typographic voices.

## Editorial Display

Preferred direction:

* Instrument Serif
* GT Super
* Cormorant Garamond

Use for:

* Hero statements
* Major section statements
* Project titles where appropriate
* About headline
* Playground titles

The serif should introduce personality and editorial character.

---

## Interface Sans

Preferred direction:

* Inter
* Geist
* Plus Jakarta Sans

Use for:

* Navigation
* Body text
* Buttons
* Descriptions
* Supporting headings
* UI

---

## Technical Mono

Preferred direction:

* JetBrains Mono
* Space Mono

Use for:

* Dates
* Project numbers
* Technical metadata
* System labels
* Categories
* Status indicators
* Research labels
* Technology information

Technical typography should support the visual identity rather than turn the entire website into a terminal.

---

# 10. Hero

Do not replace the established/current hero headline with unrelated marketing copy.

Preserve the existing headline wording and editorial direction already present in the portfolio.

The hero should combine:

* Large editorial typography
* Realistic atmospheric sky
* Subtle data field
* Small spaceship
* Technical metadata
* Strong whitespace
* Atmospheric depth

The hero should immediately establish:

**software + AI + data + systems + creative thinking**

without relying on generic developer-portfolio language.

---

# 11. Interactive Typography

Large editorial statements should respond subtly to the cursor.

Example concept:

> I turn complex information into useful systems.

Letters should be individually addressable.

### Hover behaviour

On hover:

* Individual letters respond with a slight stagger
* Letters move subtly upward
* Yellow travels through the characters
* The movement creates a wave
* The effect remains restrained

Suggested movement:

```text
translateY(-8px)
```

Suggested stagger:

```text
0.03s
```

The effect must feel fluid and intentional, not like random text distortion.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 12. Cursor System

The cursor is part of the interface language on desktop.

## Default

Small, unobtrusive dot.

## Project Hover

Cursor expands and displays:

**VIEW PROJECT ↗**

## Interactive Visualisation

Cursor may display:

**EXPLORE**

## Final Section

Cursor may transform into the site's data-node symbol.

### Rules

The cursor must:

* Never obscure important content
* Never prevent normal clicking
* Never interfere with keyboard navigation
* Be disabled/simplified on touch devices
* Remain subtle
* Respect reduced-motion preferences

---

# 13. Spaceship Journey

The spaceship is the main recurring visual element throughout the portfolio.

It must feel unique to this site.

It should be:

* Small
* Lightweight
* Realistic/stylised
* Atmospheric
* Clearly visible
* Integrated into the environment
* Never dominant over content

It should feel like an object travelling through the portfolio's world.

---

## 13.1 Direction of Travel

The spaceship must **weave horizontally through the page**.

The journey must clearly alternate:

**RIGHT → LEFT → RIGHT → LEFT → RIGHT**

Do not allow the ship to remain on one side for the entire journey.

For example:

```text
             🚀 ←
────────────────────────
                         ↓

← 🚀
────────────────────────
                         ↓

             🚀 →
────────────────────────
                         ↓

← 🚀
────────────────────────
```

The horizontal movement should be visually obvious while remaining integrated with the vertical scroll.

---

## 13.2 Orientation

The spaceship must always face the direction in which it is travelling.

If it is moving:

**Right → Left**

the nose points **left**.

If it is moving:

**Left → Right**

the nose points **right**.

At turns, the orientation should transition naturally rather than snapping awkwardly.

The ship may rotate or mirror depending on the chosen asset and implementation.

---

## 13.3 Smoke Trail

The spaceship leaves a **small, subtle atmospheric smoke trail**.

The trail must:

* Remain short
* Follow the ship
* Fade naturally
* Never obscure text
* Avoid looking cartoonish
* Be lightweight
* Reduce/disappear when reduced motion is enabled

The trail should feel like atmospheric exhaust rather than a game effect.

---

# 14. Spaceship Implementation

Prefer lightweight browser-native implementation wherever practical.

A continuous SVG path may define the overall journey.

Conceptually:

```text
Scroll progress
      ↓
Path position
      ↓
Spaceship position
      ↓
Travel direction
      ↓
Rotation / mirroring
      ↓
Smoke trail
```

The path should alternate horizontally between sections.

Avoid adding a heavy animation dependency solely for the spaceship.

If an animation library is already required elsewhere, reuse the existing animation system rather than introducing multiple overlapping solutions.

---

# 15. Work Section

The Work section should return to a clean, professional environment.

Use:

* 24px curved surfaces
* Fine borders
* Generous whitespace
* Strong typography
* Restrained shadows
* Responsive hover states

Default:

```css
border: 1px solid rgba(0,0,0,0.06);
border-radius: 24px;
```

Hover:

```text
translateY(-6px)
soft diffused shadow
```

Avoid excessive card decoration.

---

## Project Interaction

The project list should remain minimal until the visitor interacts with it.

Example:

```text
01  TAXONOMY PLATFORM
02  FUTURE SKILLS MAP
03  AI SYSTEMS
04  SOFTWARE PROJECTS
```

On hover:

* Project typography responds
* Preview image/media appears
* Preview subtly follows the cursor
* Technology metadata can appear
* The interaction remains smooth and restrained

Preserve existing:

* Project names
* Summaries
* Dedicated routes
* Case-study links

Do not invent project claims.

---

# 16. Project Detail Pages

Each project should feel like entering a deeper technical environment.

Use the structure where applicable:

**Problem → Approach → Architecture → Implementation → Result**

Technical architecture may become interactive where it genuinely communicates the project.

For example:

```text
Occupation
     ↓
Specialisation
     ↓
Skills
     ↓
Knowledge
     ↓
Career pathways
```

Nodes and relationships may illuminate on hover/focus.

The interaction should communicate the actual system rather than exist only as decoration.

---

# 17. Research Section

The Research environment should become darker and more analytical.

It should communicate:

* Systems
* Data
* Relationships
* Skills
* Occupations
* Labour markets
* Technology
* Research

A network visualisation may represent relationships such as:

```text
SKILLS
   │
OCCUPATIONS ─── INDUSTRY
   │
EDUCATION
   │
LABOUR MARKET
```

The network can evolve gradually with scrolling.

The purpose of the visualisation is to reinforce the research themes.

The Research section should feel like an **interactive research notebook**, not simply another CV section.

---

# 18. About Section

The About section intentionally changes atmosphere.

It should feel like a **warm physical scrapbook translated into a digital environment**.

This is where the portfolio becomes more personal and tactile.

---

## 18.1 Background

Use a warm environmental gradient:

```text
#F9F3EE
     ↓
#EAD4C4
```

The transition should be soft and organic.

---

## 18.2 Layout

Use an asymmetric editorial composition.

Approximately:

**50/50 or 60/40**

The text remains structured while imagery and environmental elements are allowed to overlap the grid.

The layout should feel composed rather than perfectly symmetrical.

---

# 19. About Scrapbook Visual Language

## Polaroid Stack

Use 3–4 genuine supplied images/assets where available.

Do not invent portraits or use fabricated personal imagery.

Each image uses:

```css
border: 10px solid #FFFFFF;
box-shadow: 2px 4px 16px rgba(0,0,0,0.15);
```

Use slightly different rotations, for example:

```text
-6deg
+4deg
-2deg
```

The imperfections are intentional.

The stack should feel like physical photographs placed on a desk.

### Interaction

On hover:

* Top photo moves slightly forward
* Rotation approaches 0°
* Scale increases subtly
* Shadow responds
* Motion settles smoothly

The effect should feel like handling a physical photograph rather than hovering a normal web card.

---

# 20. About Environmental Elements

Use restrained physical/illustrative elements.

### Top

Cloud-like scalloped or paper-cutout border.

### Top Right

Sunburst using:

```text
#FFC220
```

### Bottom

Flat botanical vector elements emerging from a subtle ground/shadow area.

Use:

* Muted terracotta/dusty rose
* Muted sage/green

These elements should frame the content rather than compete with it.

---

# 21. About Timeline

Preserve only the supplied story:

**2019 → 2022 → 2026**

**Chemistry → Software → AI / Systems / Data**

Do not invent employers, institutions, roles, achievements or experience claims.

The timeline should visually communicate an evolving technical direction.

Technical dates and metadata should use the monospace font.

The timeline can use:

* Horizontal progression
* Subtle environmental changes
* Small visual artefacts
* System/data motifs

But the content must remain factually faithful.

---

# 22. About Supporting Widgets

Where the existing About content supports them, use modular curved widgets for personal content.

Possible visual language:

* Weekend/to-do widget
* Audio/music widget
* Typographic quote
* Timeline information

Use the same approximately 24px curved surfaces used elsewhere so the page still belongs to the same design system.

Do not introduce placeholder personal information.

---

# 23. Playground

The Playground should intentionally feel different from Work.

It is an **experimental gallery**, not a standard project grid.

The environment should become:

**Minimal → Gallery-like → Focused → Experimental**

---

# 24. Playground Environment

Use:

```text
#FAF8F5
```

as the primary background.

Keep the environment quiet so the experiments become the visual focus.

The Playground should feel like entering a gallery where individual experiments are displayed as objects.

---

# 25. Playground Typography

### Intro

Geometric sans-serif.

Approximately:

```text
16–18px
```

Centered and restrained.

### Experiment Metadata

Technical monospace.

Example:

```text
01 / 10
SPLINE · 2024
```

Use uppercase and subtle tracking.

### Experiment Title

Editorial serif.

Approximately:

```text
48–56px
```

with tight leading.

### Description

Sans-serif.

Constrained to approximately:

```text
max-width: 600px
```

and centred.

---

# 26. Playground Coverflow

The primary interaction is a 3D-inspired coverflow carousel.

It should feel like a physical gallery rather than a standard website slider.

## Active Card

```text
opacity: 1
scale: 1
z-index: 10
```

The active experiment receives the majority of the visual attention.

Use the standard approximately 24px corner radius where appropriate.

---

## Adjacent Cards

```text
opacity: 0.4–0.6
scale: 0.85
z-index: 5
```

Optional subtle:

```text
filter: blur(2px)
```

Adjacent cards should remain recognisable and clickable.

Hovering can increase opacity slightly to communicate interaction.

---

## Far Cards

```text
opacity: 0.1–0.2
scale: 0.7
```

Keep them visually subordinate.

---

# 27. Playground Controls

Use circular navigation controls.

Dimensions:

```text
48px × 48px
border-radius: 50%;
```

Use:

* White surface
* Delicate border
* Soft shadow
* Thin SVG chevron
* Clear keyboard focus state

Hover:

```text
scale(1.05)
```

with a slightly deeper shadow.

Clicking an adjacent experiment should smoothly bring it into the active position.

---

# 28. Playground Motion

Carousel transitions should feel physical and spring-like rather than linear.

Preferred direction:

* Spring motion
* Controlled stiffness
* Controlled damping
* No excessive bounce

For example, when using Framer Motion:

```text
type: spring
stiffness: 300
damping: 30
```

The exact values can be adjusted based on the final interaction.

The transition should feel like objects sliding into place in a physical gallery.

---

# 29. Playground Personality

The Playground is the place where experimentation is encouraged.

Experiments may include:

* Small 3D objects
* Spline/WebGL experiments
* Code experiments
* Interactive graphics
* Unusual shapes
* Polaroid-style frames
* Playful cursor states
* Generative visualisations

However:

> **Experimental, not messy.**

Every experiment should still belong to the overall design system.

---

# 30. Audio

Audio is optional and user-controlled.

Initial implementation:

```text
♫ SOUND OFF
```

Do not autoplay audio.

Do not use placeholder music.

The architecture may support a soundtrack later.

When audio is eventually supplied:

* Playback must be opt-in
* User controls sound
* Audio state should persist where technically appropriate
* Controls must be keyboard accessible
* Visual state must clearly indicate whether audio is playing

Audio should enhance the journey, not be required to understand it.

---

# 31. Final Contact / Constellation

The final section should bring the visual journey together.

The data/network elements encountered throughout the portfolio gradually converge.

The network transforms into a constellation.

Around it appear:

```text
GITHUB
LINKEDIN
EMAIL
CV
```

The constellation can eventually form the site's personal visual mark.

The ending should feel like the conclusion of a journey rather than a conventional contact form.

Example direction:

**LET'S CONNECT.**

followed by the relevant links.

The spaceship should arrive at its final destination as part of this conclusion.

---

# 32. Light and Dark Mode

Support both light and dark environments.

Dark mode should not simply invert the light theme.

Deliberately design the relationships between:

* Background
* Text
* Surfaces
* Yellow accent
* Borders
* Illustrations
* Network elements
* Environmental effects

Mode transitions should be smooth.

The yellow accent remains part of the visual identity in both modes.

---

# 33. Responsive Design

Do not simply scale the desktop design down for mobile.

Mobile should be intentionally designed.

### Mobile priorities

* Preserve typography hierarchy
* Maintain readable text widths
* Simplify decorative elements
* Reduce particle counts
* Reduce parallax
* Disable custom cursor behaviour
* Simplify spaceship path where necessary
* Preserve project accessibility
* Maintain touch-friendly controls
* Keep navigation usable
* Preserve the visual narrative

The spaceship and environmental journey should still exist on mobile, but the implementation may be simplified to protect performance and usability.

---

# 34. Accessibility

Every interaction requires an accessible fallback.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

* Spaceship becomes static/minimally animated
* Smoke trail disappears or becomes static
* Parallax is removed
* Letter-wave animation is removed
* Carousel transitions become simpler
* Cursor effects are removed
* Smooth scrolling is reduced/disabled where appropriate

All important information must remain accessible without animation.

Keyboard navigation must work for:

* Navigation
* Projects
* Carousel
* Audio controls
* Links
* Interactive visualisations

Interactive canvas/WebGL elements must have meaningful accessible alternatives where they contain important information.

---

# 35. Performance

Visual sophistication must not come at the expense of performance.

Use standard HTML/CSS for:

* Typography
* Navigation
* Content
* Project cards
* Forms
* Accessibility
* Primary interactions

Use Canvas/WebGL only where genuinely justified:

* Atmospheric effects
* Network/data visualisations
* Final constellation
* Genuine 3D experiments

Do not make the entire portfolio 3D.

Prefer:

```text
transform
opacity
```

for animation wherever possible.

Optimise:

* Images
* Video
* Audio
* 3D assets
* Canvas effects

Lazy-load non-critical assets.

Reduce visual complexity on smaller devices.

---

# 36. Technology Direction

Preferred stack:

* Next.js
* TypeScript
* Tailwind CSS
* CSS variables/design tokens
* Framer Motion and/or GSAP where justified
* Lenis or equivalent smooth scrolling where appropriate
* React Three Fiber / Three.js only where genuinely necessary

Do not introduce multiple libraries that solve the same problem.

Before adding a dependency, determine whether the effect can be implemented cleanly with existing technologies.

Priority order:

**Maintainability → Accessibility → Performance → Visual sophistication**

The technology must support the experience rather than become the experience.

---

# 37. Motion Language

Motion should feel:

* Smooth
* Restrained
* Physical
* Slightly springy
* Responsive
* Deliberate
* Atmospheric

Avoid:

* Excessive bounce
* Constant floating
* Random rotations
* Aggressive scaling
* Continuous unnecessary animation
* Long transitions
* Animation that blocks content

Use motion primarily when it communicates something.

---

# 38. Overall Journey

The final experience should follow this visual narrative.

## 01 — SKY / INTRO

Realistic atmospheric sky.

Editorial typography.

Interactive data field.

Spaceship appears.

↓

## 02 — WHAT I DO

Sky gradually gives way to the clean content canvas.

Interactive editorial typography.

Spaceship crosses horizontally.

↓

## 03 — WORK

Projects emerge from the clean environment.

Cursor-responsive previews.

Spaceship travels to the opposite side.

↓

## 04 — RESEARCH

Environment becomes darker.

Systems and data network appear.

Relationships illuminate.

Spaceship continues through the system.

↓

## 05 — ABOUT

Environment becomes warm.

Scrapbook composition appears.

Polaroids.

Timeline.

Sunburst.

Botanical elements.

↓

## 06 — PLAYGROUND

Environment becomes cream.

Gallery-like layout.

Coverflow experiments.

Focused interactions.

↓

## 07 — FINAL

Network elements converge.

Constellation forms.

Spaceship reaches its destination.

Links appear:

**GITHUB · LINKEDIN · EMAIL · CV**

↓

## END

**LET'S CONNECT.**

The experience should conclude naturally.

---

# 39. Visual Signature

The portfolio's visual signature is:

**Realistic atmospheric sky**

*

**Small travelling spaceship**

*

**Sun-yellow accent `#FFC220`**

*

**Editorial serif**

*

**Modern sans-serif**

*

**Technical monospace**

*

**Large typography**

*

**Generous whitespace**

*

**Subtle grain/noise**

*

**Glass navigation**

*

**Responsive cursor**

*

**Fluid environmental colour transitions**

*

**Interactive data/network structures**

*

**Warm scrapbook About section**

*

**Experimental cream Playground**

*

**Final constellation**

These elements should feel like one visual system.

---

# 40. Relationship to the References

The portfolio must never look like three reference websites stitched together.

The references provide principles, not visual templates.

### Reference 1 contributes

* Restraint
* Cleanliness
* Typography
* Whitespace
* Editorial composition

### Reference 2 contributes

* Personality
* Storytelling
* Playfulness
* Unexpected interactions

### Reference 3 contributes

* Premium motion
* Cursor response
* Depth
* Presentation quality

The portfolio's own identity comes from combining those principles with:

* Realistic atmospheric sky
* Spaceship journey
* Systems/data visual language
* Editorial typography
* Warm scrapbook About
* Experimental Playground
* Constellation ending
* Continuous environmental transitions

Do not directly copy:

* Layouts
* Objects
* Illustrations
* Animations
* Interactions
* Branding
* Distinctive visual compositions

The result should feel original.

---

# 41. Final Design Philosophy

The website should not scream:

> "LOOK, I KNOW REACT."

The technology should disappear behind the experience.

The visitor should first understand the person and the work.

Then they should discover the interaction.

Then they should discover the technical depth behind it.

The intended progression is:

> **This is beautifully designed.**

↓

> **This person thinks in systems.**

↓

> **There is serious technical work behind this.**

The final experience should feel like:

> **A living interface for systems, software, data and ideas.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0fd8189a-f64f-46e3-a21d-5febd64631e6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

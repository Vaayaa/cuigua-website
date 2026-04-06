# 锤瓜 CUIGUA Website - SPEC.md

## 1. Concept & Vision

An immersive digital experience that embodies the "不完美治愈力" (Healing Power of Imperfection) philosophy through an interactive node-based interface. The website functions as a visual journey through the "囧恩的神经漫游记" (Jon's Neuron Odyssey) universe — visitors navigate connected nodes representing sound, visuals, and emotional moments, creating their own path through the content. Surreal, slightly psychedelic, but deliberately imperfect and approachable.

---

## 2. Design Language

### Aesthetic Direction
**"Surrealist Node Garden"** — A dark, atmospheric space where content exists as floating islands (nodes) connected by flowing threads. Inspired by neural networks, constellation maps, and surrealist art. The imperfection is intentional: nodes slightly wobble, connections flow organically.

### Color Palette
```
--bg-deep:        #0a0a0f       /* Deep space black */
--bg-surface:     #12121a       /* Elevated surfaces */
--bg-node:        #1a1a24       /* Node backgrounds */
--text-primary:   #f5f5f7       /* Primary text */
--text-secondary: #8a8a9a       /* Secondary text */
--accent-orange:  #ff6b35       /* Primary accent - warmth */
--accent-purple:  #a855f7       /* Secondary accent - mystery */
--accent-cyan:    #22d3ee       /* Tertiary accent - energy */
--accent-pink:    #f472b6       /* Highlight accent */
```

### Typography
- **Display**: "Space Grotesk" (bold, geometric, slightly playful)
- **Body**: "Inter" (readable, modern)
- **Accent**: "JetBrains Mono" (for labels, technical elements)
- Fallbacks: system-ui, sans-serif

### Spatial System
- Base unit: 8px
- Node padding: 24px
- Section spacing: 80px (desktop), 48px (mobile)
- Max content width: 1200px

### Motion Philosophy
- **Nodes**: Subtle float animation (translateY ±4px, 4s ease-in-out infinite)
- **Connections**: Animated dashed lines flowing along paths
- **Hover**: Nodes scale 1.02 with glow intensification
- **Page transitions**: Fade + slight upward drift (300ms)
- **Scroll**: Parallax on hero elements

### Visual Assets
- Custom SVG illustrations for: 囧恩 (wobbly circle character), 迷宫头 (maze pattern head), 无脸怪兽 (abstract blob)
- Decorative: Floating particles, subtle grid overlay, gradient meshes
- Icons: Lucide React

---

## 3. Layout & Structure

### Navigation
- Fixed header with logo (left) and nav links (right)
- Nav items: 首页 | 关于 | 成员 | 体验 | 画廊 | 联系
- Mobile: Hamburger menu with slide-out drawer

### Page Structure

#### Home (Hero)
- Full-viewport immersive hero
- Central animated React Flow canvas showing floating 囧恩 node
- Tagline: "不完美治愈力" / "The Healing Power of Imperfection"
- Subtle particle background
- Scroll indicator

#### About
- Split layout: Philosophy text (left), animated node diagram (right)
- Three core concepts as connected nodes:
  - 囧恩的神经漫游记 (IP)
  - 谱造司 (Label)
  - 通感漫游 (Experience)
- Quote block with brand philosophy

#### Members
- Two large profile cards as nodes
- Mr.V (Sound) — Orange accent
- VJ Mian (Visual) — Purple accent
- Each card shows role, description, links
- Animated connection line between them

#### Experience (React Flow Core)
- Full-page React Flow canvas
- Draggable, zoomable node graph
- Nodes represent:
  - **囧恩** (Dancing Jon) — Central hero node
  - **迷宫头** (Maze Head) — Links to philosophy content
  - **无脸怪兽** (Faceless Monster) — Links to emotional content
  - **Techno** — Sound style nodes
  - **Ambient** — Sound style nodes
  - **Downtempo** — Sound style nodes
- Edges show relationships and connections
- Click node → expand details panel

#### Gallery
- Masonry grid layout
- Placeholder images with hover effects
- Category filter tabs

#### Contact
- Clean contact form
- Booking inquiry focus
- Social links

### Responsive Strategy
- Desktop: Full React Flow experience
- Tablet: Simplified flow, larger touch targets
- Mobile: Static node cards instead of interactive flow (performance)

---

## 4. Features & Interactions

### React Flow Experience Page
- **Pan**: Click + drag to pan canvas
- **Zoom**: Scroll to zoom, pinch on mobile
- **Node drag**: Click and drag individual nodes
- **Node click**: Opens detail panel with full description
- **Edge hover**: Shows relationship tooltip
- **Keyboard**: Arrow keys to navigate nodes, Enter to select

### Navigation
- Smooth scroll between sections
- Active section highlighted in nav
- Mobile menu with smooth slide animation

### Contact Form
- Fields: Name, Email, Inquiry Type (dropdown), Message
- Validation: Required fields, email format
- Submit: Loading state → success message
- Error handling: Inline error messages

### Gallery
- Hover: Scale up + overlay with title
- Click: Could link to lightbox (future enhancement)

---

## 5. Component Inventory

### NodeCard
- States: default, hover (glow + scale), selected (bright border), dragging
- Variants: large (hero), medium (member), small (concept)
- Content: Icon/image, title, subtitle, optional description

### FlowEdge
- Animated dashed stroke
- Color varies by connection type
- Hover: Thicker stroke, tooltip appears

### NavigationHeader
- States: transparent (top), solid (scrolled)
- Mobile: Hamburger icon → slide-out menu

### MemberCard
- Large node-style card
- Photo, name, role, description
- Social links
- Accent color border

### ContactForm
- Input fields with floating labels
- Submit button with loading state
- Success/error feedback

### SectionTitle
- Chinese + English dual language
- Decorative line element
- Subtle entrance animation

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Flow**: React Flow
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

### Deployment
- GitHub Pages via static build
- Output: `dist/` folder

### Performance
- Lazy load React Flow (Experience page)
- Image optimization
- Code splitting by route

### Project Structure
```
cuigua-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── flow/
│   │   │   ├── ExperienceFlow.tsx
│   │   │   ├── CustomNode.tsx
│   │   │   └── nodes/
│   │   │       ├── JonNode.tsx
│   │   │       ├── MazeHeadNode.tsx
│   │   │       └── FacelessMonsterNode.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Members.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Gallery.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── NodeCard.tsx
│   │       ├── MemberCard.tsx
│   │       └── ContactForm.tsx
│   ├── config/
│   │   └── site.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

### Key Implementation Notes
- React Flow custom nodes for unique visual treatment
- useCallback for node/edge handlers
- Background component for animated grid/particles
- MiniMap for navigation overview
- Controls for zoom/pan reset

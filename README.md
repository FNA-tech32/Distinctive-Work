# Distinctive Works ✌️

Welcome to **Distinctive Works** — a cutting-edge, interactive 3D web experience and digital creative showcase crafted with Next.js, React Three Fiber, Three.js, and GSAP.

Distinctive Works bridges the gap between digital design and modern frontend engineering, presenting bespoke 3D worlds, dynamic camera transitions, and immersive interactive narratives right inside the browser.

Explore the live experience at [https://distinctiveworks.com/](https://distinctiveworks.com/)

---

## ✨ Features

- **Immersive 3D Canvas**: Real-time WebGL rendering powered by `@react-three/fiber` and `@react-three/drei`.
- **Dynamic 3D Typography**: Animated typography rendered in 3D world space with custom fonts (`Soria` and `Vercetti`).
- **Interactive 3D Hero Experience**: Rotating multi-faceted 3D window model synchronized with scroll transitions and spatial lighting.
- **Interactive Work & Milestones Timeline**: 3D spline-based Catmull-Rom curve timeline with animated dash paths and interactive waypoint portals.
- **Side Projects 3D Carousel**: Spatial 3D project cards with depth perception, camera navigation, touch pan gestures for mobile, and live project portals.
- **Dynamic Theme Switcher**: Real-time scene palette and lighting transitions via Zustand store state.
- **Optimized Performance**: Adaptive geometry, shadow mapping optimizations, asset preloading, and performance monitoring.
- **Fully Responsive**: Tailored layout and camera math across desktop, tablet, and mobile touch devices.
- **SEO & Social Sharing Ready**: Complete OpenGraph, Twitter cards, metadata base, and structured robot/sitemap configurations.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js](https://nextjs.org/) (v16)** | React framework with App Router, server-rendered metadata, and static export support |
| **[React](https://react.dev/) (v19)** | Declarative UI component architecture |
| **[Three.js](https://threejs.org/)** | WebGL 3D graphics rendering engine |
| **[@react-three/fiber](https://r3f.docs.pmnd.rs/)** | React renderer for Three.js scene graphs |
| **[@react-three/drei](https://github.com/pmndrs/drei)** | Specialized Three.js helpers, cameras, loaders, and shaders |
| **[GSAP](https://gsap.com/)** | High-performance tweening and scroll-driven timeline animations |
| **[Zustand](https://zustand-demo.pmnd.rs/)** | Lightweight, atomic global state management (portals, themes, scroll) |
| **[Tailwind CSS](https://tailwindcss.com/) (v4)** | Modern utility-first styling and post-processing |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety and maintainable developer tooling |

---

## 📸 Preview

<div align="center">
  <img width="1242" alt="Distinctive Works 3D Hero Preview" src="https://github.com/user-attachments/assets/877b0685-8d86-4f8b-b123-f3cc17d46fc7" />
  <p><em>Distinctive Works - 3D Interactive Hero Experience</em></p>
</div>

<div align="center">
  <img width="1241" alt="Distinctive Works 3D Scene" src="https://github.com/user-attachments/assets/09a92647-1781-4124-ba3f-1d6fb66f6974" />
  <p><em>Spatial 3D Model Rendering with Dynamic Lighting</em></p>
</div>

<div align="center">
  <img width="1241" alt="Distinctive Works Timeline & Carousel" src="https://github.com/user-attachments/assets/a15017f4-f1f2-459e-b895-b3c14703635b" />
  <p><em>Curved 3D Timeline & Interactive Projects Carousel</em></p>
</div>

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **npm** (or **pnpm** / **yarn**)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/distinctiveworks/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Open [http://localhost:3000](http://localhost:3000) to experience the interactive 3D site locally.

---

## 📦 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the Next.js development server with Turbopack / Fast Refresh.
- `npm run build` — Compiles the production build with static generation and optimized assets.
- `npm run start` — Serves the production build locally.
- `npm run lint` — Runs ESLint across all TypeScript and React files to ensure code quality.

---

## 📁 Project Structure

```text
├── app/
│   ├── components/
│   │   ├── common/              # Global UI elements, loaders, and badges
│   │   │   ├── AwwardsBadge.tsx
│   │   │   ├── CanvasLoader.tsx
│   │   │   ├── ProgressLoader.tsx
│   │   │   ├── ScrollWrapper.tsx
│   │   │   └── ThemeSwitcher.tsx
│   │   ├── experience/          # 3D interactive sections & spatial portals
│   │   │   ├── projects/        # 3D project carousel and touch pan controls
│   │   │   ├── work/            # 3D spline timeline & waypoint markers
│   │   │   └── GridTile.tsx     # Spatial portal container tiles
│   │   ├── footer/              # 3D spatial interactive footer navigation
│   │   ├── hero/                # 3D hero title, stars, and rotating window
│   │   └── models/              # Optimized GLTF/GLB models & environment elements
│   ├── constants/               # Studio milestone data, projects, and footer links
│   ├── stores/                  # Zustand stores for portals, scroll, and theme
│   ├── types/                   # TypeScript interfaces and type definitions
│   ├── layout.tsx               # Root layout, metadata, and font declarations
│   ├── page.tsx                 # Main single-page canvas scene tree
│   ├── robots.ts                # Dynamic robots.txt generation
│   └── sitemap.ts               # Dynamic sitemap.xml generation
├── public/                      # Static assets, 3D GLTF models, and icons
├── package.json                 # Project dependencies and script definitions
└── README.md                    # Project documentation
```

---

## 📬 Contact & Inquiries

Get in touch with **Distinctive Works** for collaborations, digital craftsmanship inquiries, or creative engineering partnerships:

- **Primary Contact**: [contact@distinctiveworks.com](mailto:contact@distinctiveworks.com)
- **Alternative Contact**: [hello@distinctiveworks.com](mailto:hello@distinctiveworks.com)
- **LinkedIn**: [Distinctive Works on LinkedIn](https://www.linkedin.com/company/distinctive-works/)
- **GitHub**: [github.com/distinctiveworks](https://github.com/distinctiveworks)
- **Instagram**: [@distinctiveworks](https://www.instagram.com/distinctiveworks/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.

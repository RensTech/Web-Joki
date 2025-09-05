# ENCRYPTED JOCKEY

A modern, professional freelance service website offering UI/UX Design, Web Development, Penetration Testing, and IT Consulting services. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

![ENCRYPTED JOCKEY Website](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8)

## 🚀 Features

- **Modern Dark Theme**: Sleek dark design with neon green accents and professional aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth transitions, hover effects, and elegant micro-interactions
- **Service Showcase**: Detailed service modals with pricing, timelines, and deliverables
- **Team Portfolio**: Individual team member profiles with portfolio links
- **Contact Integration**: Direct email and WhatsApp integration for seamless communication
- **Payment Options**: QR code and manual payment methods
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [DM Sans](https://fonts.google.com/specimen/DM+Sans)

## 🏗 Project Structure

\`\`\`
encrypted-jockey/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main page component
├── components/
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── qr-code-payment.png  # Payment QR code
│   └── *.jpg                # Team member images
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/encrypted-jockey.git
   cd encrypted-jockey
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (4-column service grid)

## 🎨 Design System

### Colors
- **Background**: Dark theme with `oklch(0.145 0 0)`
- **Foreground**: Light text with `oklch(0.985 0 0)`
- **Accent**: Bright green `oklch(0.75 0.15 150)`
- **Muted**: Secondary text with proper contrast ratios

### Typography
- **Font Family**: DM Sans (400, 500, 600, 700 weights)
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with 1.6 line-height

### Animations
- Smooth transitions with `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover effects with `translateY` and shadow changes
- Carousel with `translateX` transitions

## 📞 Contact Information

- **WhatsApp**: +62 877-9793-7519
- **Email**: rnbdmn311@gmail.com
- **Availability**: 24/7 support

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting


### Modifying Services
Update the `services` array in `app/page.tsx` to add/modify service offerings.

### Changing Colors
Modify the CSS custom properties in `app/globals.css` under the `.dark` selector.

---

**ENCRYPTED JOCKEY Team**

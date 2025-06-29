# EL-BETHEL GLOBAL CITY Website

> "The latter Glory shall be greater than the former" - Haggai 2:9

Official website for EL-BETHEL GLOBAL CITY church, built with modern web technologies to provide an engaging spiritual experience for visitors and members.

## 🌟 Features

- **Modern Design**: Clean, responsive design with spiritual theming
- **Mobile-First**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: WCAG compliant design principles

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: SCSS with CSS Modules
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.scss       # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About Us page
│   ├── beliefs/           # What We Believe page
│   ├── membership/        # Membership page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   └── HeroSection.tsx    # Hero section component
public/
├── logo.jpg              # Church logo
└── ...                   # Other static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ThisThato/el-bethel-global-city-website.git
   cd el-bethel-global-city-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Available Pages

- **Home** (`/`) - Welcome page with hero section and introduction
- **About Us** (`/about`) - Church purpose, vision, mission, and leadership
- **What We Believe** (`/beliefs`) - Statement of faith and core beliefs
- **Membership** (`/membership`) - Information about joining the church
- **Contact** (`/contact`) - Contact information and form

## 🎨 Design System

### Color Palette

- **Primary**: Deep Blue (`#1a365d`)
- **Secondary**: Medium Blue (`#2d5a87`)
- **Accent**: Light Blue-Gray (`#e2e8f0`)
- **Gold**: Spiritual Accent (`#d69e2e`)

### Typography

- **Primary Font**: Georgia (Serif) - For headings
- **Secondary Font**: Arial (Sans-serif) - For body text

## 🚀 Deployment

The website is automatically deployed to Vercel through GitHub Actions when changes are pushed to the main branch.

### Environment Variables

For deployment, you'll need to set up these secrets in your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Build and test
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is created for EL-BETHEL GLOBAL CITY. All rights reserved.

## 📞 Support

For technical support or questions about this website, please contact the development team.

---

**EL-BETHEL GLOBAL CITY** - _Where the glory of God is manifested and His people gather for worship, fellowship, and spiritual growth._

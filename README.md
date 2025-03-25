# Ellington Insurance Website

A modern, sleek, and responsive website for an innovative, technology-driven life insurance brand. The site is designed to showcase the brand's unique selling points and prepare for future API integrations with insurance providers.

## Features

- Responsive design that works on all devices
- Modern UI with animations and transitions
- SEO-friendly structure
- Clean, component-based architecture

## Pages

1. **Home/Landing Page**: Features hero section, benefits, how it works, testimonials, FAQ, and call-to-action.
2. **About Us**: Company mission, team introduction, and core values.
3. **Plans & Pricing**: Detailed breakdown of insurance plans with comparison table.
4. **Contact & Support**: Contact form and customer support information.

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ellington-insurance
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
ellington-insurance/
├── app/                   # Next.js app router pages
│   ├── about/             # About us page
│   ├── contact/           # Contact page
│   ├── plans/             # Plans & pricing page
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable UI components
│   ├── Benefits.tsx       # Benefits section
│   ├── CTASection.tsx     # Call-to-action section
│   ├── FAQ.tsx            # FAQ accordion
│   ├── Footer.tsx         # Site footer
│   ├── HeroBanner.tsx     # Hero section
│   ├── HowItWorks.tsx     # Process explanation
│   ├── Navbar.tsx         # Site navigation
│   └── Testimonials.tsx   # Customer testimonials
├── public/                # Static assets
│   └── images/            # Image files
├── styles/                # Global styles
│   └── globals.css        # Global CSS with Tailwind
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## Customization

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Content**: Modify the text content in respective page and component files
- **Images**: Replace placeholder images in the `public/images` folder

## Future Enhancements

- Integration with insurance provider APIs
- User authentication and account management
- Policy application and management
- Claims processing workflow
- Premium payment system

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern insurance and fintech websites
- Tailwind CSS for the utility-first styling approach
- Framer Motion for smooth animations
- Next.js team for the excellent framework 
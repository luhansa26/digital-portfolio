# Andali's Portfolio

A beautiful, responsive portfolio website built with Next.js, React, and Tailwind CSS. The site is content-driven via JSON files, with a modern responsive layout, project showcase, achievement cards, and a contact modal.

## ✨ Features

- **Responsive Design**: Mobile-first layout with polished desktop experience
- **Modern UI**: Clean design with subtle animations and consistent spacing
- **JSON Content Driven**: All content is stored in `data/*.json`
- **Project Showcase**: Featured and regular projects with live and repo links
- **Achievements + Certificates**: Visual cards for achievements and certifications
- **Contact Modal**: Email contact modal with a custom form
- **Performance Friendly**: Built with Next.js App Router and optimized static assets

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd digital-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Customization

### Personal Information

Edit `data/portfolio.json` to customize your name, title, bio, and contact details.

### Social Links

Update your social media and contact links in `data/portfolio.json`.

### Skills

Edit `data/skills.json` to customize the skill groups displayed on the page.

### Projects

Update `data/projects.json` to add or change project entries. Each project supports `title`, `description`, `technologies`, `live`, and `repo` links.

### Certificates

Edit `data/certificates.json` to manage certifications and badge information.

## 🎯 Sections

### Hero Section

- Main introduction with personal branding
- Navigation links and action CTA

### About Section

- Personal summary and profile image
- Optional quotes and content driven by JSON

### Skills Section

- Skill categories and summary cards
- Responsive layout for desktop and mobile

### Projects Section

- Featured projects and full project list
- Live preview and repository links
- Expand/collapse behavior for all projects

### Achievements Section

- Achievement cards with icons and brief descriptions
- Expand/collapse behavior for extra items

### Certificates Section

- Certifications display with titles and issuers
- Supports certificate images and links

### Contact Section

- Contact modal form
- Social links and email call-to-action

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:

- Mobile-optimized header and navigation
- Touch-friendly buttons and links
- Responsive grids for cards and sections
- Comfortable spacing on smaller screens

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Run Production

```bash
npm run start
```

### Deploy to Vercel

1. Connect your GitHub repository to Vercel.
2. Set build command: `npm run build`
3. Use output directory: `.next`
4. Deploy.

## 🛠️ Technologies Used

- **Next.js 16** - App Router framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript 5** - Static typing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🙏 Acknowledgments

- Portfolio layout inspired by modern developer portfolio designs
- Built with Next.js and Tailwind CSS

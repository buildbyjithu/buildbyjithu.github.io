# GitHub Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a GitHub-themed dark design perfect for showcasing your development projects and skills.

## 🚀 Features

- **Modern GitHub-themed Design** - Clean, professional dark theme with GitHub's color palette
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Subtle animations and transitions for enhanced user experience
- **Interactive Project Filtering** - Filter projects by technology stack
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 📋 Getting Started

1. **Clone or download this project**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser to see the portfolio**

## ✨ Customization Guide

To make this portfolio your own, replace the placeholder content in these files:

### 1. Basic Information (`client/index.html`)
```html
<title>Your Name - Developer Portfolio</title>
<meta name="description" content="Your description here" />
```

### 2. Hero Section (`client/src/components/Hero.tsx`)
- Replace `[Your Name]` with your actual name
- Replace `[Your Role/Title]` with your professional title
- Replace the description paragraph with your personal introduction
- Update all social media URLs:
  - `[Your GitHub URL]`
  - `[Your LinkedIn URL]`
  - `[Your Twitter URL]`
  - `mailto:[Your Email]`

### 3. About Section (`client/src/components/About.tsx`)
- Update the professional summary
- Replace both description paragraphs with your background story
- Update experience numbers (`[X+]` Years Experience, `[X+]` Projects Completed)

### 4. Projects Section (`client/src/components/Projects.tsx`)
The projects array contains sample projects. Replace with your actual projects:
```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description",
  image: "project-image-url",
  technologies: ["React", "Node.js", "etc"],
  categories: ["react", "fullstack"],
  githubUrl: "your-github-repo-url",
  liveUrl: "your-live-demo-url",
}
```

### 5. Skills Section (`client/src/components/Skills.tsx`)
Update the `skillCategories` array with your actual skills and technologies.

### 6. Contact Information (`client/src/components/Contact.tsx`)
Replace all contact placeholders:
- `[your.email@example.com]`
- `[Your LinkedIn URL]`
- `[Your GitHub URL]`
- `[Your Twitter URL]`

### 7. Footer (`client/src/components/Footer.tsx`)
- Replace `[Your Name]` with your name
- Replace `[Your Professional Title & Description]`
- Update social media URLs

## 🎨 Customizing Colors

The website uses a GitHub-inspired color scheme defined in `client/src/index.css`. You can customize colors by modifying the CSS variables in the `:root` section.

## 📱 Adding Your Profile Photo

Replace the placeholder image in the Hero section (`client/src/components/Hero.tsx`) with your professional photo. You can:
1. Add your photo to a `client/src/assets` folder
2. Import it: `import profilePhoto from "@assets/your-photo.jpg"`
3. Replace the Unsplash URL with your imported photo

## 🚀 Deployment

This portfolio is ready to deploy on platforms like:
- **Replit Deployments** (recommended)
- Vercel
- Netlify
- GitHub Pages

The build command is: `npm run build`

## 🛠 Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS, Shadcn/ui components
- **Icons:** Lucide React
- **Animations:** Custom CSS animations
- **Build Tool:** Vite
- **Backend:** Express.js (for contact form)

## 📝 License

Feel free to use this template for your personal portfolio. Attribution appreciated but not required.

---

**Need help customizing?** The code is well-commented and organized. Each component handles a specific section of the portfolio, making it easy to modify individual parts.
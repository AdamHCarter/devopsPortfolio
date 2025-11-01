<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization -->

# DevOps Portfolio Website - Copilot Instructions

## Project Overview

This is a modern, responsive DevOps portfolio website showcasing Adam Carter's skills and projects. The site uses Bootstrap 5 for styling and is designed to be professional yet approachable for HR professionals and technical recruiters.

## Code Style Guidelines

- Use semantic HTML5 elements
- Follow Bootstrap 5 conventions and utility classes
- Maintain consistent CSS custom properties defined in styles.css
- Use Font Awesome icons for visual elements
- Keep JavaScript vanilla (no frameworks) for simplicity
- Ensure all content is responsive and mobile-friendly

## Content Guidelines

- Keep technical language accessible to non-technical audiences
- Focus on business value and outcomes rather than just technical details
- Use friendly, professional tone throughout
- Include specific metrics and achievements where possible
- Ensure all links and navigation work correctly

## File Structure (current)

- `public/` - Static website files (served and deployed)
  - `public/index.html` - Main landing page with navigation, hero, about, portfolio, and contact sections
  - `public/project1.html`, `public/project2.html`, `public/project3.html` - Individual project detail pages
  - `public/styles.css` - Custom CSS with Bootstrap overrides and additional styling
  - `public/script.js` - Interactive functionality and smooth scrolling
- `.github/workflows/deploy.yml` - GitHub Actions workflow that uploads `./public` and deploys to GitHub Pages
- `.vscode/tasks.json` - Local VS Code tasks (e.g., quick 'Open Portfolio Website')

Note: The site is intended to be served from the `public/` folder. The GitHub Actions workflow currently uploads that folder and deploys it to GitHub Pages.

## Image Guidelines

- Use Unsplash images for professional appearance
- Ensure images are optimized for web (appropriate dimensions and quality)
- Include proper alt text for accessibility
- Use images that relate to DevOps, technology, and cloud computing

## Responsive Design

- Mobile-first approach with Bootstrap's responsive grid
- Navbar collapses to hamburger menu on smaller screens
- Ensure all content is readable and functional on all device sizes
- Test touch interactions for mobile users

## Performance Considerations

- Minimize external dependencies
- Use CDN links for Bootstrap and Font Awesome
- Optimize images for fast loading
- Keep JavaScript lightweight and efficient

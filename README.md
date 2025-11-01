# DevOps Portfolio Website

A modern, responsive portfolio website showcasing DevOps engineering skills and projects. Built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Modern UI**: Clean, professional design using Bootstrap 5
- **Interactive Navigation**: Smooth scrolling and active section highlighting
- **Project Showcases**: Detailed project pages highlighting business impact and outcomes in approachable language
- **Professional Contact**: Direct email integration for easy communication
- **Performance Optimized**: Fast loading with optimized images and minimal dependencies

## 📁 Project Structure

```
devopsPortfolio/
├── public/                 # Static website files (served and deployed)
│   ├── index.html          # Main landing page
│   ├── project1.html       # CI/CD Pipeline project details
│   ├── project2.html       # Cloud Infrastructure project details
│   ├── project3.html       # Monitoring & Analytics project details
│   ├── styles.css          # Custom CSS styles
│   └── script.js           # Interactive JavaScript functionality
├── .github/
│   ├── workflows/
│   │   └── deploy.yml      # GitHub Actions deployment workflow
│   └── copilot-instructions.md
├── .vscode/
│   └── tasks.json          # VS Code tasks configuration
└── README.md               # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Custom styles that supplement Bootstrap 5's grid and layout system
- **Bootstrap 5**: Responsive framework for consistent UI components
- **JavaScript (Vanilla)**: Interactive functionality without dependencies
- **Font Awesome**: Professional icons for visual enhancement
- **Unsplash**: High-quality stock images for professional appearance

## 📋 Project Creation Prompt

#new I need a new simple DevOps Engineering Portfolio website, using index.html, styles.css, and script.js files. I would like it to use Bootstrap for styling, to give it a clean, modern look. I would like to have a top navbar that shrinks to the hamburger menu when the screen is too small. I would like the site to be responsive. On Index, I would like a you to fill in information for someone who is looking to showcase their knowledge in DevOps to potential employers. I would like to keep the tone friendly and sprinkle tech terms lightly to impress someone in a position like HR that might not know everything. I'm thinking maybe an 'about me' section, a portfolio section with links for each project with more info, a contact me section that gives a warm invite to contact me by email with a link. I would like to create a page for each of the portfolio project examples, giving a generic DevOps example description listing tools and why they were used for each example. Name them project1.html, project2.html, project3.html. Use the existing styles.css for these as well, and make sure they also have the header and footer, so the user can navigate back. Please include stock or generated images instead of blank image templates. The sections of the index page should be included in the navbar, to jump down to that section. I would like to keep this local for now, so no repository yet. Please only add comments to the code for potentially confusing code usage. My name is Adam Carter and my email is adamcarter22@hotmail.com.

## 🎯 Projects Showcased

### 1. Automated CI/CD Pipeline

- **Technologies**: Jenkins (automation server for building and deploying code), Docker (tool for packaging applications into containers), Git (version control system for tracking code changes), AWS (cloud platform for hosting and scaling applications)
- **Focus**: Streamlining development workflows and automated deployment
- **Impact**: Reduced deployment time from 2 hours to 15 minutes

### 2. Cloud Infrastructure Setup

- **Technologies**: AWS (cloud platform for hosting and scaling applications), Terraform (tool for automating infrastructure setup), EC2 (virtual servers in the cloud), VPC (Virtual Private Cloud for secure networking)
- **Focus**: Scalable and secure infrastructure using Infrastructure as Code
- **Impact**: 99.9% uptime with 40% cost reduction through optimization

### 3. Monitoring & Analytics Platform

- **Technologies**: Prometheus (system for collecting and storing monitoring data), Grafana (tool for visualizing metrics and dashboards), Kubernetes (platform for managing containerized applications), AlertManager (system for sending alerts based on monitoring data)
- **Focus**: Comprehensive observability and real-time system insights
- **Impact**: Reduced MTTR from 4 hours to 30 minutes

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: Full-width layouts with sidebar content
- **Tablet**: Responsive grid system adapts to medium screens
- **Mobile**: Hamburger navigation and stacked content layout

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Navigate** through the portfolio using the top navigation menu

### Local Development

For local development with live reload, you can use any static file server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Hosting with GitHub Pages (this repo)

This repository is set up to deploy the site to GitHub Pages using GitHub Actions. The workflow in `.github/workflows/deploy.yml` uploads the `./public` folder as an artifact and publishes it to the repository's Pages site. A few quick notes:

- The site files live under the `public/` folder (e.g. `public/index.html`, `public/styles.css`, `public/script.js`).
- Pushing to the `main` branch will trigger the `deploy.yml` workflow which publishes the `public/` folder to GitHub Pages.
- If you want to change the published folder or workflow behavior, edit `.github/workflows/deploy.yml` in this repo.
- To use a custom domain, configure the Pages settings in the repository (Settings → Pages) and add a `CNAME` file to `public/` if needed.

This setup makes it easy to host the portfolio from this repository with automated deployments whenever you push updates. You can also trigger the deployment manually (useful for redeploying after changing repository settings or debugging) by going to the **Actions** tab in your GitHub repository, selecting the **Deploy to GitHub Pages** workflow, and clicking the **Run workflow** button.

#### Configuration Notes

- **Branch Name Consistency**: Ensure that the branch specified in the workflow (`master` or `main`) matches your repository's default branch.
- **Excluding Sensitive Files**: Be cautious when uploading the entire repository. Exclude any sensitive files or directories using `.gitignore` or by specifying paths in the workflow.
- **Manual Triggers**: The `workflow_dispatch` event allows you to run the workflow manually from the Actions tab.
- **Permissions**: The `permissions` section is essential for granting the necessary rights to the workflow for deploying to GitHub Pages.
- **Concurrency**: The `concurrency` setting ensures that only one deployment occurs at a time, preventing conflicts.

#### Troubleshooting

If your workflow fails, check the logs in the "Actions" tab to identify and fix issues. Common problems include:

- Incorrect paths in the workflow configuration
- Missing permissions for GitHub Pages deployment
- Syntax errors in the YAML file
- Branch name mismatches

### Previewing the Pages site URL after deployment

After the GitHub Actions workflow completes, the published Pages URL can be found in a couple of places:

- Actions run summary: go to the repository's Actions tab, open the latest run for the "Deploy static content to Pages" workflow, and check the job summary or the "Deploy to GitHub Pages" step — the deployed site URL is usually shown there (the workflow sets the deployment output `page_url`).
- Repository Pages settings: open Settings → Pages in the repository. Once the deployment finishes, the "Site" section will show the published URL.

Tip: the workflow in `.github/workflows/deploy.yml` exposes the deployed page URL as `${{ steps.deployment.outputs.page_url }}` which GitHub surfaces in the Actions run and environment/deployment details.

## 📧 Contact Information

- **Name**: Adam Carter
- **Email**: adamcarter22@hotmail.com
- **Portfolio**: This website showcases DevOps engineering capabilities

## 🔧 Customization

To customize this portfolio for your own use:

1. **Update personal information** in `index.html`
2. **Replace project content** in project pages
3. **Modify styling** in `styles.css`
4. **Update images** with your own project screenshots
5. **Adjust contact information** throughout the site

## 🎨 Design Features

- **Custom CSS Variables**: Consistent color scheme throughout
- **Smooth Animations**: Hover effects and scroll-triggered animations
- **Professional Typography**: Clean, readable fonts optimized for web
- **Accessibility**: Semantic HTML and proper ARIA labels  
  _Tip: For guidance on ARIA usage, see [WAI-ARIA best practices](https://www.w3.org/WAI/ARIA/apg/)_.
- **SEO Optimized**: Meta tags and structured content

## 📈 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Fast Loading**: Minimal external dependencies and optimized images
- **Mobile Optimized**: Touch-friendly interface with appropriate sizing

## 🌟 Key Highlights

- **Professional Appearance**: Designed to impress both technical and non-technical audiences
- **Easy Navigation**: Intuitive user experience with clear calls-to-action
- **Comprehensive Showcase**: Detailed project descriptions with business impact
- **Contact Integration**: Simple email contact with professional invitation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the DevOps community

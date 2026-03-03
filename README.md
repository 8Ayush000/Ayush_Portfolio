# Ayush Tyagi | Portfolio

A modern, responsive personal portfolio website built to showcase my skills, projects, and professional experience. It features a developer-centric dark aesthetic inspired by terminal interfaces, smooth scrolling, and dynamic data loading.

## 🚀 Technologies Used

- **HTML5**: Semantic and accessible markup.
- **CSS3**: Custom styling with CSS variables, Flexbox & Grid, brutalist lines, and a clean, minimalist monochrome color palette with a vibrant purple accent. Features a functional Dark/Light theme toggle.
- **JavaScript (ES6+)**: Dynamic data fetching via `fetch` API, scroll animations, theme toggling, and DOM manipulation.

## 🌟 Features

- **Modern Developer UI**: Clean, terminal-inspired typography exclusively using the Google Font 'Fira Code' for a consistent, technical aesthetic.
- **Clean Theme Toggle**: A sleek Light/Dark mode toggle allowing users to switch between a clean dark theme and a bright, crisp light theme.
- **Dynamic Content**: Projects and skills are loaded dynamically from `data.json`, making it incredibly easy to update content without touching the HTML.
- **Subtle Animations**: Fade-in intersecting reveals and clean hover states on sharp-cornered cards and buttons.
- **Fully Responsive**: Seamless experience on desktop, tablet, and mobile.

## 📂 Project Structure

```text
├── index.html       # Main HTML file with content semantics
├── nav.css          # CSS styles (layout, colors, animations, media queries)
├── script.js        # JavaScript logic (mobile menu, scroll reveals)
```

## 🛠️ Usage & Setup

To view the portfolio locally, simply open `index.html` in any modern web browser or use a local development server like Live Server (VSCode extension).

```bash
# Example with Node.js http-server
npx http-server .
```

### Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) for serverless email forwarding. To receive emails:

1. Go to Web3Forms and get your free access key.
2. Open `index.html` and locate the `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">` field.
3. Replace `"YOUR_ACCESS_KEY_HERE"` with your actual API key.

### Content Editing

All skills and project data are dynamically loaded from `data.json`. To update your portfolio, simply edit the JSON file—the UI automatically populates the new data.

## 💡 Development Insights

### Stack Choice

HTML, CSS, and Vanilla JS provide maximum performance and control without heavy framework overhead. The styling uses a custom design system built entirely from scratch with CSS variables.

### Data Flow

Content sections (Skills and Projects) fetch their data dynamically from `data.json` at runtime. JS handles this data mapping and triggers CSS animations via `IntersectionObserver`.

### Challenges Faced

Achieving an aesthetic that straddles the line between a raw "terminal" look and a premium, modern web portfolio, requiring careful tuning of monospace typography (`Fira Code`), sharp geometric borders, and high-contrast accent colors.

### Future Improvements

- **Project Filtering**: Add functional tags to filter the projects grid dynamically.
- **Blog Section**: Integrate a simple markdown-based blog parser to showcase writing within the same aesthetic.

## 📄 License & Credits

Designed & Built by **Ayush Tyagi**. All rights reserved.

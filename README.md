# Ayush Tyagi | Portfolio

A modern, responsive personal portfolio website built to showcase my skills, projects, and professional experience. It features a developer-centric dark aesthetic inspired by terminal interfaces, smooth scrolling, and dynamic data loading.

## 📸 Screenshots

### Desktop View

![Modern Dark Portfolio View](./screenshot.png)

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
├── screenshot.png   # Desktop screenshot preview
```

## 🛠️ Usage

To view the portfolio, simply open `index.html` in any modern web browser or use a local development server like Live Server (VSCode extension).

```bash
# Example with Node.js http-server
npx http-server .
```

## � Development Insights

### Stack Choice

HTML, CSS, and Vanilla JS provide maximum performance and control without heavy framework overhead. The styling uses a custom design system built entirely from scratch with CSS variables.

### Data Flow

Content sections (Skills and Projects) fetch their data dynamically from `data.json` at runtime. JS handles this data mapping and triggers CSS animations via `IntersectionObserver`.

### Challenges Faced

Achieving an aesthetic that straddles the line between a raw "terminal" look and a premium, modern web portfolio, requiring careful tuning of monospace typography (`Fira Code`), sharp geometric borders, and high-contrast accent colors.

### Future Improvements

- **Contact Form**: Integrate a serverless form provider (e.g., Web3Forms) for live email submission.
- **Project Filtering**: Add tags to filter the projects grid dynamically.

## �📄 License & Credits

Designed & Built by **Ayush Tyagi**. All rights reserved.

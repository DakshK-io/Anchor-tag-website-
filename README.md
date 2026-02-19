# ⚓ Simple Anchor Tag Demonstration

A lightweight, single-page website built to demonstrate the functionality of HTML anchor tags for internal page navigation. This project goes a step further by enhancing standard anchor links with a custom vanilla JavaScript smooth-scrolling effect and a fixed navigation bar.

**🔗 [Click Here to View the Live Demo](https://dakshk-io.github.io/Anchor-tag-website-/)**

---

## ✨ Features

* **Internal Anchor Navigation:** Uses simple `<a href="#id">` tags to navigate between different sections of the same page.
* **Custom Smooth Scrolling:** Overrides default browser jump behavior with a custom `scroll.js` script that handles both mouse-wheel scrolling and navbar clicks for a fluid user experience.
* **Sticky Navigation Bar:** A fixed top header that stays visible while scrolling, allowing users to jump to `Home`, `About Us`, `Gallery`, or `Services` at any time.
* **Responsive Layouts:** Utilizes CSS Flexbox for the image gallery and CSS Grid for the service pricing cards to ensure content looks organized across devices.
* **Clean UI:** A minimalist, fast-loading design with a focus on core web fundamentals.

---

## 📂 Project Structure

* **`index.html`**: The main HTML file containing the structure, anchor targets (`id="home"`, `id="about"`, etc.), and content.
* **`css/style.css`**: Contains the styling rules, including the fixed navbar setup, media queries for mobile responsiveness, and layout grids.
* **`js/scroll.js`**: The vanilla JavaScript engine that powers the smooth scroll behavior by listening to `wheel` and `click` events and using the `scrollIntoView` API.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Scripting:** Vanilla JavaScript (No external libraries or frameworks like jQuery)

# hospiTABLE restaurant 

Hospitable is a fictional restaurant website designed to bring the dining experience to life online. Built as a mockup for friends dreaming of opening their own restaurant, the site showcases delicious food, a welcoming atmosphere, and a commitment to sustainability. Even though this is a static front-end website, Hospitable aims to provide an engaging experience for visitors across devices. The goal is to bring visitors into the restaurant’s world, letting them get a feel for the atmosphere and get excited to visit in person. They can also explore the daily-changing menu, catering options, and special events like live music nights.
[View live project here](https://fannyhenriques.github.io/milestone-project-1/)  


<p align="center">
<img src="/assets/images/responsive-design.png" alt="responsive design" width="900"/>
</p>




---

## Table of Contents
1. [User Experience](#user-experience)
   - [User Stories](#user-stories)
     - [Visitor Goals](#visitor-goals)
     - [Business Goals](#business-goals)
2. [Design](#design)
   - [Wireframes](#wireframes)
   - [Layout and Styling](#layout-and-styling)
   - [Styling Process](#styling-process)
   - [Breakpoints Overview](#breakpoints-overview)
   - [Colour Scheme](#colour-scheme)
   - [Imagery](#imagery)
   - [Typography](#typography)
   - [Icons](#icons)
3. [Features](#features)
   - [Page Elements](#page-elements)
     - [All Pages](#all-pages)
     - [Homepage](#homepage)
     - [Menu Page](#menu-page)
     - [About Page](#about-page)
     - [Contact Page](#contact-page)
     - [Events Page](#events-page)
     - [Reservations / Booking Form](#reservation--booking---form-page)
4. [Technologies Used](#technologies-used)
   - [Languages](#languages)
   - [Frameworks](#frameworks)
   - [Libraries](#libraries)
   - [Tools & Platforms](#tools--platforms)
5. [Development & Deployment](#development--deployment)
   - [Git Commits](#git-commits)
   - [Publishing](#publishing)
6. [Reflection & Future Improvements](#reflection--future-improvements)
   - [Responsive Design](#responsive-design)
   - [Overall Layout](#overall-layout)
   - [Submit Form](#submit-form)
7. [Testing](#testing)
   - [Validation](#validation)
   - [Manual Testing](#manual-testing)
   - [Lighthouse Testing](#lighthouse-testing)
   - [Known Bugs](#known-bugs)
8. [Credits](#credits)
   - [Code](#code)
   - [Content](#content)
   - [Media](#media)


---

# User Experience (UX)

---

## User Stories


**Key information for the site:**
- The restaurant’s philosophy and values
- The current menu
- How to book a table
- How to contact the restaurant and view its location
- Information about events and additional services

#### Visitor Goals
- As a first-time visitor, I want to:
1.  Be intrigued by the restaurant and encouraged to visit
2.  See images that communicate the atmosphere of the restaurant and its food
2.  Easily navigate the website and find essential information such as opening hours, address, and contact details
3.  View the menu to understand what type of food is served and the price range
4.  Learn about the restaurant’s philosophy and sustainability approach

- As a returning visitor, I want to:
1. Check the daily-changing menu
2. See upcoming events and information about catering or larger bookings
3. Book a table easily

#### Business Goals
- As a business we want to: 
1. Encourage visitors to book a table
2. Clearly communicate the restaurant’s concept, values, and menu
3. Promote catering, events, and group bookings
4. Provide clear and accessible contact information

---

## Design

### Wireframes
- A basic overall layout of the homepage was created using the Lucidchart app, outlining the structure and alignment of the header, main content, and footer.

<div style="display: flex; gap: 10px; align-items: flex-start;"> 
<img src="/assets/images/lucid-print-desktop.png" alt="Desktop" width="300"/>
<img src="/assets/images/lucid-printscreen-tablet.png" alt="Tablet" width="200"/>
<img src="/assets/images/lucid-printscreen-mobile-png.png" alt="Mobile" width="100"/>
</div>

### Layout and Styling
- Wireframes were created for the homepage to establish a clear overview of the intended user experience and first impression. The layout was designed to follow core UX principles such as information hierarchy, consistency, and natural user flow.

- Alternating sections of text and imagery were used to maintain user engagement while preserving a predictable and structured layout. Once the homepage layout was defined, the remaining pages were developed progressively with the homepage as a reference, ensuring consistent styling and UX patterns throughout the site.

### Styling Process 
- During early development, the site was initially styled using custom HTML and CSS to explore layout, spacing, typography, and visual hierarchy. At a later stage, Tailwind CSS was evaluated and partially implemented to explore its utility-first approach and its potential benefits for consistency and responsiveness.

- Tailwind CSS was chosen over Bootstrap due to its utility-first approach, which allows greater control over layout, spacing, and responsive behavior. This made it easier to adapt the design to the project’s needs without relying on predefined components, while maintaining consistency across the interface.

- After discussion with the course facilitator, the decision was made to revert to custom CSS for the final implementation. This was done to align with the course learning outcomes and to clearly demonstrate a solid understanding of core HTML and CSS fundamentals, as Tailwind CSS had not been covered in the course curriculum. 

- Although Tailwind CSS is not used in the final version, evaluating the framework was a valuable learning experience and contributed to a better understanding of responsive design and layout consistency. 

### Breakpoints Overview
- Breakpoints were selected based on content and layout requirements, rather than a predefined framework. To keep the CSS clean and maintainable, the number of breakpoints was intentionally limited. The custom 575px breakpoint was introduced to handle layout transitions where the content required additional horizontal space before moving to the tablet layout, resulting in smoother scaling and improved readability.

| Breakpoint | Device Target                | Purpose                                                            |
| ---------- | ---------------------------- | ------------------------------------------------------------------ |
| **425px**  | Mobile                       | Base layout for small mobile devices                               |
| **575px**  | Small devices                | Custom breakpoint to improve layout flow between mobile and tablet |
| **768px**  | Tablet                       | Adjustments for larger screens and multi-column layouts            |
| **1024px** | Small desktop / Large tablet | Layout refinements for wider viewports                             |
| **1200px** | Desktop                      | Optimised spacing and content width for desktop displays           |
|            |                              |                                                                    |

- The project’s layout and styling were initially developed using a desktop-first approach. During the development process, it became clear that a mobile-first strategy would have been more efficient, as scaling designs up is generally more manageable than adapting complex layouts to smaller screens. 

- This insight has been taken forward as a learning outcome, and future projects will be developed using a mobile-first approach to improve responsiveness, scalability, and overall development workflow. 

- Despite this, the final layout was carefully adjusted to ensure a consistent and accessible experience across all screen sizes.

### Colour Scheme

- Inspiration for the colour scheme was gathered by analysing a variety of restaurant websites and observing how colour is commonly used to create atmosphere, hierarchy, and brand identity within the hospitality industry. Based on this research, a limited and consistent colour system was defined, consisting of:

1. one background colour
2. one primary colour
3. one secondary colour
4. and two corresponding hover states

This approach was chosen to maintain visual clarity, avoid a cluttered interface, and create a cohesive user experience.

<p align="center">
<img src="/assets/images/color-scheme.png" alt="Color-scheme" width="700" heigh="auto"/>
</p>

- The colour variables were defined using CSS custom properties:


```css
:root {
  /* Base colour */
  --color-background: rgb(12, 12, 12);

  /* Text, highlights and accents */
  --color-primary: rgba(196, 156, 64, 1);
  --color-primary-hover: #edc193;

  --color-secondary: rgba(255, 255, 255, 1);
  --color-secondary-hover: rgba(255, 255, 255, 0.885);
} 
```

- The secondary colour is primarily used for body text and supporting content, ensuring good contrast and readability against the dark background.

- Hover colours were added for both the primary and secondary colours to provide clear visual feedback and improve usability.

- Overall, the goal of the colour scheme was to achieve consistency and balance, ensuring the interface feels structured and intuitive, while still being visually engaging and inviting for users to browse. 

### Imagery

- All images used on the site were sourced from [Pexels](https://www.pexels.com/sv-se/). No original photography was created for this project; the logo is text-based and styled with CSS.

- Images are used to enhance the user experience by showcasing the food, atmosphere, and concept of the restaurant.

- The homepage features a full-width hero image designed to welcome visitors and set the mood. Other images accompany text blocks on the homepage, About, Menu, and Events pages, providing context and visual interest for each section.
<p align="center">
<img src="/assets/images/restaurant-bar.jpg" alt="Home-page hero-screenshot" width="600" heigh="auto"/>
</p>

- All images are responsive and automatically cropped or scaled to fit different screen sizes and layouts, ensuring a consistent visual flow throughout the site.

### Typography
- The website uses a single font family from Google Fonts: [Hepta Slab](https://fonts.google.com/specimen/Hepta+Slab), applied consistently across all pages to maintain a cohesive visual style. Different font sizes and weights are used to create hierarchy and visual interest.

**Header / Navbar:**
-  The logo in the header is styled with the same font, but with a playful variation in font size to emphasize part of the word: hospiTABLE. This highlights the "table" in hospitable, fitting the restaurant theme.
<p align="center">
<img src="/assets/images/navbar-printscreen-typo.png" alt="home-page navbar screenshot" width="900" heigh="auto"/>
</p>

**Body text:**
-  All other text uses the same font with adjusted letter-spacing for readability and a more open, airy layout.
<p align="center">
<img src="/assets/images/text-printscreen-typo.png" alt="typography text screenshot" width="400"/>
</p>

### Icons
- The website uses clickable social media icons in the footer to link to Instagram, Facebook, and Tripadvisor, which are relevant platforms for a restaurant.

- Instead of using vector icons or an icon library, these icons were sourced as images from Pexels and wrapped in anchor (`<a>`) elements. The original images were black, but to match the overall design, a CSS invert filter was applied to make them white. This approach was chosen to maintain visual consistency with the website’s style.
<p align="center">
<img src="/assets/images/icons-screenshot.png" alt="icons screenshot" width="350" heigh="auto"/>
</p>

- To ensure accessibility, each icon has descriptive alt text (e.g., “Instagram icon”), so screen readers can correctly identify them as interactive elements. Although they are not traditional icon fonts, this solution provides both usability and clarity for users.

---

## Features

The website consists of seven pages, six of which are accessible via the navigation bar, while the seventh page (book.html) is reached by clicking the “Book a Table” button on the Reservations page.

1. **Homepage:** Introduces the restaurant and provides general information for first-time visitors.
2. **About:** Offers a more detailed story about the restaurant, its concept, and values.
3. **Events:** Displays upcoming events, catering services, and information about live music nights every Thursday.
4. **Menu:** Shows the dishes offered along with their prices in a simple and clear layout.
5. **Contact:** Contains the restaurant’s address, opening hours, and an embedded map for easy location.
6. **Reservations:** Provides basic information and a button to navigate to the booking page (book.html).
7. **Book:** The booking page where guests can submit a reservation form, accessed via the Reservations page.


This structure aims to ensure that visitors can easily navigate the site and access the information most relevant to their needs.

### Page Elements

#### All Pages

**Navigation:**

-  A navbar is present on all pages, including book.html, with sticky positioning to remain easily accessible when scrolling.

- On desktop, the logo is positioned on the left and navigation links on the right, with Reservations highlighted using a border to clearly indicate where users can book a table.

<p align="center">
<img src="/assets/images/navbar-printscreen-typo.png" alt="Navbar desktop screenshot" width="900" heigh="auto"/>
</p>

- To improve user experience and prevent the navbar from becoming overcrowded, the navigation menu transforms into a hamburger menu on smaller desktops and tablets. A small JavaScript snippet was implemented to toggle the visibility of the navbar. When the menu icon is clicked, the script adds or removes the hidden class from the navigation menu. This allows the menu to fold out from the top of the screen, centering the links and maintaining a clean, accessible interface.

<p align="center">
<img src="/assets/images/nav-hamburger-screenshot.png" alt="Navbar hamburger screenshot" width="700" heigh="auto"/>
</p>

- The layout adapts down to 320px without issues. The only change is that the logo switches fontsize and becomes smaller to fit smaller screens. 

**Buttons**
- The site uses a combination of links and buttons to navigate the user and perform actions, such as submitting the booking form. All buttons and link-buttons are styled consistently to maintain a cohesive and interactive feel. Two main button styles are used:

1. Primary buttons: These stand out with the primary color as background and are used for key actions, such as the call-to-action buttons on the hero image.

<p align="center">
<img src="/assets/images/button-primary.png" alt="Button Pirmary screenshot" width="700" heigh="auto"/>
</p>

2. Secondary buttons: These have the base color as background and a border in the primary color, making them less visually dominant. They are used for supporting actions, such as buttons under text sections on the Events page.

<p align="center">
<img src="/assets/images/button-secondary.png" alt="Button Secondary screenshot" width="700" heigh="auto"/>
</p>

This approach aims to ensure visual hierarchy and guides users attention while keeping the site playful and engaging.

**Footer:** 

- The footer consists of three sections: contact info, social icons, and copyright. These elements are displayed in a row on larger screens using Flexbox. 

- Originally, there was an issue with a floating footer on larger screens, especially on reservations.html, since the page had very little content in `<main>`. A solution to keep the footer at the bottom of the page was applied by setting display:flex on the the `<body>` and flex: 1 to `<main>`, inspired by [CSS-Tricks](https://css-tricks.com/couple-takes-sticky-footer/).

<p align="center">
<img src="/assets/images/footer-desktop-screenshot.png" alt="footer desktop screenshot" width="700" heigh="auto"/>
</p>

- Ideally, all elements would appear in a single row on all screens. However, to maintain accessibility and avoid reducing text size, the content is stacked vertically on smaller screens. This was not the original intention for the layout, but it was the most practical solution to keep each section readable. 


<p align="center">
<img src="/assets/images/footer-mobile-screenshot.png" alt="footer mobile screenshot" width="400" heigh="auto"/>
</p>

- Extra wrapper `<div>`: An additional `<div>` around the contact info was used to maintain even spacing and alignment. Without it, the rows appeared uneven. 

- Fixed width on mobile: A width of 170px was applied to center the footer sections visually. While this limits flexibility, it was the simplest way to achieve a balanced layout on small screens. 

- I am aware that these choices are not the most elegant CSS-wise. They solve the immediate visual problem, but in the future, the layout could be revisited using CSS Grid or a more flexible approach to achieve the same structure in a cleaner way.

#### Homepage

- The homepage serves as the main entry point to the website and is structured in multiple sections designed to introduce the restaurant and guide the user to key information.

**Hero Section**

- At the top of the page, there is a full-width hero image of the restaurant taken from a distance. Two call-to-action buttons are placed on the hero image to allow users to quickly navigate to the Contact and Reservations pages. This immediately engages the visitor and provides clear pathways to interact with the site.

- Below the hero image, there is a short descriptive message, giving a concise overview of the restaurant and what it offers. This section helps fulfill the primary goal of informing first-time visitors about the restaurant.

<p align="center">
<img src="/assets/images/hero-img-screenshot.png" alt="hero screenshot desktop" width="700" heigh="auto"/>
</p>

**Feature Sections**

- The page includes a reusable styling section, also used on the Events page. These sections are arranged in alternating layouts using Flexbox, switching between row and row-reverse to create a Text/Image → Image/Text → Text/Image pattern.

- Each section contains a short summary of different aspects of the restaurant, such as:
1. The restaurant’s philosophy and atmosphere
2. The food that is served
3. Sustainability practices and approach

- This alternating layout maintains visual interest, guides the user through the content in a natural flow, and reinforces a consistent UX pattern across the site.

<p align="center">
<img src="/assets/images/intro-section-desktop.png" alt="intro screenshot desktop" width="500" heigh="auto"/>
</p>

- On tablet and mobile viewports, the layout switches from flex-row to flex-column, stacking text and image vertically for improved readability and responsiveness. This ensures that the content remains visually balanced and accessible on smaller screens.

<p align="center">
<img src="/assets/images/intro-section-mobile.png" alt="intro screenshot desktop" width="400" heigh="auto"/>
</p>

#### Menu page 

- The Menu page features a simple layout showcasing a fictional menu. Each menu item includes a title, a brief description, and a price. A supporting image is included to intrigue potential guests and give a visual sense of the dishes. Like other pages, the section concludes with two call-to-action buttons directing users to the Contact and Booking pages.

<p align="center">
<img src="/assets/images/menu-screenshot.png" alt="menu page screenshot" width="400" heigh="auto"/>
</p>

#### About Page

- The About page contains an h1 and a `<p>` providing more detailed information about the restaurant. To make this section more engaging from a UX perspective, a supporting image is included alongside the text. Below this, call-to-action buttons guide the user to the Contact and Booking pages, encouraging further interaction.

<p align="center">
<img src="/assets/images/about-screenshot.png" alt="about page screenshot" width="500" heigh="auto"/>
</p>

#### contact page

- The Contact page is divided into three main sections: contact information (address, phone, email), opening hours, and an embedded Google map. These sections are arranged using CSS Grid, each taking up one fraction of the grid, with the map spanning two columns at the bottom to use the full width of the container.

<p align="center">
<img src="/assets/images/contact-desktop.png" alt="contact page desktop screenshot" width="500" heigh="auto"/>
</p>

- On tablet and mobile screens, the sections are stacked vertically to ensure readability and accessibility. 

- The embedded Google Map (iframe) originally occupied 100% of the available width in addition to the grid gap applied to its parent container on desktop. This caused the map to slightly overflow its intended layout.
To resolve this, the map width was set to 95% on desktop viewports, ensuring it fits correctly within the grid without overflow. On smaller screen sizes, where the grid items stack vertically, the gap is applied above the map instead of beside it. In this layout, the map no longer overflows and is therefore set to 100% width for optimal use of available space.
This responsive adjustment provided a practical and accessible solution within the project scope. With more time, the layout could be further refined using a more flexible approach.

<p align="center">
<img src="/assets/images/contact-mobile.png" alt="contact page mobile screenshot" width="300" heigh="auto"/>
</p>

#### Events page

- The Events page provides information about larger bookings, catering options, and upcoming events such as live music nights. This page uses the same CSS classes as the homepage (index.html), which helps keep the stylesheet maintainable and the code clean.

- Responsiveness: The layout follows the same responsive design and media queries as the homepage. On tablet and mobile screens, the content stacks vertically to ensure readability and a smooth user experience.

<p align="center">
<img src="/assets/images/events desktop.png" alt="event page mobile screenshot" width="500" heigh="auto"/>
</p>


#### "Reservations / Booking Form

- Originally, the booking form was included directly on the Reservations page. After reviewing other restaurant websites, I realised that it provides a better user experience to have a separate page for the booking form.

- Reservations page: Provides information about making a reservation and guides the guest to the booking page if they wish to proceed.

<p align="center">
<img src="/assets/images/reservation-page.png" alt="reservation page screenshot" width="600" heigh="auto"/>
</p>

- Booking page (book.html): Contains the booking form, which includes:
* Radio buttons to choose Lunch or Dinner
* A date picker for selecting the reservation date
* A number input to select the number of guests (up to 7)
* Text inputs for first name, last name, and email address

<p align="center">
<img src="/assets/images/booking-form.png" alt="booking form screenshot" width="500" heigh="auto"/>
</p>

---

## Technologies Used

### Languages 
- HTML
- CSS
- Javascript - for hamburger menu

### Frameworks 
- Tailwind – Evaluated during development for utility-first styling, but not used in the final site.

### Libraries 
- Lucidchart app- to create wireframes
- Google Fonts - to implement the font used in the site
- Pexels.com - To source the images and icons used in the site

### Tools & Platforms 

- Git – used for version control
- GitHub – used to host the project repository and deploy the site via GitHub Pages
- Visual Studio Code – used as the code editor during development
- Chrome DevTools – used for debugging, testing responsiveness, and troubleshooting layout issues
- Responsive Design Checker (cross-device responsiveness testing)
- Google Lighthouse (performance, accessibility, best practices, SEO)
- W3C HTML Validator – for HTML-validation
- W3C CSS Validator - for CSS validation 

---

## Development & Deployment

### Git Commits

During development, I aimed to commit frequently with clear and concise commit messages that describe the changes made. The goal was to keep the commit history easy to follow and understandable for others reviewing the project.

### Publishing

The site was deployed to GitHub Pages, 
which allows the project to be hosted directly from the GitHub repository.

To deploy the site, the following steps were taken:
1. Navigate to the project repository on GitHub and open the Settings tab.
2. In the left-hand menu, select Pages under the Code and automation section.
3. Under Source, choose Deploy from a branch.
4. Select the main branch and set the folder to /(root).
5. Click Save to publish the site.

After saving, the site was automatically deployed. 
Any subsequent pushes to the main branch will update the live site.
The live site can be found [here:](https://fannyhenriques.github.io/milestone-project-1/)  

---

## Reflection & Future Improvements

### Responsive Design 
 While a desktop-first approach was used in this project, adopting a mobile-first workflow in future development will allow for:
* Cleaner CSS structure
* Fewer overrides at smaller screen sizes
* Improved responsiveness and scalability
 This project provided valuable insight into responsive design strategies and reinforced the importance of planning layout progression from smaller devices upward.

### Overall layout
* The embedded map iframe could be implemented in a more robust way to avoid layout workarounds.
* The contact section could be further refined if more time were available. While the current layout functions well, the content could be aligned more cleanly within the grid, with improved spacing toward the container edges.
* Footer:

### Submit form
* As this project is built using static HTML and CSS, the booking form does not process submissions in a realistic way, as this would require JavaScript or a backend solution. Currently, submitting the form simply refreshes the page.

* From a user experience perspective, providing visual feedback after submission would improve usability. With more time, a separate confirmation page (e.g. confirmation.html) could be added to clearly inform users that their booking request has been sent.    
---

## Testing

<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

### Validation

- During HTML validation, a few warnings related to semantic structure were identified. 
These mainly concerned the use of `<section>` elements that were used purely as layout wrappers and did not require headings. 
These elements were replaced with `<div>` where appropriate to better reflect their purpose.

- Additionally, some heading levels were adjusted (e.g. replacing `<h3>` with `<h2>` in the menu page) to maintain a logical heading hierarchy. Existing CSS styling was preserved to ensure the visual design remained unchanged.

- After these adjustments, all HTML validator tests passed successfully.

- All CSS validation tests passed successfully without errors.



| **Page**          | **W3C HTML Validator Result** | **Link**                                                                                                                       |
| ----------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Index.html        | Pass                          | [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Findex.html)        |
| Menu.html         | Fail                          | [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fmenu.html)         |
| About.html        | Pass                          | [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fabout.html)        |
| Contact.html      | Pass                          | [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fcontact.html)      |
| Events.html       | Pass                          | [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fevents.html)       |
| Reservations.html | Pass                          | [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Freservations.html) |
| Book.html         | Pass                          | [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fbook.html)         |



| **Page**          | **W3C CSS Validator Result** | **Link**                                                                                                                                     
| ----------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Index.html        | Pass                         | [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)                  |
| Menu.html         | pass                         | [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fmenu.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)         |
| About.html        | pass                         | [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fabout.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)        |
| Contact.html      | pass                         | [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fcontact.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)      |
| Events.html       | Pass                         | [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fevents.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)       |
| Reservations.html | Pass                         | [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Freservations.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv) |
| Book.html         | Pass                         | [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Fbook.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)         |



### Manual Testing

- All test cases listed below were executed and passed successfully.

| Page / Section           | Test Case                                                                                 | Expected Result                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| All Pages                | Test navbar links including logo-link to index.html                                       | User navigates to the correct page when clicking links                                 |
| All Pages                | Test social media links and address links in footer                                       | Links open correct social media sites or apps                                          |
| Homepage (Hero)          | Test CTA buttons (styled links)                                                           | Links navigate to Contact and Reservations pages                                       |
| Menu Page                | Test CTA button-links                                                                     | Links navigate to Contact and Booking pages                                            |
| About Page               | Test CTA button-links                                                                     | Links navigate to Contact and Booking pages                                            |
| Contact Page             | Test address links                                                                        | Opens appropriate app or map location                                                  |
| Contact Page             | Test embedded Google map – scroll and zoom                                                | Map is interactive and scroll/zoom works correctly                                     |
| Events Page              | Test Contact-link button                                                                  | Navigates to Contact page                                                              |
| Reservations Page        | Test address links                                                                        | Opens appropriate app                                                                           |
| Booking Page (book.html) | Test form validation and submission                                                       | Blocks submission if required fields empty; allows submission if all fields are filled |
| All Pages (Responsive)   | Check layout on desktop, tablet, mobile for navbar, hero, text/image sections, and footer | Layout adjusts correctly at different screen sizes                                     |
|                          |                                            |                                              |


- Responsiveness was tested manually using [Chrome DevTools](https://developer.chrome.com/docs/devtools/) by simulating different screen sizes, including desktop, tablet, and mobile devices. Layouts were adjusted where needed to ensure content remained readable and functional. In addition, [Responsive Design Checker](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Ffannyhenriques.github.io%2Fmilestone-project-1%2Findex.html&width=1400&height=700) was used to further verify responsive behavior across a wide range of screen sizes.

### Lighthouse Testing 

All pages of the website have been tested using Google Lighthouse. The project achieves 100% Accessibility, 100% Best Practices, and 100% SEO across all pages.

**Performance score**
- The Performance score varies between Lighthouse runs due to factors such as network simulation, CPU throttling, browser extensions, and background processes. To reduce variability, tests were primarily conducted in Incognito mode, which provided more consistent results; however, the performance score still fluctuates between runs and may produce different results each time the test is executed.

- Lower performance scores are mainly caused by large image assets, particularly on index.html, where a full-width hero image is used. Due to its size and importance, this image takes longer to load under simulated mobile conditions. To improve loading behavior, fetchpriority="high" was applied to the hero image, resulting in a modest performance improvement. Smaller, non-critical images (such as footer icons) use loading="lazy" to improve load performance.

- Several image optimization approaches were tested, including resizing, cropping, and adjusting image dimensions directly in HTML. However, these negatively affected responsiveness, visual quality, or overall user experience. To preserve a high-quality UI/UX, the images were kept in their current form.

- With more time available, further image optimization (such as manual resizing or responsive image formats) would be implemented to improve performance while maintaining visual integrity.

Index.html:

<p align="center">
<img src="/assets/images/lighthouse-index.png" alt="lighthouse scores homepage" width="400" heigh="auto"/>
</p>

Menu.html:

<p align="center">
<img src="/assets/images/lighthouse-menu.png" alt="lighthouse scores menu page" width="400" heigh="auto"/>
</p>

About.html: 

<p align="center">
<img src="/assets/images/lighthouse-about.png" alt="lighthouse scores about page" width="400" heigh="auto"/>
</p>

Contact.html: 

<p align="center">
<img src="/assets/images/lighthouse-contact.png" alt="lighthouse scores contactpage" width="400" heigh="auto"/>
</p>

Events.html:

<p align="center">
<img src="/assets/images/lighhouse-events.png" alt="lighthouse scores event page" width="400" heigh="auto"/>
</p>

Reservations.html:

<p align="center">
<img src="/assets/images/lighthouse-reservations.png" alt="lighthouse scores reservation page" width="400" heigh="auto"/>
</p>

Book.html:

<p align="center">
<img src="/assets/images/lighthouse-book.png" alt="lighthouse scores bookingpage" width="400" heigh="auto"/>
</p>

### Known Bugs
- 

---

## Credits

### Code
- [Tailwind CSS Documentation](https://v2.tailwindcss.com/docs) – Used during evaluation of utility-first styling

- Floating footer solution - Inspired by [CSS-Tricks](https://css-tricks.com/couple-takes-sticky-footer/)

- Hamburger menu toggle (JavaScript) – Inspired by a solution from [Stack Overflow](https://stackoverflow.com/questions/70384367/hamburger-menu-toggle)


### Content
- ChatGPT – Used as a support tool for refining language in longer text sections.
- README – Inspired on the Code Institute ["Love Running" README Template](https://github.com/Code-Institute-Solutions/readme-template), and examples from other student projects reviewed during course session with my Course Facilitator. 

### Media
- [Pexels](https://www.pexels.com/) – All images and icon imagery used on the website were sourced from Pexels:

### AboutMe Component

The AboutMe component is a React functional component that displays a brief introduction and a profile picture of me

### Component Structure

The AboutMe component consists of two main parts

- the left section that contains Madison's profile picture,
- and the right section that contains Madison's introduction and portfolio link.

These two parts are contained within a div element with the classes <span style="color: blue;">flex, flex-col, items-center, justify-center, py-12, bg-gray-100, md:flex-row, and md:py-24</span>, which provides a responsive layout for the component.

### Profile Picture

The profile picture is displayed in the left section of the component and is contained within a div element with the class <span style="color: blue;">md:w-1/2</span>. The image itself is an img element with the attributes src, alt, and class. The src attribute points to a placeholder image, while the alt attribute provides an alternative text description of the image for accessibility purposes. The class attribute sets the image to have a rounded shape and a shadow effect.

### Introduction and Portfolio Link

The introduction and portfolio link are displayed in the right section of the component and are contained within a div element with the classes <span style="color: blue;">mt-6, md:mt-0, md:w-1/2, and md:pl-10</span>. The introduction is a h1 element with the classes <span style="color: blue;">text-3xl, font-bold, and mb-2</span>, while the portfolio link is an a element with the classes <span style="color: blue;">inline-block, bg-blue-500, hover:bg-blue-700, text-white, font-bold, py-2, px-4, and rounded.</span>

### Component Responsiveness

The AboutMe component is designed to be responsive to different screen sizes. On smaller screens, the flex-row class is removed, and the two sections of the component are stacked vertically. Additionally, the font size and margins are adjusted using responsive classes like md:text-lg and md:my-4. This allows the component to maintain its readability and aesthetics on different screen sizes.

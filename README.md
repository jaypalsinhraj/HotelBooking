# Hotel Search App

The **Hotel Search App** is a simple project built using **React**, **Redux Toolkit**, **Tailwind CSS**, and **Sass**. This app demonstrates how to implement a search functionality that allows users to filter hotels based on their search query.

The project focuses on clean architecture with centralized state management using **Redux Toolkit**, utility-first CSS for layout via **Tailwind CSS**, and **Sass** for reusable custom styles like buttons, textboxes, and typography.

## Project Overview

This app enables users to search for hotels through a dynamic search bar. As the user types, the hotel list is filtered and displayed based on the search query. The app is styled using a combination of **Tailwind CSS** for responsive and efficient layouts and **Sass** for maintaining reusable custom styles across the project.

### Key Features:

- **Search Bar**: The search bar allows users to dynamically filter the list of hotels based on the search term.
- **Responsive Layout**: Tailwind CSS is used to handle responsive layouts and spacing.
- **Centralized State Management**: Redux Toolkit is utilized for managing application state and handling asynchronous logic.
- **Reusable Styles**: Sass is used to define custom styles (e.g., textboxes, buttons, typography), ensuring consistency across the project.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, used here to create dynamic and interactive components.
- **Redux Toolkit**: A state management library used for managing the hotel search state and handling asynchronous operations like API calls.
- **Tailwind CSS**: A utility-first CSS framework used for building responsive layouts and handling spacing, alignment, and general layout styling.
- **Sass**: A CSS preprocessor used to maintain custom and reusable styles for elements like buttons, textboxes, and typography.
- **PostCSS & Autoprefixer**: Tools used in the build process to automatically add vendor prefixes and process Tailwind CSS.

## Styling Approach

- **Tailwind CSS** is used primarily for layout and spacing. It helps quickly build responsive designs with utility classes like `flex`, `justify-center`, `p-4`, and `w-full`.
- **Sass** is used for styling common elements like input fields and buttons. For instance, instead of using Tailwind CSS classes for every textbox or button, we define reusable styles in Sass that provide consistent styling across the app. This approach reduces repetition and ensures easy maintenance.

  Some examples of components styled with Sass include:

  - **Input fields**: Custom styles like padding, borders, and focus states are managed through Sass classes (`.input-field`).
  - **Buttons**: Button styles, hover effects, and focus handling are centralized in Sass (`.button`), making them easy to reuse across the project.

### Why This Tech Stack?

- **React** was chosen for its simplicity in building component-based UIs.
- **Redux Toolkit** offers a simplified and modern approach to state management, reducing boilerplate and offering powerful features like `createSlice` and `createAsyncThunk`.
- **Tailwind CSS** allows rapid layout development with utility-first classes, reducing the need for writing custom CSS.
- **Sass** provides an easy way to manage reusable and maintainable styles, particularly for elements that require custom designs like buttons and input fields.

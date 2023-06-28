# Cooby Frontend Intern Test

## Requirement
https://www.notion.so/cooby/Cooby-Frontend-Intern-b0391a28080248e987dd0f5ee1206a9a

## Get Started

Install all dependencies:
```
npm i
```

Run the project:
```
npm run dev
```

Build the project:
```
npm run build
```

After running the project in development mode, the project will be hosted on `http://127.0.0.1:5173/`

## Packages used

- vite (bundler)
- MUI v5 (UI tools)
- SWR (Hooks for data fetching)
- react-infinite-scroll-hook (for infinite scrolling)
- lodash

### vite
The reason for choosing Vite as the bundler is its superior Hot Module Replacement (HMR) speed compared to Webpack. Additionally, Vite provides support for CSS modules, enhancing the modularity and maintainability of the project.

### MUI v5
As one of the prominent UI libraries in the React community, Material-UI (MUI) offers comprehensive documentation and extensive customization options. It is widely recognized and widely adopted, making it a reliable choice for building user interfaces.

### SWR
SWR is a powerful React hook designed for data fetching. It offers numerous advantages, including support for infinite fetching and efficient cache management. Leveraging SWR simplifies data handling and improves performance in React applications.

### react-infinite-scroll-hook
The react-infinite-scroll-hook is a convenient hook for implementing infinite scroll functionality in React applications. It enables seamless loading of additional data as users scroll, enhancing the user experience and eliminating the need for manual interaction to load more content.

## lodash
Lodash is an immensely valuable utility library for JavaScript development. It provides a wide range of helper functions that streamline and simplify common programming tasks, contributing to increased productivity and code quality.

## Features

### Debounce
To optimize API requests and prevent them from being sent excessively when the search text changes rapidly, the debounce higher-order function (HOF) from Lodash is utilized. By delaying the API request until the user pauses typing for 500ms, unnecessary network traffic is minimized, resulting in a more efficient and responsive search experience.

### Infinite scroll
In addition to traditional pagination, the project incorporates an alternative data fetching mechanism known as Infinite Scroll. This feature allows users to seamlessly retrieve the next page of search results without manually clicking a `Load More` button. The code responsible for implementing infinite scroll can be found in `src/components/search/search-results/index.tsx` and is provided as a commented section. Feel free to try.
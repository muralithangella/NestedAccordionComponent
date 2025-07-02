export const accordionData = [
  {
    title: "Introduction",
    content: "Welcome to the React Accordion Interview Question.",
  },
  {
    title: "Chapter 1: React Basics",
    content: [
      {
        title: "1.1 JSX & Rendering",
        content: "JSX is a syntax extension for JavaScript.",
      },
      {
        title: "1.2 Components",
        content: [
          {
            title: "1.2.1 Functional Components",
            content: "These are basic building blocks in modern React.",
          },
          {
            title: "1.2.2 Class Components",
            content: "Used before hooks were introduced in React 16.8.",
          },
        ],
      },
      {
        title: "1.3 Props & State",
        content:
          "Props are inputs to components. State is managed within the component.",
      },
    ],
  },
  {
    title: "Chapter 2: Advanced Concepts",
    content: [
      {
        title: "2.1 useEffect & Lifecycle",
        content:
          "useEffect lets you perform side effects in function components.",
      },
      {
        title: "2.2 Performance Optimization",
        content: [
          {
            title: "2.2.1 Memoization",
            content: "React.memo and useMemo help avoid unnecessary renders.",
          },
          {
            title: "2.2.2 Virtualization",
            content: "Useful for large lists (e.g., react-window).",
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 3: Ecosystem",
    content: [
      {
        title: "3.1 Routing",
        content: "React Router is used for client-side routing.",
      },
      {
        title: "3.2 State Management",
        content: [
          {
            title: "3.2.1 Redux",
            content: "A predictable state container for JS apps.",
          },
          {
            title: "3.2.2 Zustand / Jotai",
            content: "Modern lightweight alternatives to Redux.",
          },
        ],
      },
    ],
  },
];

const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "class",
  },
  "Hello World from ReactJs"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

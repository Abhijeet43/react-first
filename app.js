//Adding elements in dom through react

const heading1 = React.createElement("h1", {}, "Inception Session");

const heading2 = React.createElement("h1", { id: "title" }, "Welcome");

const container = React.createElement("div", { className: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// JS
// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML = "Inception Session";
// root.appendChild(heading);

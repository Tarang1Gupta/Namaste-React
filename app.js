const parent = React.createElement("div", { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "This is parent and child heading"),
    React.createElement("h2", null, "This is the second child heading")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", null, "I am child2 h1"),
    React.createElement("h2", null, "I am child2 h2")
  ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

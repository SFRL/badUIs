const toggleVisibility = (id) => {
  const element = document.querySelector(id);
  const currentDisplay = element.style.display;
  element.style.display = currentDisplay == "block" ? "none" : "block";
};

document.addEventListener("DOMContentLoaded", function (event) {
  const hoverfield = document.querySelector("#hoverfield");

  hoverfield.addEventListener("mouseover", () =>
    toggleVisibility("#linkpopup")
  );
  hoverfield.addEventListener("mouseout", () => toggleVisibility("#linkpopup"));
});

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

  const range = document.querySelector("#range");
  const output = document.querySelector("#phone");
  range.addEventListener ("input", function () {
      output.value = this.value.toString().replace(/^(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
  });
});

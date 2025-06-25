
document.addEventListener("DOMContentLoaded", function () {
  function enterUniverse() {
    const target = document.getElementById("eert-philosophy");
    if (target) {
      console.log("Scrolling to #eert-philosophy...");
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Section #eert-philosophy not found.");
    }
  }

  // Attach globally so HTML onclick can access it
  window.enterUniverse = enterUniverse;
});

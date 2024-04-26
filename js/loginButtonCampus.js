var interval = setInterval(
  (function logic() {
    var links = document.querySelectorAll('#user-info > a');
    var button;
    
    for (var i = 0; i < links.length; i++) {
      if (links[i].textContent.trim() === "Anmelden") {
        button = links[i];
        break;
      }
    }
    
    // Now you can work with targetLink, for example:
    if (button) {
      console.log("Found Button:", button.textContent);
      if (button.textContent.includes("Anmelden")) {
        clearInterval(interval);
        button.click();
      }
    }
    return logic;
  })(),
  1000
);


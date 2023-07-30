var interval = setInterval(
  (function logic() {
    const button = document.querySelector(
      '[aria-label="Anmelden"]'
    ).parentElement;

    console.log("Found Button:", button?.textContent);
    if (button?.textContent.includes("Anmelden")) {
      clearInterval(interval);
      button.click();
    }

    return logic;
  })(),
  1000
);

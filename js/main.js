document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {};

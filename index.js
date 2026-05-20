const page = prompt("page", "https://www.example.com");

function redirect(page) {
  window.location.href = page;
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("User has returned to the tab!");
    redirect(page);
  } else {
    console.log("User has left the tab.");
  }
});

setTimeout(() => {
  if(page != "install") {redirect(page)}
}, 500);

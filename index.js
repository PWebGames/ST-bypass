const page = prompt("page", "https://www.example.com");

function redirect(page,delay) {
  setTimeout(() => {
    window.location.href = page;
  }, delay);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("User has returned to the tab!");
    redirect(page,750);
  } else {
    console.log("User has left the tab.");
  }
});

if(page != "install") {redirect(page, 0)}

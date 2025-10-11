const myPhoto = document.querySelector("#myphoto");

let radius = 0;
setInterval(() => {
  if (radius <= 25) {
    myPhoto.setAttribute("style", `border-radius: ${radius}px; height: 350px`);
    radius++;
  } else {
    radius = 0;
  }
}, 100);

  const now = new Date(); const currentYear = now.getFullYear();
  document.getElementById('current-year').textContent = currentYear;

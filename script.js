// Countdown target (July 4)
const targetDate = new Date("July 4, 2026 00:00:00").getTime();

// Update countdown
function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// Run every second
setInterval(updateCountdown, 1000);

// Start site + play anthem
function startSite() {
  document.querySelector(".start-screen").style.display = "none";

  const audio = document.getElementById("anthem");
  audio.play().catch(err => {
    console.log("Autoplay blocked:", err);
  });
}

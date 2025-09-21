// =====================
// 1️⃣ ALBUM AUTO SCROLL ON HOVER
// =====================
const albumSlider = document.getElementById("albumSlider");
let scrollAnimation;

if (albumSlider) {
  const scrollSpeed = 0.5; // slower for professional look

  const animateScroll = () => {
    albumSlider.scrollLeft += scrollSpeed;
    if (albumSlider.scrollLeft >= albumSlider.scrollWidth - albumSlider.clientWidth) {
      albumSlider.scrollLeft = 0; // loop back smoothly
    }
    scrollAnimation = requestAnimationFrame(animateScroll);
  };

  window.addEventListener("load", () => {
    animateScroll();
  });

  // Optional: pause on hover
  albumSlider.addEventListener("mouseenter", () => {
    cancelAnimationFrame(scrollAnimation);
  });

  albumSlider.addEventListener("mouseleave", () => {
    animateScroll();
  });
}

// =====================
// 2️⃣ SBR VIDEO SECTION – PLAY/PAUSE AUDIO ON CLICK
// =====================
const sbrVideo = document.getElementById("sbrVideo");
if (sbrVideo) {
  sbrVideo.muted = true;
  sbrVideo.play().catch(err => console.log("Autoplay blocked:", err));

  sbrVideo.addEventListener("click", () => {
    if (sbrVideo.muted) {
      sbrVideo.muted = false;
      sbrVideo.play();
    } else {
      sbrVideo.muted = true;
    }
  });

  // Optional: Click anywhere in container to go to Netflix
  const sbrContainer = document.getElementById("sbrContainer");
  if (sbrContainer) {
    sbrContainer.addEventListener("dblclick", () => {
      window.open("https://www.netflix.com/in/title/80179831", "_blank");
    });
  }
}

// =====================
// 3️⃣ MAIN VIDEO PAGE – CLICK TO UNMUTE/REMUTE
// =====================
const mainVideo = document.getElementById("mainVideo");
if (mainVideo) {
  mainVideo.muted = true;
  mainVideo.play().catch(err => console.log("Autoplay blocked:", err));

  mainVideo.addEventListener("click", () => {
    mainVideo.muted = !mainVideo.muted;
  });
}

// =====================
// 4️⃣ LANDING PAGE REDIRECT (FLOATING ICON)
// =====================
const landingIcon = document.getElementById("landingIcon");
if (landingIcon) {
  landingIcon.addEventListener("click", () => {
    window.open("https://landing-page-fawn-pi-94.vercel.app/", "_blank");
  });
}

// =====================
// 5️⃣ OPTIONAL: SOCIAL ICON ANIMATION
// =====================
const socialIcons = document.querySelectorAll(".social-icon");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.add("pop");
  });
  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("pop");
  });
});

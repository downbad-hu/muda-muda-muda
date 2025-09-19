// =====================
// MAIN FULLPAGE VIDEO
// =====================
const mainVideo = document.getElementById('mainVideo');

// Click on video toggles audio
if(mainVideo){
  mainVideo.addEventListener('click', () => {
    if(mainVideo.muted){
      mainVideo.muted = false; // play audio
    } else {
      mainVideo.muted = true;  // mute
    }
  });
}

// =====================
// UPCOMING SBR VIDEO
// =====================
const sbrVideo = document.getElementById('sbrVideo');
const sbrContainer = document.getElementById('sbrContainer');

if(sbrVideo && sbrContainer){
  // Click on SBR video toggles audio
  sbrVideo.addEventListener('click', () => {
    if(sbrVideo.muted){
      sbrVideo.muted = false;
    } else {
      sbrVideo.muted = true;
    }
  });

  // Optional: redirect when someone clicks on container/button
  const sbrLink = document.getElementById('sbrLink');
  if(sbrLink){
    sbrLink.addEventListener('click', () => {
      window.open('https://www.netflix.com/title/81267710', '_blank');
    });
  }
}

// =====================
// ICON POP ANIMATION (Community / Social Icons)
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const popIcons = document.querySelectorAll('.icon-btn');
  popIcons.forEach((icon, idx) => {
    setTimeout(() => {
      icon.classList.add('pop');
    }, idx * 150); // sequential pop effect
  });
});

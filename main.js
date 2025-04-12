function logout() {
    alert("You have been logged out.");
  }
  
  function speakWebsiteIntro() {
    const msg = new SpeechSynthesisUtterance(
      "Welcome to KalaYatra – your gateway to exploring India's rich cultural heritage. Discover artisans, traditions, and the beauty of Karnataka with us."
    );
    const voices = window.speechSynthesis.getVoices();
    msg.voice =
      voices.find(
        (voice) =>
          voice.name.includes("Female") ||
          voice.name.includes("Google UK English Female")
      ) || voices[0];
    msg.pitch = 1;
    msg.rate = 1;
    window.speechSynthesis.speak(msg);
  }
  
  // Ensure voices are loaded before speaking
  window.speechSynthesis.onvoiceschanged = function () {
    speakWebsiteIntro();
  };
  
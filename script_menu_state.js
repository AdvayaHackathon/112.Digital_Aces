
  
  const stateSelect = document.getElementById("stateSelect");
  const stateContent = document.getElementById("stateContent");
  
  stateSelect.addEventListener("change", () => {
    const selectedState = stateSelect.value;
    if (stateData[selectedState]) {
      const data = stateData[selectedState];
      stateContent.classList.remove("hidden");
      stateContent.innerHTML = `
        <h2>${selectedState}</h2>
        <p><strong>Cultural Highlights:</strong><br>${data.description}</p>
        <p><strong>Traditional Artisan Work:</strong><br>${data.artisan}</p>
      `;
    } else {
      stateContent.classList.add("hidden");
      stateContent.innerHTML = "";
    }
  });
  
const districts = {
    "Bengaluru": {
      crafts: ["Silk Sarees", "Channapatna Toys"],
      places: ["Lalbagh", "Cubbon Park", "Bannerghatta Park"]
    },
    "Mysuru": {
      crafts: ["Mysore Silk", "Wood Carving"],
      places: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"]
    }
  };
  
  function showMenu() {
    document.getElementById("dropdown").classList.toggle("hidden");
  }
  
  function loadDistricts() {
    const select = document.getElementById("districtList");
    select.innerHTML = "<option>Select District</option>";
    for (const district in districts) {
      const opt = document.createElement("option");
      opt.value = district;
      opt.textContent = district;
      select.appendChild(opt);
    }
  }
  
  function gotoDistrict(name) {
    if (name !== "Select District") {
      localStorage.setItem("selectedDistrict", name);
      window.location.href = "district.html";
    }
  }
  
  window.onload = function () {
    if (window.location.pathname.includes("district.html")) {
      const name = localStorage.getItem("selectedDistrict");
      document.getElementById("districtName").textContent = name;
      const data = districts[name];
      let content = `<h3>Popular Crafts</h3><ul>${data.crafts.map(c => `<li>${c}</li>`).join("")}</ul>`;
      content += `<h3>Tourism Spots</h3><ul>${data.places.map(p => `<li>${p}</li>`).join("")}</ul>`;
      document.getElementById("districtContent").innerHTML = content;
    }
  }
  
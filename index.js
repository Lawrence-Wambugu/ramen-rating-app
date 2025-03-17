const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg" }
];

function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.innerHTML = ""; 

  ramens.forEach(ramen => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener("click", () => handleClick(ramen));
      ramenMenu.appendChild(img);
  });
}


function handleClick(ramen) {
  const detailImage = document.getElementById("detail-image");
  detailImage.style.backgroundImage = ramen.image ? `url(${ramen.image})` : "none"; 
  document.getElementById("detail-name").textContent = ramen.name || "Insert Name Here";
  document.getElementById("detail-restaurant").textContent = ramen.restaurant || "Insert Restaurant Here";
  document.getElementById("detail-rating").textContent = ramen.rating !== undefined ? `Rating: ${ramen.rating}` : "Rating: 0";
  document.getElementById("detail-comment").textContent = ramen.comment || "Insert Comment Here";
}


function addSubmitListener() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (event) => {
      event.preventDefault(); 

      const newRamen = {
          id: ramens.length + 1, 
          name: document.getElementById("new-name").value,
          restaurant: document.getElementById("new-restaurant").value || undefined,
          image: `images/${document.getElementById("new-image").value}`, 
          rating: parseInt(document.getElementById("new-rating").value) || undefined,
          comment: document.getElementById("new-comment").value || undefined
      };

      ramens.push(newRamen); 
      displayRamens(); 
      form.reset(); 
      handleClick(newRamen); 
  });
}


function main() {
  displayRamens();
  addSubmitListener();
  
  if (ramens.length > 0) {
      handleClick(ramens[0]);
  }
}


document.addEventListener("DOMContentLoaded", main);
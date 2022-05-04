
document.getElementById("sizeOzel").addEventListener("click",

function sizeOzel() {
  var listele = document.getElementById("container");
  if (listele.style.display === "flex") {
       listele.style.display = "none";
     } else {
       listele.style.display = "flex";
     }
  fetch("data/product-list.json")
    .then((response) => response.json())
    .then((veri) => {
      Object.values(
        veri.responses[0][0]["params"]["recommendedProducts"]["Size Özel"]
      ).map((element) => {
        listele.innerHTML += `
    <div class="row align-items-start">
    <div class="row">
    <div class="card" style="width: 18rem;">
    <img src=${element.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <div class="button">
      <a href="#" class="btn btn-primary">${element.price} TL</a>
      <br>
      <i class="bi bi-truck"> ÜCRETSİZ KARGO</i>
      </div>
      </div>
      </div>
      </div>
      </div>
  `;
      });
    });
}
);
document.getElementById("tamir").addEventListener("click", 
function tamirat() {
 document.getElementById("first")
  var listele = document.getElementById("cont");
  if (listele.style.display === "flex") {
    listele.style.display = "none";
  } else {
    listele.style.display = "flex";
  }
 fetch("data/product-list.json")
    .then((response) => response.json())
    .then((veri) => {
      Object.values(
        veri.responses[0][0]["params"]["recommendedProducts"][
          "Yapı Market & Tamirat > Tamir, Tadilat Gereçleri"
        ]
      ).map((element) => {
       listele.innerHTML += `
      <div class="row align-items-start" id="first">
      <div class="row">
      <div class="card" style="width: 18rem;">
      <img src=${element.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <div class="button">
        <a href="#" class="btn btn-primary">${element.price} TL</a>
        <br>
        <i class="bi bi-truck">ÜCRETSİZ KARGO</i>
        </div>
        </div>
        </div>
        </div>
        </div>
    `;
      });
    });
  
}
);

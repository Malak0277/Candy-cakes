
let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";


const list = [
    { code: '#B01', source: "images/B01.jpg" },
    { code: '#B02', source: "images/B02.jpg" },
    { code: '#B03', source: "images/B03.jpg" },
    { code: '#B04', source: "images/B04.jpg" },
    { code: '#B05', source: "images/B05.jpg" },
    { code: '#B06', source: "images/B06.jpg" },
    { code: '#B07', source: "images/B07.jpg" },
    { code: '#B08', source: "images/B08.jpg" },
    { code: '#B09', source: "images/B09.jpg" },
    { code: '#B10', source: "images/B10.jpg" },
    { code: '#B11', source: "images/B11.jpg" },
    { code: '#B12', source: "images/B12.jpg" },
    { code: '#B13', source: "images/B13.jpg" },
    { code: '#B14', source: "images/B14.jpg" },
    { code: '#B15', source: "images/B15.jpg" },
    { code: '#B16', source: "images/B16.jpg" },
    { code: '#B17', source: "images/B17.jpg" },
    { code: '#B18', source: "images/B18.jpg" },
    { code: '#B19', source: "images/B19.jpg" },
    { code: '#B20', source: "images/B20.jpg" },
    { code: '#B21', source: "images/B21.jpg" },
    { code: '#B22', source: "images/B22.jpg" },
    { code: '#B23', source: "images/B23.jpg" },
    { code: '#B24', source: "images/B24.jpg" },
    { code: '#B25', source: "images/B25.jpg" },
    { code: '#B26', source: "images/B26.jpg" },
    { code: '#B27', source: "images/B27.jpg" },
    { code: '#B28', source: "images/B28.jpg" },
    { code: '#B29', source: "images/B29.jpg" },
    { code: '#B30', source: "images/B30.jpg" },
    { code: '#B31', source: "images/B31.jpg" },
    { code: '#B32', source: "images/B32.jpg" },
    { code: '#B33', source: "images/B33.jpg" },
    { code: '#B34', source: "images/B34.jpg" },
    { code: '#B35', source: "images/B35.jpg" },
    { code: '#B36', source: "images/B36.jpg" },
    { code: '#B37', source: "images/B37.jpg" },
    { code: '#B38', source: "images/B38.jpg" },
    { code: '#B39', source: "images/B39.jpg" },
    { code: '#B40', source: "images/B40.jpg" },
    { code: '#B41', source: "images/B41.jpg" },
    { code: '#B42', source: "images/B42.jpg" },
    { code: '#B43', source: "images/B43.jpg" },
    { code: '#B44', source: "images/B44.jpg" }, 
    // { code: '#B45', source: "images/B45.jpg" },
    // { code: '#B46', source: "images/B46.jpg" },
    // { code: '#B47', source: "images/B47.jpg" },
    // { code: '#B48', source: "images/B48.jpg" },

  ];


for (let i = 0; i < list.length; i++) {
    
    
    const myGrids = [];
    myGrids[i] = document.createElement("div");
    myGrids[i].className = "col-sm-6 col-lg-4 col-xl-3 col-xxl-2 p-1";

    const myCards = [];
    myCards[i] = document.createElement("div");
    myCards[i].className = "card";

    const myImgs = [];
    myImgs[i] = document.createElement("img");
    myImgs[i].className = "card-img-top";

    const myCardBodies = [];
    myCardBodies[i] = document.createElement("div");
    myCardBodies[i].className = "card-body";
 
    const myCardTexts = [];
    myCardTexts[i] = document.createElement("p");
    myCardTexts[i].className = "card-text hi";    

    const myOrderButtons = [];
    myOrderButtons[i] = document.createElement("a");
    myOrderButtons[i].className = "btn btn-warning";
    myOrderButtons[i].href="#";
    const myOrderNowTexts = [];
    myOrderNowTexts[i] = document.createTextNode("Order Now"); 

    const cakeIds = [];
    cakeIds[i] = document.createTextNode(list[i].code); 
    myImgs[i].src = list[i].source;    



    document.body.appendChild(myContainer);
    myContainer.appendChild(myRow);
    myRow.appendChild(myGrids[i]);
    myGrids[i].appendChild(myCards[i]);
    myCards[i].appendChild(myImgs[i]);
    myCards[i].appendChild(myCardBodies[i]);
    myCardBodies[i].appendChild(myCardTexts[i]);
    myCardTexts[i].appendChild(cakeIds[i]);
    myCardBodies[i].appendChild(myOrderButtons[i]);
    myOrderButtons[i].appendChild(myOrderNowTexts[i]);    
  }

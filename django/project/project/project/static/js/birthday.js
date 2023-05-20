
let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";


const list = [
    { code: '#B01', source: "../../../../static/images/birthday/images/B01.JPG" },
    { code: '#B02', source: "../../../../static/images/birthday/images/B02.jpg" },
    { code: '#B03', source: "../../../../static/images/birthday/images/B03.jpg" },
    { code: '#B04', source: "../../../../static/images/birthday/images/B04.jpg" },
    { code: '#B05', source: "../../../../static/images/birthday/images/B05.jpg" },
    { code: '#B06', source: "../../../../static/images/birthday/images/B06.jpg" },
    { code: '#B07', source: "../../../../static/images/birthday/images/B07.jpg" },
    { code: '#B08', source: "../../../../static/images/birthday/images/B08.png" },
    { code: '#B09', source: "../../../../static/images/birthday/images/B09.jpg" },
    { code: '#B10', source: "../../../../static/images/birthday/images/B10.png" },
    { code: '#B11', source: "../../../../static/images/birthday/images/B11.jpg" },
    { code: '#B12', source: "../../../../static/images/birthday/images/B12.jpg" },
    { code: '#B13', source: "../../../../static/images/birthday/images/B13.jpg" },
    { code: '#B14', source: "../../../../static/images/birthday/images/B14.jpg" },
    { code: '#B15', source: "../../../../static/images/birthday/images/B15.png" },
    { code: '#B16', source: "../../../../static/images/birthday/images/B16.jpg" },
    { code: '#B17', source: "../../../../static/images/birthday/images/B17.jpg" },
    { code: '#B18', source: "../../../../static/images/birthday/images/B18.jpg" },
    { code: '#B19', source: "../../../../static/images/birthday/images/B19.jpg" },
    { code: '#B20', source: "../../../../static/images/birthday/images/B20.jpg" },
    { code: '#B21', source: "../../../../static/images/birthday/images/B21.png" },
    { code: '#B22', source: "../../../../static/images/birthday/images/B22.jpg" },
    { code: '#B23', source: "../../../../static/images/birthday/images/B23.png" },
    { code: '#B24', source: "../../../../static/images/birthday/images/B24.jpg" },
    { code: '#B25', source: "../../../../static/images/birthday/images/B25.png" },
    { code: '#B26', source: "../../../../static/images/birthday/images/B26.png" },
    { code: '#B27', source: "../../../../static/images/birthday/images/B27.jpg" },
    { code: '#B28', source: "../../../../static/images/birthday/images/B28.jpg" },
    { code: '#B29', source: "../../../../static/images/birthday/images/B29.jpg" },
    { code: '#B30', source: "../../../../static/images/birthday/images/B30.jpg" },
    { code: '#B31', source: "../../../../static/images/birthday/images/B31.png" },
    { code: '#B32', source: "../../../../static/images/birthday/images/B32.png" }
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
    myOrderButtons[i].href="../form/order_now/";
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

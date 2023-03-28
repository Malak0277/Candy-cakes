let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";

const list = [
    { code: '#M01', source: "minis_images/M01.jpg" },
    { code: '#M02', source: "minis_images/M02.jpg" },
    { code: '#M03', source: "minis_images/M03.jpg" },
    { code: '#M04', source: "minis_images/M04.jpg" },
    { code: '#M05', source: "minis_images/M05.jpg" },
    { code: '#M06', source: "minis_images/M06.jpg" },
    { code: '#M07', source: "minis_images/M07.jpg" },
    { code: '#M08', source: "minis_images/M08.jpg" },
    { code: '#M09', source: "minis_images/M09.jpg" },
    { code: '#M10', source: "minis_images/M10.jpg" },
    { code: '#M11', source: "minis_images/M11.jpg" },
    { code: '#M12', source: "minis_images/M12.jpg" },
    { code: '#M13', source: "minis_images/M13.jpg" },
    { code: '#M14', source: "minis_images/M14.jpg" }
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










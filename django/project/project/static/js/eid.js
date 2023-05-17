let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";


const list = [
    { code: '#E01', source: "eid_images/E01.jpeg" },
    { code: '#E02', source: "eid_images/E02.jpeg" },
    { code: '#E03', source: "eid_images/E03.jpeg" },
    { code: '#E04', source: "eid_images/E04.jpeg" },
    { code: '#E05', source: "eid_images/E05.jpeg" },
    { code: '#E06', source: "eid_images/E06.jpeg" },
    { code: '#E07', source: "eid_images/E07.jpeg" },
    { code: '#E08', source: "eid_images/E08.jpeg" },
    { code: '#E09', source: "eid_images/E09.jpeg" },
    { code: '#E10', source: "eid_images/E10.jpeg" },
    { code: '#E11', source: "eid_images/E11.jpeg" }
]

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
    myOrderButtons[i].href="form/order_now/";
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










let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";


const list = [
    { code: '#W01', source: "images/W01.jpeg" },
    { code: '#W02', source: "images/W02.jpeg" },
    { code: '#W03', source: "images/W03.jpeg" },
    { code: '#W04', source: "images/W04.jpeg" },
    { code: '#W05', source: "images/W05.jpeg" },
    { code: '#W06', source: "images/W06.jpeg" },
    { code: '#W07', source: "images/W07.jpeg" },
    { code: '#W08', source: "images/W08.jpeg" },
    { code: '#W09', source: "images/W09.jpeg" },
    { code: '#W10', source: "images/W10.jpeg" },
    { code: '#W11', source: "images/W11.jpeg" },
    { code: '#W12', source: "images/W12.jpeg" },
    { code: '#W13', source: "wedding subpage modified/images/W13.jpeg" },
    { code: '#W14', source: "wedding subpage modified/images/W14.jpeg" },
    { code: '#W15', source: "wedding subpage modified/images/W15.jpeg" },
    { code: '#W16', source: "wedding subpage modified/images/W16.jpeg" },
    { code: '#W17', source: "wedding subpage modified/images/W17.jpeg" },
    { code: '#W18', source: "wedding subpage modified/images/W18.jpeg" },
    { code: '#W19', source: "wedding subpage modified/images/W19.jpeg" },
    { code: '#W20', source: "wedding subpage modified/images/W20.jpeg" },
    { code: '#W21', source: "wedding subpage modified/images/W21.jpeg" },
    { code: '#W22', source: "wedding subpage modified/images/W22.jpeg" },
    { code: '#W23', source: "wedding subpage modified/images/W23.jpeg" },
    { code: '#W24', source: "wedding subpage modified/images/W24.jpeg" },
    { code: '#W25', source: "wedding subpage modified/images/W25.jpeg" },
    { code: '#W26', source: "wedding subpage modified/images/W26.jpeg" },
    { code: '#W27', source: "wedding subpage modified/images/W27.jpeg" },
    { code: '#W28', source: "wedding subpage modified/images/W28.jpeg" },
    { code: '#W29', source: "wedding subpage modified/images/W29.jpeg" },
    { code: '#W30', source: "wedding subpage modified/images/W30.jpeg" },
    { code: '#W31', source: "wedding subpage modified/images/W31.jpeg" }
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










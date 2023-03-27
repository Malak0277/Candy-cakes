let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";


const list = [
    { code: '#W01', source: "" },
    { code: '#W02', source: "" },
    { code: '#W03', source: "" },
    { code: '#W04', source: "" },
    { code: '#W05', source: "" },
    { code: '#W06', source: "" },
    { code: '#W07', source: "" },
    { code: '#W08', source: "" },
    { code: '#W09', source: "" },
    { code: '#W10', source: "" },
    { code: '#W11', source: "" },
    { code: '#W12', source: "" },
    { code: '#W13', source: "" },
    { code: '#W14', source: "" },
    { code: '#W15', source: "" },
    { code: '#W16', source: "" },
    { code: '#W17', source: "" },
    { code: '#W18', source: "" },
    { code: '#W19', source: "" },
    { code: '#W20', source: "" },
    { code: '#W21', source: "" },
    { code: '#W22', source: "" },
    { code: '#W23', source: "" },
    { code: '#W24', source: "" },
    { code: '#W25', source: "" },
    { code: '#W26', source: "" },
    { code: '#W27', source: "" },
    { code: '#W28', source: "" },
    { code: '#W29', source: "" },
    { code: '#W30', source: "" },
    { code: '#W31', source: "" }
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










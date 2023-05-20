let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";


const list = [
    { code: '#W01', source: "../../../static/images/wedding/images/W01.jpeg" },
    { code: '#W02', source: "../../../static/images/wedding/images/W02.jpeg" },
    { code: '#W03', source: "../../../static/images/wedding/images/W03.jpeg" },
    { code: '#W04', source: "../../../static/images/wedding/images/W04.jpeg" },
    { code: '#W05', source: "../../../static/images/wedding/images/W05.jpeg" },
    { code: '#W06', source: "../../../static/images/wedding/images/W06.jpeg" },
    { code: '#W07', source: "../../../static/images/wedding/images/W07.jpeg" },
    { code: '#W08', source: "../../../static/images/wedding/images/W08.jpeg" },
    { code: '#W09', source: "../../../static/images/wedding/images/W09.jpeg" },
    { code: '#W10', source: "../../../static/images/wedding/images/W10.jpeg" },
    { code: '#W11', source: "../../../static/images/wedding/images/W11.jpeg" },
    { code: '#W12', source: "../../../static/images/wedding/images/W12.jpeg" },
    { code: '#W13', source: "../../../static/images/wedding/images/W13.jpeg" },
    { code: '#W14', source: "../../../static/images/wedding/images/W14.jpeg" },
    { code: '#W15', source: "../../../static/images/wedding/images/W15.jpeg" },
    { code: '#W16', source: "../../../static/images/wedding/images/W16.jpeg" },
    { code: '#W17', source: "../../../static/images/wedding/images/W17.jpeg" },
    { code: '#W18', source: "../../../static/images/wedding/images/W18.jpeg" },
    { code: '#W19', source: "../../../static/images/wedding/images/W19.jpeg" },
    { code: '#W20', source: "../../../static/images/wedding/images/W20.jpeg" },
    { code: '#W21', source: "../../../static/images/wedding/images/W21.jpeg" },
    { code: '#W22', source: "../../../static/images/wedding/images/W22.jpeg" },
    { code: '#W23', source: "../../../static/images/wedding/images/W23.jpeg" },
    { code: '#W24', source: "../../../static/images/wedding/images/W24.jpeg" },
    { code: '#W25', source: "../../../static/images/wedding/images/W25.jpeg" },
    { code: '#W26', source: "../../../static/images/wedding/images/W26.jpeg" },
    { code: '#W27', source: "../../../static/images/wedding/images/W27.jpeg" },
    { code: '#W28', source: "../../../static/images/wedding/images/W28.jpeg" },
    { code: '#W29', source: "../../../static/images/wedding/images/W29.jpeg" },
    { code: '#W30', source: "../../../static/images/wedding/images/W30.jpeg" },
    { code: '#W31', source: "../../../static/images/wedding/images/W31.jpeg" }
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










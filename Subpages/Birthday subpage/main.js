
let myContainer = document.querySelector(".container");
let myRow = document.createElement("div");
myRow.className = "row";


const list = [
    { code: '#B01', source: "B01.jpeg" },
    { code: '#B02', source: "B02.jpeg" },
    { code: '#B03', source: "B03.jpeg" },
    { code: '#B04', source: "B04.jpeg" },
    { code: '#B05', source: "eid_images/E05.jpeg" },
    { code: '#B06', source: "eid_images/E06.jpeg" },
    { code: '#B07', source: "eid_images/E07.jpeg" },
    { code: '#B08', source: "eid_images/E08.jpeg" },
    { code: '#B10', source: "eid_images/E09.jpeg" },
    { code: '#B11', source: "eid_images/E09.jpeg" },
    { code: '#B12', source: "eid_images/E09.jpeg" },
    { code: '#B13', source: "eid_images/E09.jpeg" },
    { code: '#B14', source: "eid_images/E09.jpeg" },
    { code: '#B15', source: "eid_images/E09.jpeg" },
    { code: '#B16', source: "eid_images/E09.jpeg" },
    { code: '#B17', source: "eid_images/E09.jpeg" },
    { code: '#B18', source: "eid_images/E09.jpeg" },
    { code: '#B19', source: "eid_images/E09.jpeg" },
    { code: '#B20', source: "eid_images/E09.jpeg" },
    { code: '#B21', source: "eid_images/E09.jpeg" },
    { code: '#B22', source: "eid_images/E09.jpeg" },
    { code: '#B23', source: "eid_images/E09.jpeg" },
    { code: '#B24', source: "eid_images/E09.jpeg" },
    { code: '#B25', source: "eid_images/E09.jpeg" },
    { code: '#B26', source: "eid_images/E09.jpeg" },
    { code: '#B27', source: "eid_images/E09.jpeg" },
    { code: '#B28', source: "eid_images/E09.jpeg" },
    { code: '#B29', source: "eid_images/E09.jpeg" },
    { code: '#B30', source: "eid_images/E09.jpeg" },
    { code: '#B31', source: "eid_images/E09.jpeg" },
    { code: '#B32', source: "eid_images/E09.jpeg" },
    { code: '#B33', source: "eid_images/E09.jpeg" },
    { code: '#B34', source: "eid_images/E09.jpeg" },
    { code: '#B35', source: "eid_images/E09.jpeg" },
    { code: '#B36', source: "eid_images/E09.jpeg" },
    { code: '#B37', source: "eid_images/E09.jpeg" },
    { code: '#B38', source: "eid_images/E09.jpeg" },
    { code: '#B39', source: "eid_images/E09.jpeg" },
    { code: '#B40', source: "eid_images/E09.jpeg" },
    { code: '#B41', source: "eid_images/E09.jpeg" },
    { code: '#B42', source: "eid_images/E09.jpeg" },
    { code: '#B43', source: "eid_images/E09.jpeg" },
    { code: '#B44', source: "eid_images/E09.jpeg" }, 
    { code: '#B45', source: "eid_images/E09.jpeg" },
    { code: '#B46', source: "eid_images/E09.jpeg" },
   

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

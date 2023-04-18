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
    myOrderButtons[i].href="../../Home page/Order Now.html";
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

MUX1: generic map (n) port map (R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, R26, R27, R28, R29, R30, R31, read_sel1, data1);
MUX2: generic map (n) port map (R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, R26, R27, R28, R29, R30, R31, read_sel2, data2);
let x = "R"+0+", ";
for(let i=1 ; i<32; i++) {
  x += "R"+i+", ";
}
console.log(x);

Reg0: FLOPR port map ( write_data, clk, rst, X, R0  );
Reg1: FLOPR port map ( write_data, clk, rst, X, R1  );
Reg2: FLOPR port map ( write_data, clk, rst, X, R2  );
Reg3: FLOPR port map ( write_data, clk, rst, X, R3  );
Reg4: FLOPR port map ( write_data, clk, rst, X, R4  );
Reg5: FLOPR port map ( write_data, clk, rst, X, R5  );
Reg6: FLOPR port map ( write_data, clk, rst, X, R6  );
Reg7: FLOPR port map ( write_data, clk, rst, X, R7  );
Reg8: FLOPR port map ( write_data, clk, rst, X, R8  );
Reg9: FLOPR port map ( write_data, clk, rst, X, R9  );
Reg10: FLOPR port map ( write_data, clk, rst, X, R10  );
Reg11: FLOPR port map ( write_data, clk, rst, X, R11  );
Reg12: FLOPR port map ( write_data, clk, rst, X, R12  );
Reg13: FLOPR port map ( write_data, clk, rst, X, R13  );
Reg14: FLOPR port map ( write_data, clk, rst, X, R14  );
Reg15: FLOPR port map ( write_data, clk, rst, X, R15  );
Reg16: FLOPR port map ( write_data, clk, rst, X, R16  );
Reg17: FLOPR port map ( write_data, clk, rst, X, R17  );
Reg18: FLOPR port map ( write_data, clk, rst, X, R18  );
Reg19: FLOPR port map ( write_data, clk, rst, X, R19  );
Reg20: FLOPR port map ( write_data, clk, rst, X, R20  );
Reg21: FLOPR port map ( write_data, clk, rst, X, R21  );
Reg22: FLOPR port map ( write_data, clk, rst, X, R22  );
Reg23: FLOPR port map ( write_data, clk, rst, X, R23  );
Reg24: FLOPR port map ( write_data, clk, rst, X, R24  );
Reg25: FLOPR port map ( write_data, clk, rst, X, R25 );
Reg26: FLOPR port map ( write_data, clk, rst, X, R26  );
Reg27: FLOPR port map ( write_data, clk, rst, X, R27  );
Reg28: FLOPR port map ( write_data, clk, rst, X, R28  );
Reg29: FLOPR port map ( write_data, clk, rst, X, R29 );
Reg30: FLOPR port map ( write_data, clk, rst, X, R30 );
Reg31: FLOPR port map ( write_data, clk, rst, X, R31 );







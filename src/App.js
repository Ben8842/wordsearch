import React, { Component } from "react";
import "./App.css";

class Building extends Component {
  constructor(props) {
    super(props);

    var alphArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }

    shuffle(alphArray);

    var randomWords = require("random-words");

    var swords = randomWords({ exactly: 5, maxLength: 7 });
    var vwords = randomWords({ exactly: 5, maxLength: 7 });
    console.log(swords);

    function charSplit(stringy) {
      var t;
      var q = [];
      for (t = 0; t < stringy.length; t++) {
        q.push(stringy.charAt(t).toUpperCase());
      }
      return q;
    }

    var objSol = [
      charSplit(swords[0]),
      charSplit(swords[1]),
      charSplit(swords[2]),
      charSplit(swords[3]),
      charSplit(swords[4]),
    ];

    var objVSol = [
      charSplit(vwords[0]),
      charSplit(vwords[1]),
      charSplit(vwords[2]),
      charSplit(vwords[3]),
      charSplit(vwords[4]),
    ];

    var sizing = this.props.sizeValue;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var sizeArray = [];
    var n;
    for (n = 0; n < sizing; n++) {
      if (n < 4) {
        sizeArray.push(n);
      } else if (n > 11) {
        sizeArray.push(n);
      }
    }

    shuffle(sizeArray);

    var vcalcH = [];

    var d;
    for (d = 0; d < sizing; d++) {
      vcalcH.push(d);
    }
    shuffle(vcalcH);

    var target = [
      randomNumber(0, sizing - objSol[0].length),
      randomNumber(0, sizing - objSol[1].length),
      randomNumber(0, sizing - objSol[2].length),
      randomNumber(0, sizing - objSol[3].length),
      randomNumber(0, sizing - objSol[4].length),
    ];

    var vcalc = [
      randomNumber(4 + objVSol[0].length, 11),
      randomNumber(4 + objVSol[1].length, 11),
      randomNumber(4 + objVSol[2].length, 11),
      randomNumber(4 + objVSol[3].length, 11),
      randomNumber(4 + objVSol[4].length, 11),
    ];

    this.state = {
      showInfo: false,
      xCoor: null,
      yCoor: null,
      size: 0,
      choicesX: [],
      choicesY: [],
      conflict: false,
      iChoice: false,
      iChoiceQ: false,
      alphaRand: alphArray,
      secretWords: swords,
      secretVords: vwords,
      gridStatus: [],
      secretObj: objSol,
      secretVObj: objVSol,
      ADJ: sizeArray,
      //this is the 'random' adjustment for x coordinate for horizontal word
      sizes: sizing,
      ADJH: target,
      //this is the 'random' adjustment for y coordinate for horizontal word
      VADJ: vcalc,
      VADJH: vcalcH,
      wordFound: false,
      foundH: [],
      foundHV: [],
    };
  }

  resethome() {
    var alphArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }

    shuffle(alphArray);

    var randomWords = require("random-words");

    var swords = randomWords({ exactly: 5, maxLength: 7 });
    var vwords = randomWords({ exactly: 5, maxLength: 7 });
    console.log(swords);

    function charSplit(stringy) {
      var t;
      var q = [];
      for (t = 0; t < stringy.length; t++) {
        q.push(stringy.charAt(t).toUpperCase());
      }
      return q;
    }

    var objSol = [
      charSplit(swords[0]),
      charSplit(swords[1]),
      charSplit(swords[2]),
      charSplit(swords[3]),
      charSplit(swords[4]),
    ];

    var objVSol = [
      charSplit(vwords[0]),
      charSplit(vwords[1]),
      charSplit(vwords[2]),
      charSplit(vwords[3]),
      charSplit(vwords[4]),
    ];

    var sizing = this.props.sizeValue;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var sizeArray = [];
    var n;
    for (n = 0; n < sizing; n++) {
      if (n < 4) {
        sizeArray.push(n);
      } else if (n > 11) {
        sizeArray.push(n);
      }
    }

    shuffle(sizeArray);

    var vcalcH = [];

    var d;
    for (d = 0; d < sizing; d++) {
      vcalcH.push(d);
    }
    shuffle(vcalcH);

    var target = [
      randomNumber(0, sizing - objSol[0].length),
      randomNumber(0, sizing - objSol[1].length),
      randomNumber(0, sizing - objSol[2].length),
      randomNumber(0, sizing - objSol[3].length),
      randomNumber(0, sizing - objSol[4].length),
    ];

    var vcalc = [
      randomNumber(4 + objVSol[0].length, 11),
      randomNumber(4 + objVSol[1].length, 11),
      randomNumber(4 + objVSol[2].length, 11),
      randomNumber(4 + objVSol[3].length, 11),
      randomNumber(4 + objVSol[4].length, 11),
    ];

    this.setState = (state) => {
      return {
        showInfo: false,
        xCoor: null,
        yCoor: null,
        size: 0,
        choicesX: [],
        choicesY: [],
        conflict: false,
        iChoice: false,
        iChoiceQ: false,
        alphaRand: alphArray,
        secretWords: swords,
        secretVords: vwords,
        gridStatus: [],
        secretObj: objSol,
        secretVObj: objVSol,
        ADJ: sizeArray,
        //this is the 'random' adjustment for x coordinate for horizontal word
        sizes: sizing,
        ADJH: target,
        //this is the 'random' adjustment for y coordinate for horizontal word
        VADJ: vcalc,
        VADJH: vcalcH,
        wordFound: false,
        foundH: [],
        foundHV: [],
      };
    };
  }

  showCode(x, y, sizes, level, findex, num) {
    var {
      showInfo,
      xCoor,
      yCoor,
      isChess,
      boardS,
      chessCodeLetter,
      chessCodeNumber,
      choicesX,
      choicesY,
      numOfQueens,
      solved8,
      conflict,
      alphaRand,
    } = this.state;
    this.setState((state) => {
      const holderX = [...state.choicesX, x];
      const holderY = [...state.choicesY, y];

      return {
        showInfo: true,
        xCoor: x,
        yCoor: y,
        isChess: false,
        choicesX: holderX,
        choicesY: holderY,
        iChoice: false,
        iChoiceQ: false,
      };
    });
  }

  /*foundWord(x, y, size, level, findex, num) {
    .log("you found one!");
    var {
      showInfo,
      xCoor,
      yCoor,
      isChess,
      boardS,
      chessCodeLetter,
      chessCodeNumber,
      choicesX,
      choicesY,
      numOfQueens,
      solved8,
      conflict,
      alphaRand,
      wordFound,
    } = this.state;
    const holderX = [...state.choicesX, x];
    const holderY = [...state.choicesY, y];
    this.setState((state) => {
      return { wordFound: true, choicesX: holderX, choicesY: holderY };
    });
  }*/

  foundWord(x, y, sizes, level, findex, num, rangeH, rangeL) {
    var { secretWords, foundH, choicesX, choicesY } = this.state;
    if ((level == 0) | (level == 1)) {
      const boxX = [];
      const boxY = [];
      var i = secretWords[num].length;
      var u;
      var s = sizes * y;

      var t = rangeL - s;

      for (u = 0; u < i; u++) {
        boxX.push(t + u);
        boxY.push(y);
      }

      this.setState((state) => {
        const holderX = [
          ...state.choicesX,
          boxX[0],
          boxX[1],
          boxX[2],
          boxX[3],
          boxX[4],
          boxX[5],
          boxX[6],
        ];
        const holderY = [
          ...state.choicesY,
          boxY[0],
          boxY[1],
          boxY[2],
          boxY[3],
          boxY[4],
          boxY[5],
          boxY[6],
        ];

        const foundHold = [...state.foundH, secretWords[num]];

        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundH: foundHold,
        };
      });
    } else {
      this.setState((state) => {
        const holderX = [...state.choicesX, x];
        const holderY = [...state.choicesY, y];

        const foundHold = [...state.foundH, secretWords[num]];

        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundH: foundHold,
        };
      });
    }
    /*var wide = secretWords[num].length;
    var c;
    var p;
    while (c < wide) {
      c++;
      x++;
      if (y * sizes + x < rangeH) {
        p++;
      }
    }
    x = x - wide;
    var d;
    var e;
    while (d < wide) {
      d++;
      x--;
      if (y * sizes + x > rangeL) {
        e++;
      }
    }
    var q;
    for (q = 0; q < p; q++) {
      console.log(e + "" + p);
      this.setState((prevstate) => {
        choicesX = [...prevstate.choicesX, x + q];
        choicesY = [...prevstate.choicesY, y];
      });
    }*/
  }

  foundWordV(x, y, sizes, level, findex, num, leveldown, start) {
    var {
      secretWords,
      secretVords,
      foundH,
      foundHV,
      choicesX,
      choicesY,
    } = this.state;
    if ((level == 0) | (level == 1)) {
      const boxX = [];
      const boxY = [];
      var i = secretVords[num].length;
      var u;
      var s = sizes * y;
      // console.log(sizes * y + "sizes * y");
      //var t = rangeL - s;
      var realstart = Math.floor(start / sizes);

      for (u = 0; u < i; u++) {
        boxX.push(x);
        boxY.push(realstart - u);
      }

      this.setState((state) => {
        const holderX = [
          ...state.choicesX,
          boxX[0],
          boxX[1],
          boxX[2],
          boxX[3],
          boxX[4],
          boxX[5],
          boxX[6],
        ];
        const holderY = [
          ...state.choicesY,
          boxY[0],
          boxY[1],
          boxY[2],
          boxY[3],
          boxY[4],
          boxY[5],
          boxY[6],
        ];

        const foundHold = [...state.foundH, secretVords[num]];

        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundH: foundHold,
        };
      });
    } else {
      this.setState((state) => {
        const holderX = [...state.choicesX, x];
        const holderY = [...state.choicesY, y];

        const foundHold = [...state.foundH, secretWords[num]];

        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: false,
          choicesX: holderX,
          choicesY: holderY,
          iChoice: false,
          iChoiceQ: false,
          foundH: foundHold,
        };
      });
    }
  }

  renderSquare(x, y) {
    var {
      choicesX,
      choicesY,
      alphaRand,
      secretObj,
      secretVObj,
      VADJ,
      ADJ,
      sizes,
      ADJH,
      VADJH,
    } = this.state;
    var run = x;
    var rise = y;
    //var sizes = this.props.sizeValue;
    var level = 0;
    var superIndex = y * sizes + x;
    var z;
    for (z = 0; z < choicesX.length; z++) {
      if (choicesX[z] == x && choicesY[z] == y) {
        level = 1;
      } /*else if ((choicesX[z] == x) | (choicesY[z] == y)) {
        level = 2;
      }  else if (
        Math.abs(choicesX[z] - x) == Math.abs(choicesY[z] - y) &&
        xCoor != null
      ) {
        level = 3;
      }*/
    }

    //random horizontal solutions
    var v0 = ADJ[0] * sizes;
    var h0 = ADJH[0];
    var r0 = secretObj[0].length;
    var r0c = v0 + h0 + r0;
    var vh0c = v0 + h0;
    var uc0 = superIndex - h0 - v0;

    var v1 = ADJ[1] * sizes;
    var h1 = ADJH[1];
    var r1 = secretObj[1].length;
    var r1c = v1 + h1 + r1;
    var vh1c = v1 + h1;
    var uc1 = superIndex - h1 - v1;

    var v2 = ADJ[2] * sizes;
    var h2 = ADJH[2];
    var r2 = secretObj[2].length;
    var r2c = v2 + h2 + r2;
    var vh2c = v2 + h2;
    var uc2 = superIndex - h2 - v2;

    var v3 = ADJ[3] * sizes;
    var h3 = ADJH[3];
    var r3 = secretObj[3].length;
    var r3c = v3 + h3 + r3;
    var vh3c = v3 + h3;
    var uc3 = superIndex - h3 - v3;

    var v4 = ADJ[4] * sizes;
    var h4 = ADJH[4];
    var r4 = secretObj[4].length;
    var r4c = v4 + h4 + r4;
    var vh4c = v4 + h4;
    var uc4 = superIndex - h4 - v4;

    //VERTICAL WORD ADJUSTMENT CALCULATIONS BELOW HERE

    var v5 = VADJ[0] * sizes;
    var h5 = VADJH[0];
    var r5 = secretVObj[0].length;
    var r5c = v5 + h5 + r5;
    var vh5c = v5 + h5;
    var uc5 = superIndex - h5 - v5;
    var prize = z * sizes;
    var prizes = vh5c - prize;

    var v6 = VADJ[1] * sizes;
    var h6 = VADJH[1];
    var r6 = secretVObj[1].length;
    var r6c = v6 + h6 + r6;
    var vh6c = v6 + h6;
    var uc6 = superIndex - h6 - v6;

    var v7 = VADJ[2] * sizes;
    var h7 = VADJH[2];
    var r7 = secretVObj[2].length;
    var r7c = v7 + h7 + r7;
    var vh7c = v7 + h7;
    var uc7 = superIndex - h7 - v7;

    var v8 = VADJ[3] * sizes;
    var h8 = VADJH[3];
    var r8 = secretVObj[3].length;
    var r8c = v8 + h8 + r8;
    var vh8c = v8 + h8;
    var uc8 = superIndex - h8 - v8;

    var v9 = VADJ[4] * sizes;
    var h9 = VADJH[4];
    var r9 = secretVObj[4].length;
    var r9c = v9 + h9 + r9;
    var vh9c = v9 + h9;
    var uc9 = superIndex - h9 - v9;

    if (level == 0) {
      var findex = (x * sizes + y) % 26;
      var z;
      for (z = 0; z < secretVObj[0].length; z++) {
        var prize = z * sizes;
        var prizes = vh5c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareM"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 0, z, vh5c)
              }
            >
              {secretVObj[0][z]}
            </button>
          );
        }
      }
      for (z = 0; z < secretVObj[1].length; z++) {
        var prize = z * sizes;
        var prizes = vh6c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareM"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 1, z, vh6c)
              }
            >
              {secretVObj[1][z]}
            </button>
          );
        }
      }

      for (z = 0; z < secretVObj[2].length; z++) {
        var prize = z * sizes;
        var prizes = vh7c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareM"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 2, z, vh7c)
              }
            >
              {secretVObj[2][z]}
            </button>
          );
        }
      }

      for (z = 0; z < secretVObj[3].length; z++) {
        var prize = z * sizes;
        var prizes = vh8c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareM"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 3, z, vh8c)
              }
            >
              {secretVObj[3][z]}
            </button>
          );
        }
      }

      for (z = 0; z < secretVObj[4].length; z++) {
        var prize = z * sizes;
        var prizes = vh9c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareM"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 4, z, vh9c)
              }
            >
              {secretVObj[4][z]}
            </button>
          );
        }
      }

      if (superIndex < r0c && superIndex >= vh0c) {
        return (
          <button
            id="squareM"
            codex={x}
            codey={y}
            onClick={() =>
              this.foundWord(run, rise, sizes, level, findex, 0, r0c, vh0c)
            }
          >
            {secretObj[0][uc0]}
          </button>
        );
      } else if (superIndex < r1c && superIndex >= vh1c) {
        return (
          <button
            id="squareMM"
            codex={x}
            codey={y}
            onClick={() =>
              this.foundWord(run, rise, sizes, level, findex, 1, r1c, vh1c)
            }
          >
            {secretObj[1][uc1]}
          </button>
        );
      } else if (superIndex < r2c && superIndex >= vh2c) {
        return (
          <button
            id="squareMMM"
            codex={x}
            codey={y}
            onClick={() =>
              this.foundWord(run, rise, sizes, level, findex, 2, r2c, vh2c)
            }
          >
            {secretObj[2][uc2]}
          </button>
        );
      } else if (superIndex < r3c && superIndex >= vh3c) {
        return (
          <button
            id="squareMMMM"
            codex={x}
            codey={y}
            onClick={() =>
              this.foundWord(run, rise, sizes, level, findex, 3, r3c, vh3c)
            }
          >
            {secretObj[3][uc3]}
          </button>
        );
      } else if (superIndex < r4c && superIndex >= vh4c) {
        return (
          <button
            id="squareMMMMM"
            codex={x}
            codey={y}
            onClick={() =>
              this.foundWord(run, rise, sizes, level, findex, 4, r4c, vh4c)
            }
          >
            {secretObj[4][uc4]}
          </button>
        );
      } else
        return (
          <button
            id="square"
            codex={x}
            codey={y}
            onClick={() => this.showCode(run, rise, sizes, level, findex, 5)}
          >
            {alphaRand[findex]}
          </button>
        );
    } else if (level == 1) {
      var findex = (x * sizes + y) % 26;
      var z;
      for (z = 0; z < secretVObj[0].length; z++) {
        var prize = z * sizes;
        var prizes = vh5c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareMfound"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 0, z, vh5c)
              }
            >
              {secretVObj[0][z]}
            </button>
          );
        }
      }
      for (z = 0; z < secretVObj[1].length; z++) {
        var prize = z * sizes;
        var prizes = vh6c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareMMfound"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 1, z, vh6c)
              }
            >
              {secretVObj[1][z]}
            </button>
          );
        }
      }

      for (z = 0; z < secretVObj[2].length; z++) {
        var prize = z * sizes;
        var prizes = vh7c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareMMMfound"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 2, z, vh7c)
              }
            >
              {secretVObj[2][z]}
            </button>
          );
        }
      }

      for (z = 0; z < secretVObj[3].length; z++) {
        var prize = z * sizes;
        var prizes = vh8c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareMMMMfound"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 3, z, vh8c)
              }
            >
              {secretVObj[3][z]}
            </button>
          );
        }
      }

      for (z = 0; z < secretVObj[4].length; z++) {
        var prize = z * sizes;
        var prizes = vh9c - prize;

        if (superIndex == prizes) {
          return (
            <button
              id="squareMMMMMfound"
              codex={x}
              codey={y}
              onClick={() =>
                this.foundWordV(run, rise, sizes, level, findex, 4, z, vh9c)
              }
            >
              {secretVObj[4][z]}
            </button>
          );
        }
      }

      if (superIndex < r0c && superIndex >= vh0c) {
        return (
          <button
            id="squareMfound"
            codex={x}
            codey={y}
            onClick={() =>
              this.foundWordV(run, rise, sizes, level, findex, 0, r0c, vh0c)
            }
          >
            {secretObj[0][uc0]}
          </button>
        );
      } else if (superIndex < r1c && superIndex >= vh1c) {
        return (
          <button
            id="squareMMfound"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 1)}
          >
            {secretObj[1][uc1]}
          </button>
        );
      } else if (superIndex < r2c && superIndex >= vh2c) {
        return (
          <button
            id="squareMMMfound"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 2)}
          >
            {secretObj[2][uc2]}
          </button>
        );
      } else if (superIndex < r3c && superIndex >= vh3c) {
        return (
          <button
            id="squareMMMMfound"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 3)}
          >
            {secretObj[3][uc3]}
          </button>
        );
      } else if (superIndex < r4c && superIndex >= vh4c) {
        return (
          <button
            id="squareMMMMMfound"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 4)}
          >
            {secretObj[4][uc4]}
          </button>
        );
      } else
        return (
          <button
            id="squarered"
            codex={x}
            codey={y}
            onClick={() => this.showCode(run, rise, sizes, level, findex, 5)}
          >
            {alphaRand[findex]}
          </button>
        ); /*else if (level == 2) {
      return (
        <button
          id="squarePath"
          codex={x}
          codey={y}
          onClick={() => this.invalidChoice(run, rise, sizes, level)}
        >
          P
        </button>
      );
    } else if (level == 3) {
      return (
        <button
          id="squareDiagonal"
          codex={x}
          codey={y}
          onClick={() => this.invalidChoice(run, rise, sizes, level)}
        >
          D
        </button>
      );
    }*/
    }
  }
  render() {
    var {
      showInfo,
      xCoor,
      yCoor,
      choicesX,
      choicesY,
      numOfQueens,
      iChoice,
      iChoiceQ,
      secretWords,
      secretVords,
      gridStatus,
      foundH,
    } = this.state;

    const boardA = this.props.sizeValue;

    const elementS = [];
    const elementZ = [];

    var x;
    var y;

    for (y = 0; y < boardA; y++) {
      for (x = 0; x < boardA; x++) {
        elementS.push(<span>{this.renderSquare(x, boardA - y - 1)}</span>);
      }
      elementZ.push(
        <div className="newLine">
          <span>
            {elementS.map((value, index) => {
              return <span key={index}>{value}</span>;
            })}
          </span>
        </div>
      );
      for (x = 0; x < boardA; x++) {
        elementS.pop();
      }
    }

    const moreDisplay = (
      <div>
        <ol>
          {foundH.map((value, index) => {
            return (
              <li key={index} id="found">
                <button id="worddiscover">{value}</button>
              </li>
            );
          })}
        </ol>
      </div>
    );

    const displayLocation = (
      <div class="column">
        <p>Search for Ten Words</p>
        <p>
          <span>{moreDisplay}</span>( {xCoor} , {yCoor} )
        </p>
      </div>
    );

    const noneDisplay = (
      <div class="column">
        <p>Search for Ten Words</p>
      </div>
    );

    const winchecker = <span>Number of words found = {foundH.length}</span>;

    const winpuzzle = (
      <span>
        YOU WIN THE PUZZLE! Try Again!
        <button
          type="button"
          class="button"
          onClick={() => window.location.reload(false)}
        >
          RESET Your Puzzle
        </button>
      </span>
    );

    const losepuzzle = (
      <span>
        YOU LOSE THE PUZZLE! Please Try Again.
        <button
          type="button"
          class="button"
          onClick={() => window.location.reload(false)}
        >
          RESET Your Puzzle
        </button>
      </span>
    );

    const celebrate = (
      <div>
        <div>YOU WIN THE PUZZLE ! ! !</div>
        <div>Try Again!</div>
        <button
          type="button"
          class="button"
          onClick={() => window.location.reload(false)}
        >
          Click Here to Generate a New Puzzle
        </button>
      </div>
    );

    const gridDisplay = (
      <div class="column">
        Search for Ten Words !
        {elementZ.map((value, index) => {
          return <span key={index}>{value}</span>;
        })}
        {foundH.length == 10 ? celebrate : null}
        <div>{winchecker}</div>
      </div>
    );

    return (
      <div id="entireThing">
        <div>
          <button
            type="button"
            class="button"
            onClick={() => window.location.reload(false)}
          >
            Click Here to Generate a New Puzzle
          </button>
        </div>
        <div class="row" id="info">
          {gridDisplay}

          {showInfo ? displayLocation : noneDisplay}
        </div>
        <div></div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 16,
    };
  }
  enterCount() {
    var zvalue = document.getElementById("sizeHere").value;

    this.setState((state) => {
      return { count: zvalue, xCoor: null, yCoor: null };
    });
  }

  render() {
    var { count } = this.state;

    const inputBox = <div></div>;
    return (
      <div>
        <p class="toptitle">Word Search</p>
        <Building sizeValue={count} />
        <div className="HeaderSpot">{inputBox}</div>
      </div>
    );
  }
}

export default App;

/*
 Choose the size of your board
        <form>
          <input type="number" class="button" id="sizeHere"></input>
          <button
            type="button"
            class="button"
            onClick={() => this.enterCount()}
          >
            ENTER
          </button>
        </form>*/

/*  List of coordinates
         <ol>
          {choicesX.map((value, index) => {
            return (
              <li key={index}>
                ( {value} , {choicesY[index]}, {gridStatus[index]} )
              </li>
            );
          })}
        </ol> */

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
    var sizing = this.props.sizeValue;
    console.log(objSol[0].length + "secretObj");
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var sizeArray = [];
    var n;
    for (n = 0; n < sizing; n++) {
      sizeArray.push(n);
    }

    shuffle(sizeArray);

    /*
    var one = randomNumber(0, sizing);
    var two = randomNumber(0, sizing);
    if (one == two) {
      two++;
    }
    var three = randomNumber(0, sizing);
    var four = randomNumber(0, sizing);
    var five = randomNumber(0, sizing);
    if (three == one | three == two) {
      var three = three + randomNumber(0, sizing);
    }
    var one = bench % sizing,
    var two = 
    var adjustmentY = [
      bench % sizing,
      (bench + 5) % sizing,
      (bench + 7) % sizing,
      (bench + 11) % sizing,
      (bench + 14) % sizing,
    ];
    console.log(adjustment);
*/

    var target = [
      randomNumber(0, sizing - objSol[0].length),
      randomNumber(0, sizing - objSol[1].length),
      randomNumber(0, sizing - objSol[2].length),
      randomNumber(0, sizing - objSol[3].length),
      randomNumber(0, sizing - objSol[4].length),
    ];

    console.log(objSol);

    console.log(sizeArray + "ADJ");
    console.log(target + "ADJH");
    this.state = {
      showInfo: false,
      xCoor: null,
      yCoor: null,
      isChess: false,
      size: 0,
      chessCodeLetter: "",
      chessCodeNumber: "",
      choicesX: [],
      choicesY: [],
      numOfQueens: 8,
      conflict: false,
      solved8: false,
      iChoice: false,
      iChoiceQ: false,
      alphaRand: alphArray,
      secretWords: swords,
      gridStatus: [],
      secretObj: objSol,
      ADJ: sizeArray,
      sizes: sizing,
      ADJH: target,
      wordFound: false,
      foundH: [],
    };
  }

  resethome() {
    this.setState((state) => {
      return {
        showInfo: false,
        xCoor: null,
        yCoor: null,
        isChess: false,
        boardS: 0,
        chessCodeLetter: "",
        chessCodeNumber: "",
        choicesX: [],
        choicesY: [],
        numOfQueens: 0,
        conflict: false,
        solved8: false,
        gridStatus: [],
        iChoice: false,
        iChoiceQ: false,
      };
    });
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
    console.log("you found one!");
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

  foundWord(x, y, sizes, level, findex, num) {
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
      secretWords,
      foundH,
    } = this.state;
    this.setState((state) => {
      const holderX = [...state.choicesX, x];
      const holderY = [...state.choicesY, y];
      const foundHold = [...state.foundH, secretWords[num]];
      console.log(foundH);
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

  invalidChoice() {
    this.setState((state) => {
      return { iChoice: true };
    });
  }

  invalidChoiceQ() {
    this.setState((state) => {
      return { iChoiceQ: true };
    });
  }

  incrementQ() {
    this.setState((state) => {
      return { numOfQueens: state.numOfQueens + 1 };
    });
  }

  renderSquare(x, y) {
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
      secretWords,
      secretObj,
      ADJ,
      sizes,
      ADJH,
    } = this.state;
    var run = x;
    var rise = y;
    //var sizes = this.props.sizeValue;
    var level = 0;
    var superIndex = y * sizes + x;

    var target = [0];

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

    if (level == 0) {
      var findex = (x * sizes + y) % 26;

      if (superIndex < r0c && superIndex >= vh0c) {
        return (
          <button
            id="squareM"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 0)}
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
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 1)}
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
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 2)}
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
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 3)}
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
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 4)}
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
      // this.incrementQ();
      var findex = (x * sizes + y) % 26;

      if (superIndex < r0c && superIndex >= vh0c) {
        return (
          <button
            id="squareMfound"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 0)}
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
      isChess,
      boardS,
      chessCodeLetter,
      chessCodeNumber,
      choicesX,
      choicesY,
      numOfQueens,
      iChoice,
      iChoiceQ,
      secretWords,
      gridStatus,
      foundH,
    } = this.state;
    console.log(foundH);
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
                {value}
              </li>
            );
          })}
        </ol>
        <ol>
          {choicesX.map((value, index) => {
            return (
              <li key={index}>
                ( {value} , {choicesY[index]}, {gridStatus[index]} )
              </li>
            );
          })}
        </ol>
      </div>
    );

    const someDisplay = (
      <div>
        <ol>
          {choicesX.map((value, index) => {
            return (
              <li key={index}>
                ( {value} , {choicesY[index]} )
              </li>
            );
          })}
        </ol>
      </div>
    );

    const errorChoice = (
      <span id="errorC">
        ! You have chosen a location that conflicts with another Queen's path.
        This choice is not allowed to solve this Queen puzzle. Please choose an
        empty square. !
      </span>
    );

    const errorChoiceQ = (
      <span id="errorC">
        ! You may not place a Queen on top of another Queen. This choice is not
        allowed to solve this Queen puzzle. Please choose an empty square. !
      </span>
    );

    const displayLocation = (
      <div class="column">
        <p>
          Search for Words
          <ul>
            <li>{secretWords[0]}</li>
            <li>{secretWords[1]}</li>
            <li>{secretWords[2]}</li>
            <li>{secretWords[3]}</li>
            <li>{secretWords[4]}</li>
          </ul>
        </p>
        <p>
          <span>{iChoice ? errorChoice : null}</span>
          <span>{iChoiceQ ? errorChoiceQ : null}</span>
          <span>{moreDisplay}</span>( {xCoor} , {yCoor} )
        </p>
      </div>
    );

    const noneDisplay = (
      <div class="column">
        <p>
          Search for Words
          <ul>
            <li>{secretWords[0]}</li>
            <li>{secretWords[1]}</li>
            <li>{secretWords[2]}</li>
            <li>{secretWords[3]}</li>
            <li>{secretWords[4]}</li>
          </ul>
        </p>
      </div>
    );

    const winchecker = <span>Words left = {numOfQueens}</span>;

    const winpuzzle = (
      <span>
        YOU WIN THE PUZZLE! Try Again!{" "}
        <button type="button" class="button" onClick={() => this.resethome()}>
          RESET Your Puzzle
        </button>
      </span>
    );

    const losepuzzle = (
      <span>
        YOU LOSE THE PUZZLE! Please Try Again.
        <button type="button" class="button" onClick={() => this.resethome()}>
          RESET Your Puzzle
        </button>
      </span>
    );

    const gridDisplay = (
      <div class="column">
        {elementZ.map((value, index) => {
          return <span key={index}>{value}</span>;
        })}

        <div>{numOfQueens !== 0 ? winchecker : winpuzzle}</div>
      </div>
    );

    return (
      <div id="entireThing">
        <div>
          <button type="button" class="button" onClick={() => this.resethome()}>
            RESET Puzzle
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

    const inputBox = (
      <div>
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
        </form>
      </div>
    );
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

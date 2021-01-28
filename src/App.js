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

    var objSol = {
      firstSolution: charSplit(swords[0]),
      secondSolution: charSplit(swords[1]),
      thirdSolution: charSplit(swords[2]),
      fourthSolution: charSplit(swords[3]),
      fifthSolution: charSplit(swords[4]),
    };
    var sizing = this.props.sizeValue;
    var bench = Math.floor(Math.random() * 100);
    var adjustment = [
      bench % sizing,
      (bench + 5) % sizing,
      (bench + 7) % sizing,
      (bench + 11) % sizing,
      (bench + 14) % sizing,
    ];
    console.log(adjustment);

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(randomNumber(0, sizing - objSol.firstSolution.length));
    var target = {
      firstSolution: randomNumber(0, sizing - objSol.firstSolution.length),
      secondSolution: randomNumber(0, sizing - objSol.secondSolution.length),
      thirdSolution: randomNumber(0, sizing - objSol.thirdSolution.length),
      fourthSolution: randomNumber(0, sizing - objSol.fourthSolution.length),
      fifthSolution: randomNumber(0, sizing - objSol.fifthSolution.length),
    };
    console.log(target);
    console.log(target.firstSolution);

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
      ADJ: adjustment,
      sizes: sizing,
      ADJH: target,
      wordFound: false,
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

  showCode(x, y, sizes, level, findex) {
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
      if (sizes == 8) {
        var chessArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
        var chessX = chessArray[x];
        var chessY = y + 1;
        var letterChoices = alphaRand[findex];
        const holderX = [...state.choicesX, x];
        const holderY = [...state.choicesY, y];
        const holderG = [...state.gridStatus, letterChoices];
        var newNum = 8 - state.choicesX.length - 1;

        return {
          showInfo: true,
          xCoor: x,
          yCoor: y,
          isChess: true,
          chessCodeLetter: chessX,
          chessCodeNumber: chessY,
          choicesX: holderX,
          choicesY: holderY,
          numOfQueens: newNum,
          iChoice: false,
          iChoiceQ: false,
          gridStatus: holderG,
        };
      } else {
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
      }
    });
  }

  foundWord() {
    console.log("you found one!");
    this.setState((state) => {
      return { wordFound: true };
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

    if (level == 0) {
      var findex = (x * sizes + y) % 26;

      if (
        superIndex < secretObj.firstSolution.length + ADJH.firstSolution &&
        superIndex >= ADJH.firstSolution
      ) {
        return (
          <button
            id="squareM"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 0)}
          >
            {secretObj.firstSolution[superIndex - ADJH.firstSolution]}
          </button>
        );
      } else if (
        superIndex <
          secretObj.secondSolution.length + sizes + ADJH.secondSolution &&
        superIndex >= sizes + ADJH.secondSolution
      ) {
        return (
          <button
            id="squareMM"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 1)}
          >
            {secretObj.secondSolution[superIndex - sizes - ADJH.secondSolution]}
          </button>
        );
      } else if (
        superIndex <
          secretObj.thirdSolution.length +
            ADJH.thirdSolution +
            sizes * ADJ[0] &&
        superIndex >= sizes * ADJ[0] + ADJH.thirdSolution
      ) {
        return (
          <button
            id="squareMMM"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 2)}
          >
            {
              secretObj.thirdSolution[
                superIndex - sizes * ADJ[0] - ADJH.thirdSolution
              ]
            }
          </button>
        );
      } else if (
        superIndex < secretObj.fourthSolution.length + sizes * ADJ[1] &&
        superIndex >= sizes * ADJ[1]
      ) {
        return (
          <button
            id="squareMMMM"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 3)}
          >
            {secretObj.fourthSolution[superIndex - sizes * ADJ[1]]}
          </button>
        );
      } else if (
        superIndex < secretObj.fifthSolution.length + sizes * ADJ[2] &&
        superIndex >= sizes * ADJ[2]
      ) {
        return (
          <button
            id="squareMMMMM"
            codex={x}
            codey={y}
            onClick={() => this.foundWord(run, rise, sizes, level, findex, 4)}
          >
            {secretObj.fifthSolution[superIndex - sizes * ADJ[2]]}
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
      const valueQ = 8 - this.state.numOfQueens;
      var findex = (x * sizes + y) % 26;
      return (
        <button
          id="squareSelected"
          codex={x}
          codey={y}
          onClick={() => this.invalidChoiceQ(run, rise, sizes, level)}
        >
          {superIndex}
        </button>
      );
    } /*else if (level == 2) {
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
        <ul>
          <li>{secretWords[0]}</li>
          <li>{secretWords[1]}</li>
          <li>{secretWords[2]}</li>
          <li>{secretWords[3]}</li>
          <li>{secretWords[4]}</li>
        </ul>
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
          <span>{iChoice ? errorChoice : null}</span>
          <span>{iChoiceQ ? errorChoiceQ : null}</span>
          <span>{isChess ? moreDisplay : someDisplay}</span>( {xCoor} , {yCoor}{" "}
          )
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

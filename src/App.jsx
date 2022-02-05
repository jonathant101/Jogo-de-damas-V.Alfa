import React from 'react';
import './App.css';

export default function App() {
  const [objAnterior, setObjAnterior] = React.useState(false);

  const [onMoviment, setOnMoviment] = React.useState(false);

  //
  const [turn, SetTurn] = React.useState(0);

  // transformar as 24 pecas em obj

  // array pecas brancas
  const [arrayPecasBrancas, SetArrayPecasBrancas] = React.useState([
    {},
    {
      1: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      2: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      3: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      4: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      5: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      6: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      7: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      8: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      9: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      10: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      11: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
    {
      12: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'white',
      },
    },
  ]);

  // array pecas pretas
  const [arrayPecasPretas, SetArrayPecasPretas] = React.useState([
    {},
    {
      1: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      2: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      3: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      4: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      5: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      6: {
        dama: false,
        colunLIne: '',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      7: {
        dama: false,
        colunLIne: 'c7',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      8: {
        dama: false,
        colunLIne: 'a7',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      9: {
        dama: false,
        colunLIne: 'h8',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      10: {
        dama: false,
        colunLIne: 'f8',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      11: {
        dama: false,
        colunLIne: 'd8',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
    {
      12: {
        dama: false,
        colunLIne: 'b8',
        selectd: false,
        onTable: true,
        color: 'black',
      },
    },
  ]);

  // redefinir pedra para indices

  const [arrayTabuleiro, SetArrayTabuleiro] = React.useState([
    // linha 8

    {
      p: 'a8',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'E',
    },

    {
      p: 'b8',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[12],
      borda: false,
    },

    {
      p: 'c8',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'd8',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[11],
      borda: false,
    },

    {
      p: 'e8',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'f8',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[10],
      borda: false,
    },

    {
      p: 'g8',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'h8',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[9],
      borda: 'D',
    },

    // linha 7

    {
      p: 'a7',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[8],
      borda: 'E',
    },

    {
      p: 'b7',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'c7',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[7],
      borda: false,
    },

    {
      p: 'd7',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'e7',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[6],
      borda: false,
    },

    {
      p: 'f7',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'g7',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[5],
      borda: false,
    },

    {
      p: 'h7',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'D',
    },

    // linha 6
    {
      p: 'a6',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'E',
    },

    {
      p: 'b6',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[4],
      borda: false,
    },

    {
      p: 'c6',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'd6',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[3],
      borda: false,
    },

    {
      p: 'e6',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'f6',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[2],
      borda: false,
    },

    {
      p: 'g6',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'h6',
      selected: false,
      color: 'black',
      pedra: 'black',
      objPeca: arrayPecasPretas[1],
      borda: 'D',
    },

    //linha 5
    {
      p: 'a5',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: 'E',
    },

    {
      p: 'b5',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'c5',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'd5',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'e5',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'f5',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'g5',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'h5',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'D',
    },

    //linha 4

    {
      p: 'a4',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'E',
    },

    {
      p: 'b4',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'c4',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'd4',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'e4',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'f4',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'g4',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'h4',
      selected: false,
      color: 'black',
      pedra: false,
      objPeca: '',
      borda: 'D',
    },

    // linha 3
    {
      p: 'a3',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: 'E',
    },

    {
      p: 'b3',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'c3',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'd3',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'e3',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'f3',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'g3',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'h3',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'D',
    },
    // linha 2

    {
      p: 'a2',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'E',
    },

    {
      p: 'b2',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'c2',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'd2',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'e2',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'f2',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'g2',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'h2',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: 'D',
    },

    // linha  1

    {
      p: 'a1',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: 'E',
    },

    {
      p: 'b1',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'c1',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'd1',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'e1',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'f1',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: false,
    },

    {
      p: 'g1',
      selected: false,
      color: 'black',
      pedra: 'white',
      objPeca: '',
      borda: false,
    },

    {
      p: 'h1',
      selected: false,
      color: 'white',
      pedra: false,
      objPeca: '',
      borda: 'D',
    },
  ]);

  const showP = (p) => {
    return p === 'black' ? '🟤 ' : ' ⚪️';
  };

  const Selpeca = (objP, indice) => {
    console.log('indice clicado ' + indice);

    const pSecFilt = arrayTabuleiro.filter((item) =>
      item.selected ? item : null
    );

    const nPecasSelect = pSecFilt.length;

    function clicavel() {
      const elegivel = objP.color === 'black' ? true : false;

      if (objP.pedra && elegivel && nPecasSelect == 0) {
        return !objP.selected;
      } else {
        return false;
      }
    }

    //tentativa array unico

    // verifica se é a mesma peca selecionada
    if (objAnterior.p === objP.p) {
      const newArray = arrayTabuleiro.map((item) =>
        item.p === objP.p
          ? {
              p: objAnterior.p,
              selected: clicavel(),
              color: objAnterior.color,
              pedra: objAnterior.pedra,
              objPeca: objAnterior.objPeca,
              borda: objAnterior.borda,
            }
          : item
      );

      SetTurn(0);

      console.log('mesma Peça');
      setObjAnterior(false);
      SetArrayTabuleiro(newArray);
    } // selecionar peca
    else if (nPecasSelect === 0) {
      const newArray = arrayTabuleiro.map((item) =>
        item.p === objP.p
          ? {
              p: objP.p,
              selected: clicavel(),
              color: objP.color,
              pedra: false,
              objPeca: '',
              borda: objP.borda,
            }
          : item
      );
      SetTurn(1);
      setObjAnterior(objP);
      SetArrayTabuleiro(newArray);
    } else if (
      objP !== objAnterior &&
      turn < 2 &&
      objP.color === 'black' &&
      objP.pedra == false
    ) {
      const newArray = arrayTabuleiro.map((item) =>
        item.p === objP.p
          ? {
              p: objP.p,
              selected: clicavel(),
              color: objP.color,
              pedra: objAnterior.pedra,
              objPeca: objAnterior.objPeca,
              borda: objP.borda,
            }
          : item
      );

      const newArray2 = newArray.map((item) =>
        item.p === objAnterior.p
          ? {
              p: objAnterior.p,
              selected: false,
              color: objAnterior.color,
              pedra: false,
              objPeca: '',
              borda: objAnterior.borda,
            }
          : item
      );

      setObjAnterior(false);
      SetTurn(2);

      SetArrayTabuleiro(newArray2);
    }
  };

  return (
    <div className="tabuleiro">
      {arrayTabuleiro.map((item, index) => (
        <div
          onClick={(e) => Selpeca(item, index)}
          key={item.p}
          className={item.selected ? 'selectdDiv' : item.color}
        >
          <span>{item.pedra ? showP(item.pedra) : ''}</span>
          <p>{index}</p>
        </div>
      ))}
    </div>
  );
}

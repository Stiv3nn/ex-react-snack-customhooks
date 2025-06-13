// 🏆 Snack 1: useSwitch() – Toggle Booleano
// Creare un custom hook per alternare un valore booleano tra true e false.

// Cosa deve fare?

// Inizialmente false.
// Ritorna il valore attuale e una funzione toggle() per cambiarlo.
// Quando toggle() viene chiamato, il valore passa da true → false e viceversa.



// 🏆 Snack 2: useDate() – Ottenere la Data Attuale
// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

// Cosa deve fare?

// Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.



//  Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.

//---------------------------------------------------------------------------------------------------------------------------

// import useSwitch from "./useSwitch";

// function App() {

//   const [isOn, toggle] = useSwitch();

//   return (
//     <div>
//       <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//       <button onClick={toggle}>Cambia stato</button>
//     </div>
//   )
// }

// export default App;

//---------------------------------------------------------------------------------------------------------------------------

// import useDate from "./useDate";

// function App() {
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       {/* toLocaleString() E' UN METODO DELLE DATE PER VEDERE LA STRINGA DELLA MIA DATA */}
//       <p>{currentDate.toLocaleString()}</p> 
//     </div>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------------------------------------------

import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;
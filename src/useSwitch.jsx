import { useState } from "react";

// 1 --> ANDIAMO A CREARE LA FUNZIONE USESWITCH E IN QUESTO CASO GLI ASSEGNIAMO UN VALORE INIZIALE COME FALSE (MILESTONE 1)
function useSwitch(initialaValue = false) {
    // 2 --> CREARE UNO STATE E INZIALMENTE INITIALVALUE  (MILESTONE 2)
    const [isOn, setIsOn] = useState(initialaValue);
    // 3 --> CREARE LA FUNZIONE TOOGLE, NON DEVE PRENDERE NIENTE E DEVE FARE UN SETISON AL VALORE OPPOSTO TRAMITE UNA FUNZIONE (curr => !curr) (MILESOTNE 1)
    const toogle = () => {
        setIsOn(curr => !curr);
    }
    return [isOn, toogle];

}

export default useSwitch;
import { useEffect, useState } from "react";

function useDate() {
    // 1 --> CREIAMO UNO STATE CURRENTDATE CHE E' INIZIALMENTE GUALE ALLA DATA DI QUESTO MOMENTO (MILESTONE 2)
    const [currentDate, setCurrentDate] = useState(new Date());

    // 2 --> CREARE USEEFFECT (MILESTONE 2)
    useEffect(() => {
        // 3 --> CREIAMO IL NOSTRO INTERVAL (MILESTONE 2)
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // 4 --> ESSENDO CHE E' UN USEEFFECT E' FACCIO UN SETINTERVAL/SETTIMEOUT/EVENTLISTENER DEVO RICORDARMI A FARE UN RETURN NELLA CLEANUP FUNCTION, IN MODO TALE QUANDO VIENE SMONTATO IL COMPONENTE NON SI GENERI UN MEMORYLIK, CIOE' DEGLI INTERVALLI CHE CONTINUINO A FUNZIONARE SENZA UN MOTIVO     (MILESTONE 2)
        return () => {
            clearInterval(interval);
        }

    }, []);

    return currentDate;

}

export default useDate;
import React, {useState, useEffect} from "react";
import TextLoop from "./TextLoop";




const HelloLoop = () => {
    const data = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "Привет", "مرحباً", "नमस्ते"];

    const [counter, setCounter] = useState();
    useEffect(() => {
        let interval
        const updateCounter = () => {
          setCounter(currentValue => currentValue + 1)
        }
    
        interval = setInterval(() => {
          updateCounter()
        }, 20000)
    
        return () => {
          // Clear the interval when component is unmounted
          clearInterval(interval)
        }
      }, [])
    

    return(
        <>
            <span className="mr-10"><TextLoop texts={data}/></span>
        </>
    )
}

export default HelloLoop;
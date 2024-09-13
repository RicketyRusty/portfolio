import React, {useState, useEffect} from "react";
import TextLoop from "./TextLoop";




const HelloLoop = () => {
    const data = ["Hello", "नमस्ते", "নমস্কাৰ", "你好", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "Привет", "مرحباً"];

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

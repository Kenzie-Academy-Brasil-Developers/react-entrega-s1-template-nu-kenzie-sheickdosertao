import { useState } from "react"
import { FinanceForm } from "../FinanceForm"
import { FinanceCard } from "./FinanceCard"
import { FinanceCard2 } from "./FinanceCard copy"
import { Total } from "../Total"
import Styles from "./style.module.css"



export const FinanceList = () => {
   
    const [entre, setEntre] = useState([]);
    
    const addEntre = (rend) => {
        const newList = {...rend, id: crypto.randomUUID() };
    

        const newRend = [...entre, newList];
        setEntre(newRend);
    }
    
    const removeItem = (removeid) => {
       const filtro = entre.filter((remove) => remove.id !== removeid);
       setEntre(filtro)
    }
    return (
       
       <>
       
          <FinanceForm addEntre={addEntre}/>
          <Total entre={entre} /> 
          
          <section className={Styles.secLista} id="listFinance">
               <h2 className={Styles.h23}>Resumo financeiro</h2>
               <FinanceCard  entre={entre} removeItem={removeItem}/>
          </section>
       
       </>
    )
}
import { useState } from "react"
import { FinanceForm } from './components/FinanceForm';
import "./Styles/Global.css"
import { FinanceList } from './components/FinanceList/index';
import { Header } from "./components/Header";
import { Total } from "./components/Total";
import { FinanceCard } from "./components/FinanceList/FinanceCard";
import { FinanceCard2 } from "./components/FinanceList/FinanceCard2";



function App( ) {
  
  const [entre, setEntre] = useState([]);
    
  const addEntre = (rend) => {
      const newList = {...rend, id: crypto.randomUUID() };
      
  

      const newRend = [...entre, newList];
      setEntre(newRend);
      console.log(newRend)
  }
  
   
  const removeItem = (removeid) => {
     const filtro = entre.filter((remove) => remove.id !== removeid);
     setEntre(filtro)
    }
  return (
    <>
        <Header/>
     
        <FinanceList>

              
              <FinanceForm addEntre={addEntre}/>
               
              <FinanceCard entre={entre} removeItem={removeItem}/>
                <Total entre={entre} addEntre={addEntre}/>
        
              <FinanceCard2 entre={entre} removeItem={removeItem}/> 
             
              
        
        </FinanceList>
      
     
  
       
   </>
  )
}

export default App

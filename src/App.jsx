import { useState } from "react"
import { FinanceForm } from './components/FinanceForm';
import "./Styles/index.css"
import { FinanceList } from './components/FinanceList/index';
import { Header } from "./components/Header";
import { Total } from "./components/Total";
import { FinanceCard } from "./components/FinanceList/FinanceCard";




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
               <Total entre={entre} addEntre={addEntre}/>
              <h2 className="h22">Resumo financeiro</h2>
              <FinanceCard entre={entre} removeItem={removeItem}/>
            
               
        
             
             
              
        
        </FinanceList>
      
     
  
       
   </>
  )
}

export default App

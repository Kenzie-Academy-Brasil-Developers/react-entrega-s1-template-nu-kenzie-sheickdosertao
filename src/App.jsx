import { useState } from "react";
import { FinanceForm } from './components/FinanceForm';
import "./Styles/index.css";
import { FinanceList } from './components/FinanceList/index';
import { Header } from "./components/Header";
import { Total } from "./components/Total";
import { FinanceCard } from "./components/FinanceList/FinanceCard";





const  App = ( ) =>{
  
  const [entre, setEntre] = useState([]);
    
  const addEntre = (rend) => {
      const novaLista = {...rend, id: crypto.randomUUID() };
      
  

      const novaRenderize = [...entre, novaLista];
      setEntre(novaRenderize);

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

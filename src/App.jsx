import { FinanceForm } from "./components/FinanceForm";
import { FinanceList } from './components/FinanceList/index';
import { Header } from "./components/Header";
import { Total } from "./components/Total";

function App() {
  

  return (
    <>
     <Header/>
     <main id="grid">
      <FinanceForm/>
     <Total/>
     <FinanceList/>
     </main>
    
       
   </>
  )
}

export default App

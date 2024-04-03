import Styles from "../FinanceList/Style.module.css";

export const FinanceList = ({ children }) => {

  
    
    return (
       
      <>
       <h2>Resumo financeiro</h2>
       <main className={Styles.bruto}>{children}</main>
             
      </>
       
        
              )
}
import { FinanceCard } from "./FinanceCard"
import Styles from "./style.module.css"
export const FinanceList = () => {
    return (
       
        <section className={Styles.secLista} id="listFinance">
             <h2 className={Styles.h23}>Resumo financeiro</h2>
            <FinanceCard/>
            <FinanceCard/>
            <FinanceCard/>
            <FinanceCard/>
             

        </section>
    )
}
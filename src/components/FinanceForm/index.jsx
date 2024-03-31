import { useState } from "react"
import Styles from "./style.module.css"

export const FinanceForm = () => {

    const [formSoma, setFormSoma] = useState("");
    const [formNumero, setFormNumero] = useState("");
    const [formType, setFormType] = useState("Entrada");

    
    return (

    <section id="formFinance">
         <form className={Styles.formulario}>
             <div className={Styles.div1}>
                <label className={Styles.label1}>Descricao</label>
                <input className={Styles.iput} type="text" placeholder="Digite aqui sua descricao" />
                <p className={Styles.p1}>Ex: Compra de roupas</p>
             </div>
             <div className={Styles.div2}>
                <label className={Styles.label2}>Valor (R$)</label>
                <input className={Styles.input2} type="number" />
           
                <label className={Styles.label3}>Tipo de valor</label>
                <select className={Styles.selec1} name="" id="">
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saida</option>
                </select>
            </div>
            <button className={Styles.botao} type="submit">Inserir valor</button>
         </form>
    </section>
    )
        
}
import { useState } from "react";
import Styles from "./style.module.css";


export const FinanceForm = ({ addEntre }) => {


    const [formSoma, setFormSoma] = useState("");
    const [formNumero, setFormNumero] = useState("");
    const [formType, setFormType] = useState("Entrada");
    
    

    const submit = (event) => {
        event.preventDefault();
        
        const newDate = {formSoma, formNumero, formType};

        addEntre(newDate);
    };
    
    return (

    <section className={Styles.formFinance}>
         <form onSubmit={submit} className={Styles.formulario}>
             <div className={Styles.div1}>
                <label htmlFor="texto" className={Styles.label1}>Descricao</label>
                <input name="texto" className={Styles.iput} type="text" value={formSoma} onChange={(event) => setFormSoma(event.target.value)} placeholder="Digite aqui sua descricao" />
                <p className={Styles.p1}>Ex: Compra de roupas</p>
             </div>
             <div className={Styles.div2}>
                <label htmlFor="numero" className={Styles.label2}>Valor (R$)</label>
                <input name="numero" className={Styles.input2} type="number" value={formNumero} onChange={(event) => setFormNumero(event.target.valueAsNumber)} />
           
                <label htmlFor="entrada" className={Styles.label3}>Tipo de valor</label>
                <select  className={Styles.selec1} name="entrada" id="" value={formType} onChange={(event) => setFormType(event.target.value)}>
                    <option value="entrada">Entrada</option>
                    <option value="Saida">Saida</option>
                </select>
            </div>
            <button className={Styles.botao} >Inserir valor</button>
         </form>
    </section>
    )
        
}
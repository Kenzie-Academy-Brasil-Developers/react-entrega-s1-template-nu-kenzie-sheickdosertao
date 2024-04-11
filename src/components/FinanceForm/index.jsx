import { useState } from "react";
import Styles from "./style.module.css";


export const FinanceForm = ({ addEntre }) => {


    const [formularioSoma, setFormularioSoma] = useState("");
    const [formularioNumero, setFormularioNumero] = useState("");
    const [formularioTipo, setFormularioTipo] = useState("Entrada");
    
    

    const submit = (event) => {
        event.preventDefault();
        
        const novaData = {formularioSoma, formularioNumero, formularioTipo};

        addEntre(novaData);
    };
    
    return (

    <section className={Styles.formularioFinanceiro}>
         <form onSubmit={submit} className={Styles.formulario}>
             <div className={Styles.divisao1}>
                <label htmlFor="texto" className={Styles.etiqueta1}>Descricao</label>
                <input name="texto" className={Styles.entrada1} type="text" value={formularioSoma} onChange={(event) => setFormularioSoma(event.target.value)} placeholder="Digite aqui sua descricao" />
                <p className={Styles.p1}>Ex: Compra de roupas</p>
             </div>
             <div className={Styles.divisao2}>
                <label htmlFor="numero" className={Styles.etiqueta2}>Valor (R$)</label>
                <input name="numero" className={Styles.entrada2} type="number" value={formularioNumero} onChange={(event) => setFormularioNumero(event.target.valueAsNumber)} />
           
                <label htmlFor="entrada" className={Styles.etiqueta3}>Tipo de valor</label>
                <select  className={Styles.selecionar1} name="entrada" id="" value={formularioTipo} onChange={(event) => setFormularioTipo(event.target.value)}>
                    <option value="entrada">Entrada</option>
                    <option value="Despesas">Despesas</option>
                </select>
            </div>
            <button className={Styles.botao} >Inserir valor</button>
         </form>
    </section>
    )
        
}
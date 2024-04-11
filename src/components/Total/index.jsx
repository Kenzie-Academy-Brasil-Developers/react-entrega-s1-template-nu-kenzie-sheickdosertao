import Styles from "./style.module.css";

export const Total = ({ entre }) => {

    const subTotal = () => {
       const totalInteiro = entre.reduce((contador, valorAtual) => {
        return valorAtual.formulariotipo === "entrada"
         ? contador + valorAtual.formularioNumero 
         : contador - valorAtual.formularioNumero;
       }, 0);

       return totalInteiro;

      };

      
    return (
        <div className={Styles.divisao3} id="total">
            <h2 className={Styles.h22}>Valor total:</h2>
            <p className={Styles.pp}>{subTotal().toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}</p>
            <p className={Styles.pp2}>O valor se refere ao saldo</p>
        </div>
    )
}
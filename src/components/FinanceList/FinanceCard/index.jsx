
import "../../../Styles/reset.css"
import Styles from "./style.module.css"


export const FinanceCard = ({entre, removeItem}) => {

  
    return (

        <section>


            {entre.map((entris) => {
                return(
                    <div className={Styles.divb} key={entris.id}>
                        <div className={Styles.divss} >
                            <h2 className={Styles.h2b}> {entris.formSoma} </h2>
                            <p className={Styles.po}> {entris.formType} </p>
                        </div>
                        <div  className={Styles.divtt}>
                              <p className={Styles.ps}> {entris.formNumero.toLocaleString("pt-BR", {
                               style: "currency",
                               currency: "BRL",} )}</p>
                              <button onClick={() => removeItem(entris.id)} className={Styles.botao}>Excluir</button>
                        </div>
                    </div>
                    
                )
            })}
        </section>
      

            
    )
} 
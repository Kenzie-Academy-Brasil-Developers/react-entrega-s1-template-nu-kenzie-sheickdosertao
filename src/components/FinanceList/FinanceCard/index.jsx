import "../../../Styles/reset.css"
import Styles from "./style.module.css"


export const FinanceCard = ({ entre, removeItem}) => {
    return (
        <div className={Styles.divb}>

            {entre.map((entris) => {
                return(
                    <li key={entris.id}>
                        <div className={Styles.divss} >
                            <h2 className={Styles.h2b}> {entris.formSoma} </h2>
                            <p className={Styles.po}> {entris.formType} </p>
                        </div>
                        <div  className={Styles.divtt}>
                              <p className={Styles.ps}>R$ {entris.formNumero}</p>
                              <button onClick={() => removeItem(entris.id)} className={Styles.botao}>Excluir</button>
                        </div>
                    </li>
                    
                )
            })}
        </div>

            
    )
} 
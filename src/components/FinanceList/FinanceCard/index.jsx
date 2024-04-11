
import "../../../Styles/reset.css"

import Styles from "./style.module.css"


export const FinanceCard = ({entre, removeItem}) => {

  
    return (

        <section className={Styles.selecionar5} id="selecionar5">


              <ul className={Styles.divisaob}>

                 {entre.map((inicio) => {
                return(
                    <li  key={inicio.id}>
                        <div>
                            <h2 className={Styles.h2b}> {inicio.formularioSoma} </h2>
                            <p className={Styles.po}> {inicio.formularioTipo} </p>
                        </div>
                        <div  className={Styles.divisaott}>
                              <p className={Styles.ps}> {inicio.formularioNumero.toLocaleString("pt-BR", {
                               style: "currency",
                               currency: "BRL",} )}</p>
                              <button onClick={() => removeItem(inicio.id)} className={Styles.botao}>Excluir</button>
                        </div>
                    </li>
                    
                )
            })}
              </ul>
           
           
        </section>
      

            
    )
} 
import Styled from "./styles"
import { PopUpModal } from "../../../components/Modal";
import {useState} from "react" 

const Superuser = () => {

    const [modal, setModal] = useState(false)

    


    const buttons = [
        { title: "teste"}
    ]


    return(
        <Styled>


            

            {/* <button onClick={openModal}>teste</button>

            {modal && <PopUpModal title="Teste" content="Testando" buttons={buttons} setModal={setModal}/>} */}

          
        </Styled>
    )
}
export default Superuser
import Navbar from "./components/layaout/navbar/Navbar";
import { ItemListContainer } from "./components/page/ItemListContainer/ItemListContainer";


const App = () => {

let modelo = "Envase x 30ml"

  return (
    <div>
        <Navbar />
        <ItemListContainer modelo={modelo} precio={"$25"} />
    </div>
  )
}

export default App

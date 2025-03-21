import { useState } from "react"

import Cabecalho from "./components/Cabecalho"
import Formulario from "./components/Formulario"

function App() { 
  
  return(
    <div className="corpo">
      <div className="container">
        <Cabecalho/>
        <Formulario/>
      </div>
    </div>
  )
}

export default App

import { useState } from "react"

import Cabecalho from "./componets/Cabecalho"
import Formulario from "./componets/Formulario"

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

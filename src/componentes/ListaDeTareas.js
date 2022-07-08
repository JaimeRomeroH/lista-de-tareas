import React from "react";
import TareaFormulario from "./TareaFormulario";

function ListaDeTareas(){
   return(
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
         Lista De Tareas
      </div>
    </>
   ); 
}

export default ListaDeTareas;
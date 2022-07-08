import './App.css';
import logo from './imagenes/logo.png'
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
       <div className="logo-contenedor">
          <img src={logo} className="logo" alt="logo"/>
       </div>
       <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <TareaFormulario />
       </div>
    </div>
  );
}

export default App;

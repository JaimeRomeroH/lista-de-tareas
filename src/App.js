import './App.css';
import logo from './imagenes/logo.png'
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
       <div className="logo-contenedor">
          <img src={logo} className="logo" alt="logo"/>
       </div>
       <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <Tarea texto="Aprender React"/>
       </div>
    </div>
  );
}

export default App;

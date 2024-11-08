import Formulario from './component/Formulario';
import './App.css';
import { SiF1 } from "react-icons/si";
import { GiF1Car } from "react-icons/gi";


function App() {
  return (
    <div className="app">
      <h1>
        <SiF1 /><GiF1Car />
          Formulario de F1 <SiF1 /><GiF1Car /></h1>
      <Formulario />
    </div>
  );
};
export default App;

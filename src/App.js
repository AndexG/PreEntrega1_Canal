import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a el mejor sitio de bebidas del Conurbano"/>
      <p>Sitio en construcción</p>
    </>
  );
}

export default App;

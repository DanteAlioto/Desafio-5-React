import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

function App() {

  return (
    <div className='container'>
      <div className='row'>
        <Navbar/>
        <ItemListContainer greeting= "Hola"/>
      </div>
    </div>
  );
}

export default App;

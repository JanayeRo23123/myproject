
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';

function App() {
  return (
    <div className="App">
      <h1>Hello From React and the Server!</h1>
      <Navbar/>
      <Footer/>
      <QuantityPicker/>


    </div>
  );
}

export default App;

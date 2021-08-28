// import logo from './logo.svg';
import './App.css';
import ListProduct from './components/ListProduct';
import Counter from './components/Counter';



function App() {
  return (
    <div className="App">
      <h1>Tugas React Js Components</h1>
      <h3 className= "Nomer1">No.1 Membuat Counter</h3>
      <Counter/>
      <h3 className= "Nomer2">No.2 Membuat List Produk </h3>
      <ListProduct />


    </div>
  );
}

export default App;

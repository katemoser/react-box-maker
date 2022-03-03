import logo from './logo.svg';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"
import './App.css';

function App() {
  return (
    <div className="App">
      <NewBoxForm />
      <Box backgroundColor="red" width="100" height="200" />
    </div>
  );
}

export default App;

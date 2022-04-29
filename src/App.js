import { Button } from './component/Button/Button';
import './App.css';
import { Count } from './component/Count/Count';

function App() {
  return (
    <div className="App">
       <Count counter = '0'/>
    <Button title = '+'/>
    <Button title = '-'/>
    </div>
  );
}

export default App;

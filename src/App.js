// import logo from './logo.svg';
// import './App.css';
import Button from './button';

function App() {
  return (
    <div className="App">
      <Button
        color='red'
        textContent='label 1'
        widthBorder={true}
      >
        Button
      </Button>
      <Button
        color='blue'
        textContent='label 2'
        widthBorder={false}
      >
        Cool Button
      </Button>
    </div>
  );
}

export default App;

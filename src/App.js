// import logo from './logo.svg';
// import './App.css';
import Button from './button';
import List from './list';

function App() {
  return (
    <div className="App">
      <Button
        color='red'
        textContent='label 1'
        widthBorder
      // widthBorder={true}
      >
        Button
      </Button>
      <Button
        color='blue'
        textContent='label 2'
      // widthBorder={false}
      >
        Cool Button
      </Button>
      <List />
    </div >
  );
}

export default App;

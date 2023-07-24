import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
     <FunctionalGreeting />
     <FunctionalGreetingWithProps greeting="this was created using a prop" name="Andy" age="old"/>
    </div>
  );
}

export default App;

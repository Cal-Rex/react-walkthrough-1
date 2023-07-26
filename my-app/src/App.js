import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
     <FunctionalGreeting />
     <FunctionalGreetingWithProps greeting="this was created using a prop" name="Andy" age="old"/>
     <StatefulGreeting greeting="this is a stateful class component prop" name="Andy"/>
    </div>
  );
}

export default App;

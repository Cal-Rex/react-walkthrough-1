// import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import NavBarSimple from './components/NavBarSimple';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';

function App() {
  return (
    <div className="App">
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <NavBarSimple /> */}
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="this was created using a prop" name="Andy" age="old"/> */}
      {/* <StatefulGreeting greeting="this is a stateful class component prop" name="Andy"/> */}
      <ConditionalRenderingFunctional connected={true}/>
      <ConditionalRenderingClass />
    </div>
  );
}

export default App;

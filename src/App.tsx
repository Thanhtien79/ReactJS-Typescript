// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Personlist } from './components/Personlist';
import { Status} from './components/Status';
import { Input } from './components/input';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/Loggedln';
import { User } from './components/state/User';
function App() {
   const personName = {
    first: 'Bruce',
    last:'Wayne',
   }
   const ListName = [
    {
      first: 'L',
      last:'Messi',
     },
     {
      first: 'David',
      last:'Beackam',
     },
     {
      first: 'C',
      last:'Ronadol',
     }
   ]
  return (
   
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"1
        >
          Learn React
        </a>
      </header> */}

      <div className='App'>
        <Greet name='Tiến' isLoggedIn={true}/>
        <Person name={personName}></Person>
        <Personlist names={ListName}></Personlist>
        <Status status='success'></Status>
        <Heading> Placehoer text</Heading>
        <Oscar>
           <Heading> Oscar go to leanardo dicaprio </Heading>
        </Oscar>
        <Button handleClick={(event, id) => console.log("button click", event, id)}></Button>
        <Input value='' handleChange={(Event)=> console.log(Event)}></Input>
        <Container styles={{border: '1px solid black' , padding:'1rem'}}></Container>
        <LoggedIn></LoggedIn>
        <User></User>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;

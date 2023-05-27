import './App.css';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard'
import Income from './components/Income/Income'
import Expenses from './components/Expenses/Expenses'
import { useState } from 'react';
import { useGlobalContext } from './context/globalContext';


function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      // case 2:
      //   return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }


  return (
    <div className="App h-screen bg-slate-500 relative">
      <div className='p-8 flex h-full gap-8'>
        <Navigation active={active} setActive={setActive}/>
        <main className='flex-1 overflow-x-hidden border-4 border-white rounded-3xl'>
          {displayData()}
        </main>
      </div>
    </div>
  );
  }



export default App;
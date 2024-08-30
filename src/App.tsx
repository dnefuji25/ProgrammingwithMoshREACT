import * as React from 'react';
import "./App.css";
import Buttons from './components/Buttons';
import Alert from './components/Alert';

function App() {
  
  const [alertVisible,setAlartVisibility]=React.useState(false)
  return (
    <div>
      {alertVisible&&<Alert onClose={()=>setAlartVisibility(false)}  >My alert</Alert>}
    <Buttons color="primary" onClick={()=>setAlartVisibility(true)}>My Button</Buttons>

    </div>
  );
}

export default App;

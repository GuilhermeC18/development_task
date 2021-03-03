import { useEffect, useState} from 'react';
const autobahn = require('autobahn');

const connection = new autobahn.Connection({
  url: "ws://testassignment.filmdatabox.com:8233/ws",
  realm: "democontrol"
});

connection.open();

function App() {
  const [logMessages, setLogMessages] = useState([]);
  const [counter, setCounter] = useState();
 
  useEffect(() =>{
    connection.onopen = function(session, details) {
      session.call('com.filmdatabox.democontrol.journal')
        .then(function showSum(res) {
          setLogMessages(res);
      }, session.log);
      
      const onCounter = function(args) {
        console.log('counter is', args[0]);
     }
      session.subscribe("com.filmdatabox.democontrol.journal", onCounter)
  
    }}, [setLogMessages]);
 
  console.log(logMessages);
  return (
   <>
    {logMessages !== [] ? logMessages.slice(0).reverse().map((m, key) => <p>{m}</p>) : <div></div>}
   </>
  );
}

export default App;

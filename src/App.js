import { useEffect, useState} from 'react';
const autobahn = require('autobahn');

const connection = new autobahn.Connection({
  url: "ws://testassignment.filmdatabox.com:8233/ws",
  realm: "democontrol"
});

connection.open();

function App() {
  const [logMessages, setLogMessages] = useState([]);
  
  useEffect(()=>{
    connection.onopen = function(session, details) {
      session.call('com.filmdatabox.democontrol.journal')
        .then(function showSum(res) {
          setLogMessages(res);
      }, session.log);
      var onCounter = function(args) {
        console.log('counter is', args[0]);
     }
      session.subscribe("com.filmdatabox.democontrol.journal",onCounter);
    }
  },[]);

  return (
   <>
    {logMessages? logMessages.map((m) => <p>{m}</p>) : <div></div>}
   </>
  );
}

export default App;

import { useEffect, useState} from 'react';
const autobahn = require('autobahn');

const connection = new autobahn.Connection({
  url: "ws://testassignment.filmdatabox.com:8233/ws",
  realm: "democontrol"
});

connection.open();


function App() {
  const [logMessages, setLogMessages] = useState([]);
  const [error, setError] = useState("");
  console.log(connection);
  
   

  useEffect(()=>{
    connection.onopen = function(session, details) {
      session.call('com.filmdatabox.democontrol.journal')
        .then(function showSum(res) {
          setLogMessages(res);
      }, session.log);
    }
  },[]);

logMessages.map((m) => console.log(m, "message"));
  
  

  return (
   <>
    {logMessages? logMessages.map((m) => <p>{m}</p>) : <div></div>}
   </>
  );
}

export default App;

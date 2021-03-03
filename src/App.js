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
  connection.onopen = function(session, details) {
    
    session.call('com.filmdatabox.democontrol.journal')
    .then(function showSum(res) {
    console.log('sum is', res);
    setLogMessages(res);
    console.log(logMessages, "messages");
    }, session.log);
  }

  useEffect(()=>{
    console.log(logMessages);
  }, []);


  
  

  return (
   <>
     
   </>
  );
}

export default App;

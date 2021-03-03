import { useEffect, useState} from 'react';
const autobahn = require('autobahn');

const connection = new autobahn.Connection({
  url: "ws://testassignment.filmdatabox.com:8233/ws",
  realm: "democontrol"
});




function App() {
  const [logMessages, setLogMessages] = useState([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
  connection.onopen = function(session, details) {
    session.register('com.filmdatabox.democontrol.journal');
    session.call('com.filmdatabox.democontrol.journal').then(function showSum(res) {
    console.log('sum is', res);
    }, session.log);
  }
}, []);
  
  

  return (
   <>
     
   </>
  );
}

export default App;

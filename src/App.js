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
    const add2 = function(args) {
      return args[0] + args[1];
    };
    session.register('com.filmdatabox.democontrol.journal', add2);
    console.log(session.register());
    session.call('com.filmdatabox.democontrol.journal').then(function showSum(res) {
    console.log('sum is', res);
    }, session.log);
  }




  
  

  return (
   <>
     
   </>
  );
}

export default App;

import { useEffect, useState} from 'react';
const autobahn = require('autobahn');

const connection = new autobahn.Connection({
  url: "ws://testassignment.filmdatabox.com:8233/ws",
  realm: "democontrol"
});

connection.onopen(session, details) {
  const add2 = function(args) {
     return args[0] + args[1];
  }

  session.register('com.filmdatabox.democontrol.journal', add2);
}

session.call('com.filmdatabox.democontrol.journal', [2, 3]).then(function showSum(res) {
  console.log('sum is', res);
}, session.log);

function App() {
  const [logMessages, setLogMessages] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    fetch('com.filmdatabox.democontrol.journal')
      .then(res => res.json())
      .then((logMessages) =>{
        console.log(logMessages)
        setLogMessages(logMessages)
      })
      .catch((err) => setError(err));
  }, []);

  console.log(logMessages);

  return (
   <>
     
   </>
  );
}

export default App;

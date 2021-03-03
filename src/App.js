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

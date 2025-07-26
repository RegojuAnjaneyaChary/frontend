// import React from 'react'
import React, {useEffect} from 'react'
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get("https://mongodb-9uyw.onrender.com/api/todos/getAllTodos")
      .then((res) => console.log(res.data))
      .catch((er) => console.log(er))
  }, []);


  return <div>App</div>;
  
};

export default App
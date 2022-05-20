import React from 'react'
import axios from 'axios'
import './App.css';

import {ExportToExcel} from './ExportToExcel'

function App() {
  const [data, setData] = React.useState([])
  const fileName = "myfile"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('https://jsonplaceholder.typicode.com/posts').then(postData => {
     
      setData(postData.data) 
     })
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default App;
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/Muchmark/sampledata/data?_sort=id&order=desc').then((res) => {
      setData(res.data)
      console.log(res.data)
    }).catch((err) => { console.log(err) })
  }, [])

  return (
    <div className="">
      {data.map((val, idx) => {
        return ((
          <img src={val.url} />
        ))
      })}
    </div>
  );
}

export default App;

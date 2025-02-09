import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Afnan from './components/Afnan';
import { use, useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [load, setload] = useState(0);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(data => {setData(data)})
    .catch(error => console.error(error))
  },[])

console.log('Render')
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>
      {
        data.map((item)=>{
          return <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.company.name}</td>
                  </tr>
        })
      }
    </table>
      <input type='button' onClick={()=>{setload(2)}} />
    </>
  );
}

export default App;

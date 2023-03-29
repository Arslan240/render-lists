import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import User from './User'

function App() {
  const [users, setUsers] = useState([])
  const [fetchUsers, setFetchUsers] = useState(true)

  useEffect(() => { 
    async function fetchData() {
      try {
        const resp = await axios("https://random-data-api.com/api/v2/users?size=3")
        // console.log(resp.data)
        
        const data = resp.data.map(({first_name, last_name, email, avatar, gender, phone_number, date_of_birth:dob, employment}) => {
          // const {first_name} = user 
          return  {first_name, last_name, email, avatar, gender, phone_number, dob, employment}
         })
         console.log(data)
        setUsers([...data])
        // console.log(users)

      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
   }, [fetchUsers])
  

  return (
    <>
      <h1>Rendering Lists</h1>
      {users.map((user) => (
        <User {...user}></User>
      ))}
      <button onClick={() => setFetchUsers(!fetchUsers)}>Fetch Users</button>
    </>
  )
  
}

export default App

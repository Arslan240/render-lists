import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import User from './User'

function App() {
  const [users, setUsers] = useState([])
  const [fetchUsers, setFetchUsers] = useState(true)
  const [noOfUsers, setNoUsers] = useState(3);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios(`https://random-data-api.com/api/v2/users?size=${noOfUsers}`)
        // console.log(resp.data)

        const data = resp.data.map(({ id, first_name, last_name, email, avatar, gender, phone_number, date_of_birth: dob, employment }) => {
          // const {first_name} = user 
          return { id, first_name, last_name, email, avatar, gender, phone_number, dob, employment }
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
      <input type="number" class="input" placeholder='Enter no of Users' value={noOfUsers} onChange={e => setNoUsers(e.target.value === '' ? '' : Number(e.target.value))} />
      <button onClick={() => setFetchUsers(!fetchUsers)}>Fetch Users</button>
      {users.map((user) => (
        <User {...user} key={user.id}></User>
      ))}
    </>
  )

}

export default App

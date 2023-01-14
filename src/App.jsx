import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import '../src/css/styles.css'

function App() {
  
  const [usersList, setUsersList] = useState([]);
  const [usersSelected, setUsersSelected] = useState(null);
  
  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setUsersList(res.data))
  }, [])

  
  const getUsersList = () => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setUsersList(res.data))
  }

  const deleteUsers = (userDelete) => {
    axios.delete(`https://users-crud.academlo.tech/users/${userDelete.id}/`)
    .then(() => getUsersList());
  }

  const selectUsers = (user) => {
    setUsersSelected(user)
    
  }
  
  return (
    <div className="App">
      <UsersForm getUsersList={getUsersList} usersSelected={usersSelected} selectUsers={selectUsers}/>
      <UsersList usersList={usersList} deleteUsers={deleteUsers} selectUsers={selectUsers}/>
    </div>
  )
}

export default App

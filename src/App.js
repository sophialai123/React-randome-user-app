import { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import Users from "./components/Users";

function App() {

  //create a useState to disply data on the screen
  const [randomUser, setRandomUser] = useState([]);
  const [searchGender, setSearchGender] = useState('');
  const [searchName, setSearchName] = useState('')

  //Make API request
  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=50")
      .then((respone) => {
        setRandomUser(respone.data.results);
        console.log(respone.data.results)
      });

  }, [])

  //Create filleredGender
  const filleredGender = randomUser.filter((user) => {
    //return user.name.toLowerCase().indexOf(searchName) > -1
    if (searchGender === "male") {
      return user.gender.toLowerCase() === "male"
    } else if (searchGender === "female") {
      return user.gender.toLowerCase() === "female"
    } else {
      return user.gender
    }

  });




  return (
    <div className="App">
      <h1>Random User App</h1>
      <div  >
        <input type="text" placeholder="Search gender..." value={searchGender}
          onChange={(event) => {
            setSearchGender(event.target.value);
            console.log(event.target.value)
          }} />



      </div>



      <div className="users">
        {filleredGender.map((user, key) => {
          return (
            <Users
              key={key} //unqiue key
              first={user.name.first}
              last={user.name.last}
              age={user.dob.age}
              nat={user.nat}
              email={user.email}
              picture={user.picture.large}
              gender={user.gender}
              phone={user.phone}
            />
          );
        })}
      </div>
    </div>


  );
}

export default App;

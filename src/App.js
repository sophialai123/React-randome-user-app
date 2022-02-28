import { useState, useEffect } from "react";
import Axios from "axios";
import './App.css';
import Users from "./components/Users";
import search from "./components/search.png";

function App() {
  //create a useState to disply data on the screen
  const [randomUser, setRandomUser] = useState([]);
  const [searchGender, setSearchGender] = useState('');

  //Make API request
  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=100")
      .then((respone) => {
        setRandomUser(respone.data.results);
        console.log(respone.data.results)
      });

  }, [])

  //Create filleredGender
  const filleredGender = randomUser.filter((user) => {

    return user.gender.toLowerCase().indexOf(searchGender) > -1

  });


  return (
    <div className="App">
      <div >
        <input type="text" placeholder="Search gender..." value={searchGender}
          onChange={(event) => {
            setSearchGender(event.target.value);
            console.log(event.target.value)
          }} />
      </div>
      <div >
        {filleredGender.map((user, key) => {
          return (
            <Users
              key={key} //unqiue key
              first={user.name.first}
              last={user.name.last}
              email={user.email}
              picture={user.picture.large} s
              gender={user.gender}

            />

          );


        })}

      </div>

    </div>




  );
}



export default App;


// return (



//   user.gender.toLowerCase().includes(searchGender.toLowerCase())


// );
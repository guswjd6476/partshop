import axios from "axios";
import { useEffect,useState } from "react";
function Userdata() {

    const [userlist, setUserlist] = useState('')
    useEffect(()=>{
        axios
        .get('/api/userlist')
        .then(function (response) {
        
            setUserlist(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })   
        
    },[])

    return (
        <ul>
        {userlist&&userlist.map((user) => (
          <li key={user.id}>{user.userId}</li>
        ))}
      </ul>
    );
  }
  
  export default Userdata;
  
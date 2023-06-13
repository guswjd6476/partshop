import { useEffect,useState } from "react";
import { userlist } from "../../../service/user";
function Userdata() {

    const [userlist, setUserlist] = useState('')
    useEffect(()=>{
      userlist()
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
  
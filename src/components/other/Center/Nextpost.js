import { Link,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPrevNext } from "../../../service/product";


function Nextpost({id}) {
const [prev, setPrev] = useState(null)
const [next, setNext] = useState(null)
const location = useLocation()
const pathnum1 = location.pathname.split('/')[1]
const pathnum2 = location.pathname.split('/')[2]
const pathnum3 = location.pathname.split('/')[3]
const searchParams = new URLSearchParams(location.search);
const num = searchParams.get('productid');
useEffect(()=>{
  getPrevNext(num,id).then(function(response){
    console.log(response.data,'data')
   if(response.data.length>1){
    setPrev(response.data[0])
    setNext(response.data[1])
   }else{
    if(response.data[0].id>num){
      setNext(response.data[0])
      setPrev(null)
    }else{
      setNext(null)
      setPrev(response.data[0])
    }
   }
})
},[num])  
    return (
        <div className="nexdivwrap">
            <div className="nextdiv">
              <div className="nextdiv_t">이전글</div>
              {prev ? 
              <Link to={`/${pathnum1}/${pathnum2}/${pathnum3}?&productid=${prev.id}`} className="nextdiv_c">{prev.title}</Link> 
              :
              <div>이전글이 없습니다</div>}
            </div>
            <div className="nextdiv">
              <div className="nextdiv_t">다음글</div>
              {next ? 
              <Link to={`/${pathnum1}/${pathnum2}/${pathnum3}?&productid=${next.id}`} className="nextdiv_c">{next.title}</Link> 
              :
              <div>다음글이 없습니다</div>}
            </div>
        </div>
            
        );
  }
  
  export default Nextpost;
  
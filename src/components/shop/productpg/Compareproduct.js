
import { useEffect, useState } from "react"
import { recommendlist } from "../../../service/product"
import { Link } from "react-router-dom"
const Compareproduct = (props)=>{
    const [list, setList] = useState()

    useEffect(()=>{
        recommendlist(props?.cate, props?.num)
      .then(function (response) {
        setList(response.data)
      })
    },[props.num])
    return(
        <div className="shopcompare">
            {list&&list.map((value)=>
            <Link  to={`/${value.category}/${value.subcategory}/${value.id}`} className="shopcomaprebox" key={value.id}>
                <div className="compareimg"> 
                    <img src={value.img1}/>
                </div>
                <p className="shopcompareT">{value.pName}</p>
            </Link>)}
        </div>
    )
}
export default Compareproduct
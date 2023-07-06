import { useState,useEffect } from "react";
import Pagetitle from "../components_btn/Pagetitle";
import { getAfterbuylist, getOrderlist } from "../../service/user";
import { Button } from "antd";
import { datechange,pricechange,buystates,sortedObj } from "../../service/function";
import BuyafterModal from "./BuyafterModal";
import {  PC, Tablet } from "../../MediaQuery"
import { Link } from "react-router-dom";
function Myorderlist({userId}) {
  const [orderlist, setOrderlist] = useState([]);
  const [afetbuylist, setAfterbuylist] = useState([]);
  const [num, setNum] = useState(null);
  const [sortedObjects, setSortedObjects] = useState([]);
  useEffect(()=>{
    getOrderlist(userId).then(function(response){
      setOrderlist(response.data)
      setSortedObjects(response.data)
    })
    getAfterbuylist(userId).then(function(response){
      setAfterbuylist(response.data)
    })
  },[])
  const dateterm = ['최근1년', '1주일', '1개월','3개월']
  const onClick=(i)=>{
    if(i===num){
      setNum(null)
    }else{
      setNum(i)
    }
    }
  const productfilter =(id)=>{
    const proudct = afetbuylist.filter(value =>value.productnum == id)
    return proudct
  }
useEffect(()=>{
  sortedObj(num,orderlist,setSortedObjects)
},[num])
  
  const Displaybox = () => {
    return (
      <div className="desktop">{
        sortedObjects&&sortedObjects.map((value) => (
              <div key={value.id} className="tableB flex a">
                <div className="table1 flex a">
                  <div className="tableimg">
                    <img src={value.img1} alt="상품 이미지" />
                  </div>
                  <div>
                    <div>{value.brand}</div>
                    <div>{value.pName}</div>
                  </div>
                </div>
                <div className="table2">{datechange(value.buytime)}</div>
                <div className="table3">{value.buynum}</div>
                <div className="table4">{pricechange(value.pPrice)}</div>
                <div className="table5 b">
                  <div className="flex c">
                    <div style={{marginBottom:'5px'}}> {buystates(value.buystate)}</div>
                    <div> <BuyafterModal div={true} userId={userId} data={value} /></div>
                   
                  </div>
                  <div className="btnstylewrap">
                  {productfilter(value.productnum)[0] ?
                  <Button className="lbtnstyle">작성완료</Button>
                  :
                  <div><BuyafterModal div={false} userId={userId} data={value} /></div>
                  }
                  </div>
                 
                </div>
              </div>
            ))
          }
      </div>
    );
  };

  const MDisplaybox = () => {
    return (
      <div className="mobile">{
        sortedObjects&&sortedObjects.map((value) => (
              <div key={value.id} className="tableB flex c">
                 <div className="table5 b">
                  <div>{buystates(value.buystate)}</div>
                  {productfilter(value.productnum)[0] ?
                  <div className="btnstyle c">작성완료</div>
                  :
                  <div><BuyafterModal userId={userId} data={value} /></div>
                  }
                </div>
                <div className="tables flex f">
                  <div className="tableimg">
                    <img src={value.img1} alt="상품 이미지" />
                  </div>
                  <div className="tabled">
                    <div className="tbrand">{value.brand}</div>
                    <div className="tname">{value.pName}</div>
                    <div className="table2">{datechange(value.buytime)}</div>
                <div className="table3">{value.buynum}</div>
                <div className="table4">{pricechange(value.pPrice)}원</div>
                <div> <BuyafterModal div={true} userId={userId} data={value} /></div>
                  </div>
                </div>
              
               
              </div>
            ))
          }
      </div>
    );
  };

    return (
      <div>
        <Pagetitle value={'주문목록'} svalue={'Order List'}/>
        <div >
          <div className="mb10 sbtnwrap">
            {dateterm.map((value,index)=><Button key={index} onClick={()=>onClick(index)} className={index===num ? "active sbtnstyle":"sbtnstyle"}>{value}</Button>)}
          </div>
        
          <PC>
          <div className="tableH flex ">
            <div className="table1">상품정보</div>
            <div className="table2">주문일자</div>
            <div className="table3">주문번호</div>
            <div className="table4">주문금액</div>
            <div className="table5">주문상태</div>
          </div>
          <Displaybox />
          </PC>
          <Tablet>
            <MDisplaybox/>
          </Tablet>
        
        
        </div>
      </div>
    );
  }
  
  export default Myorderlist;
  
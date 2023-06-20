
import { Tabs } from 'antd';
import { useState,useEffect } from 'react';
import { Allgetproduct,getmain } from '../../service/product';
import ProductCarousel from './ProductCarousel';
import Mainslide from './Mainslide';
import Mainiot from './Mainiot';
import Mainevent from './Mainevent';
import Mainnotice from './Mainnotice';

function Main({edit,cates,shows,setBack}) {
  console.log(shows,'???shows')
  const [data,setData] = useState()
  const [mi, setMi] =useState({
     a1 : '', a2 : '', a3 :'', a4 :'', a5 :'', a6 :'', a7 :'', a8 :'', a9 :'', a10 :'',
     b1 : '', b2 : '', b3 :'', b4 :'', b5 :'', b6 :'', b7 :'', b8 :'',b9 :'',b10 :'',
     
})
console.log(mi,'?')
  const items = []
  const labels = ['New parts','Best parts','NZR Signature']
    for (let i = 0; i <= 2; i++) {
    items.push(
      {
        key: String(i),
        label: labels[i],
        children: <ProductCarousel data={data} mi={mi} setMi={setMi}  able={edit}  edit={i} />,
      }
    )
    }
  const onChange = (key) => {
    console.log(key);
  };
  useEffect(()=>{
    Allgetproduct()
    .then(function (response) {
      setData(response.data.sort((a, b) => new Date(b.updatetime) - new Date(a.updatetime)))
    })
    .catch(function (error) {
        console.log(error)
    })  
    getmain().then(function(response){
      setMi({a1:response.data[0].p1,a2:response.data[0].p2,a3:response.data[0].p3,a4:response.data[0].p4,a5:response.data[0].p5,a6:response.data[0].p6,a7:response.data[0].p7,a8:response.data[0].p8,a9:response.data[0].p9,a10:response.data[0].p10,
        b1:response.data[1].p1,b2:response.data[1].p2,b3:response.data[1].p3,b4:response.data[1].p4,b5:response.data[1].p5,b6:response.data[1].p6,b7:response.data[1].p7,b8:response.data[1].p8,b9:response.data[1].p9,b10:response.data[1].p10,})
    }) 
    setBack&&setBack(false)
},[])

  return (
    <div className="main ">
      <div className='displaybox'>
        <Mainslide/>
      </div>
      <div className='maintabs displaybox'>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>

      <div className='mainbgwrap' >
        <div className='mainbg'></div>
        <div className='displaybox' >
          <Mainiot cates={cates}/>
        </div>
      </div>
      <div className='mainbgwrap' >
      <div className='displaybox'>
        <Mainevent cates={cates}/>
      </div>
      </div>
      <div className='mainbgwrap' >
      <div className='displaybox'>
        <Mainnotice cates={cates}/>
      </div>
      </div>
    </div>
  );
}

export default Main;

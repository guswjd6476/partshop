
import {  Link} from 'react-router-dom';
import { AddCartbtn } from '../../components_btn/Cartbtn';
import { Checkbox,Tag} from 'antd';
import Countbtn from '../../components_btn/Countbtn';
import { pricechange } from '../../../service/function';
import Needsbtn from '../../components_btn/Needsbtn';
function Productform({main,counts,index,pathValue,userId,value,handleCountChange,gridstyle}){


return(
    <div className='productbox' key={value.id}>

     
    {gridstyle !== 2 && !main? <Checkbox value={value.id}></Checkbox> : ''}
    <div className="product_list" key={`${value.id}-${index}`}>
    <div className={gridstyle == 0 ?'gridcolum' : 'gridflex'}>
      <Link className='product_pic'  to={pathValue}>
        <img src={value.img1}/>
      </Link>
      <div className={gridstyle == 1 ? 'gridcolum' : 'gridflex'}>
      <Link  to={pathValue}>
      <div className='productwrap2_wrap_div'>
      <div className='productwrap2_wrap'>
        <div className='product_title'>
          <div className='f12 brandt'>[{value.brand}] {gridstyle == 0 ? <span className='valueid f12'>[상품코드 : {value.id}]</span> : ''}</div>
          <div className={value.pName !==' '?'product_d f14':'none'}>{value.pName}{gridstyle !== 0 ? <span className='valueid f12'>[상품코드 : {value.id}]</span> : ''}</div>
        </div>
        <div className='product_flex'>
          <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
        
          <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
          <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
        </div>
      </div>
      <div className={value.pDetail !=='' ?'f12 product_d detail':'none'} >{value.pDetail}</div>
      </div>
      <div className='pricebox'>
        <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='tx f14'>원</span></p>
        <span className='dcvalue'>{value.dcrate}%</span>
        <p className={value.pPrice !==''?'product_d f22':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
      </div>
      </Link>
      
      {gridstyle !== 0 ?
      <>
    <div className='other_wrap'>
    <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
    <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
    </div>
    <div className='counterbtrn_wrap'>
      <div className='testbox'>
        {gridstyle == 2 ? <Checkbox value={value.id}></Checkbox> : ''}
        <Countbtn ids={value.id} key={index} index={index} onCountChange={handleCountChange} />
      </div>
      <div className='functionbtn_wrap'>
      <Needsbtn />
      <AddCartbtn counts={counts} productid={value.id} userId={userId}/>
      </div>
    </div>
    </>
    :''
    }
      </div>
    </div>
    {gridstyle == 0 ?
    <>
    <div className='other_wrap'>
     <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
     <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
   </div>
   {!main ? 
    <div className='counterbtrn_wrap'>
      <div className='testbox'>
        {gridstyle == 2 ? <Checkbox value={value.id}></Checkbox> : ''}
        <Countbtn ids={value.id} key={index} index={index} onCountChange={handleCountChange} />
      </div>
      <Needsbtn counter={counts} productid={value.id} userId={userId}/>
      <AddCartbtn counter={counts} productid={value.id} userId={userId}/>
    </div>
    :
    ""
    }
    </>
    :''
    }
  </div>
  </div>
  
  )
}

export default Productform
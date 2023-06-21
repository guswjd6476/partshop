
import {  Link} from 'react-router-dom';
import { AddCartbtn } from '../../components_btn/Cartbtn';
import { Checkbox,Tag} from 'antd';
import Countbtn from '../../components_btn/Countbtn';
import { pricechange } from '../../../service/function';
import Needsbtn from '../../components_btn/Needsbtn';
function Productform({main,counts,index,pathValue,userId,value,handleCountChange,gridstyle}){


return(
  <>
  {gridstyle ==  0 ? 
    <div className='productbox grid1'>
    {!main? <Checkbox value={value.id}></Checkbox> : ''}
      <Link className='product_pic'  to={pathValue}>
        <img src={value.img1}/>
      </Link>
      <div >
      <Link  to={pathValue}>
      <div className='productwrap2_wrap_div'>
      <div className='productwrap2_wrap'>
        <div className='product_title'>
          <div className='f12 brandt'>[{value.brand}] 
          <span className='valueid f12'>[상품코드 : {value.id}]</span>  </div>
          <div className={value.pName !==' '?'product_d f14':'none'}>{value.pName}</div>
        </div>
        <div className='flex pinfobox'>
          <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
          <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
          <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
        </div>
      </div>
      <div className={'f12 product_d detail'} >{value.pDetail}</div>
      </div>
      <div className='flex j'>
      <div className='pricebox'>
        <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='tx f14'>원</span></p>
        <span className='dcvalue'>{value.dcrate}%</span>
        <p className={value.pPrice !==''?'product_d f20':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
      </div>
      <div className='other_wrap'>
        <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
        <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
      </div>
      </div>
      </Link>
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
  </div>
  :
 gridstyle ==  1 ? 
 <div className='productbox grid2'>
      <Checkbox value={value.id}></Checkbox>
      <Link className='product_pic'  to={pathValue}>
        <Link className='product_pic_bg'  to={pathValue}>
        </Link>
        <img src={value.img1}/>
        <div className='product_de abpostion flex j'>
          <div className='product_title'>
              <div className='f12 brandt'>[{value.brand}] 
              <span className='valueid f12'>[상품코드 : {value.id}]</span>  </div>
              <div className={'f12 product_d detail'} >{value.pDetail}</div>
  
              <div className='flex pinfobox'>
              <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
              <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
              <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
            </div>
          </div>
          <div className='other_wrap'>
            <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
            <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
          </div>
        </div>
      </Link>
      <div>
      <div className='flex flexc'>
      <div className={value.pName !==' '?'product_d ':'none'}>{value.pName}</div>
      <div className='flex j'>
      <div className='pricebox'>
        <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='tx f14'>원</span></p>
        <span className='dcvalue'>{value.dcrate}%</span>
        <p className={value.pPrice !==''?'product_d f20':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
      </div>
      <div className='counterbtrn_wrap'>
      <div className='testbox'>
        {gridstyle == 2 ? <Checkbox value={value.id}></Checkbox> : ''}
        <Countbtn ids={value.id} key={index} index={index} onCountChange={handleCountChange} />
      </div>
      <Needsbtn counter={counts} productid={value.id} userId={userId}/>
      <AddCartbtn counter={counts} productid={value.id} userId={userId}/>
    </div>
      </div>
      </div>
      </div>
  </div>
 :
<div className='productbox grid3'>
      <Link className='product_pic'  to={pathValue}>
        <img src={value.img1}/>
      </Link>
      <Link className='flex grid3wrap'  to={pathValue}>
      <div >
      <div className='productwrap2_wrap'>
        <div className='product_title'>
          <div className='f12 brandt'>[{value.brand}] 
          <span className='valueid f12'>[상품코드 : {value.id}]</span>  </div>
       
        </div>
        <div className='flex pinfobox'>
          <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
          <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
          <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
        </div>
        <div className={value.pName !==' '?'product_d f14':'none'}>{value.pName}</div>
      </div>
      <div className={'f12 product_d detail'} >{value.pDetail}</div>
      </div>
      <div className='mr10 flex j'>
      <div className='pricebox'>
        <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='tx f14'>원</span></p>
        <span className='dcvalue'>{value.dcrate}%</span>
        <p className={value.pPrice !==''?'product_d f20':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
      </div>
      <div className='other_wrap'>
        <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
        <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
      </div>
      </div>
      </Link>
    
    <div className='counterbtrn_wrap'>
      <div className='testbox'>
        {gridstyle == 2 ? <Checkbox value={value.id}></Checkbox> : ''}
        <Countbtn ids={value.id} key={index} index={index} onCountChange={handleCountChange} />
      </div>
      <div>
      <Needsbtn counter={counts} productid={value.id} userId={userId}/>
      <AddCartbtn counter={counts} productid={value.id} userId={userId}/>
      </div>
    </div>
  </div>

  }
  </>
  
  )
}

export default Productform
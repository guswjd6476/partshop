
import {  Link} from 'react-router-dom';
import { AddCartbtn } from '../../components_btn/Cartbtn';
import { Checkbox,Tag} from 'antd';
import Countbtn from '../../components_btn/Countbtn';
import { pricechange } from '../../../service/function';
import Needsbtn from '../../components_btn/Needsbtn';
function Productform({main,counts,index,pathValue,userId,value,handleCountChange,gridstyle}){


return(
  <>
  {value&&value ? 
  <>
  {gridstyle ==  0 ? 
    <div className='productbox grid1'>
    {!main? 
    <div className='flex'>
    <Checkbox value={value.id}></Checkbox> 
    <div className='f12 brandt'>[{value.brand}] 
          <span className='valueid f12'>[상품코드 : {value.id}]</span>  </div>
    </div>
    
    : ''}
      <Link className='product_pic'  to={pathValue}>
        <img src={value&&value.img1}/>
      </Link>
      <div >
      <Link  to={pathValue}>
      <div className='productwrap2_wrap_div'>
      <div className='productwrap2_wrap'>
        <div className='product_title'>
         
          <div className={value.pName !==' '?'product_d pName f14':'none'}>{value.pName}</div>
        </div>
        <div className='flex pinfobox'>
          <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
          <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
          <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
          <div className={'f12 product_d detail'} >{value.pDetail}</div>
        </div>
      </div>
      </div>
      <div className='flex j'>
        <div className='pricebox'>
          <div className='flex j h22'>
          <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='tx f14'>원</span></p>
          <span className='dcvalue'>{value.dcrate}%</span>
          </div>
          <p className={value.pPrice !==''?'product_d h24 f20':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
        </div>
        <div className='other_wrap'>
          <p className='othertag f12 h22'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
          <p className='f12 h24'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
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
  <div className='flex a'>
    <Checkbox value={value.id}></Checkbox>
    <div className='brandt'>
      <span>[{value.brand}] </span>
      <span className='valueid f12'>[상품코드 : {value.id}]</span>  
    </div>
    <div className='flex pinfobox'>
      <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
      <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
      <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
    </div>
  </div>
      <Link className='product_pic'  to={pathValue}>
        <Link className='product_pic_bg'  to={pathValue}>
        </Link>
        <img src={value.img1}/>
        <div className='product_de  flex j'>
              <div className='f12'>
                
              </div>
              
              <div className={'f12 product_d detail'} >{value.pDetail}</div>
  
          
        </div>
      </Link>
      <div>
      <div className='flex flexc'>

      <div className='flex j pad10'>
      <div>
      <div className={value.pName !==' '?'grid2Pname h30':'none'}>
        <span className='pName'>{value.pName}</span>
        <span className='dcvalue'>{value.dcrate}%</span>
      </div>
     
      <div className='pricebox h30'>
      <p className={value.pPrice !==''?'product_d f20':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
        <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='f14'>원</span></p>
      
       
      </div>
      <div>
      </div>
     
        
      </div>

    <div>
      <div className='other_wrap h30'>
            <div className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</div>
            <div className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</div>
          </div>
      <div className='counterbtrn_wrap'>
      <div className='testbox h30'>
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
  </div>
 :
<div className='productbox grid3'>
      <Link className='product_pic'  to={pathValue}>
        <img src={value.img1}/>
      </Link>
      <Link className='flex grid3wrap'  to={pathValue}>
        <div className='grid3top'>
          <div className='f13 grid31 flex '>
            <span className='brand'>[{value.brand}] </span>
            <div className={value.pName !==' '?'product_d f13 bold':'none'}>{value.pName}</div>
            <span className='valueid f13'>[상품코드 : {value.id}]</span>  
          </div>
              
          <div className='grid32 flex'> 
            <p className={value.pCost !=='' ?'tx f14':'none'} >{pricechange(value.pCost)}<span className='tx f14'>원</span></p>
            <span className='dcvalue'>{value.dcrate}%</span>
          </div>
          <div className='grid33 other_wrap  flex'> 
          
            <p className='othertag f12'><Tag className='navi'>m.o.q</Tag>{value.moq}</p>
          </div>
          <div className='grid34'>
          
            <Checkbox value={value.id}></Checkbox>
          </div>
          <div className='grid35'>
          
            <Needsbtn counter={counts} productid={value.id} userId={userId}/>
          </div>
           
            
        </div>
        <div className='grid3bottom'>
          <div className='flex pinfobox grid31'>
            <p className={value.inch !==''?'product_d f12':'none'}>{value.inch}인치</p>
            <p className={value.material !==''?'product_d f12':'none'} >{value.material}</p>
            <p className={value.color !==''?'product_d f12':'none'} > {value.color}</p>
            <div className={'f12 product_d detail'} >{value.pDetail}</div>
          </div>
          <div className='pricebox grid32'>
      
            <p className={value.pPrice !==''?'product_d f20':'none'} >{pricechange(value.pPrice)}<span className='f18'>원</span></p>
          </div>
          <div className='other_wrap grid33'>
        
            <p className='f12'><Tag className='grey'>준비</Tag>약{value.prepare}일</p>
          </div>
          <div className='grid34'>  
            
        <Countbtn ids={value.id} key={index} index={index} onCountChange={handleCountChange} />
          </div>
          <div className='gridbtnwrap grid35'>
      <AddCartbtn counter={counts} productid={value.id} userId={userId}/>
      </div>
        </div>
      
      
      </Link>
  </div>

  }
  </>
:""}
  </>
  )
}

export default Productform
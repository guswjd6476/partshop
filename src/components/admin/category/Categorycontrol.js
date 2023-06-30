import { useEffect, useState } from "react";
import { Button, Input,Modal } from "antd";
import { addMainCate, addCates,dMainCate,dSubCate } from "../../../service/function";
import { ExclamationCircleFilled } from '@ant-design/icons';

function Categorycontrol({ cate,cates,setCates,setCate }) {
  const { confirm } = Modal;
  const [newCates, setNewCates] = useState([]);
  const [newCate, setNewCate] = useState([]);
    const [trues, setTrues] = useState(0)
    const [edit, setEdit] = useState(null)
const [category, setCategory] = useState([...cates])
  const onChange = (e,index,id) => {
    const updatedCates = [...category];
    if(category.length !== cates.length){

      const updatedCatess = [...newCates];
      updatedCatess[index-cates.length] = { id : id, category: e.target.value, catenum:index, edit :true }  
    setNewCates(updatedCatess)
    }
    updatedCates[index] = { id:id, category: e.target.value, catenum:index,edit :true }
 
    setCategory(updatedCates);
    //setCates(updatedCates);
  };
  const onsubChange = (e, subIndex, category, catenum) => {
    const updatedCate = [...cate.filter(value => value.category == category)];
    const othercate = [...cate.filter(value => value.category !== category)];
    let updatedSubCate = updatedCate[subIndex].subcategory;
        updatedSubCate = e.target.value; 
    let updatedSubCatenum = catenum+updatedSubCate.charAt(0);     
    updatedCate[subIndex] = {
      ...updatedCate[subIndex],
      subcategory: updatedSubCate,
      subcatenum:updatedSubCatenum,
      edit: true,
    };
    let lastcate = [...updatedCate,...othercate]
    setCate(lastcate);
  };
  const updateinputbox = (id,value,num,index) =>{
  if( category.length == cates.length ){
setEdit(index)
category[index] = {id : id, category : value, catenum:num, edit:true}
  } else{
  
    category[index] = {id : id, category : value, catenum:num, edit:true}
    newCates[index-cates.length]={id : id, category : value, catenum:num, edit:true}
}
  }
  const addInputBox = () => {
    //setCates((prevCates) => [...prevCates, { category:null, catenum:null , edit :true }]);
    setCategory((prevCates) => [...prevCates, { category:null, catenum:null , edit :true }]);
    setNewCates(() => [...newCates,{ category:null, catenum:null, edit :true }]);

  };
  
  const addSubinput = (index, category) => {
    setCate((prevCate) => [
      ...prevCate,
      { category: category, catenum: index, subcategory: null, subcatenum: null, edit: true },
    ]);
    setNewCate((prevCate) => [
      ...prevCate,
      { category: category, catenum: index, subcategory: null, subcatenum: null, edit: true },
    ]);
  };
const showConfirm = (index,catenum) => {
  confirm({
    title: '메뉴를 삭제하시겠습니까?',
    icon: <ExclamationCircleFilled />,
    content: '진행을 원한다면 확인버튼을 눌러주세요',
    onOk() {
        dMainCate(catenum)
            .then(
                function(response){
                    alert('삭제하기')
            setCategory((prevCates) => {
                const updatedCates = [...prevCates];
                updatedCates.splice(index, 1);
                return updatedCates;
              });
            }
              )
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const showConfirms = (index,catenum,category) => {
  confirm({
    title: '메뉴를 삭제하시겠습니까?',
    icon: <ExclamationCircleFilled />,
    content: '진행을 원한다면 확인버튼을 눌러주세요',
    onOk() {
        dSubCate(catenum)
            .then(
                function(response){
                    alert('삭제하기')
                    setCate((prevCate) => {
                      const updatedCate = [...prevCate.filter(value => value.category == category)];
                      const othercate = [...prevCate.filter(value => value.category !== category)];
                        updatedCate.splice(index, 1);
                        const lastcate = [...updatedCate,...othercate]
                        return lastcate;
                      });
            }
              )
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const returninput = (index)=>{
  category[index].edit = false
} 
  const removeInputBox = (index) => {
    setCategory(() => {
      const updatedCates = [...category];
      updatedCates.splice(index, 1);
      return updatedCates;
    });
    setNewCates(() => {
      const updatedCates = [...newCates];
      updatedCates.splice(index-category.length+1, 1);
      return updatedCates;
    });
  };
  const removeSubInputBox = (index, category) => {
    setCate((prevCate) => {
      const updatedCates = [...prevCate.filter(value => value.category == category)];
      const othercate = [...prevCate.filter(value => value.category !== category)];
      updatedCates.splice(index, 1);
      const lastcate = [...updatedCates,...othercate]
      return lastcate;
    });
  };
  const okayInputBox = (index) => {
    setCategory((prevCates) => {
      const updatedCates = [...prevCates];
      updatedCates[index] = { ...updatedCates[index], edit: false };
      return updatedCates;
    });
  };
  const okaySubInputBox = (index,category) => {
    setCate((prevCate) => {
      const updatedCates = [...prevCate.filter(value => value.category == category)];
      const othercate = [...prevCate.filter(value => value.category !== category)];
      updatedCates[index] = { ...updatedCates[index], edit: false };
      const lastcate = [...updatedCates,...othercate]
      return lastcate;
    });
  };
  const addMainCates = () => {
    addMainCate(category.length === cates.length ? category : newCates)
      .then(function (response) {
        setCates(category)
        setNewCate([])
        alert("카테고리가 수정되었습니다");
      });
  };
  const addcate = () =>{
    addCates(cate,newCates)
    .then(function (response) {
      setCates(category)
      setNewCates([])
      alert("카테고리가 수정되었습니다");
    });
  }
  const [activeIndexes, setActiveIndexes] = useState([]);
  const opencate = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter(item => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  
  return (
    <>
      {category&&category.map((value, index) => (
        <div className="inputBoxWrapper" key={index}>
            {!value.edit ?  
            <div className="inputboxwrap">
              <div className="openbtn" onClick={() => opencate(index)}>
                  {cate &&
                  cate.filter(item => item.catenum === value.catenum).length > 0 ? 'V' : '>'}
              </div>
              <div onMouseEnter={e=>setTrues(index)} onMouseLeave={e=>setTrues(-1)}  className='catebox 'key={index}>
            
                  <div>
                  {category.length == cates.length && value.edit ?
                  <div>??????</div>
                  :
                  <span>{value.category}</span>
                  }
                  </div>
                  <div  className={trues == index ?"catebtnwrap" :'none'}>
                      <Button onClick={() => {updateinputbox(value.id,value.category,value.catenum,index)
                        }}>수정</Button>
                      <Button onClick={() => {addSubinput(index,value.category)}}>추가</Button>
                      <Button onClick={() => showConfirm(index,value.catenum)}>삭제</Button>
                  </div>
              
              </div>
          </div>:
         ( value.edit && category.length==cates.length) ? 
          <div className="cateinputbox">
          <Input onChange={(e) => onChange(e,index,value.id)} />
          <div  className='catebtnwrap'>
            <Button onClick={()=> returninput(index)}>취소</Button>
            <Button onClick={() =>okayInputBox(index)}>확인</Button>
          </div>
          </div>
          :
          <div className="cateinputbox">
          <Input onChange={(e) => onChange(e,index,value.id)} />
          <div  className='catebtnwrap'>
            <Button onClick={() => removeInputBox(index)}>취소</Button>
            <Button onClick={() =>okayInputBox(index)}>확인</Button>
          </div>
        </div>

            }
             {activeIndexes.includes(index) && (
              <>
          <div>
              {cate &&
                cate
                  .filter((item) => item.catenum === value.catenum)
                  .map((filteredItem, subIndex) => (
                    <>
                      {!filteredItem.edit ? (
                        <div key={filteredItem.id} className="subcategorylist">
                          <div >{filteredItem.subcategory}</div>
                          <div className="subcategorybtnwrap">
                            <Button onClick={()=>showConfirms(subIndex,filteredItem.subcatenum,value.category)}>삭제</Button>
                            <Button>수정</Button>
                          </div>
                        </div>
                      ) : (
                        <div className="sub cateinputbox">
                          <Input onChange={(e) => onsubChange(e,subIndex,value.category,value.catenum)} />
                          <div className="catebtnwrap">
                            <Button onClick={() => removeSubInputBox(subIndex, value.category)}>취소</Button>
                            <Button onClick={() => okaySubInputBox(subIndex, value.category)}>확인</Button>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
            </div>
          </>
        )}
      </div>
    ))}
    <Button className="addcatebtn" onClick={addInputBox}>카테고리 추가</Button>
      <Button onClick={newCate&&newCate.length<1 ? addMainCates : addcate}>변경사항 저장</Button>
    </>
  );
}

export default Categorycontrol;
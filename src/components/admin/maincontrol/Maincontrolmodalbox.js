
function Maincontrolmodalbox({i,datas,setMi,edit }) {


const handleChange = (id, value) => {
    setMi(prevState => ({
      ...prevState,
      [id]: value
    }));
    
  };
  return (
    <>
{datas&&datas.map(value => 
    <div  onClick={e=>{handleChange(edit == 1 ? `a${i+1}` :`b${i+1}`,value.id)}} className="divbox modalbox" key={value.id}>
        <div style={{width:'100px', height:'100px'}}>
            <img style={{width:'100%', height:'100%'}} src={value.img1}/> 
        </div>
        <div >
            {value.pName}
        </div>
    </div>)}
</>
  )
}

export default Maincontrolmodalbox;
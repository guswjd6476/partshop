

import { DownloadOutlined} from '@ant-design/icons';
function Downloadfile({list}) {
  
    const filename = (path)=>{
        return path.split('/').pop();
        
    } 
    
    return (
    <div className="filewrap">
         {list.file1? 
   <form  action={list.file1} method="get">
    <button type="submit"><DownloadOutlined />{filename(list.file1)}</button>
    </form>
:''
}
{list.file2? 
   <form  action={list.file2} method="get">
    <button type="submit"><DownloadOutlined />{filename(list.file2)}</button>
    </form>
:''
}
{list.file3? 
   <form  action={list.file3} method="get">
    <button type="submit"><DownloadOutlined />{filename(list.file3)}</button>
    </form>
:''
}
{list.file4? 
   <form  action={list.file4} method="get">
    <button type="submit"><DownloadOutlined />{filename(list.file4)}</button>
    </form>
:''
}
    </div>
     
    );
  }
  
  export default Downloadfile;
  
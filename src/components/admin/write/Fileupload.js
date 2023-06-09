import { PlusOutlined } from '@ant-design/icons';
import { Upload,Button } from 'antd';
import { useState } from 'react';

function Fileupload({fileList, setFileList}) {
const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);


    return (
    <>
     <Upload
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={() => false}
        >
          <Button>업로드</Button>
      </Upload>
    </>
    );

}

export default Fileupload;
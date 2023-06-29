import React, { useEffect, useState } from "react";
const Post = (props) => {
    
    const complete = (data) =>{
      

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

  
        
    }

    return (
        <Modal 
        onOk={props.onToggleModal} onCancel={props.onToggleModal}
         title="Basic Modal" open={props.isModalOpen} >
            
            <DaumPostcode
                className="postmodal"
                onComplete={complete}
                onClose={e=>{props.setIsModalOpen(false)}} />
          </Modal>
        
)
};

export default Post;
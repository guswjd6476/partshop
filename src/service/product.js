import axios from "axios";
import { fetchData } from "./instance";
// 장바구니 추가 함수 
const addCart = (num, userId,counter) => {
    return axios.get('/api/addCart', {
      params: {
        num,
        userId,
        counter
      },
    });
  };
  // 장바구니 추가 함수 (복수)
const addsCart = (data,userId) => {
  return axios.get('/api/addCart', {
    params: {
     data,
     userId
    },
  });
};
// 장바구니 가져오기 함수
const getCart = (userId) => {
    return axios.get('/api/getCart', {
      params: {
        userId,
      },
    });
  };
  // 장바구니 삭제하기 함수
const deleteCart = (num) => {
  console.log(num,'????')
  return axios.get('/api/deleteCart', {
    params: {
      num,
    },
  });
};


const productdetail = (id) => {
  return axios.get('/api/productdetail', {
    params: {
      id,
    },
  });
};

const getproduct = (cate,none) => {
  return axios.get('/api/getproduct', {
    params: {
      cate,none
    },
  });
};

const Allgetproduct = () => {
  return axios.get('/api/Allproductdetail', {
   
  });
};

// 추천상품
const recommendlist = (subcate, num) => {
  return axios.get('/api/recommendlist', {
    params: {
      subcate , num
    },
  });
};
// 소팅 프로덕트 가져오기 
const getSort = (sort,path)=>{
  return axios.get('/api/product', {
    params: {
      sort,path
    },
  });
}
// 공지사항 글 불러오기 
const getAllItem = (path)=>{
  console.log(path,'?path')
  return axios.get('/api/getAllItem', {
    params: {
      path
      }
  });
}


// 특정 게시물 불러오기
const getItemcon = (num,path)=>{
  return axios.get('/api/getItemcon', {
    params: {
    num,path
    },
  });
}

// 특정 게시물 공지사항 불러오기
const idQna = (num)=>{
  return axios.get('/api/idQna', {
    params: {
    num
    },
  });
}
// 공지사항 글 작성하기 
const Wnotice = (title,content,writer,category)=>{
  return axios.get('/api/writenotice', {
    params: {
      title,content,writer,category
    },
  });
}
// qna 글 작성하기 
const Wqna = (title,content,writer,category)=>{
  return axios.get('/api/writeqna', {
    params: {
      title,content,writer,category
    },
  });
}
// qna 답변글 작성하기 
const Wqnaanswer = (content,writer,num)=>{
  return axios.get('/api/writeqnaanswer', {
    params: {
      content,writer,num
    },
  });
}

// faq 글 작성하기 
const Wfaq = (title,content,writer,category)=>{
  return axios.get('/api/writefaq', {
    params: {
      title,content,writer,category
    },
  });
}
// 이전 글 가져오기
const getPrevNext = (num,id)=>{
  return axios.get('/api/prevNext', {
    params: {
    num,
    id
    },
  });
}
// 게시물 수정하기
const updateItem = (title, content, category, id, path)=>{
  console.log(path,'?path')
  return axios.get('/api/updateItem', {
    params: {
    title,content,category,id,path
    },
  });
}
// 메인 데이터 가져오기 
const getmain = ()=>{
  return axios.get('/api/getmain');
}
// 메인업데이트 
const updatemain = (a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8)=>{
  return axios.get('/api/updatemain', {
    params: {
      a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8
    },
  });
}


const getiot = async () => {
  return fetchData('/api/Alliotlist');
};
  export { addCart ,getCart,deleteCart,productdetail,getproduct,addsCart,recommendlist,getSort,getAllItem,Wnotice,getItemcon,idQna,Wqna,Wfaq,Wqnaanswer,getPrevNext,updateItem,Allgetproduct,updatemain,getmain,getiot};



import { fetchData } from "./instance";
// 장바구니 추가 함수 

  const addCart = async (num, userId,counter) => {
    return fetchData('/api/addCart', { num, userId,counter });
  };
  // 장바구니 추가 함수 (복수)

const addsCart = async (data,userId) => {
  return fetchData('/api/addCart', { data,userId });
};

  const getCart = async (userId) => {
    return fetchData('/api/getCart', {userId});
  };

const deleteCart = async (num) => {
  return fetchData('/api/deleteCart', {num});
};


const productdetail = async (id) => {
  return fetchData('/api/productdetail', {id});
};

// const getproduct = (cate,none) => {
//   return axios.get('/api/getproduct', {
//     params: {
//       cate,none
//     },
//   });
// };
const getproduct = async (cate,none) => {
  return fetchData('/api/getproduct', {cate,none});
};

// const Allgetproduct = () => {
//   return axios.get('/api/Allproductdetail', {
//   });
// };

const Allproductdetail = async (filter) => {
  return fetchData('/api/Allproductdetail', {filter});
};
const Allgetproduct = async () => {
  return fetchData('/api/Allproductdetail');
};
const updatenames = async (id,category,subcategory,pName,pquantity,pPrice,inch,material,brand,color) => {
  return fetchData('/api/updatename', {id,category,subcategory,pName,pquantity,pPrice,inch,material,brand,color});
};

// 추천상품
// const recommendlist = (subcate, num) => {
//   return axios.get('/api/recommendlist', {
//     params: {
//       subcate , num
//     },
//   });
// };
const recommendlist = async (subcate, num) => {
  return fetchData('/api/recommendlist', {subcate, num});
};
// 소팅 프로덕트 가져오기 
// const getSort = (sort,path)=>{
//   return axios.get('/api/product', {
//     params: {
//       sort,path
//     },
//   });
// }
const getSort = async (sort,path) => {
  return fetchData('/api/product', {sort,path});
};

const getAllItem = async (path) => {
  return fetchData('/api/getAllItem', {path});
};

// 특정 게시물 불러오기
// const getItemcon = (num,path)=>{
//   return axios.get('/api/getItemcon', {
//     params: {
//     num,path
//     },
//   });
// }
const getItemcon = async (num,path) => {
  return fetchData('/api/getItemcon', {num,path});
};
// 특정 게시물 공지사항 불러오기
// const idQna = (num)=>{
//   return axios.get('/api/idQna', {
//     params: {
//     num
//     },
//   });
// }
const idQna = async (num) => {
  return fetchData('/api/idQna', {num});
};
// 공지사항 글 작성하기 
// const Wnotice = (title,content,writer,category)=>{
//   return axios.get('/api/writenotice', {
//     params: {
//       title,content,writer,category
//     },
//   });
// }
const Wnotice = async (title,content,writer,category) => {
  return fetchData('/api/writenotice', {title,content,writer,category});
};
// qna 글 작성하기 
// const Wqna = (title,content,writer,category)=>{
//   return axios.get('/api/writeqna', {
//     params: {
//       title,content,writer,category
//     },
//   });
// }
const Wqna = async (title,content,writer,category) => {
  return fetchData('/api/writeqna', {title,content,writer,category});
};
// qna 답변글 작성하기 
// const Wqnaanswer = (content,writer,num)=>{
//   return axios.get('/api/writeqnaanswer', {
//     params: {
//       content,writer,num
//     },
//   });
// }
const Wqnaanswer = async (content,writer,num) => {
  return fetchData('/api/writeqnaanswer', {content,writer,num});
};
// faq 글 작성하기 
// const Wfaq = (title,content,writer,category)=>{
//   return axios.get('/api/writefaq', {
//     params: {
//       title,content,writer,category
//     },
//   });
// }
const Wfaq = async (title,content,writer,category) => {
  return fetchData('/api/writefaq', {title,content,writer,category});
};
// 이전 글 가져오기
// const getPrevNext = (num,id)=>{
//   return axios.get('/api/prevNext', {
//     params: {
//     num,
//     id
//     },
//   });
// }
const getPrevNext = async (num,id) => {
  return fetchData('/api/prevNext', {num,id});
};

const updateItem = async (title, content, category, id, path) => {
  return fetchData('/api/updateItem', {title, content, category, id, path});
};
// 메인 데이터 가져오기 
// const getmain = ()=>{
//   return axios.get('/api/getmain');
// }

const getmain = async () => {
  return fetchData('/api/getmain');
};
// 메인업데이트 
// const updatemain = (a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8)=>{
//   return axios.get('/api/updatemain', {
//     params: {
//       a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8
//     },
//   });
// }
const updatemain = async (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10) => {
  return fetchData('/api/updatemain',{a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10});
};

const getiot = async () => {
  return fetchData('/api/Alliotlist');
};
const uploadproduct = async (title,content,catenum,subcatenum,pName,pquantity,pPrice,inch,material,brand,color,dcrate,moq,prepare,detail,startday,lastday) => {
  return fetchData('/api/uploadproduct',{title,content,catenum,subcatenum,pName,pquantity,pPrice,inch,material,brand,color,dcrate,moq,prepare,detail,startday,lastday});
};

const getevent = async () => {
  return fetchData('/api/getevent');
};
const getsubevent = async (id) => {
  return fetchData('/api/getsubevent',{id});
};



  export { addCart ,getCart,deleteCart,productdetail,getproduct,addsCart,recommendlist,getSort,getAllItem,Wnotice,getItemcon,idQna,Wqna,Wfaq,Wqnaanswer,getPrevNext,updateItem,Allgetproduct,updatemain,getmain,getiot,Allproductdetail,updatenames,uploadproduct,getevent,getsubevent};


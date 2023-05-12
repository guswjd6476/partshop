import axios from "axios";

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
  return axios.get('/api/deleteCart', {
    params: {
      num,
    },
  });
};

// 게시글 가져오기(제목, 내용)
const uploadlist = (id) => {
  return axios.get('/api/uploadlist', {
    params: {
      id,
    },
  });
};
// 게시글 번호에 맞는 제품 정보 가져오기 

const productdetail = (id) => {
  return axios.get('/api/productdetail', {
    params: {
      id,
    },
  });
};

const mainproduct = (cate) => {
  return axios.get('/api/mainproduct', {
    params: {
      cate,
    },
  });
};
const subproduct = (subcate) => {
  return axios.get('/api/subproduct', {
    params: {
      subcate,
    },
  });
};

// 추천상품
const recommendlist = (subcate) => {
  return axios.get('/api/recommendlist', {
    params: {
      subcate
    },
  });
};


  export { addCart ,getCart,deleteCart,uploadlist,productdetail,mainproduct,subproduct,addsCart,recommendlist};


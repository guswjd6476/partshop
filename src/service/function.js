import axios from "axios";
import { instance } from "./instance";
// 최근등록순 등등의 내림차순 정렬 
const sortList = (filteredArray, sortType) => {
    switch (sortType) {
      case "daydesc":
        return filteredArray.sort(
          (a, b) => new Date(b.updatetime) - new Date(a.updatetime)
        );
      case "low":
        return filteredArray.sort((a, b) => a.pPrice - b.pPrice);
      case "high":
        return filteredArray.sort((a, b) => b.pPrice - a.pPrice);
      case "popular":
        return filteredArray.sort((a, b) => b.view - a.view);
      case "sales":
        return filteredArray.sort((a, b) => b.pSale - a.pSale);
      default:
        return filteredArray;
    }
  };
  const addNeeds =async (num,userId,counter) => {
    try {
    const response = await instance .get('/api/addNeeds', {
      params: {
        num,
        userId,
        counter
      },   
     
        headers: {
          "Content-Type": "application/json",
        },
      
    })
    return response;
  } catch (err) {
    console.log(`오류: ${err}`);
    return err;
  }
  }

  const addNeedss =async (data,userId) => {
    try {
    const response = await instance .get('/api/addNeeds', {
      params: {
        data,userId
      },   
        headers: {
          "Content-Type": "application/json",
        },
      
    })
    return response;
  } catch (err) {
    console.log(`오류: ${err}`);
    return err;
  }
  }

  const getcompare =async (dnum) => {
    try {
    const response = await instance .get('/api/getcompare', {
      params: {
        num
      },   
        headers: {
          "Content-Type": "application/json",
        },
      
    })
    return response;
  } catch (err) {
    console.log(`오류: ${err}`);
    return err;
  }
  }

// 모든 카테고리 가져오기

const getCate =async ()=>{
  try {
    const response = await instance.get(
      '/api/category',
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(`오류: ${err}`);
    return err;
  }
}
const getMainCate = async ()=>{
  try {
    const response = await instance.get(
      '/api/Maincategory',
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(`오류: ${err}`);
    return err;
  }
}

// 메인 카테고리 추가하기
const addMainCate = (cates) => {
  console.log(cates,'cates')
  return axios.get('/api/addMainCate', {
    params: {
      cates
    }
  });
}
const addCates = (cate,cates) => {
  console.log(cate,'cates')
  return axios.get('/api/addCates', {
    params: {
      cate,cates
    }
  });
}
// 메인 카테고리 삭제하기
const dMainCate = (num) => {
  return axios.get('/api/dMainCate', {
    params: {
      num
    }
  });
}
// 서브 카테고리 삭제하기
const dSubCate = (num) => {
  return axios.get('/api/dSubCate', {
    params: {
      num
    }
  });
}

function pricechange(number) {
  const parts = Number(number).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
  export {sortList,addNeeds,addNeedss,getcompare,getCate,addMainCate,getMainCate,dMainCate,addCates,dSubCate,pricechange}
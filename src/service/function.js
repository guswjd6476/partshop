import axios from "axios";
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
  const addNeeds = (num,userId,counter) => {
    return axios.get('/api/addNeeds', {
      params: {
        num,
        userId,
        counter
      },
    });
  }
  const addNeedss = (data,userId) => {
    return axios.get('/api/addNeeds', {
      params: {
        data,
        userId
      },
    });
  }
  const getcompare = (num) => {
    return axios.get('/api/getcompare', {
      params: {
        num
      },
    });
  }


// 모든 카테고리 가져오기

const getCate = ()=>{
  return axios.get('/api/category')
}
const getMainCate = ()=>{
  return axios.get('/api/Maincategory')
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
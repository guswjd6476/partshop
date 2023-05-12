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

  function numbcom(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  export {sortList,addNeeds,addNeedss,getcompare,numbcom}
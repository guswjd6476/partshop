import { fetchData } from "./instance";
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
 
  const addNeeds = async (num,userId,counter) => {
    return fetchData('/api/addNeeds', { num,userId,counter });
  };
  
  const addNeedss = async (data, userId) => {
    return fetchData('/api/addNeeds', { data, userId });
  };
  

  const getcompare = async (num) => {
    return fetchData('/api/getcompare', { num });
  };
  
// 모든 카테고리 가져오기


const getCate = async () => {
  return fetchData('/api/category');
};
const getMainCate = async () => {
  return fetchData('/api/Maincategory');
};

// 메인 카테고리 추가하기
const addMainCate = async (cates) => {
  return fetchData('/api/addMainCate', { cates });
};


const addCates = async (cate,cates) => {
  return fetchData('/api/addCates', { cate,cates });
};
// 메인 카테고리 삭제하기
// const dMainCate = (num) => {
//   return axios.get('/api/dMainCate', {
//     params: {
//       num
//     }
//   });
// }
const dMainCate = async (num) => {
  return fetchData('/api/dMainCate', { num });
};
// 서브 카테고리 삭제하기
// const dSubCate = (num) => {
//   return axios.get('/api/dSubCate', {
//     params: {
//       num
//     }
//   });
// }
const dSubCate = async (num) => {
  return fetchData('/api/dSubCate', { num });
};
function pricechange(number) {
  const parts = Number(number).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

function datechange(inputString) {
  const dateRegex = /\d{4}-\d{2}-\d{2}/;
  const extractedDate = inputString.match(dateRegex)[0];
  return extractedDate;
}

function buystates(state){
  const buystate = state == 1 ? '상품준비중' : state == 2 ? '배송준비중' :state == 3 ? '배송중' : '수령완료' 
  return buystate;
}

function sortedObj(num,list, func){
  const dates = new Date(); 
  const formattedDate = (date) => {
    const sdate = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;
    return sdate;
  };
  
  if(num===0){
    dates.setFullYear(dates.getFullYear() - 1);
    console.log(dates,'??')
    console.log(formattedDate(dates),'??')
    let sortedObjects = list.filter(obj=>obj.buytime >= formattedDate(dates));
    func(sortedObjects);
  }else if (num ===1){
    dates.setDate(dates.getDate() - 7);
    let sortedObjects = list.filter(obj=>obj.buytime >= formattedDate(dates));
    func(sortedObjects);
  }else if(num===2){
    dates.setMonth(dates.getMonth() - 1);
    let sortedObjects = list.filter(obj=>obj.buytime >= formattedDate(dates));
    func(sortedObjects);
  }else if (num===3){
    dates.setMonth(dates.getMonth() - 3);
    let sortedObjects = list.filter(obj=>obj.buytime >= formattedDate(dates));
    func(sortedObjects);
  }else{
    func(list);
  }
}
  export {sortList,addNeeds,addNeedss,getcompare,getCate,addMainCate,getMainCate,dMainCate,addCates,dSubCate,pricechange,datechange,buystates,sortedObj}
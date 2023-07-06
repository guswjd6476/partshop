const brandOption = () => {
    return([
        {
            label : 'A회사',
            value : 'AA'
        }, {
            label : 'B회사',
            value : 'BB'
        }, {
            label : 'C회사',
            value : 'CC'
        }, {
            label : 'D회사',
            value : 'DD'
        }, {
            label : 'E회사',
            value : 'EE'
        }, {
            label : 'F회사',
            value : 'FF'
        }, {
            label : 'G회사',
            value : 'GG'
        }, {
            label : 'H회사',
            value : 'HH'
        }, {
            label : 'I회사',
            value : 'II'
        }, {
            label : 'J회사',
            value : 'JJ'
        }, {
            label : 'K회사',
            value : 'KK'
        }, {
            label : 'L회사',
            value : 'LL'
        }, {
            label : 'N회사',
            value : 'NN'
        }, {
            label : 'M회사',
            value : 'MM'
        },
    ]
    )
}

const colorOption = () => {
    return([
        {
            label : '빨강',
            value : 'red'
        },
        {
            label : '주황',
            value : 'orange'
        },
        {
            label : '노랑',
            value : 'yellow'
        },
        {
            label : '초록',
            value : 'green'
        },
        {
            label : '파랑',
            value : 'blue'
        },
        {
            label : '검정',
            value : 'black'
        },
        {
            label : '갈색',
            value : 'brown'
        }
    ]
    )
}
const materialOption = () => {
    return([
        {
            label : '고무',
            value : 'rubber'
        },
        {
            label : '폴리우레탄',
            value : 'polyurethane'
        },
        {
            label : '금속',
            value : 'metal'
        }
    ]
    )
}

const cardOption = () => {
const cardlist=['KB카드','신한카드','현대카드','삼성카드','농협카드','카카오뱅크','BC카드','하나카드','우리카드','롯데카드','씨티카드','새마을금고','케이뱅크','광주은행','우체국','전북은행','수협은행','신협은행']

        return([
            cardlist.map(value => ({
                label : value,
                value : value
        }))])
}
const buymlist = () => {
    const buymlist=['일시불','2개월','3개월','4개월','5개월','6개월','7개월','8개월','9개월','10개월','11개월','12개월']
    
            return([
                buymlist.map(value => ({
                    label : value,
                    value : value
            }))])
    }
const noticeOption = ()=>{
    const noticelist = ['공지사항','긴급공지']
    return([
        noticelist.map(value => ({
            label : value,
            value : value
    }))])
}
const faqOption = ()=>{
    const list = ['회원가입','배송','결제','취소 및 교환/AS','대량구매','증빙서류','구매']
    return([
       list.map(value => ({
            label : value,
            value : value
    }))])
}
const qnaOption = ()=>{
    const list = ['회원가입','배송','결제','취소 및 교환/AS','대량구매','증빙서류','구매']
    return([
       list.map(value => ({
            label : value,
            value : value
    }))])
}
const buystatelist = [
{
value : 1,
label : '입금확인중'
},
{
value : 2,
label : '상품준비중'
},
{
value : 3,
label : '출고완료'
},
{
value : 4,
label : '구매확정'
}

]
const dlist = [
    {
       value: "de.dhl",
       label: "DHL",
       tel: "+8215880001"
    },
    {
       value: "jp.sagawa",
       label: "Sagawa",
       tel: "+810120189595"
    },
    {
       value: "jp.yamato",
       label: "Kuroneko Yamato",
       tel: "+810120189595"
    },
    {
       value: "jp.yuubin",
       label: "Japan Post",
       tel: "+810570046111"
    },
    {
       value: "kr.chunilps",
       label: "천일택배",
       tel: "+8218776606"
    },
    {
       value: "kr.cjlogistics",
       label: "CJ대한통운",
       tel: "+8215881255"
    },
    {
       value: "kr.cupost",
       label: "CU 편의점택배",
       tel: "+8215771287"
    },
    {
       value: "kr.cvsnet",
       label: "GS Postbox 택배",
       tel: "+8215771287"
    },
    {
       value: "kr.cway",
       label: "CWAY (Woori Express)",
       tel: "+8215884899"
    },
    {
       value: "kr.daesin",
       label: "대신택배",
       tel: "+82314620100"
    },
    {
       value: "kr.epost",
       label: "우체국 택배",
       tel: "+8215881300"
    },
    {
       value: "kr.hanips",
       label: "한의사랑택배",
       tel: "+8216001055"
    },
    {
       value: "kr.hanjin",
       label: "한진택배",
       tel: "+8215880011"
    },
    {
       value: "kr.hdexp",
       label: "합동택배",
       tel: "+8218993392"
    },
    {
       value: "kr.homepick",
       label: "홈픽",
       tel: "+8218000987"
    },
    {
       value: "kr.honamlogis",
       label: "한서호남택배",
       tel: "+8218770572"
    },
    {
       value: "kr.ilyanglogis",
       label: "일양로지스",
       tel: "+8215880002"
    },
    {
       value: "kr.kdexp",
       label: "경동택배",
       tel: "+8218995368"
    },
    {
       value: "kr.kunyoung",
       label: "건영택배",
       tel: "+82533543001"
    },
    {
       value: "kr.logen",
       label: "로젠택배",
       tel: "+8215889988"
    },
    {
       value: "kr.lotte",
       label: "롯데택배",
       tel: "+8215882121"
    },
    {
       value: "kr.slx",
       label: "SLX",
       tel: "+82316375400"
    },
    {
       value: "kr.swgexp",
       label: "성원글로벌카고",
       tel: "+82327469984"
    },
    {
       value: "nl.tnt",
       label: "TNT"
    },
    {
       value: "un.upu.ems",
       label: "EMS"
    },
    {
       value: "us.fedex",
       label: "Fedex"
    },
    {
       value: "us.ups",
       label: "UPS"
    },
    {
       value: "us.usps",
       label: "USPS"
    }
 ]
export {brandOption, colorOption, materialOption,cardOption,buymlist,noticeOption,faqOption,qnaOption,dlist,buystatelist}
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
export {brandOption, colorOption, materialOption,cardOption,buymlist,noticeOption,faqOption,qnaOption}
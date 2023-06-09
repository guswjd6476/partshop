import { Breadcrumb } from "antd"



const Crumb1 = ({num}) =>{
    return(
        <Breadcrumb
        className="breacrumb"
        separator=">"
        items={[
          {
            title: 'Home',
            href: '/'
          },
          {
            title: num,
            href: `/${num}`,
          }
        ]}
      />
    )
}

const Crumb2 = ({num1,num2})=>{
    return(
        <Breadcrumb
        className="breacrumb"
    separator=">"
    items={[
      {
        title: 'Home',
        href: '/'
      },
      {
        title: num1,
        href: `/${num1}`,
      },
      {
        
          title: num2,
          href: `/${num1}/${num2}`,
        
      }
    ]}
  />
    )
}

const Crumb3 = ({num1, num2, num3, data}) =>{
    return(
    <Breadcrumb
      className="breacrumb"
        separator=">"
        items={[
          {
            title: 'Home',
            href: '/'
          },
          {
            title: num1,
            href: `/${num1}`,
          },
          { 
              title: num2,
              href: `/${num1}/${num2}`, 
          },
          {
            title: data&&data[0].pName || null,
            href: `/${num1}/${num2}/${num3}`,
        }
        ]}
      />
      )
}

export {Crumb1,Crumb2, Crumb3}
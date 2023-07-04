import { Tabs } from "antd";
import Waitpage from "../../../Waitpage";

function ProductTopTab({data}) {

    const items = [
        {
          key: '1',
          label: `제품요약`,
          children: data[0] && data[0].pDetail
        },
        {
          key: '2',
          label: `참고자료`,
          children: '준비중입니다',
        },
      ];
  return (
    <Tabs defaultActiveKey="1" items={items} />
  );
}

export default ProductTopTab;

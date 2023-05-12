import axios from "axios";
import { useEffect, useState } from "react";
import {Table, Form, Input,Typography,Popconfirm,InputNumber,Select} from 'antd'
import InputInventory from "./InputInventory";

function InventoryManage() {
    useEffect(()=>{
        axios
        .get('/api/Allproductdetail')
        .then(function (response) {
        
          setData(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })   
        
    },[])

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
      }) => {
        const uniqueValues = (data, key) => [...new Set(data.map(item => item[key]))];
        const categoryOptions = uniqueValues(data, 'category').map(category => {
            return {
              value: category,
              label: category
            };
          });
          
          const subcategoryOptions = uniqueValues(data, 'subcategory').map(subcategory => {
            return {
              value: subcategory,
              label: subcategory
            };
          });
          
          const colorOptions = uniqueValues(data, 'color').map(color => {
            return {
              value: color,
              label: color
            };
          });
          const materialOptions = uniqueValues(data, 'material').map(material => {
            return {
              value: material,
              label: material
            };
          });
          const barndOptions = uniqueValues(data, 'brand').map(brand => {
            return {
              value: brand,
              label: brand
            };
          });
          
          const optionsMap = {
            category: categoryOptions,
            subcategory: subcategoryOptions,
            color: colorOptions,
            material : materialOptions,
            brand : barndOptions
          }
          
          const options = dataIndex in optionsMap ? optionsMap[dataIndex] : '';
          
        const inputNode = inputType === 'number' ? <InputNumber /> :inputType === 'select' ? <Select 
        options= {options}
        /> :  <Input />;
        return (
          <td {...restProps}>
            {editing ? (
              <Form.Item
                name={dataIndex}
                style={{
                  margin: 0,
                }}
                rules={[
                  {
                    required: true,
                    message: `Please Input ${title}!`,
                  },
                ]}
              >
                {inputNode}
              </Form.Item>
            ) : (
              children
            )}
          </td>
        );
      };




const [form] = Form.useForm();
const [data, setData] = useState([]);
const [editingKey, setEditingKey] = useState('');
const isEditing = (record) => record.id === editingKey;
const edit = (record) => {
  form.setFieldsValue({
    pName: '',
    age: '',
    address: '',
    ...record,
  });
  setEditingKey(record.id);
};
const cancel = () => {
  setEditingKey('');
};
const save = async (value) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => value.id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        updatename(newData, index)
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        updatename(newData, index)
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  function updatename(values, idx) {
    axios.get('/api/updatename', {
      params: {
        id: values[idx].id,
        category: values[idx].category,
        subcategory: values[idx].subcategory,
        pName: values[idx].pName,
        pquantity: values[idx].pquantity,
        pPrice: values[idx].pPrice,
        inch: values[idx].inch,
        material: values[idx].material,
        brand: values[idx].brand,
        color: values[idx].color,
      }
    })
      .then(function (response) {
      })
      .catch(function (error) {
        alert("error");
      })
  }

const columns = [
  {
    title: 'num',
    dataIndex: 'id',
    width: '5%',
  },
  {
    title: '카테고리',
    dataIndex: 'category',
    width: '10%',
    editable: true,
    filters:   [...new Set(data.map(record => record.category))].map(category => ({
        text: category,
        value: category,
      })),
    onFilter: (value, record) => record.category.indexOf(value) === 0,
    sorter: (a, b) => a.category.length - b.category.length,

  },
  {
    title: '세부',
    dataIndex: 'subcategory',
    width: '10%',
    editable: true,
    filters:   [...new Set(data.map(record => record.subcategory))].map(subcategory => ({
        text: subcategory,
        value: subcategory,
      })),
    onFilter: (value, record) => record.subcategory.indexOf(value) === 0,
    sorter: (a, b) => a.subcategory.length - b.subcategory.length,

  },
  {
    title: '제품명',
    dataIndex: 'pName',
    width: '15%',
    editable: true,
    sorter: (a, b) => a.pName.length - b.pName.length,
    filters:   [...new Set(data.map(record => record.pName))].map(pName => ({
        text: pName,
        value: pName,
      })),
    onFilter: (value, record) => record.pName.indexOf(value) === 0,
  },
  {
    title: '재고',
    dataIndex: 'pquantity',
    width: '5%',
    editable: true,
    sorter: (a, b) => a.pquantity - b.pquantity,
  },
  {
    title: '가격',
    dataIndex: 'pPrice',
    width: '7%',
    editable: true,
    sorter: (a, b) => a.pPrice - b.pPrice,
  },
  {
    title: '인치',
    dataIndex: 'inch',
    width: '7%',
    editable: true,
    sorter: (a, b) => a.inch - b.inch,
  },
  {
    title: '소재',
    dataIndex: 'material',
    width: '7%',
    editable: true,
    sorter: (a, b) => a.material.length - b.material.length,
  },
  {
    title: '회사',
    dataIndex: 'brand',
    width: '7%',
    editable: true,
    sorter: (a, b) => a.brand.length - b.brand.length,
    filters:   [...new Set(data.map(record => record.brand))].map(brand => ({
        text: brand,
        value: brand,
      })),
    onFilter: (value, record) => record.brand.indexOf(value) === 0,
  },
  {
    title: '색상',
    dataIndex: 'color',
    width: '7%',
    editable: true,
    sorter: (a, b) => a.color.length - b.color.length
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (_, record) => {
      const editable = isEditing(record);
      return editable ? (
        <span>
          <Typography.Link
            onClick={() => save(record)}
            style={{
              marginRight: 8,
            }}
          >
            Save
          </Typography.Link>
          <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
            <a>Cancel</a>
          </Popconfirm>
        </span>
      ) : (
        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
          Edit
        </Typography.Link>
      );
    },
  },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
const mergedColumns = columns.map((col) => {
  if (!col.editable) {
    return col;
  }
  return {
    ...col,
    onCell: (record) => ({
      record,
      inputType: col.dataIndex == 'pquantity' ? 'number' : col.dataIndex == 'pPrice' ? 'number' :col.dataIndex == 'inch' ? 'number' :col.dataIndex == 'pquantity' ? 'number' : col.dataIndex == 'category' ? 'select' :col.dataIndex == 'subcategory' ? 'select':col.dataIndex == 'material' ? 'select' :col.dataIndex == 'brand' ? 'select' :col.dataIndex == 'color' ? 'select' :'text',
      dataIndex: col.dataIndex,
      title: col.title,
      editing: isEditing(record),
    }),
  };
});

return (
  <Form form={form} component={false}>
    <InputInventory data={data} setData={setData}/>
    <Table
    rowKey={'id'}
      components={{
        body: {
          cell: EditableCell,
        },
      }}
      onChange={onChange}
      bordered
      dataSource={data}
      columns={mergedColumns}
      rowClassName="editable-row"
      pagination={{
        onChange: cancel,
      }}
    />
  </Form>
);
};

export default InventoryManage;

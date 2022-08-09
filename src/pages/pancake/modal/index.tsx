import { Button, Modal, Select } from 'antd';
import { useState } from 'react';
import { TokenSelect } from './style';

export const TokenModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Option } = Select;

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title='Select a Token'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TokenSelect
          style={{ width: '100%' }}
          showSearch
          placeholder='Search name or paste address'
        >
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
          <Option value='4'>4</Option>
          <Option value='5'>5</Option>
          <Option value='6'>6</Option>
          <Option value='7'>7</Option>
          <Option value='8'>8</Option>
          <Option value='9'>9</Option>
          <Option value='10'>10</Option>
          <Option value='11'>11</Option>
          <Option value='12'>12</Option>
        </TokenSelect>
        <Select
          showSearch
          placeholder='Select a item'
          optionFilterProp='children'
          style={{ width: '100%' }}
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
          <Option value='4'>4</Option>
          <Option value='5'>5</Option>
          <Option value='6'>6</Option>
          <Option value='7'>7</Option>
          <Option value='8'>8</Option>
          <Option value='9'>9</Option>
          <Option value='10'>10</Option>
          <Option value='11'>11</Option>
          <Option value='12'>12</Option>
        </Select>
      </Modal>
    </>
  );
};

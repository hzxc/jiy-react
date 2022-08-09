import { Avatar, Button, List, Modal } from 'antd';
import { useState } from 'react';
import { TokenList } from './style';

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
  // list
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 5',
    },
    {
      title: 'Ant Design Title 6',
    },
  ];

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
        <TokenList
          itemLayout='horizontal'
          dataSource={data}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title={<a href='https://ant.design'>{item.title}</a>}
                description='Ant Design, a design language for background applications, is refined by Ant UED Team'
              />
            </List.Item>
          )}
        ></TokenList>
      </Modal>
    </>
  );
};

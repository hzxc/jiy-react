import { Avatar, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import { LinkButton } from '../components/style';
import { TokenInput, TokenList, TokenModalContainer } from './style';

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <TokenModalContainer
        className='modal-container'
        maskStyle={{ backgroundColor: 'rgba(40, 13, 95, 0.6)' }}
        title='Select a Token'
        visible={isModalVisible}
        footer={<LinkButton type='link'>Manage Tokens</LinkButton>}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TokenInput placeholder='Search name or paste address'></TokenInput>

        <div
          style={{
            margin: '2.4rem -2.4rem',
            height: '392px',
            overflow: 'auto',
            padding: '0',
          }}
        >
          <TokenList
            split={false}
            dataSource={data}
            renderItem={(item: any) => (
              <List.Item
                key={item.email}
                onClick={() => {
                  handleCancel();
                }}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href='https://ant.design'>{item.name.last}</a>}
                  description={item.email}
                />
              </List.Item>
            )}
          />
        </div>
      </TokenModalContainer>
    </>
  );
};

import { Avatar, Button, List } from 'antd';
import { useState } from 'react';
import { LinkButton } from '../components/style';
import { PancakeTokenBaseList } from '../data';
import { TokenInput, TokenList, TokenModalContainer } from './style';
import bnbSvg from 'assets/pancake/bnb.svg';

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
  const data = PancakeTokenBaseList;

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        // setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   loadMoreData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
            dataSource={data.tokens}
            renderItem={(item: any) => (
              <List.Item
                key={item.address}
                onClick={() => {
                  handleCancel();
                }}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.symbol === 'BNB' ? bnbSvg : item.logoURI} />}
                  title={<span>{item.symbol}</span>}
                  description={item.name}
                />
              </List.Item>
            )}
          />
        </div>
      </TokenModalContainer>
    </>
  );
};

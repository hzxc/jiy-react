import { Avatar, Button, List } from 'antd';
import { useState } from 'react';
import { LinkButton } from '../components/style';
import { PancakeTokenBaseList } from '../data';
import { Token } from '../data/types';
import { UserOutlined } from '@ant-design/icons';
import { TokenInput, TokenList, TokenModalContainer } from './style';
import { PancakeBNBIcon } from '../components/pancake-icon';
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
  // const [data, setData] = useState<DataType[]>([]);
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
        maskStyle={{ backgroundColor: 'rgba(15, 14, 19, 0.6)' }}
        title='Select a Token'
        visible={isModalVisible}
        footer={<LinkButton type='link'>Manage Tokens</LinkButton>}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TokenInput placeholder='Search name or paste address'></TokenInput>
        <Avatar icon={<PancakeBNBIcon />} />
        <Avatar
          src={
            'https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png'
          }
        />
        <Avatar src={bnbSvg} />
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
                  avatar={<Avatar src={item.logoURI} />}
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

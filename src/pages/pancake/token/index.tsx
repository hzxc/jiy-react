import { Avatar, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import { LinkButton } from '../components/style';
import { CoinGeckoList, PancakeSwapExtendedList, PancakeTokenBaseList } from '../data';
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
  const [search, setSearch] = useState('');
  const [data, setData] = useState(PancakeTokenBaseList.tokens);

  useEffect(() => {
    // const dataRef = useRef(data);
    console.log(search);
    if (search === '') {
      setData(PancakeTokenBaseList.tokens);
    } else {
      setData(
        PancakeTokenBaseList.tokens.filter((item) =>
          item.symbol.toLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <TokenModalContainer
        maskStyle={{ backgroundColor: 'rgba(40, 13, 95, 0.6)' }}
        title='Select a Token'
        visible={isModalVisible}
        footer={<LinkButton type='link'>Manage Tokens</LinkButton>}
        onOk={handleOk}
        forceRender={true}
        onCancel={handleCancel}
      >
        <TokenInput
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
          placeholder='Search name or paste address'
        ></TokenInput>
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

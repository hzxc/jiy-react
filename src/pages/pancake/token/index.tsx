import { Avatar, Button, Divider, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { LinkButton } from '../components/style';
import {
  CoinGeckoList,
  CoinMarketCapList,
  PancakeSwapExtendedList,
  PancakeTokenBaseList,
} from '../data';
import { ReactWindowFixedSizeList, TokenInput, TokenModalContainer } from './style';
import bnbSvg from 'assets/pancake/bnb.svg';
import { IToken } from '../data/types';
import { FixedSizeList } from 'react-window';

export const TokenModal = () => {
  const [data] = useState<IToken[]>([
    ...PancakeTokenBaseList.tokens,
    ...PancakeSwapExtendedList.tokens,
  ]);

  const [allData] = useState<IToken[]>([
    ...PancakeTokenBaseList.tokens,
    ...PancakeSwapExtendedList.tokens,
    ...CoinGeckoList.tokens,
    ...CoinMarketCapList.tokens,
  ]);
  const [items, setItems] = useState<IToken[]>(data);
  const TokenRow = ({ index, style }: any) => (
    <div style={style}>
      <span>{items[index].symbol}</span>
      <span>{items[index].name}</span>
    </div>
  );

  const TokenList = () => (
    <ReactWindowFixedSizeList height={392} width={420} itemSize={56} itemCount={items.length}>
      {TokenRow}
    </ReactWindowFixedSizeList>
  );
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
  // const [data, setData] = useState(PancakeTokenBaseList.tokens);

  useEffect(() => {
    console.log(search);
    // setItems(oData);
    if (search === '') {
      setItems(data);
    } else {
      setItems(
        allData.filter((item) => item.symbol.toLowerCase().includes(search.toLocaleLowerCase()))
      );
    }
  }, [search, data, allData]);

  // const [data, setData] = useState<IToken[]>(PancakeTokenBaseList.tokens);

  // const loadMoreData = () => {
  //   if (loading) {
  //     return;
  //   }
  //   setLoading(true);
  //   fetch('https://tokens.pancakeswap.finance/pancakeswap-extended.json')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       setData([...data, ...body.tokens]);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>
      <TokenModalContainer
        maskStyle={{ backgroundColor: 'rgba(40, 13, 95, 0.6)' }}
        title='Select a Token'
        open={isModalVisible}
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
        {/* <div
          id='scrollableDiv'
          style={{
            margin: '2.4rem -2.4rem',
            height: '392px',
            overflow: 'auto',
            padding: '0',
          }}
        > */}
        <TokenList />
        {/* <InfiniteScroll
            style={{ height: '392px' }}
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget='scrollableDiv'
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
          </InfiniteScroll> */}
        {/* </div> */}
      </TokenModalContainer>
    </>
  );
};

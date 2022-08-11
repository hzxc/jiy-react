export interface IPancakeTokenList {
  name: string;
  logoURI: string;
  keywords: string[];
  tokens: Token[];
}

export interface Token {
  name: string;
  symbol: string;
  address: string;
  chainId: number;
  decimals: number;
  logoURI: string;
}

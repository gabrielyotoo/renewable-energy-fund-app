export interface FundPreview {
  id: string;
  type: 'wind' | 'sun' | 'biomass' | 'geothermal' | 'hydroelectric';
  name: string;
  amount: number;
  priceDifferent: 'up' | 'down';
  priceChangePercentage: number;
  priceChange: number[];
}

export interface FundHighlight {
  id: string;
  title: string;
  imageUrl: string;
  text: string;
  iconUrl: string;
}

export interface FundDetails extends FundPreview {
  code: string;
  aum: number;
  issueDate: string;
  vintage: string;
  ter: number;
  priceAtClose: number;
  priceAtOpen: number;
  highlights: FundHighlight[];
}

export interface FundPreview {
  id: string;
  type: 'wind' | 'sun' | 'biomass' | 'geothermal' | 'hydroelectric';
  name: string;
  amount: number;
  priceDifferent: 'up' | 'down';
  priceChangePercentage: number;
  priceChange: number[];
}

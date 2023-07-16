import { FundPreview } from '@app/models/fund';

const generateRandomNumbers = (): number[] => {
  const minRange = -100;
  const maxRange = 250;

  const arrayLength = Math.floor(Math.random() * 9) + 8;

  const randomNumbers: number[] = [];
  for (let i = 0; i < arrayLength; i++) {
    const randomNumber =
      Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};

export const getFundsPreview = () =>
  new Promise<FundPreview[]>((res) => {
    setTimeout(() => {
      res([
        {
          id: '1',
          priceChange: generateRandomNumbers(),
          amount: 1234,
          name: 'Biomass Fund',
          priceChangePercentage: 1.4,
          priceDifferent: 'up',
          type: 'biomass',
        },
        {
          id: '2',
          priceChange: generateRandomNumbers(),
          amount: 53429,
          name: 'Wind Fund',
          priceChangePercentage: 4,
          priceDifferent: 'up',
          type: 'wind',
        },
        {
          id: '3',
          priceChange: generateRandomNumbers(),
          amount: 95,
          name: 'Sun Fund',
          priceChangePercentage: 9.53,
          priceDifferent: 'down',
          type: 'sun',
        },
        {
          id: '4',
          priceChange: generateRandomNumbers(),
          amount: 484,
          name: 'Hydroelectric Fund',
          priceChangePercentage: 11,
          priceDifferent: 'up',
          type: 'hydroelectric',
        },
        {
          id: '5',
          priceChange: generateRandomNumbers(),
          amount: 865,
          name: 'Geothermal Fund',
          priceChangePercentage: 0.72,
          priceDifferent: 'down',
          type: 'geothermal',
        },
      ]);
    }, 1000);
  });

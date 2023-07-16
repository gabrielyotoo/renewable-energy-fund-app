import { FundDetails } from '@app/models/fund';

import { mockedFundsDetails } from '../../mock/funds';

export const getFundDetails = (fundId: string) =>
  new Promise<FundDetails>((res, rej) => {
    const mockedFundDetails = mockedFundsDetails.find(
      ({ id }) => id === fundId
    );

    if (!mockedFundDetails) {
      rej('Not found');

      return;
    }
    setTimeout(() => {
      res(mockedFundDetails);
    }, 1000);
  });

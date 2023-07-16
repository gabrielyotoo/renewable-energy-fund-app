import { FundPreview } from '@app/models/fund';

import { mockedFundsPreviews } from '../../mock/funds';

export const getFundsPreview = () =>
  new Promise<FundPreview[]>((res) => {
    setTimeout(() => {
      res(mockedFundsPreviews);
    }, 1000);
  });

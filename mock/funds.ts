/* eslint-disable max-len */
import { FundDetails, FundPreview } from '@app/models/fund';

export const mockedFundsPreviews: FundPreview[] = [
  {
    amount: 1234,
    id: '1',
    name: 'Biomass Fund',
    priceChange: [124, 172, 60, -12, -99, -26, -12, 38, 182, -32, 159, 112, 57],
    priceChangePercentage: 49.11,
    priceDifferent: 'down',
    type: 'biomass',
  },
  {
    amount: 53429,
    id: '2',
    name: 'Wind Fund',
    priceChange: [-46, -46, 48, 36, 185, -15, 142, 132, -17, 195],
    priceChangePercentage: 1247.06,
    priceDifferent: 'up',
    type: 'wind',
  },
  {
    amount: 95,
    id: '3',
    name: 'Sun Fund',
    priceChange: [-58, 192, -42, 228, 8, -42, 91, 60, 250, 85, 183, 13],
    priceChangePercentage: 92.9,
    priceDifferent: 'down',
    type: 'sun',
  },
  {
    amount: 484,
    id: '4',
    name: 'Hydroelectric Fund',
    priceChange: [151, -40, 162, 25, 193, 107, -10, 88, 92, 135, 228, 14, -23],
    priceChangePercentage: 264.29,
    priceDifferent: 'down',
    type: 'hydroelectric',
  },
  {
    amount: 865,
    id: '5',
    name: 'Geothermal Fund',
    priceChange: [85, 95, 238, -4, 126, 165, 196, -31, 128],
    priceChangePercentage: 512.9,
    priceDifferent: 'up',
    type: 'geothermal',
  },
];

export const mockedFundsDetails: FundDetails[] = [
  {
    amount: 1234,
    id: '1',
    name: 'Biomass Fund',
    code: 'BIOM',
    priceChange: [
      9, 91, 132, -77, -51, 146, 117, 146, 154, -95, -26, -63, 157, 223, 206,
      123, -2, -80, -34, 163, 117, 112, 4, -100, -38, 34, 94, 79, 107, -91, -39,
      28, -95, -1, 150, -36, 26, 69, 124, 172, 60, -12, -99, -26, -12, 38, 182,
      -32, 159, 112, 57,
    ],
    priceChangePercentage: 49.11,
    priceDifferent: 'down',
    type: 'biomass',
    aum: 20,
    issueDate: '2023-08-31',
    priceAtClose: 58,
    priceAtOpen: 39,
    ter: 3,
    vintage: '2023-01-01',
    highlights: [
      {
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/720/720255.png',
        id: '1',
        imageUrl:
          'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc ut commodo congue. Phasellus non justo consectetur, rhoncus tortor vel, suscipit tellus. ',
        title: 'Lorem Ipsum',
      },
    ],
  },
  {
    amount: 53429,
    id: '2',
    name: 'Wind Fund',
    code: 'WIND',
    priceChange: [
      205, 220, -47, 62, 112, 24, 92, 77, -79, 100, 247, -35, -68, -84, -81, 2,
      -95, 102, -53, -61, -2, 139, 31, -23, 84, 5, 219, -11, 15, 116, -48, -54,
      13, 142, 35, 34, 82, 95, 59, 194, -46, -46, 48, 36, 185, -15, 142, 132,
      -17, 195,
    ],
    priceChangePercentage: 1247.06,
    priceDifferent: 'up',
    type: 'wind',
    aum: 18,
    issueDate: '2023-09-05',
    priceAtClose: 50,
    priceAtOpen: 30,
    ter: 2,
    vintage: '2023-04-15',
    highlights: [
      {
        iconUrl:
          'https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889698-amazon_82521.png',
        id: '1',
        imageUrl:
          'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc ut commodo congue. Phasellus non justo consectetur, rhoncus tortor vel, suscipit tellus. ',
        title: 'Lorem Ipsum',
      },
    ],
  },
  {
    amount: 95,
    id: '3',
    name: 'Sun Fund',
    code: 'SUNF',
    priceChange: [
      179, 27, -78, 53, 132, 102, 153, -46, 44, -56, 58, 31, 248, 126, -59, 18,
      202, -16, 61, -63, 78, -97, 216, 142, 150, -20, 54, -48, -100, 227, 220,
      57, 190, 239, -62, 143, 179, 7, 155, -58, 192, -42, 228, 8, -42, 91, 60,
      250, 85, 183, 13,
    ],
    priceChangePercentage: 92.9,
    priceDifferent: 'down',
    type: 'sun',
    aum: 25,
    issueDate: '2023-06-20',
    priceAtClose: 65,
    priceAtOpen: 48,
    ter: 4,
    vintage: '2023-02-10',
    highlights: [
      {
        iconUrl:
          'https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889698-amazon_82521.png',
        id: '1',
        imageUrl:
          'https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc ut commodo congue. Phasellus non justo consectetur, rhoncus tortor vel, suscipit tellus. ',
        title: 'Lorem Ipsum',
      },
    ],
  },
  {
    amount: 484,
    id: '4',
    name: 'Hydroelectric Fund',
    code: 'HYDR',
    priceChange: [
      -15, 232, 124, 132, 37, 172, 214, 202, 36, 78, -71, -48, 101, -94, 235,
      62, 91, -68, -96, 28, 33, 177, 184, -21, 39, -57, -35, 9, 108, -70, 122,
      249, 29, 46, -97, -38, 50, -61, 62, 161, 151, -40, 162, 25, 193, 107, -10,
      88, 92, 135, 228, 14, -23,
    ],
    priceChangePercentage: 264.29,
    priceDifferent: 'down',
    type: 'hydroelectric',
    aum: 12,
    issueDate: '2023-07-15',
    priceAtClose: 70,
    priceAtOpen: 45,
    ter: 2,
    vintage: '2023-03-20',
    highlights: [
      {
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/720/720255.png',
        id: '1',
        imageUrl:
          'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc ut commodo congue. Phasellus non justo consectetur, rhoncus tortor vel, suscipit tellus. ',
        title: 'Lorem Ipsum',
      },
    ],
  },
  {
    amount: 865,
    id: '5',
    name: 'Geothermal Fund',
    code: 'GEOT',
    priceChange: [
      79, -49, 30, 47, 6, -80, 168, 7, 163, 42, 68, 174, 209, 207, -96, 139,
      -36, 113, 143, -68, 69, -85, 17, -17, -10, -81, 35, 100, 165, 171, 35,
      124, 84, -83, 182, -55, 29, -84, 85, 95, 238, -4, 126, 165, 196, -31, 128,
    ],
    priceChangePercentage: 512.9,
    priceDifferent: 'up',
    type: 'geothermal',
    aum: 20,
    issueDate: '2023-08-31',
    priceAtClose: 58,
    priceAtOpen: 39,
    ter: 3,
    vintage: '2023-01-01',
    highlights: [
      {
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/720/720255.png',
        id: '1',
        imageUrl:
          'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus nunc ut commodo congue. Phasellus non justo consectetur, rhoncus tortor vel, suscipit tellus. ',
        title: 'Lorem Ipsum',
      },
    ],
  },
];

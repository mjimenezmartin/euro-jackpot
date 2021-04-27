import { EuroJackpotResultDTO } from '../interfaces/interfaces';

export const euroJackpotResult: EuroJackpotResultDTO = {
  last: {
    nr: 475,
    currency: 'GBP',
    date: {
      full: 'Lottery numbers from Friday 23 Apr 2021',
      day: 23,
      month: 4,
      year: 2021,
      hour: 20,
      minute: 0,
      dayOfWeek: 'Friday'
    },
    closingDate: '23/04/2021 18:00',
    lateClosingDate: '23/04/2021 19:10',
    drawingDate: '23/04/2021 20:00',
    numbers: [3, 6, 11, 14, 49],
    euroNumbers: [1, 5],
    jackpot: '19',
    marketingJackpot: '19',
    specialMarketingJackpot: '19',
    climbedSince: 31,
    Winners: 925410,
    odds: {
      rank0: {winners: 0, specialPrize: 0, prize: 0},
      rank1: {winners: 0, specialPrize: 0, prize: 1910372200},
      rank2: {winners: 6, specialPrize: 0, prize: 29491188},
      rank3: {winners: 7, specialPrize: 0, prize: 8921699},
      rank8: {winners: 34217, specialPrize: 0, prize: 1884},
      rank9: {winners: 41960, specialPrize: 0, prize: 1485},
      rank10: {winners: 76248, specialPrize: 0, prize: 1172},
      rank4: {winners: 55, specialPrize: 0, prize: 378488},
      rank5: {winners: 882, specialPrize: 0, prize: 21240},
      rank6: {winners: 1628, specialPrize: 0, prize: 8944},
      rank11: {winners: 173188, specialPrize: 0, prize: 929},
      rank7: {winners: 2388, specialPrize: 0, prize: 5227},
      rank12: {winners: 594831, specialPrize: 0, prize: 660}
    }
  },
  next: {
    nr: 476,
    currency: 'GBP',
    date: {
      full: 'Lottery numbers from Friday 30 Apr 2021',
      day: 30,
      month: 4,
      year: 2021,
      hour: 20,
      minute: 0,
      dayOfWeek: 'Friday'
    },
    closingDate: '30/04/2021 18:00',
    lateClosingDate: '30/04/2021 19:10',
    drawingDate: '30/04/2021 20:00',
    jackpot: '30',
    marketingJackpot: '30',
    specialMarketingJackpot: '30',
    climbedSince: 31
  }
};

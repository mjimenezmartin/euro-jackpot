export interface DetailledDate {
  full: string;
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  dayOfWeek: string;
}

export interface Rank {
  tier?: number;
  winners: number;
  specialPrize: number;
  prize: number;
  formatedPrice?: string;
}

export interface Odds {
  [key: string]: Rank;
}

export interface EuroJackpot {
  nr: number;
  currency: string;
  date: DetailledDate;
  closingDate: string;
  lateClosingDate: string;
  drawingDate: string;
  jackpot: string;
  marketingJackpot: string;
  specialMarketingJackpot: string;
  climbedSince: number;
}

export interface LastEuroJackpot extends EuroJackpot {
  numbers: number[];
  euroNumbers: number[];
  Winners: number;
  odds: Odds;
}

export interface EuroJackpotResultDTO {
  last: LastEuroJackpot;
  next: EuroJackpot;
}

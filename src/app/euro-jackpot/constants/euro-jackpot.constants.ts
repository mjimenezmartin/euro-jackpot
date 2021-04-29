export const RESULTS_URL = 'drawings/euroJackpot';
export const GAME_NAME = 'EuroJackpot';
export const PAGE_TITLE = `${GAME_NAME} Results & winning numbers`;

// Constants for Price table
enum RankFields {
  Tier = 'tier',
  Winners = 'winners',
  SpecialPrize = 'specialPrize',
  Prize = 'prize',
  FormatedPrice = 'formatedPrice',
}
export const TABLE_COLUMNS = [
  RankFields.Tier,
  RankFields.Winners,
  RankFields.SpecialPrize,
  RankFields.FormatedPrice,
];
export const TABLE_COLUMN_HEADERS = {
  [RankFields.Tier]: 'Tier',
  [RankFields.Winners]: 'Winners',
  [RankFields.SpecialPrize]: 'Special prize',
  [RankFields.FormatedPrice]: 'Amount',
};

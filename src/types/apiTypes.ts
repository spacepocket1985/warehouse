export type Item = {
  id: string;
  name: string;
  description: string;
  measurement_units: string;
  deposit: number | null;
  code: string;
  min_quantity: number | null;
  price: number | null;
  rent_price: number | null;
  accounting_price: number | null;
  type: string | null;
  custom_values: [];
};

export type ApiResponse = {
  result: Item[];
  total: number;
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

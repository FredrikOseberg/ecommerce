export interface IProduct {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ratings: IRating[];
  id: string;
}

export interface IRating {
  stars: number;
  comment: string;
  reviewer: string;
}

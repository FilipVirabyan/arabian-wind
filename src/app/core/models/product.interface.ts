export interface Product {
  id: string;
  categori_id: number;
  name: string;
  images: string[];
  description: string;
  price: string;
  notes: Notes;
}

export interface TopNote {
  id: string;
  product_id: string;
  category_name: string;
  name: string;
  img: string;
}

export interface MiddleNote {
  id: string;
  product_id: string;
  category_name: string;
  name: string;
  img: string;
}

export interface BaseNote {
  id: string;
  product_id: string;
  category_name: string;
  name: string;
  img: string;
}

export interface Notes {
  top_notes: TopNote[];
  middle_notes: MiddleNote[];
  base_notes: BaseNote[];
}

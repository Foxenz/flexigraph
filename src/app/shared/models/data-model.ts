// Interface pour stocker les fake données
export interface ListOfData {
  year: number;
  data: Data[];
}

// Interface d'une donnée
export interface Data {
  id: string;
  label: string;
  valuePerMonth: number[];
}

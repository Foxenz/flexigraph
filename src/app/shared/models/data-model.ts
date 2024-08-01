// Interface pour stocker les fake données
export interface TypeOfListOfData {
  value: typeOfData;
  viewValue: string;
  listOfData: ListOfData[];
}

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

export type typeOfData = 'business' | 'association' | 'education';

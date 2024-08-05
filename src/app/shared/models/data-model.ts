// Interface pour stocker les fake données
export interface TypeOfListOfData {
  value: 'business' | 'association' | 'education';
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

export interface TypeOfData {
  value: 'business' | 'association' | 'education';
  viewValue: string;
}

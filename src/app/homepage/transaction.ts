export interface Transaction {
    id: string,
    title: string,
    price: number,
    description: string,
    category:string,
    image:ImageData;
    sold:boolean,
    dateOfSale:Date
  } 
// export type InitialItemsType = {
//     id: number, 
//     description: string, 
//     quantity: number, 
//     packed: boolean
// }

// const initialItems : InitialItemsType[] = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];


// export default initialItems;


export type InitialItemsType = {
  id: number;
  description: string;
  quantity: number;
  isPacked: boolean;
};

const initialItems: InitialItemsType[] = [
  { id: 1, description: "Passports", quantity: 2, isPacked: false },
  { id: 2, description: "Socks", quantity: 12, isPacked: false },
  { id: 3, description: "T-Shirts", quantity: 6, isPacked: true },
  { id: 4, description: "Toothbrush", quantity: 1, isPacked: true },
  { id: 5, description: "Phone Charger", quantity: 1, isPacked: false },
  { id: 6, description: "Headphones", quantity: 1, isPacked: true },
  { id: 7, description: "Shoes", quantity: 1, isPacked: false },
  { id: 8, description: "Jacket", quantity: 1, isPacked: false },
  { id: 9, description: "Sunglasses", quantity: 1, isPacked: true },
  { id: 10, description: "Guidebook", quantity: 1, isPacked: false },
  { id: 11, description: "Snacks", quantity: 5, isPacked: true },
  { id: 12, description: "Water Bottle", quantity: 1, isPacked: false },
  { id: 13, description: "Medications", quantity: 3, isPacked: true },
  { id: 14, description: "Camera", quantity: 1, isPacked: false },
  { id: 15, description: "Travel Pillow", quantity: 1, isPacked: false },
];


export default initialItems;

import type { Item } from "../../types/item.type";

export type ItemState = {
  items: Item[];
};

export type ItemAction =
  | { type: "item/add"; payload: Item }
  | { type: "item/delete"; payload: number }
  | { type: "item/clearAll" }
  | { type: "item/update"; payload: number };

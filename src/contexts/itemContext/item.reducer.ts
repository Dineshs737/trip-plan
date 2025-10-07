import type { Item } from "../../types/item.type";
import type { ItemAction, ItemState } from "./item.context.type";

export function ItemReducer(state: ItemState, action: ItemAction): ItemState {
  let confirmed = false;
  switch (action.type) {
    case "item/add":
      return { items: [...state.items, action.payload] };
    case "item/delete":
      return {
        items: state.items.filter((item: Item) => item.id !== action.payload),
      };

    case "item/clearAll":
      if (state.items.length > 0) return state;
      confirmed = window.confirm("Are you sure you want to delete all items ?");
      if (confirmed) return { items: [] };
      return state;

    case "item/update":
      return {
        items: state.items.map((item: Item): Item => {
          return item.id === action.payload
            ? {
                ...item,
                isPacked: !item.isPacked,
              }
            : item;
        }),
      };

    default:
      throw new Error("Unknown action : " + JSON.stringify(action));
  }
}

import React, { useState } from "react";
import type { InitialItemsType } from "../item";

type DeleteItemProps = {
  onDeleteItems: (id: number) => void;
};
type UpdateItemType = {
  onUpdateItem: (id: number) => void;
};
type ClearListItemType = {
  onClearList: () => void;
};
type Props = {
  items: InitialItemsType[];
} & DeleteItemProps &
  UpdateItemType &
  ClearListItemType;

type SortType = "input" | "description" | "packed";

export default function PackingList({
  items,
  onDeleteItems,
  onUpdateItem,
  onClearList,
}: Props) {
  const [sortBy, setSortBy] = useState<SortType>("input");
  let sortedItems: InitialItemsType[] = [];

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a: InitialItemsType, b: InitialItemsType) =>
        a.description.localeCompare(b.description),
      );
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort(
        (a: InitialItemsType, b: InitialItemsType) =>
          Number(a.isPacked) - Number(b.isPacked),
      );
  } else {
    sortedItems = items; //sortBy === "input"
  }

  return (
    <>
      <div className="list">
        {sortedItems.length > 0 && (
          <ul>
            {sortedItems.map(({ id, description, quantity, isPacked }) => (
              <Item
                onUpdateItem={onUpdateItem}
                onDeleteItems={onDeleteItems}
                id={id}
                description={description}
                quantity={quantity}
                isPacked={isPacked}
                key={id}
              />
            ))}
          </ul>
        )}
        <div className="actions">
          <select
            value={sortBy}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              setSortBy(event.target.value as SortType)
            }
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by input description</option>
            <option value="packed">Sort by packed status</option>
          </select>

          <button
            onClick={(): void => {
              onClearList();
            }}
          >
            Clear list
          </button>
        </div>
      </div>
    </>
  );
}

export function Item({
  id,
  description,
  quantity,
  isPacked,
  onDeleteItems,
  onUpdateItem,
}: InitialItemsType & DeleteItemProps & UpdateItemType): React.JSX.Element {
  return (
    <li>
      <input
        type="checkbox"
        checked={isPacked}
        onChange={(): void => {
          onUpdateItem(id);
        }}
      />
      <span style={isPacked ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={(): void => onDeleteItems(id)}>❌</button>
    </li>
  );
}

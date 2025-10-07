import React, { useState } from "react";
import useItem from "../contexts/itemContext/Item.context";
import type { Item } from "../types/item.type";

export default function Form(): React.JSX.Element {
  const [description, setDescription] = useState<string>("");
  const [qunatity, setQueantity] = useState<number>(1);

  const { addItem } = useItem();

  const handileSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    event,
  ) => {
    event.preventDefault();
    if (!description) return;

    const newItem: Item = {
      description: description,
      quantity: qunatity,
      isPacked: false,
      id: Date.now(),
    };
    // console.log(onAddItems.name)
    // console.log(newItem)
    addItem(newItem);

    setDescription("");
    setQueantity(1);
    // console.log("button clicked "  , event);
  };

  return (
    <form
      className="max-w-2xl mx-auto p-6 bg-inherit rounded-lg shadow-md mt-8"
      onSubmit={handileSubmit}
    >
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        What do you need for your 😍 trip?
      </h3>
      <div className="flex gap-4 items-center">
        <select
          className="p-2 border border-none rounded-md bg-gray-50 hover:bg-gray-100 transition-colors w-24"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
            setQueantity(Number(event.target.value))
          }
          value={qunatity}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item .."
          value={description}
          className="flex-1 p-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setDescription(event.target.value)
          }
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
}

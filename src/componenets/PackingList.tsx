import React, { useState } from "react"
import type { InitialItemsType } from "../item"
import initialItems from "../item"
type DeleteItemProps = {
    onDeleteItems: (id: number) => void,
}
type UpdateItemType = {
    onUpdateItem: (id: number) => void,
}
type Props = {
    items: InitialItemsType[],

} & DeleteItemProps & UpdateItemType


type SortType = "input" | "description" | "packed";

export default function PackingList({ items, onDeleteItems, onUpdateItem }: Props) {

    const [sortBy, setSortBy] = useState<SortType>("input");
    let sortedItems : InitialItemsType[]  = []

    if(sortBy === "input") sortedItems = items;

    if(sortBy === "description") {
        sortedItems = items.slice().sort((a:InitialItemsType ,b:InitialItemsType)=> 
            a.description.localeCompare(b.description))
    }

    if(sortBy === "packed"){
        sortedItems = items.slice().sort((a:InitialItemsType ,b:InitialItemsType)=> 
            Number(a.isPacked) - Number(b.isPacked))
    }



    return (
        <>
        {
            sortedItems.length > 0 &&(
                <div className="list">
            <ul>
                {
                    sortedItems.map(({ id, description, quantity, isPacked }) => < Item onUpdateItem={onUpdateItem} onDeleteItems={onDeleteItems} id={id} description={description} quantity={quantity} isPacked={isPacked} key={id} />)
                }
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                        setSortBy((currentElement: SortType) =>
                            currentElement = event.target.value as SortType)} >

                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by input description</option>
                    <option value="packed">Sort by packed status</option>
                </select>

            </div>

        </div>
            )
        }
        </>
    )
}

export function Item({ id, description, quantity, isPacked, onDeleteItems, onUpdateItem }: InitialItemsType & DeleteItemProps & UpdateItemType): React.JSX.Element {

    return (
        <li>
            <input type="checkbox" checked={isPacked} onChange={(): void => {
                onUpdateItem(id)


            }} />
            <span style={isPacked ? { textDecoration: "line-through" } : {}}>
                {quantity} {description}
            </span>
            <button onClick={(): void => onDeleteItems(id)}>❌</button>
        </li>
    )

}

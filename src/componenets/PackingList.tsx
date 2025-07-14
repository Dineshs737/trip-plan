import React, { useState } from "react"
import type { InitialItemsType } from "../item"
type DeleteItemProps = {
    onDeleteItems : (id:number)=>void,
}
type UpdateItemType = {
    onUpdateItem :  (id:number)=>void,
}
type Props = {items: InitialItemsType[] ,

}&DeleteItemProps & UpdateItemType

const sortOptions : string[]  = ["sort by input order" , "sort by input order" , "sort bt packed status"]

export default function PackingList({items , onDeleteItems ,onUpdateItem } : Props ){ 
    return(
        <div className="list">
           <ul>
            {
                    items.map(({id ,description , quantity , isPacked }) => < Item onUpdateItem={onUpdateItem} onDeleteItems = {onDeleteItems} id = {id} description = {description} quantity = {quantity} isPacked = {isPacked} key={id} />)
            }
           </ul>

           {/* <SortBox  /> */}
        </div>
    )
} 

export function Item({ id, description, quantity, isPacked ,onDeleteItems  , onUpdateItem}: InitialItemsType&DeleteItemProps&UpdateItemType):React.JSX.Element{
   
return (
    <li>
        <input  type="checkbox" checked= {isPacked} onChange={():void => {
           onUpdateItem(id)
           

        }} />
        <span style={isPacked ? { textDecoration : "line-through"}:{}}>
            {quantity} {description}
        </span>
        <button onClick={():void=> onDeleteItems(id)}>❌</button>
     </li>
)
    
}



export function SortBox():React.JSX.Element{
    return (
        <div>
            <select >
            {
                sortOptions.map((sortMethodName:string ,index:number)=> <option key={index} value={sortMethodName} id={sortMethodName} />)
            }
            </select>
        </div>
    )
}
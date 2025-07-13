import type { InitialItemsType } from "../item";

export default function Stats({items} : {items : InitialItemsType[]}){
    console.log(items.length)
    const totalItem  : number = items.length;
    const totalPackedItems : number = items.reduce((prv:number ,item:InitialItemsType)=>{
                return item.isPacked? prv +=1:prv
    }, 0)

    const presantage : number = totalItem > 0 ?Math.round((totalPackedItems / totalItem) * 100):0
    return(
        <footer>
        <em>  💼 you have {totalItem }{totalItem>1?"" :"s"} items on your list , and you already packed {totalItem} ({ presantage }%)</em>
        </footer>
    )
} 
import React, { useState } from "react";
import type { InitialItemsType } from "../item";
import initialItems from "../item";

type formProps = {onAddItems :(item :InitialItemsType)=>void}


export default function Form({onAddItems} :formProps):React.JSX.Element{

    const [description , setDescription] = useState<string>("")
    const [qunatity , setQueantity] = useState<number>(1);
    console.log(onAddItems)
    




    const handileSubmit :(event : React.FormEvent<HTMLFormElement>) =>void =  (event)=>{
        event.preventDefault();
        if(!description) return;

        const newItem : InitialItemsType  = {description:description , quantity:qunatity , isPacked:false , id:Date.now() }
        // console.log(onAddItems.name)
        // console.log(newItem)
        onAddItems(newItem)

        setDescription("");
        setQueantity(1);
        // console.log("button clicked "  , event);
    }


    return(
        <form className="add-form" onSubmit={handileSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            {/* <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select> */}

           <select onChange={(event:React.ChangeEvent<HTMLSelectElement>):void => setQueantity(Number(event.target.value))} value={qunatity} >
            {
                Array.from({length : 20} , (_ , i)=> i +1).map(num =><option value={num} key={num} >{num} </option>)
            }
           </select>

            <input type="text"  placeholder="Item .." value={description}
             onChange={(event :React.ChangeEvent<HTMLInputElement>):void => setDescription(event.target.value)}
            />
            <button type="submit" >Add</button>
        </form>
    )
} 
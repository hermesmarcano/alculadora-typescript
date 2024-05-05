import { useState } from "react"
import {  OrderItem } from "../types"
import OrderTotal from "./OrderTotal"

type PropinaTypes = {
  order : OrderItem[],
  placeOrder : () => void
}

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

function PropinasForm({order, placeOrder} : PropinaTypes) {

 const [propina, setPropina] = useState<number>(0)

 const handlePropina = (option : number) => {
      setPropina(option)
      console.log(propina);
      
 }

  const handlePropinaReset = () => {
    setPropina(0)
    console.log(propina);
    
  }
  return (
    <div>
      <h3 className="font-black">Propinas:</h3>
      
        <form>
        {tipOptions.map(option => (
       <div key={option.id}>
          <label htmlFor='tip.id'>{option.label}</label>
          <input 
          onChange={()=>handlePropina(option.value)}
          name='tip' 
          type="radio" 
          value={option.value}
          checked={option.value === propina}
          ></input>
        </div>
        
      ))}
        </form>
        <div>
        <OrderTotal
        order={order}
        propina={propina}
        placeOrder={placeOrder}
        handlePropinaReset={handlePropinaReset}/>
        </div>
        
       
    </div>
  )
}

export default PropinasForm

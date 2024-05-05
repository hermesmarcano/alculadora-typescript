
import { useMemo } from "react"
import {  OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order : OrderItem[],
    propina : number,
    placeOrder : () => void,
    handlePropinaReset : () => void
}

function OrderTotal({order, propina, placeOrder, handlePropinaReset} : OrderTotalProps) {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const propinaAmount = subTotalAmount * propina

   const handleSaveReset = () => {
    placeOrder(),
    handlePropinaReset()
   }

  return (
    <div className='mt-10'>
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
      <p className="font-bold">Subtotal:
      <span>{formatCurrency(subTotalAmount)}</span>
      </p>
      <p className="font-bold">Propina:
      <span>{formatCurrency(propinaAmount)}</span>
      </p>
      <p className="font-bold">Total a pagar:
      <span>{formatCurrency(subTotalAmount+propinaAmount)}</span>
      </p>

      <button
      className="w-full bg-black uppercase text-white font-bold mt-5 disabled:opacity-10"
      disabled={subTotalAmount === 0}
      onClick={() => handleSaveReset()}>
        Guardar Orden
      </button>
    </div>


  )
}

export default OrderTotal

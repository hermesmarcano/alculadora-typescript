import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"
import PropinasForm from "./PropinasForm"



type OrderContentProps = {
    order : OrderItem[],
    removeItem : (id : MenuItem['id']) => void,
    placeOrder : () => void
}

export default function OrderContent({order, removeItem, placeOrder}: OrderContentProps) {
    
    
  return (
    <div>
      
      <div className="space-y-3 mt-5">
       { order.length === 0 ?
       <p className="text-center">La Orden Esta Vacia</p>
       : (
        order.map(item => (
            <div className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
             key={item.id}>
              <div>
              <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                <p className="font-black">{item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
              </div>
                
                <button onClick={() => removeItem(item.id)}
                 className="bg-red-600 h-8 w-8 rounded-full text-white">
                  X
                </button>
                
                

            </div>
        ))
        )}
        
      </div>
      <PropinasForm
      order={order}
      placeOrder={placeOrder}/>
    </div>
  )
}

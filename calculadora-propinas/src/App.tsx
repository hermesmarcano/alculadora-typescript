import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";


function App() {

const {order, addItem, removeItem, placeOrder} = useOrder()

  return (
    <>
    <header className="bg-teal-400 py-5 ">
    <h1 className="text-4xl text-center font-black">Calculadora</h1>
    </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="mr-10">
        <h2 className="text-4xl font-black ">Menu</h2>
         <div className="space-y-3 mt-10">
        {menuItems.map(item => (
          <MenuItem
          key={item.id}
          item={item}
          addItem={addItem}/>
        ))}
         </div>
        
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        <h2 className='font-black text-4xl'>Consumo</h2>
        {order.length > 0 ? (
          <>
          <OrderContent
        order={order}
        removeItem={removeItem}
        placeOrder={placeOrder}/>
          </>
        ) 
        : <p className="text-center">La Orden Esta Vacia</p>}
        
        </div>
        
        
      </main>
    </>
  )
}

export default App

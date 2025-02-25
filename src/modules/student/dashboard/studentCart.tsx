import { useState } from "react";
import { Trash } from "lucide-react";
import stuCartImg from "../../../assets/stuCartImg.png"


const StudentCart = () => {

    const [cartItems, setCartItems] = useState([
        { id: 1, img:stuCartImg, name: "Physics Vol", price: 20000, quantity: 2 },
        { id: 2, img:stuCartImg, name: "Physics Vol", price: 20000, quantity: 2 },
        { id: 3, img:stuCartImg, name: "Physics Vol", price: 20000, quantity: 2 },
        { id: 4, img:stuCartImg, name: "Physics Vol", price: 20000, quantity: 2 },
        { id: 5, img:stuCartImg, name: "Physics Vol", price: 20000, quantity: 2 },
      ]);
    
      const updateQuantity = (id: number, amount: number) => {
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
          )
        );
      };
    
      const removeItem = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      };
    
      const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const discount = 1000;
      const total = subtotal - discount;

  return (
   <div className="bg-white p-2 lg:p-8 mx-auto rounded-[20px]">
    <h1 className="unbound text-[24px] font-[600] mb-6">Cart</h1>
    <div className="flex flex-col xl:flex-row gap-5">
        <div className="overflow-x-auto lg:w-[983px]">
            <div className="bg-white p-1 md:p-2 lg:p-4 w-[983px] lg:w-[100%] md:w-[100%] rounded-lg">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] text-[14px] font-semibold py-2 pl-5">
                    <span>PRODUCT</span>
                    <span>PRICE</span>
                    <span>QUANTITY</span>
                    <span>TOTAL</span>
                    <span>ACTION</span>
                </div>
                <div className="mt-4 p-2 md:p-5 lg:p-5 border border-1-grey rounded-[15px]">
                {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] items-center py-3">
                    <span className="flex md:flex-col lg:flex-row  items-center md:items-start lg:items-center gap-2">
                        <img src={item.img} alt="img" className="w-[70px] h-[70px]"/>
                        {item.name}
                    </span>
                    <span className="">N {item.price.toLocaleString()}</span>
                    <div className="flex items-center gap-2 w-[50%] justify-center rounded-[100px] bg-[#E9EAFE]">
                        <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1"
                        >-
                        </button>
                        <span>{item.quantity}</span>
                        <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1"
                        >+
                        </button>
                    </div>
                    <span>N {(item.price * item.quantity).toLocaleString()}</span>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 bg-[#FFE8E8] rounded-[10px] p-2">
                        <Trash size={18} />
                    </button>
                </div>
                ))}
                </div>
            </div>
        </div>
        <div className="w-[100%] xl:w-[320px] mt-[5%]">
            <div className="bg-[#E9EAFE] p-6 rounded-lg">
                <h2 className="text-[15px] font-[600] mb-8">Order Summary</h2>
                <div className="flex justify-between mt-2 text-[#5B5959] text-[17px] mb-6">
                    <span>Subtotal</span>
                    <span>N {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mt-1 text-[#5B5959] text-[17px] mb-6">
                    <span>Discount</span>
                    <span>-N {discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mt-1 text-[#5B5959] text-[17px] mb-6">
                    <span>Promo Code</span>
                    <input type="text" className="rounded-[10px] w-[128px] h-[42px] text-[14px]"/>
                </div>
                <hr className="border-t-2 border-gray-400 border-dashed my-11"></hr>
                <div className="border-t mt-2 pt-2 flex justify-between text-[#5B5959] text-[17px] mb-5">
                    <span>Total</span>
                    <span className="unbound text-[17px] font-[500]">N {total.toLocaleString()}</span>
                </div>
            </div>
            <button className="unbound w-[100%] xl:w-[320px] h-[50px] mt-4 rounded-[9px] bg-gradient-to-r from-[#6F0AFF] to-[#1D9CD7] text-[13px] font-[500] text-white">Proceed To Checkout</button>
        </div>
  </div>
  </div>
  )
}

export default StudentCart;
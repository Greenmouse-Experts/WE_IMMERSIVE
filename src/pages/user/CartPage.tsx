import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Navbar from "../../layout/user/components/navbar";

// Define the type for a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Physics Vol. 1",
    price: 20000,
    quantity: 2,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Mathematics for Engineers",
    price: 18000,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Organic Chemistry",
    price: 25000,
    quantity: 3,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Introduction to AI",
    price: 30000,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Data Structures & Algorithms",
    price: 22000,
    quantity: 2,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    name: "Economics for Beginners",
    price: 17000,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
];

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState<string>("");

  const updateQuantity = (id: number, amount: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate subtotal, discount, and total
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 1000;
  const total = subtotal - discount;

  return (
    <>
      <div className="mx-auto">
        <Navbar />
      </div>
      <div className="rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Cart</h2>

        {/* Main container with two sections side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Cart Items */}
          <div className="bg-white p-4 rounded-lg flex-1">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b font-semibold">
                  <th className="py-2">Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="flex items-center gap-3 p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg"
                      />
                      {item.name}
                    </td>
                    <td>₦{item.price.toLocaleString()}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1 border rounded bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-1 border rounded bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>₦{(item.price * item.quantity).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500"
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right side - Order Summary */}
          <div className="bg-[#E9EAFE] p-6 rounded-lg w-full md:w-1/4">
            <h3 className="font-bold text-lg mb-5">Order Summary</h3>
            <p className="flex justify-between leading-loose">
              <span>Subtotal:</span> <span>₦{subtotal.toLocaleString()}</span>
            </p>
            <p className="flex justify-between leading-loose">
              <span>Discount:</span>{" "}
              <span className="text-red-500">
                -₦{discount.toLocaleString()}
              </span>
            </p>
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="border p-2 rounded w-full mt-3 outline-none"
            />
            <hr className="my-3" />
            <p className="flex justify-between font-bold text-lg mt-4">
              <span>Total:</span> <span>₦{total.toLocaleString()}</span>
            </p>
            <button className="bg-gradient text-white px-4 py-2 rounded mt-5 w-full">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

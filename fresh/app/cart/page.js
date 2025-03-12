import Link from "next/link";

const Cart = () => {
  let products = ["Tomato", "Pasta", "Coconut"];
  return (
    <div className="flex flex-col h-screen pt-24 items-center gap-y-12 bg-zinc-800 text-white font-pretendard">
      <p className="font-bold text-[24px]">장바구니</p>
      {products.map((product, i) => {
        return (
          <div className="w-full">
            <CartItem name={product} price="40" amount="1" />
          </div>
        );
      })}
      <LinkButton bgColor="bg-white" />
    </div>
  );
};

export default Cart;

// server Component
const CartItem = ({ name, price, amount }) => {
  return (
    <div className="flex justify-between w-full px-12 py-8 border-b-2 border-white/20">
      <p>{name}</p>
      <p>$ {price}</p>
      <p>{amount}개</p>
    </div>
  );
};

const LinkButton = ({ bgColor }) => {
  return (
    <div>
      <Link
        className={`flex items-center justify-center p-4 w-[250px] rounded-3xl ${bgColor} text-black`}
        href="/cart/payment"
      >
        누르소
      </Link>
    </div>
  );
};

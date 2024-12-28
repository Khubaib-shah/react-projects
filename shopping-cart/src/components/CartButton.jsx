import React from "react";

const CartButton = () => {
  return (
    <div className="w-max absolute right-5 top-5">
      <div className="space-x-3">
        <button className="bg-zinc-400 rounded-md px-2 py-1 text-sm text-white hover:bg-zinc-500 transition-colors">
          + Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartButton;

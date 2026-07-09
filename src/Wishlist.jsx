import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const Wishlist = () => {
  const { wishlist } = useContext(ProductContext);
  console.log(wishlist);

  return (
    <div>
      <h1>Welcome to whishlist</h1>
      {/* {wishlist.map((item) => console.log(item))} */}
    </div>
  );
};

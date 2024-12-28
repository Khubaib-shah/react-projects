import { allProducts } from "./assets/data";
import CartItem from "./components/CartItem";
function App() {
  return (
    <div className="grid place-items-center py-20">
      <h1 className="text-5xl italic text-gray-500 mb-16 ">
        Trend Alert: Must-Have Outfits of the session
      </h1>
      <div className="grid grid-cols-3 place-content-start gap-10">
        {allProducts?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;

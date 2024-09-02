import CardPizza from "./CardPizza";

import pizzas from "../script/pizzas";

const Home = ({ cart, setCart }) => {
  // Actualizar cantidad de pizzas en el carrito
  const updateCart = (id, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter((item) => item.id !== id)); // Eliminar item si la cantidad es 0
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  return (
    <>
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            quantity={cart?.find((item) => item.id === pizza.id)?.quantity || 0}
            updateCart={(quantity) => updateCart(pizza.id, quantity)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

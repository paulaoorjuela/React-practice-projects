import Pizza from "./Pizza";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza name='Pizza Salamino' ingredients='Tommato, Mozarella, salami and ricotta Cheese' photoName='/pizzas/salamino.jpg' price={10}/>
    </main>
  );
}

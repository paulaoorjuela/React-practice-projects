export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  //   else alert("Sorry We are closed");
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently OPEN</footer>
  );
}

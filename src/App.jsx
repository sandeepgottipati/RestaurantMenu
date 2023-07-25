import Title from "./components/Title";
import data from "./data";
import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
const allCategories = [
  "all",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];
const App = () => {
  const [menu, setMenu] = useState(data);
  const [selectionMenu, setSelectionMenu] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => {
      return item.category === category;
    });
    setMenu(newItems);
  };

  //console.log(menu);
  return (
    <main>
      <section className="menu">
        <Title />
        <Buttons categories={selectionMenu} filterItems={filterItems} />
        <Menu data={menu} />
      </section>
    </main>
  );
};
export default App;

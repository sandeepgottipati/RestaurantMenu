import MenuItems from "./MenuItems";
const Menu = ({ data }) => {
  return (
    <article className="section-center">
      {data.map((item) => {
        return <MenuItems {...item} key={item.id} />;
      })}
    </article>
  );
};
export default Menu;

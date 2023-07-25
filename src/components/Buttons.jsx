const Buttons = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn"
            onClick={() => {
              filterItems(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;

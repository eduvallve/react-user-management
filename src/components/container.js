import "./container.css";

const Container = ({ children }) => {
  return (
    <div className="container-fullwidth">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;

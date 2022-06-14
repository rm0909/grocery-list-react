
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <p>
        <Link to="/login">login</Link>
      </p>{" "}
      <p>
        <Link to="/register">Criar Conta</Link>
      </p>
    </>
  );
};

export default Index;

import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index}>
          {path.charAt(0).toUpperCase() + path.slice(1)}
          {index < paths.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;

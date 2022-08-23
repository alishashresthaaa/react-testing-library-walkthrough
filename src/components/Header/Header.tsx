import "./Header.css";

export interface HeaderTypes {
  title: string;
}

const Header = (props: HeaderTypes) => {
  const { title } = props;
  return (
    <h1 className="header" data-testid="header">
      {title}
    </h1>
  );
};

export default Header;

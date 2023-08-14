import Navigation from "./Navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): React.ReactNode => {
  return (
    <div className="layout">
      <Navigation />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;

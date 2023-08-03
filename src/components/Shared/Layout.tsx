import Menu from "./Menu";

const Layout = (props: any) => {
  return (
    <div id="main_content">
      <Menu {...props} />
    </div>
  );
};

export default Layout;

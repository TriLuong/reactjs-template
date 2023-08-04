import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Row } from "antd";
import { Link } from "react-router-dom";
import { arrayToTree } from "@/utils";
import menus, { content } from "@/common/constants/menus";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  { type: "divider" },

  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

const generateMenus = (data: any) => {
  return data.map((item: any) => {
    // if (item?.roles?.length > 0 && !item?.roles?.includes(role)) {
    //   return null;
    // }
    if (item?.children?.length > 0) {
      return (
        <Menu.SubMenu
          key={item.id}
          // className={classnames({ [styles.menuItem]: collapsed })}
          title={
            <Row
              justify="start"
              align="middle"
              // className={classnames({ [styles.hideMenuText]: collapsed })}
            >
              {/* {item.icon && <Icon type={item.icon} />}
                {item.name && (
                  <span style={{ paddingLeft: 10 }} title={item.name}>
                    {collapsed ? "" : item.name}{" "}
                  </span>
                )} */}
              {item?.label}
            </Row>
          }
        >
          {generateMenus(item.children)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        key={item.id}
        //   className={classnames({ [styles.menuItem]: collapsed })}
      >
        <Link to={item.to || "#"}>
          <Row
            justify="start"
            align="middle"
            // className={classnames({ [styles.hideMenuText]: collapsed })}
          >
            {/* {item.icon && <Icon type={item.icon} />}
            {item.name && (
              <span style={{ paddingLeft: 10 }} title={item.name}>
                {collapsed ? "" : item.name}
              </span>
            )} */}
            {item?.label}
          </Row>
        </Link>
      </Menu.Item>
    );
  });
};

const App: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const newMenus = menus.menus.filter((_) => _.menuParentId !== "-1");

  const menuTree = arrayToTree(newMenus, "id", "menuParentId");
  console.log("**** menus", menus);
  console.log("**** menuTree", menuTree);

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      //   items={items}
    >
      {generateMenus(content)}
    </Menu>
  );
};

export default App;

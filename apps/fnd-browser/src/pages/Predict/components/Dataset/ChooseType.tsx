import { faDatabase, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "rsuite";

const Navbar = ({ active, onSelect, ...props }: any) => {
  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item eventKey="news" icon={<FontAwesomeIcon icon={faNewspaper} />}>
        News
      </Nav.Item>
      <Nav.Item eventKey="dataset" icon={<FontAwesomeIcon icon={faDatabase} />}>
        Dataset
      </Nav.Item>
    </Nav>
  );
};
const ChooseType = () => {
  const [active, setActive] = React.useState("news");

  return (
    <Navbar
      style={{
        fontSize: 20,
      }}
      appearance="subtle"
      active={active}
      onSelect={setActive}
    />
  );
};

export default ChooseType;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.png" alt="Logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item header>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;

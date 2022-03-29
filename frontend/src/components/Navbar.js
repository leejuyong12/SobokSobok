import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import Login from "../pages/Login.jsx";

function NavBar() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">소복소복</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">홈</Nav.Link> */}
            <Nav.Link href="/search">복지검색</Nav.Link>
            <Nav.Link href="/recommend">추천서비스</Nav.Link>
            <Nav.Link href="/qna">고객센터</Nav.Link>
          </Nav>
          {/* <Button variant="primary">로그인</Button> */}
          <Login></Login>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

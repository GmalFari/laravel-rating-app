
import "./css/style.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./images/logo.png"
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">الرئيسية</Nav.Link>
                            <Nav.Link href="#link">المقررات الدراسية</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home w-4">
                    <Navbar.Brand href="#home w-4">
                    <img   src={logo} maxWidth={200} width={200}  roundedCircle />
                      </Navbar.Brand>
                      </Navbar.Brand>
                    
                </Container>
            </Navbar>
            <main>{children}</main>
            <footer>
                footer
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Layout;

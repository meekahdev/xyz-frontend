import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import styles from './Header.module.css'

const Header = (props) => {

    const loggedUser = JSON.parse(localStorage.getItem('logged-user'));
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push('/login')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >XYZ Forum</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        localStorage.getItem('logged-user') ?
                        <>
                            <Link className={styles.nav_link} to="/">Home</Link>
                            <Link className={styles.nav_link} to="/my-post">Posts</Link>
                        </>
                        :
                        <>
                            <Link className={styles.nav_link} to="/register">Register</Link>
                            <Link className={styles.nav_link} to="/login">login</Link>
                        </>

                    }
                </Nav>
                {
                     localStorage.getItem('logged-user') ?
                     <Nav>
                        <NavDropdown title={loggedUser && loggedUser.name ? loggedUser.name : null}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null
                }
               
            </Container>
        </Navbar>
    )
}

export default Header;
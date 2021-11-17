// choose one way to import the two components from 'react-bootstrap
// import { Navbar, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'

// the Link to prop is just going to fill your address bar with that string

const MyNavbar = (props) => {

    const location = useLocation()
    console.log(location.pathname)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Link to="/">
                <Navbar.Brand>{props.brand}</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/menu">
                        {/* for highlighting correctly the right div in the navbar depending */}
                        {/* on the path we're currently sitting in we need to be aware */}
                        {/* of our current location  */}
                        <div className={'nav-link' + (location.pathname === '/menu' ? ' active' : '')}>Menu</div>
                    </Link>
                    <Link to="/reservations">
                        <div className={'nav-link' + (location.pathname === '/reservations' ? ' active' : '')}>Reservation</div>
                    </Link>
                    <Link to="/contact">
                        <div className={'nav-link' + (location.pathname === '/contact' ? ' active' : '')}>Contact</div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar

// THIS IS THE SAME COMPONENT IN A CLASS SHAPE
// in order to use the location object, you have to wrap it's export with routerWrap
// at that point you'll find the location object in the props :)

// class MyNavbar extends Component {

//     render() {
//         console.log(this.props)
//         return (
//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

//                 <Link to="/">
//                     <Navbar.Brand>{this.props.brand}</Navbar.Brand>
//                 </Link>

//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ml-auto">
//                         <Link to="/menu">
//                             {/* for highlighting correctly the right div in the navbar depending */}
//                             {/* on the path we're currently sitting in we need to be aware */}
//                             {/* of our current location  */}
//                             <div className={'nav-link' + (this.props.location.pathname === '/menu' ? ' active' : '')}>Menu</div>
//                         </Link>
//                         <Link to="/reservations">
//                             <div className={'nav-link' + (this.props.location.pathname === '/reservations' ? ' active' : '')}>Reservation</div>
//                         </Link>
//                         <Link to="/contact">
//                             <div className={'nav-link' + (this.props.location.pathname === '/contact' ? ' active' : '')}>Contact</div>
//                         </Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         )
//     }
// }

// export default routerWrap(MyNavbar)

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink, Route, Routes } from 'react-router-dom'
import CardStatusDemo from './component/CardStatusDemo'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import WalletSummary from './component/WalletSummary'
import TransactionManager from './component/TransactionManager'
import Badge from './component/Badge'
import HeaderBanner from './component/HeaderBanner'
import LayoutGrid from './component/LayoutGrid'



function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/walletsummary">
            Catatan Keuangan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/transaksi">
                Transaksi
              </Nav.Link>
              <NavDropdown title="Dropdown" id="component-dropdown">
                <NavDropdown.Item as={NavLink} to="/badge">
                  Badge
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/cardstatusdemo'>
                  CardStatusDemo
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/headerbanner'>
                  HeaderBanner
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/transactionmanager'>
                  TransactionManager
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/kartu'>
                  KartuRingkasan
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/LayoutGrid'>
                  LayoutGrid
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/walletsummary'>
                  WalletSummary
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' />
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/laporan' element={<CardStatusDemo />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/cardstatusdemo' element={ <CardStatusDemo />} />
        <Route path='/headerbanner' element={ <HeaderBanner />} />
        <Route path='/transactionmanager' element={ <TransactionManager />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
      </Routes>      
    </>
  )
}

export default App
// test

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { HashLink } from "react-router-hash-link";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const NavBars = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	const onConnectWallet = () => {
		alert("Coming Soon!");
	};

	return (
		<Navbar expand='md' className={scrolled ? "scrolled" : ""}>
			<Container className='nav-contained'>
				<Navbar.Brand className='logo-img ' href='/'>
					<img src={logo} alt='Logo' /> <span>Bitsquant.</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav'>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<Navbar.Collapse
					className={scrolled ? "scrolled" : ""}
					id='basic-navbar-nav'
				>
					<Nav className='ms-auto'>
						<Nav.Link
							href='#investing'
							className={`${
								activeLink === "home" ? "active navbar-link" : "navbar-link"
							} ${scrolled ? "scrolled navbar-link a" : "navbar-link"}`}
							onClick={() => onUpdateActiveLink("home")}
						>
							Portfolio Manager
						</Nav.Link>
						<Nav.Link
							href='#invest'
							className={`${
								activeLink === "investing"
									? "active navbar-link"
									: "navbar-link"
							} ${scrolled ? "scrolled navbar-link a" : "navbar-link"}`}
							onClick={() => onUpdateActiveLink("Investing")}
						>
							Investing
						</Nav.Link>
						<Link to='/dashboard/home'>
							<Nav.Link
								href='#testimonies'
								className={`${
									activeLink === "trading"
										? "active navbar-link"
										: "navbar-link"
								} ${scrolled ? "scrolled navbar-link a" : "navbar-link"}`}
								onClick={() => onUpdateActiveLink("trading")}
							>
								Trade
							</Nav.Link>
						</Link>
					</Nav>
					<nav>
						<span className='navbar-text'>
							{/* <Link to="/">
                  <button className="vvd">
                    <span className={scrolled ? "scrolled vvd" : "vvd"}>
                      Login
                    </span>
                  </button>
                </Link>
               */}
							{/* 
                  <button className="vvde">
                    <Link to='/'>
                    <span className={scrolled ? "scrolled vvd" : "vvde"}>
                      Register
                    </span>
                    </Link>
                  </button>
                */}
						</span>
					</nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

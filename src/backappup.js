import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Employees, Customers } from "./pages";
import Apps from "./SIGN_UP/Apps";
import Trades from "./pages/DASHBOARD/Trades";
import Wallet from "./pages/Wallet";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
	const {
		setCurrentColor,
		setCurrentMode,
		currentMode,
		activeMenu,
		currentColor,
		themeSettings,
		setThemeSettings,
	} = useStateContext();

	useEffect(() => {
		const currentThemeColor = localStorage.getItem("colorMode");
		const currentThemeMode = localStorage.getItem("themeMode");
		if (currentThemeColor && currentThemeMode) {
			setCurrentColor(currentThemeColor);
			setCurrentMode(currentThemeMode);
		}
	}, []);

	return (
		<>
			<div className={currentMode === "Dark" ? "dark" : "dark"}>
				<BrowserRouter>
					<div className='flex relative dark:bg-main-dark-bg'>
						<div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
							{/* <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent> */}
						</div>
						{activeMenu ? (
							<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
								<Sidebar />
							</div>
						) : (
							<div className='w-0 dark:bg-secondary-dark-bg'>
								<Sidebar />
							</div>
						)}
						<div
							className={
								activeMenu
									? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
									: "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
							}
						>
							<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
								<Navbar />
							</div>
							<div>
								{themeSettings && <ThemeSettings />}

								<Routes>
									{/* dashboard  */}
									<Route path='/' element={<Apps />} />
									<Route path='/main' element={<Ecommerce />} />

									{/* pages  */}
									<Route path='/trade' element={<Trades />} />
									<Route path='/customize' element={<Wallet />} />
									{/* <Route path="/customers" element={<Customers />} /> */}
								</Routes>
							</div>
							<Footer />
						</div>
					</div>
				</BrowserRouter>
			</div>

			{/*         

        <Container className={classed.container}>
          <Row className={classed.row}>

          <Col className={classed.col_2}>
        <div className={classed.card_3}>
        <div className={classed.header}> 

<h1>Deposit</h1>


</div>
        <form className={classed.formfield_1}>
                    <label className={classed.label} htmlFor="amount">Enter deposit amount</label>
                <input className={classed.input} value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" id="amount" placeholder="" />
                <label className={classed.label} htmlFor="password">Confirm Password</label>
                <input className={classed.input} value={password_2} onChange={(e) => setPassword_2(e.target.value)} type='password' name="password" id="password" placeholder="" />

                  <button className={classed.button} type='submit'>Place Order</button>
                    </form>
         

           
           

        </div>
        </Col>

        
        <Col className={classed.col_2}>
        <div className={classed.card_3}>
        <div className={classed.header}> 

<h1>Withdrawal</h1>


</div>
        <form className={classed.formfield_1}>
                    <label className={classed.label} htmlFor="amount">Enter withdrawal amount</label>
                <input className={classed.input} value={amount_2} onChange={(e) => setAmount_2(e.target.value)} name="amount" id="amount" placeholder="" />

                <label className={classed.label} htmlFor="password">Confirm Password</label>
                <input className={classed.input} value={password} onChange={(e) => setPassword(e.target.value)} type='password' name="password" id="password" placeholder="" />

                  <button className={classed.button} type='submit'>Place Order</button>
                    </form>
         

           
           

        </div>
        </Col>

  

        <Col className={classed.col_2}>
        <div className={classed.card_3}>
          <div className={classed.header}> 

          <h1>Wallet Addresses</h1>
          
          
          </div>
          <Form.Group controlId="formFileDisabled" className={classed.formfield}>
        <Form.Label className={classed.label}>Bitcoin Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control
        className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text1);}}>

    <FiClipboard/>
    
    </button>
    </div>

    <Form.Label className={classed.label}>Ethereum Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text2);}}>

    <FiClipboard/>
    
    </button>
    </div>

    <Form.Label className={classed.label}>USDT Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text5);}}>

    <FiClipboard/>
    
    </button>
    </div>

    <Form.Label className={classed.label}>Ripple Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text3);}}>

    <FiClipboard/>
    
    </button>
    </div>
    <Form.Label className={classed.label}>BNB Wallet Address</Form.Label>
        <div className={classed.clip}>
        <Form.Control className={classed.input}
        type="text"
        placeholder="16dFcd4migQWoP4vwykApVg5EsCGYNd5G1"
        aria-label="Disabled input example"
        readOnly
      />

    <button onClick={() => {
         navigator.clipboard.writeText(text4);}}>

    <FiClipboard/>
    
    </button>
    </div>
      
      </Form.Group>
      
         

          

        </div>
        </Col>



      
        </Row>

      
        </Container>  */}
		</>
	);
};

export default App;

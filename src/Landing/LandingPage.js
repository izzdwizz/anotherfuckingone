import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBars } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footers } from "./components/Footer";
import { Invest } from "./components/Invest";
import { Testimonies } from "./components/Testimonies";
import FAQ from "./components/FAQ";
import MyVideoComponent from "./components/VideoComponent";

function LandingPage() {
	return (
		<>
			<div className='App'>
				<NavBars />
				<Banner />
				<Skills />
				<Invest />
				<MyVideoComponent />
				{/* <Testimonies /> */}
				<FAQ />
				<Contact />
				<Footers />
			</div>
		</>
	);
}

export default LandingPage;

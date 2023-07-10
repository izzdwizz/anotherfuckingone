import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import classes from './sidebar.module.css';
import avatar from '../data/avatar.png';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<TooltipComponent content={title} position='BottomCenter'>
		<button
			type='button'
			onClick={() => customFunc()}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray'
		>
			<span
				style={{ background: dotColor }}
				className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
			/>
			{icon}
		</button>
	</TooltipComponent>
);

const Navbar = () => {
	const {
		currentColor,
		activeMenu,
		setActiveMenu,
		handleClick,
		isClicked,
		setScreenSize,
		screenSize,
	} = useStateContext();

	const navigate = useNavigate();
	const { username, setUsername } = useStateContext();
	const redirectClick = () => {
		// if (!username) {
		// 	//
		// 	alert('no username found');
		// }
		navigate('/main');
	};
	const { token } = useStateContext();

	const { click } = useStateContext();
	const { premiumPage, setPremiumPage } = useStateContext();

	useEffect(() => {
		getUserDetails();
	}, []);

	const getUserDetails = async () => {
		axios
			.get(
				'https://backend-btqx.onrender.com/myprofile',

				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					withCredentials: false,
				}
			)
			.then(async (response) => {
				console.log(response);
				const userName = await response.data.user.username;
				const psm = await response.data.user.premium;
				setUsername(userName);
				setPremiumPage(psm);
			})

			.catch((error) => {
				console.error({ error });
			});
	};

	console.log(premiumPage);
	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	const handleActiveMenu = () => setActiveMenu(!activeMenu);

	return (
		<div
			className='flex justify-between p-2 md:ml-6 md:mr-6 relative'
			id={classes.navbar}
		>
			<NavButton
				title='Menu'
				customFunc={handleActiveMenu}
				color={currentColor}
				icon={<AiOutlineMenu />}
			/>
			<div className='flex'>
		
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
						onClick={() => handleClick('userProfile')}
					>
						<img
							className='rounded-full w-8 h-8'
							src={avatar}
							alt='user-profile'
						/>
						<p>
							{!username ? (
								<span className='text-gray-400 text-14'>
									Click to Login to your account
								</span>
							) : (
								<>
									<span className='text-gray-400 text-14'>Hi,</span>
									<span className='text-gray-400 font-bold ml-1 text-14'>
										{username}
									</span>
								</>
							)}
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</TooltipComponent>

				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import classes from './sidebar.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';
import avatar from '../data/avatar.png';

const UserProfile = () => {
	const { logout } = useStateContext();
	const [redirect, setRedirect] = useState(false);
	const { token } = useStateContext();
	const { userName } = useStateContext();
	const { setUsername } = useStateContext();
	const { userMail, setUserMail } = useStateContext();
	const { click } = useStateContext();
	const navigate = useNavigate();
	useEffect(() => {
		getUserDetails();
	}, []);

	const getUserDetails = async () => {
		axios
			.get(
				'https://backend-btq.onrender.com/myprofile',

				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					withCredentials: false,
				}
			)
			.then(async (response) => {
				const userName = await response.data.user.username;
				const userEmail = await response.data.user.email;
				setUsername(userName);
				setUserMail(userEmail);
			})

			.catch((error) => {
				console.error({ error });
			});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		logout();
		navigate('/');
	};
	const { currentColor } = useStateContext();

	return (
		<div
			className='nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'
			id={classes.userProfile}
		>
			<div className='flex justify-between items-center'>
				<p className='font-semibold text-lg dark:text-gray-200'>User Profile</p>
				<Button
					icon={<MdOutlineCancel />}
					color='rgb(153, 171, 180)'
					bgHoverColor='light-gray'
					size='2xl'
					borderRadius='50%'
				/>
			</div>
			<div
				className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'
				id={classes.userBorder}
			>
				<img
					className='rounded-full h-24 w-24'
					src={avatar}
					alt='user-profile'
				/>
				<div>
					<p className='font-semibold text-xl dark:text-gray-200'>
						{userName}{' '}
					</p>
					<p className='text-gray-500 text-sm dark:text-gray-400'>
						{userMail}{' '}
					</p>
				</div>
			</div>
			<div className='mt-5' onClick={handleSubmit}>
				<Button
					color='white'
					bgColor={currentColor}
					text='Logout'
					borderRadius='10px'
					width='full'
				/>
			</div>
		</div>
	);
};

export default UserProfile;

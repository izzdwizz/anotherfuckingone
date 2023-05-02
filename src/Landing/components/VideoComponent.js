// import React, {useState} from "react";
// import MyVideo from "../assets/img/video.mp4";

// import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';

// class MyVideoComponent extends React.Component {

//   render() {
//     return (
//       <video width="100%" height="100%" preload="auto">
//         <source src={MyVideo} type="video/mp4" />

//       </video>
//     );
//   }
// }

// export default MyVideoComponent;

import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import MyVideo from "../assets/img/video.mp4";
import classes from "./VideoComp.module.css";

const MyVideoComponent = () => {
	const [playVideo, setplayVideo] = useState(false);
	const vidRef = React.useRef();
	const handleVideo = () => {
		setplayVideo((prevPlayVideo) => !prevPlayVideo);

		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};

	return (
		<div className={classes.app__video}>
			<video
				src={MyVideo}
				ref={vidRef}
				type='video/mp4'
				loop
				controls={false}
			/>
			<div className={`${classes.app__video_overlay} ${classes.flex__center}`}>
				<div
					className={`${classes.app__video_overlay_circle} ${classes.flex__center}`}
					onClick={handleVideo}
				>
					{playVideo ? (
						<BsPauseFill color='#fff' fontSize={30} />
					) : (
						<BsFillPlayFill color='#fff' fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default MyVideoComponent;

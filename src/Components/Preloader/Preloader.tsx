import React from "react";
import gif from '../../assets/img/b4d657e7ef262b88eb5f7ac021edda87.gif'

const Preloader: React.FC = () => {
	return (
		<div style={{width: '90px', height: '90px', margin: '0 auto'}}>
			<img style={{width: '90px', height: '90px'}} src={gif} alt=""/>
		</div>
	)
}

export default Preloader

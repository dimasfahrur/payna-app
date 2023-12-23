import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
	return (
		<section className='max-container overflow-hidden p-11 flex flex-col py-20 gap-8 lg:py-20'>
			<div className='flex flex-row'>
				{/* LEFT */}
				<div className='relative p-5 justify-center text-center items-center flex flex-col gap-5 lg:w-[500px] lg:text-left lg:items-start'>
					<h1 className='bold-55 '>Manage Payroll Like an Expert</h1>
					<p className='regular-16'>
						Payna is helping you to setting up the payroll without required any
						finance skills or knowledge before
					</p>
					<Button
						type='button'
						title='Get Started'
						variant='btn_blue'
					/>
				</div>

				{/* Right */}
				<div className='hideImage ml-20'>
					<Image
						src='/company-profile.png'
						alt='profile'
						width='685'
						height='400'
					/>
				</div>
			</div>
			<div className='flexBetween flex-col gap-8 px-8 flex-1 lg:flex-row'>
				<p className='medium-16 text-center lg:w-[151px] lg:text-left'>
					Trusted by Global Company
				</p>
				<div className='grid grid-cols-3 gap-8 md:flexBetween'>
					<Image
						src='/apple.png'
						alt='apple'
						width='88'
						height='30'
					/>
					<Image
						src='/adobe.png'
						alt='apple'
						width='88'
						height='30'
					/>
					<Image
						src='/slack.png'
						alt='apple'
						width='88'
						height='30'
					/>
					<Image
						src='/spotify.png'
						alt='apple'
						width='88'
						height='30'
					/>
					<Image
						src='/google.png'
						alt='apple'
						width='88'
						height='30'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;

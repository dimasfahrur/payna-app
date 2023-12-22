import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import React from 'react';
import Button from './Button';

export const Navbar = () => {
	return (
		<nav className='flexBetween max-container padding-container relative z-30 py-5'>
			<Link href='/'>
				<Image
					src='/payna-logo.png'
					alt='logo'
					width={151}
					height={42}
				/>
			</Link>
			<ul className='hidden h-full gap-12 lg:flex'>
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className='regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:medium-16'
					>
						{link.label}
					</Link>
				))}
			</ul>

			<div className='lg:flexCenter hidden'>
				<Button
					type='button'
					title='Sign In'
					variant='btn_gray'
				/>
			</div>

			<Image
				src='menu.svg'
				alt='menu'
				width={32}
				height={32}
				className='inline-block cursor-pointer lg:hidden'
			/>
		</nav>
	);
};

export default Navbar;

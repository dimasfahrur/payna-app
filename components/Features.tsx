import { FEATURES } from '@/constants';
import Image from 'next/image';

type FeatureItem = {
	title: string;
	icon: string;
	description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
	return (
		<li className='flex w-full flex-1 flex-row items-start'>
			<div className='rounded-full top-0 left-0 p-4'>
				<Image
					src={icon}
					alt='icon'
					width={40}
					height={40}
				/>
			</div>
			<div className='flex justify-center max-w-[200px] flex-col'>
				<h2 className='medium-20'>{title}</h2>
				<p className='regular-16'>{description}</p>
			</div>
		</li>
	);
};

const Features = () => {
	return (
		<section className='max-container padding-container flexCenter flex-col py-10'>
			<div className='flex flex-col text-center gap-5'>
				<h1 className='flexCenter flex-col bold-28 md:bold-36'>
					<span className='bold-16 text-orange-60'>Work Better</span>
					For Your Business
				</h1>
				<p className='flex-1 regular-16 max-w-[386px]'>
					We did research what your company needs and here we are providing all
					of them just for you
				</p>
			</div>
			<ul className='mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
				{FEATURES.map((feature) => (
					<FeatureItem
						key={feature.title}
						title={feature.title}
						icon={feature.icon}
						description={feature.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Features;

import Image from 'next/image';

const Showcase = () => {
	return (
		<section className='flexCenter flex-1 flex-col max-container padding-container gap-10 my-10 lg:flex-row'>
			<Image
				src='/dummy-video.png'
				alt='video'
				width={630}
				height={450}
			/>
			<div className='flex flex-col text-center gap-5 lg:text-left'>
				<h1 className='flexCenter flex-col bold-28 gap-2 md:bold-36 lg:items-start'>
					<span className='bold-16 text-orange-60'>SAVE MORE TIME</span>
					And Boost Productivity
				</h1>
				<p className='regular-16 min-w-[330px] max-w-[380px]'>
					Your employees can bring any success into your business, so we need to
					take care of them
				</p>
			</div>
		</section>
	);
};

export default Showcase;

type Props = {
	type: 'button' | 'submit';
	title: string;
	variant: 'btn_gray' | 'btn_blue';
};

const Button = ({ type, title, variant }: Props) => {
	return (
		<button
			className={`flexCenter gap-3 rounded-full border ${variant}`}
			type='button'
		>
			<label className='whitespace-nowrap'>{title}</label>
		</button>
	);
};

export default Button;

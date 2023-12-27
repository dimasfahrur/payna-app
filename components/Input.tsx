import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInput = {
	email: string;
	placeholder: string;
};

const Input = ({ email, placeholder }: FormInput) => {
	const { register, handleSubmit } = useForm<FormInput>();
	const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register('email')}
				type={email}
				placeholder={placeholder}
			/>
		</form>
	);
};

export default Input;

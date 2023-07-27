const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div className="flex justify-center items-center">
			<input {...register(name, options)} {...rest} className="w-[30%] h-8 my-2" />
			{error && <div>{error}</div>}
		</div>
	)
}

export default Field
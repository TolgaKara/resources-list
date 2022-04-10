import React from 'react';

export const Gradient = ({ isText }) => {
	return (
		<div
			className={
				isText
					? 'font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-lime-400 to-green-600'
					: 'bg-gradient-to-r from-lime-500 to-green-500 inline px-2'
			}
		>
			Gradient
		</div>
	);
};

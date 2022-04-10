import React from 'react';

export const FilterButton = ({ children }) => {
	return (
		<div className='bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded w-fit'>
			{children}
		</div>
	);
};

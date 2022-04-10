import React from 'react';

export const Icons = ({ type }) => {
	const icons = {
		'chevron-down': (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4 my-auto'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={3}
			>
				<path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
			</svg>
		),
		'chevron-up': (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4 my-auto'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
			</svg>
		),
		'add-more': (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
			</svg>
		),
	};
	return icons[type];
};

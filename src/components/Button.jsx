import React from 'react';
import { useState } from 'react';
import { Icons } from './Icons';

export const FilterButton = ({ children, dropdownItems }) => {
	const [dropdownClicked, setDropdownClicked] = useState(false);
	return (
		<div className='flex flex-col relative '>
			<div
				onClick={() => setDropdownClicked(!dropdownClicked)}
				className='flex items-center gap-2 bg-green-500 hover:bg-green-400 text-green-900 font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded w-fit cursor-pointer select-none transition ease-in-out duration-300'
			>
				{children} <Icons type={dropdownClicked ? 'chevron-up' : 'chevron-down'} />
			</div>
			{dropdownClicked && dropdownItems && (
				<div className='absolute top-12 bg-white shadow-lg z-10 w-full py-2 px-4'>
					<div className='flex flex-col gap-2'>
						{dropdownItems?.map((item) => (
							<div
								key={item}
								className='flex items-center cursor-pointer select-none hover:text-green-600 transition ease-in-out duration-300 font-semibold'
							>
								<div className='flex-1'>{item.label}</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export const AddMoreButton = ({ children }) => {
	return (
		<div className='flex gap-2 rounded-full bg-green-500 hover:bg-green-400 text-green-900 font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500  w-fit cursor-pointer select-none transition ease-in-out duration-300'>
			<Icons type={'add-more'} />
		</div>
	);
};

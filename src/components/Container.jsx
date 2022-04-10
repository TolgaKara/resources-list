import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import React from 'react';

export const Container = ({ ...props }) => {
	return <div className='container mx-auto px-4'>{props.children}</div>;
};

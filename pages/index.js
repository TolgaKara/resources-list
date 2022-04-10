import Head from 'next/head';
import Image from 'next/image';
import { FilterButton } from '../src/components/Button';
import { Container } from '../src/components/Container';
import { Gradient } from '../src/components/Gradient';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<Container>
			<div className='pb-2 border-b-4 border-green-300 w-fit flex items-center justify-center mx-auto'>
				<h1 className='text-3xl font-bold text-center'>
					😁 Simple <Gradient>Resources</Gradient> List
				</h1>
			</div>
			<div>
				<FilterButton>Web Development</FilterButton>
			</div>
		</Container>
	);
}

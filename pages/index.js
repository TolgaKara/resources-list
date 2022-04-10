import Head from 'next/head';
import Image from 'next/image';
import { AddMoreButton, FilterButton } from '../src/components/Button';
import { Container } from '../src/components/Container';
import { Gradient } from '../src/components/Gradient';
import { Icons } from '../src/components/Icons';
import { businessDropdownItems } from '../src/data/business';
import { webDropdownItems } from '../src/data/web-development';
import styles from '../styles/Home.module.css';
import { loadDB } from '../src/lib/firebaseConfig';

export default function Home() {
	return (
		<Container>
			<div className='pb-2 border-b-4 border-green-300 w-fit flex gap-4 flex-col items-center justify-center mx-auto md:flex-row'>
				<h1 className='text-3xl font-bold text-center'>
					😁 Simple <Gradient>Resources</Gradient> List
				</h1>
				<AddMoreButton />
			</div>
			<div className='mt-8 flex flex-col gap-4 items-center justify-center'>
				<FilterButton dropdownItems={webDropdownItems}>💻 Web Development</FilterButton>
				<FilterButton>🎨 UX & UI</FilterButton>
				<FilterButton dropdownItems={businessDropdownItems}>💼 Business</FilterButton>
			</div>
		</Container>
	);
}

// export async function getStaticProps() {
// 	const posts = (await getPosts()) || [];
// 	return { props: { posts } };
// }

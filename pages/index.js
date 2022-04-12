import Head from 'next/head';
import Image from 'next/image';
import { AddMoreButton, FilterButton } from '../src/components/Button';
import { Container } from '../src/components/Container';
import { Gradient } from '../src/components/Gradient';
import { Icons } from '../src/components/Icons';
import { businessDropdownItems } from '../src/data/business';
import { webDropdownItems } from '../src/data/web-development';
import styles from '../styles/Home.module.css';
import { loadDB, app, db } from '../src/lib/firebaseConfig';
import { collection, addDoc, getDoc } from 'firebase/firestore';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
	const [resources, setResources] = useState(null);
	console.log(resources);
	// On Mount call the api resources and set the state
	useEffect(() => {
		axios.get('/api/resources').then((res) => {
			console.log(res.data);
			setResources(res.data);
		});
	}, []);

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
			<div className='mt-8 flex flex-col gap-4 items-center justify-center'>
				{resources &&
					resources.map((resource) => {
						return (
							<div key={resource.id} className='flex flex-col gap-4 items-center justify-center'>
								<div className='flex flex-col gap-4 items-center justify-center'>
									<h1 className='text-3xl font-bold text-center'>{resource.name}</h1>
								</div>
								<div className='flex flex-col gap-4 items-center justify-center'>
									<h1 className='text-3xl font-bold text-center'>{resource.description}</h1>
								</div>
								<div>
									{resource.tags.map((tag) => {
										return (
											<div key={tag} className='flex flex-col gap-4 items-center justify-center'>
												<h1 className='text-3xl font-bold text-center'>{tag}</h1>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
			</div>
		</Container>
	);
}

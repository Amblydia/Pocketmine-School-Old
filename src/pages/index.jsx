import React from 'react';
import Layout from '@theme/Layout';
import { Section } from '../components/SectionComponents';
import { Card } from '../components/CardComponents';
import { Button } from '../components/ButtonComponents';

export default function Home() {

	return (
		<Layout
			title={`Home`}
			description="A Website To Teach You Everything About PocketMine-MP"
		>
			<div className="container">
				<div id="hero">
					<h2>Pocketmine School</h2>
					<p>
						dummy description 
					</p>
					<Button title="Get Started"></Button>
				</div>

				<Section title="Get to know Pocketmine">
					<Card
					title="How to make a Pocketmine"
					description="another dummy description"
					to="/"
					/>
					<Card
					title="How to use Api"
					description="another dummy description"
					to="/"
					/>
					<Card
					title="how to use"
					description="another dummy description"
					to="/"
					/>
				</Section>

			</div>
		</Layout>
	);
}

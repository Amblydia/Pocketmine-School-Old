import React from 'react';
import Layout from '@theme/Layout';
import { Section } from '../components/SectionComponents';
import { Card } from '../components/CardComponents';

export default function Home() {

	return (
		<Layout
			title={`Home`}
			description="A Website To Teach You Everything About PocketMine-MP"
		>
			<div className="center home">
				<div id="hero">
					<h2>Pocketmine School</h2>
					<p>
						Explore our guides and examples to integrate Dyte easily into your
						apps.
					</p>
				</div>

				<Section title="Get to know Pocketmine">
					<Card
					title="How Dyte works"
					description="Essential reading for a better understanding of how to best use Dyte SDKs"
					to="/"
					/>
					<Card
					title="Guides"
					description="Take a look at all the available guides"
					to="/"
					/>
					<Card
					title="Guides"
					description="Take a look at all the available guides"
					to="/"
					/>
				</Section>

			</div>

		</Layout>
	);
}

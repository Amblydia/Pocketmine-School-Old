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
			<div className="container home-page">
				<div id="hero">
					<h2>Pocketmine School</h2>
					<p>
						Learn how to use the Pocketmine API!
					</p>
					<Button title="Get Started"></Button>
				</div>

				<Section title="Tutorials">
					<Card
						title="Creating Plugins"
						description="Learn how to make a Pocketmine Plugin"
						to="/tutorials/htmap"
					/>
					<Card
						title="FormAPI"
						description="Learn how to use FormAPI"
						to="/tutorials/form-api"
					/>
					<Card
						title="BedrockEconomy"
						description="Learn how to use BedrockEconomy"
						to="/tutorials/bedrock-economy"
					/>
				</Section>
			</div>
		</Layout>
	);
}

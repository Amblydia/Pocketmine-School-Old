import React from 'react';
import Layout from '@theme/Layout';
import { Section } from '../components/SectionComponents';
import { Card } from '../components/CardComponents';

export default function Tutorials() {

    return (
        <Layout 
            title={`Tutorials`}
            description="A Website To Teach Everything About PocketMine-MP"
        >
            <div className="container">
			    <div id="hero">
					<h2>List of Tutorials</h2>
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
						title="how to use"
						description="another dummy description"
						to="/"
					/>
				</Section>
            </div>
        </Layout>
    );
}


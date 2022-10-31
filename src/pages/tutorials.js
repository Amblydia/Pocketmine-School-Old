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
            	<Section>
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


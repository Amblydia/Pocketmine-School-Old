import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function Home() {

	return (
		<Layout
			title={`Home`}
			description="A Website To Teach You Everything About PocketMine-MP"
		>
			<div className="hero">
				<div class="container">
					<h2 className="hero__title">Pocketmine School</h2>
					<p className="hero__subtitle">Learn how to use the Pocketmine API!</p>
					<Link href='tutorials' className={clsx('button', styles.heroBtn)}>Get Started</Link>
				</div>
			</div>
		</Layout>
	);
}

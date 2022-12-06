import Head from 'next/head';
import Image from '../components/image/image'
import styles from '../styles/Home.module.css';
import melissa from '../public/melissa.jpg';
import Tile from '../components/tile/tile';
import tiles from '../data/tiles';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Blog</title>
				<meta name="description" content="Traveling blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className={styles.headline}>Welcome to my Blog</h1>
				<p> This was my adventure in the Caribbean.</p>
				<Image alt="woman on a beach" src={melissa} width={1086} height={1085} />
				<div className={styles.tiles}>
					{tiles.map(tile => <Tile image={tile.image} headline={tile.headline} details={tile.details} link={tile.link} />)}
				</div>
			</main>
		</div>
	);
}

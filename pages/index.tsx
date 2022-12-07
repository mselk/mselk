import Head from 'next/head';
import Image from '../components/image/image'
import styles from '../styles/Home.module.css';
import melissa from '../public/melissa.jpg';
import Tile from '../components/tile/tile';
import tiles from '../data/tiles';
import { useEffect, useState } from 'react';

export default function Home() {
	const [city, setCity] = useState("");
	useEffect(() => {
		fetch("https://ipinfo.io/geo?token=7abe1afad1fdd6").then(response => {
			response.json().then(data => {
				setCity(data.city);
			})
		})
	}, [])
	return (
		<div className={styles.container}>
			<Head>
				<title>Blog</title>
				<meta name="description" content="Traveling blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				Thank you for visiting. Your city: {city}
				<h1 className={styles.headline}>Welcome to my Blog</h1>
				<p> This was my adventure in the Caribbean.</p>
				<Image alt="woman on a beach" src={melissa} width={1086} height={1085} />
				<div className={styles.tiles}>
					{tiles.map((tile, index) => <Tile key={index} image={tile.image} headline={tile.headline} details={tile.details} link={"posts/" + tile.link} />)}
				</div>
			</main>
		</div>
	);
}

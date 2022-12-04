import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
				<p> This was my adventure in the Caribbean</p>
				<img src="/melissa.jpg" />
			</main>
		</div>
	);
}

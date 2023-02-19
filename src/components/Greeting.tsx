import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from '../styles/greeting.module.css';

// Preact components!
export default function UserGreeting({ messages }: { messages: string[] }) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState<string>(randomMessage());

	return (
		<div className={styles.greetingContainer}>
			<p className={styles.greetingText}>{` ${greeting}!`}</p>
			<button
				className={'greeting-container-btn__lg'}
				onClick={() => setGreeting(randomMessage())}
			>
				Another Greeting
			</button>
		</div>
	);
}

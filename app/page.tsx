import { Box, Container } from '@mui/material';

import { About, Header, Hero, Skills, Work } from '@/app/ui/index';

export default function Home() {
	return (
		<Box sx={{ marginX: 'auto' }}>
			<Header />

			<Container component={'main'} maxWidth={'lg'}>
				<Hero />

				<Work />

				<Skills />

				<About />
			</Container>
		</Box>
	);
}

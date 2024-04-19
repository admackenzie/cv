import { Box, Container } from '@mui/material';
import { grey } from '@mui/material/colors';

import { Contact, Footer, Header, Hero, Skills, Work } from '@/app/ui/index';

export default function Home() {
	return (
		<Box id={'top'} sx={{ backgroundColor: `${grey[50]}`, marginX: 'auto' }}>
			<Header />

			<Container component={'main'} maxWidth={'lg'}>
				<Hero />

				<Work />

				<Skills />

				<Contact />
			</Container>

			<Footer />
		</Box>
	);
}

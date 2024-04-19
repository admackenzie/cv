'use client';

import { ArrowRight } from '@mui/icons-material';
import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { ContactButtons, Section } from '@/app/ui/index';

export default function Contact() {
	const theme = useTheme();

	const likes = {
		key: 'Likes',
		values: [
			'Single-page applications',
			'Inline CSS',
			'Thoughtful documentation',
		],
	};

	const dislikes = {
		key: 'Dislikes',
		values: [
			'Poorly implemented autofocus',
			'Raw SQL queries',
			'Manually allocating memory',
		],
	};

	return (
		<Box>
			<Section
				description={
					'I advocate for free, open-source, collaborative web technologies that provide the best experience connecting users with data. '
				}
				id={'contact'}
				title={'About me'}
			>
				<Typography variant={'body1'}>
					My vision for the future of web development is through accessibility
					and abstraction. We have billions of web users but the standards for
					dark patterns, data collection, and other modern frustrations are
					shaped by tech giants&apos; profit-before-all algorithms. My favorite
					libraries are those that fully abstract the human-machine interface
					into something intuitive and joyous to use, and I believe this is the
					path we as developers should follow. By lowering the barrier to entry
					of web technologies, we get more eyes on our shared project and
					inspire more people to contribute their creativity to the field.
				</Typography>

				<Grid
					container
					maxWidth={'sm'}
					sx={{ marginTop: theme.spacing(1), marginX: 'auto' }}
				>
					{[likes, dislikes].map(list => {
						return (
							<Grid key={list.key} xs={12} sm={6}>
								<Typography sx={{ textAlign: 'center' }} variant={'h6'}>
									{list.key}
								</Typography>

								<List dense={true} disablePadding={true}>
									{list.values.map(value => {
										return (
											<ListItem disablePadding={true} key={value}>
												<ListItemIcon>
													<ArrowRight />
												</ListItemIcon>

												<ListItemText sx={{ marginLeft: '-1rem' }}>
													<Typography variant={'body1'}>{value}</Typography>
												</ListItemText>
											</ListItem>
										);
									})}
								</List>
							</Grid>
						);
					})}
				</Grid>
			</Section>

			<Section
				description={
					"Think I'd be a good fit for your team? Send me an email and let's talk."
				}
				id={'cta'}
				title={'Contact me'}
			>
				<ContactButtons />
			</Section>
		</Box>
	);
}

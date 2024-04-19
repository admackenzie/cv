'use client';

import { Avatar, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ContactButtons, Section } from '@/app/ui/index';

export default function Hero() {
	const theme = useTheme();

	return (
		<Section id={'hero'}>
			<Typography variant={'h4'}>Adrian David MacKenzie</Typography>
			<Typography variant={'body1'}>
				{/* I combine my experience in product and brand to solve problems, tell
				stories, and create compelling experiences. */}
				<Box component={'span'} sx={{ color: 'red' }}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
					autem.
				</Box>
			</Typography>

			<ContactButtons />

			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					marginTop: theme.spacing(2),
				}}
			>
				<Avatar
					alt={'picture of Adrian MacKenzie'}
					src={'/images/avatar.png'}
					sx={{ height: '6rem', width: '6rem' }}
				/>
				<Box sx={{ marginLeft: theme.spacing(2) }}>
					<Typography variant={'h5'}>Nice to meet you!</Typography>
					<Typography variant={'subtitle1'}>
						I&apos;m Adrian, a full-stack web developer with 5+ years experience
						creating responsive and accessible web applications.
						<Box component={'span'} sx={{ color: 'red' }}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
							cum molestiae asperiores quam, accusantium voluptate inventore ad
							incidunt nostrum qui!
						</Box>
					</Typography>
				</Box>
			</Box>
		</Section>
	);
}

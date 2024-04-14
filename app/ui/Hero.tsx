'use client';

import { MailOutline } from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { GitHubIcon } from '@/app/lib/icons';
import { Section } from '@/app/ui/index';

export default function Hero() {
	const theme = useTheme();

	return (
		<Section id={'hero'}>
			<Typography variant={'h4'}>Adrian MacKenzie</Typography>
			<Typography variant={'body1'}>
				I combine my experience in product and brand to solve problems,
				tell stories, and create compelling experiences.
			</Typography>

			<Box
				sx={{
					marginTop: theme.spacing(4),
				}}
			>
				<Button
					startIcon={<MailOutline sx={{ color: '#000' }} />}
					sx={{ marginRight: theme.spacing(1) }}
					variant={'outlined'}
				>
					Email
				</Button>
				<Button startIcon={<GitHubIcon />} variant={'outlined'}>
					Github
				</Button>
			</Box>

			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					marginTop: theme.spacing(4),
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
						I&apos;m Adrian, a graphic and type designer focused on
						identity, typography, and interaction design.
					</Typography>
				</Box>
			</Box>
		</Section>
	);
}

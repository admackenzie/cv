'use client';

import Link from 'next/link';

import { MailOutline } from '@mui/icons-material';
import { Box, ButtonBase } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

import { GitHubIcon } from '@/app/lib/icons';

export default function ContactButtons() {
	const theme = useTheme();

	const buttons = [
		{
			href: 'mailto:admacdev@pm.me',
			icon: <MailOutline sx={{ color: grey[900], marginTop: '0.125rem' }} />,
			name: 'Email',
		},
		{
			href: 'https://github.com/admackenzie',
			icon: <GitHubIcon />,
			name: 'GitHub',
		},
	];

	return (
		<Box
			sx={{
				display: 'flex',
				marginTop: theme.spacing(2),
			}}
		>
			{buttons.map(btn => {
				return (
					<ButtonBase
						component={Link}
						href={btn.href}
						key={btn.name}
						sx={{
							alignItems: 'center',
							border: `1px solid ${grey[500]}`,
							borderRadius: theme.shape.borderRadius,
							display: 'flex',
							height: '3rem',
							marginX: theme.spacing(0.5),
							paddingX: theme.spacing(1),
							width: '8rem',
							'&:hover': {
								backgroundColor: `${grey[100]}`,
							},
							'&:hover, &:not(:hover)': {
								transition: 'background-color 300ms ease',
							},
						}}
						target={'_blank'}
					>
						<Box sx={{ marginRight: theme.spacing(1) }}>{btn.icon}</Box>
						{btn.name}
					</ButtonBase>
				);
			})}
		</Box>
	);
}

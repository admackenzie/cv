'use client';

import { ReactNode } from 'react';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface MaxWidth {
	[key: string]: string;
}

interface SectionProps {
	bodyWidth?: MaxWidth | string;
	children: ReactNode;
	description?: string;
	headWidth?: MaxWidth | string;
	id: string;
	title?: string;
}

const maxWidth = { xs: 'sm', lg: 'md' };

export default function Section({
	bodyWidth = maxWidth,
	children,
	description,
	headWidth = maxWidth,
	id,
	title,
}: SectionProps) {
	const theme = useTheme();

	return (
		<Box component={'section'} id={id} sx={{ marginTop: theme.spacing(8) }}>
			{/* Render section header */}
			<Box maxWidth={headWidth} sx={{ marginX: 'auto' }}>
				<Typography variant={'h5'}>{title}</Typography>
				<Typography sx={{ textWrap: 'pretty' }} variant={'body1'}>
					{description}
				</Typography>
			</Box>

			{/* Render section body */}
			<Box
				maxWidth={bodyWidth}
				sx={{ marginTop: theme.spacing(2), marginX: 'auto' }}
			>
				{children}
			</Box>
		</Box>
	);
}

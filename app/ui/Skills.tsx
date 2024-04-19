'use client';

import Link from 'next/link';

import { Button, Box, ButtonBase, Chip, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { skills } from '@/app/lib/definitions';
import { Section } from '@/app/ui/index';

export default function Skills() {
	const theme = useTheme();

	return (
		<Section
			description={
				'My current (and favorite) tech stack utilizes the NextJS framework to stream React components from the server. In some applications, data fetching in this way can circumvent the traditional HTTP request-response cycle entirely. I find this pattern neatly integrates the full-stack development experience.'
			}
			id={'skills'}
			title={'Libraries, Skills, & Technologies'}
		>
			<Grid container spacing={1}>
				{skills.map(skill => {
					return (
						<Grid key={skill.name} xs={6} sm={4} lg={3}>
							<ButtonBase
								component={Link}
								href={skill.href}
								key={skill.name}
								sx={{
									alignItems: 'center',
									border: `1px solid ${grey[500]}`,
									borderRadius: theme.shape.borderRadius,
									display: 'flex',
									height: '3rem',
									paddingX: theme.spacing(1),
									width: '100%',
									'&:hover': {
										backgroundColor: `${grey[100]}`,
									},
									'&:hover, &:not(:hover)': {
										transition: 'background-color 300ms ease',
									},
								}}
								target={'_blank'}
							>
								<Box
									sx={{
										marginRight: theme.spacing(1),
										marginTop: theme.spacing(0.5),
									}}
								>
									{skill.icon}
								</Box>
								{skill.name}
							</ButtonBase>
						</Grid>
					);
				})}
			</Grid>
		</Section>
	);
}

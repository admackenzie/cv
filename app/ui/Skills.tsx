'use client';

import { useTheme } from '@mui/material/styles';

import { Chip, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { skills } from '@/app/lib/definitions';
import { Section } from '@/app/ui/index';

export default function Skills() {
	const theme = useTheme();

	return (
		<Section
			description={
				"My current favorite tech stack utilizes the NextJS framework to stream React components from the server. In some applications, data fetching from the server can circumvent the traditional HTTP request-response cycle entirely. For me, this pattern, coupled with Next's new App router, neatly integrate the full-stack experience."
			}
			id={'skills'}
			title={'Languages, Libraries, Skills, & Technologies'}
		>
			<Grid container spacing={1}>
				{skills.map(skill => {
					return (
						<Grid key={skill.name} xs={6} sm={4} lg={3}>
							<Chip
								clickable={true}
								component={'a'}
								href={skill.href}
								icon={skill.icon}
								key={skill.name}
								label={
									<Typography
										sx={{
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}
										variant={'body1'}
									>
										{skill.name}
									</Typography>
								}
								sx={{
									paddingX: theme.spacing(1),
									paddingY: theme.spacing(3),
									width: '100%',
									'& .MuiChip-label': {
										marginLeft: theme.spacing(0.5),
									},
								}}
								target={'_blank'}
								variant={'outlined'}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Section>
	);
}

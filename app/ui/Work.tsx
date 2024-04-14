'use client';

import { ReactNode } from 'react';

import { ArrowRight } from '@mui/icons-material';
import {
	Box,
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { projects } from '@/app/lib/definitions';
import { Section } from '@/app/ui/index';

export default function Work() {
	return (
		<Section
			bodyWidth={'lg'}
			description={
				'I help clients make an impact through informed, authentic digital identities and innovative user experiences.'
			}
			id={'work'}
			title={'Work'}
		>
			<Grid container spacing={2} sx={{ maxWidth: 'lg' }}>
				{projects.map(project => {
					const { description, features, title } = project;

					return (
						<Project
							description={description}
							features={features}
							key={title}
							title={title}
						>
							project
						</Project>
					);
				})}
			</Grid>
		</Section>
	);
}

interface ProjectProps {
	children: ReactNode;
	description: string;
	features: string[];
	title: string;
}

const Project = ({ children, description, features, title }: ProjectProps) => {
	const theme = useTheme();

	return (
		<Grid xs={12} md={6}>
			<Box sx={{ border: '1px solid', height: '50svh' }}>{children}</Box>

			<Container sx={{ marginTop: theme.spacing(2), textWrap: 'pretty' }}>
				<Typography sx={{ textAlign: 'center' }} variant={'h6'}>
					{title}
				</Typography>

				<Typography variant={'body1'}>{description}</Typography>

				<List disablePadding={true} dense={true}>
					{features.map(feature => {
						return (
							<ListItem disablePadding={true} key={feature}>
								<ListItemIcon>
									<ArrowRight />
								</ListItemIcon>

								<ListItemText>
									<Typography variant={'body1'}>
										{feature}
									</Typography>
								</ListItemText>
							</ListItem>
						);
					})}
				</List>
			</Container>
		</Grid>
	);
};

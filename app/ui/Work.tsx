'use client';

import Link from 'next/link';
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
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { projects } from '@/app/lib/definitions';
import { Section } from '@/app/ui/index';

export default function Work() {
	const widgets = ['placeholder', 'placeholder', 'placeholder'];

	return (
		<Box>
			<Section
				bodyWidth={'lg'}
				description={
					"I'm at my best when I'm passionate about the project. As satisfying as it is to see the UI in my head brought to life, I'm much more at home working the business logic and server mechanics of modern sites. My projects reflect this with their minimalist design and complex functionality."
				}
				id={'work'}
				title={'Work'}
			>
				<Grid
					container
					columnSpacing={2}
					rowSpacing={3}
					sx={{ maxWidth: 'lg' }}
				>
					{projects.map(project => {
						const { bannerText, description, features, href, title } = project;

						return (
							<Project
								description={description}
								features={features}
								href={href}
								key={title}
								title={title}
							>
								<Banner bannerText={bannerText} href={href} />
								<Box component={'span'} sx={{ color: 'red' }}>
									placeholder
								</Box>
							</Project>
						);
					})}
				</Grid>
			</Section>

			<Section
				bodyWidth={'lg'}
				description={
					'Between bigger projects, I like working on utilities with a broader application. I use these "plug and play" components to add function and personality to sites in need.'
				}
				id={'widgets'}
				title={'Widgets'}
			>
				<Grid container columnSpacing={2} rowSpacing={3}>
					{[1, 2, 3].map(widget => {
						return (
							<Grid key={widget} xs={12} sm={4}>
								<Box sx={{ border: `1px solid ${grey[500]}`, height: '20svh' }}>
									<Box component={'span'} sx={{ color: 'red' }}>
										placeholder
									</Box>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Section>
		</Box>
	);
}

interface BannerProps {
	bannerText: string;
	href: string;
}

const Banner = ({ bannerText, href }: BannerProps) => {
	const theme = useTheme();

	const blue = (op = 1) => `rgb(37, 99, 325, ${op})`;

	return (
		<Typography
			component={href ? Link : 'span'}
			href={href}
			sx={{
				backgroundColor: blue(0.1),
				borderBottom: `1px solid ${grey[500]}`,
				borderTop: `1px solid ${grey[500]}`,
				bottom: '10%',
				color: grey[900],
				paddingBottom: theme.spacing(0.5),
				paddingTop: theme.spacing(1),
				position: 'absolute',
				textAlign: 'center',
				textDecoration: 'none',
				width: '100%',

				// Apply hover styling only when component is a Link
				'&:hover': {
					backgroundColor: href && blue(1),
					color: href && '#fff',
				},
				'&:hover, &:not(:hover)': {
					transition: href && 'background-color 1s ease',
				},
			}}
			target={'_blank'}
			variant={'h6'}
		>
			{bannerText}
		</Typography>
	);
};

interface ProjectProps {
	children: ReactNode;
	description: string | ReactNode;
	features: string[];
	href: string;
	title: string;
}

const Project = ({
	children,
	description,
	features,
	href,
	title,
}: ProjectProps) => {
	const theme = useTheme();

	return (
		<Grid xs={12} md={6}>
			<Box
				sx={{
					border: `1px solid ${grey[500]}`,
					height: '50svh',
					position: 'relative',
				}}
			>
				{children}
			</Box>

			<Container sx={{ marginTop: theme.spacing(2), textWrap: 'pretty' }}>
				<Typography sx={{ textAlign: 'center' }} variant={'h6'}>
					{title}
				</Typography>

				{/* Avoid nesting ReactNodes to prevent hydration errors */}

				<Box sx={{ fontFamily: theme.typography.body1 }}>{description}</Box>

				<List dense={true} disablePadding={true}>
					{features.map(feature => {
						return (
							<ListItem disablePadding={true} key={feature}>
								<ListItemIcon>
									<ArrowRight />
								</ListItemIcon>

								<ListItemText sx={{ marginLeft: '-1rem' }}>
									<Typography variant={'body1'}>{feature}</Typography>
								</ListItemText>
							</ListItem>
						);
					})}
				</List>
			</Container>
		</Grid>
	);
};

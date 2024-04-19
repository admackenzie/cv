'use client';

import { Copyright, Navigation } from '@mui/icons-material';
import { AppBar, Box, ButtonBase, Toolbar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
	const theme = useTheme();

	return (
		<AppBar
			elevation={0}
			sx={{
				backgroundColor: 'transparent',
				borderTop: `1px solid ${grey[300]}`,
				bottom: 0,
				marginTop: theme.spacing(20),
				position: 'static',
				top: 'auto',
			}}
		>
			<Box maxWidth={'lg'} sx={{ width: '100%', marginX: 'auto' }}>
				<Toolbar
					sx={{
						color: grey[600],
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					{/* Render legal */}
					<Typography
						sx={{
							alignItems: 'center',
							display: 'flex',
						}}
						variant={'subtitle2'}
					>
						<Copyright
							sx={{
								fontSize: theme.typography.body2,
								marginBottom: theme.spacing(0.5),
								marginRight: theme.spacing(0.5),
							}}
						/>
						<Box component={'span'} sx={{ marginRight: theme.spacing(1) }}>
							{new Date().getFullYear()}
						</Box>
						Adrian MacKenzie
					</Typography>

					{/* Render scroll to top button */}
					<ButtonBase
						onClick={() => window.scrollTo(0, 0)}
						sx={{
							alignItems: 'center',
							display: 'flex',
							height: '4rem',
							paddingX: theme.spacing(2),
							paddingY: theme.spacing(1),
							'&:hover': { backgroundColor: grey[100] },
							'&:hover, &:not(:hover)': {
								transition: 'background-color 300ms ease',
							},
						}}
					>
						<Navigation
							sx={{
								fontSize: theme.typography.body1,
								marginRight: theme.spacing(0.25),
								marginTop: theme.spacing(0.25),
							}}
						/>
						Top
					</ButtonBase>
				</Toolbar>
			</Box>
		</AppBar>
	);
}

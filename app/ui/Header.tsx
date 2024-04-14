'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { LocationOnOutlined } from '@mui/icons-material';
import {
	AppBar,
	Box,
	Button,
	ButtonBase,
	Collapse,
	List,
	ListItem,
	Paper,
	Toolbar,
	Typography,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

export default function Header() {
	const sections = ['Work', 'Skills', 'About', 'Contact'];

	// Create media query for small mobile viewports
	const theme = useTheme();
	const mobileVP = useMediaQuery(theme.breakpoints.down('sm'));

	// Trigger elevation effects, etc. when the user is scrolling
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<AppBar
			component={'header'}
			elevation={trigger ? 4 : 0}
			sx={{
				// Display border only when at the top of the page
				borderBottom: `${!trigger && `1px solid ${grey[200]}`}`,
				backdropFilter: 'blur(5px)',
				backgroundColor: 'transparent',
				position: 'sticky',
			}}
		>
			<Box maxWidth={'lg'} sx={{ width: '100%', marginX: 'auto' }}>
				<Toolbar
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<LocationWidget />

					{/* Render mobile nav for mobile viewports */}
					{mobileVP ? (
						<MobileNav sections={sections} theme={theme} />
					) : (
						<DefaultNav sections={sections} />
					)}
				</Toolbar>
			</Box>
		</AppBar>
	);
}

interface NavProps {
	sections: string[];
	theme?: any;
}

const DefaultNav = ({ sections }: NavProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
			}}
		>
			{sections.map(section => {
				return (
					<Button
						component={Link}
						href={`#${section.toLowerCase()}`}
						key={section}
						sx={{
							textDecoration: 'none',
							textTransform: 'initial',
						}}
						variant={'text'}
					>
						<Typography variant={'h6'}>{section}</Typography>
					</Button>
				);
			})}
		</Box>
	);
};

const MobileNav = ({ sections }: NavProps) => {
	const theme = useTheme();

	const [bgColor, setBGColor] = useState('transparent');
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
		setBGColor('#fff');
	};

	// Conceal the transition to a transparent background by using a delay
	const handleClose = () => {
		setOpen(false);

		setTimeout(() => {
			setBGColor('transparent');
		}, 200);
	};

	return (
		<Box
			sx={{
				height: '4rem',
				position: 'relative',
				width: '10rem',
			}}
		>
			<Paper
				// component={ButtonBase}
				elevation={open ? 1 : 0}
				onClick={open ? handleClose : handleOpen}
				sx={{
					alignItems: 'center',
					backgroundColor: `${bgColor}`,
					display: 'flex',
					flexDirection: 'column',
					marginTop: theme.spacing(2),
					paddingX: theme.spacing(1),
					position: 'absolute',
					right: 0,
				}}
			>
				<Typography variant={'h6'}>Jump to...</Typography>

				<Collapse in={open}>
					<List dense={true}>
						{sections.map(section => {
							return (
								<ListItem
									component={Link}
									href={`#${section.toLowerCase()}`}
									key={section}
								>
									<Typography variant={'subtitle1'}>
										{section}
									</Typography>
								</ListItem>
							);
						})}
					</List>
				</Collapse>
			</Paper>
		</Box>
	);
};

const LocationWidget = () => {
	const theme = useTheme();

	const myLocation = 'Connecticut';
	const myTimeZone = 'America/New_York';

	const [time, setTime] = useState(new Date());

	// Update time data every second
	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const LocationIcon = () => (
		<LocationOnOutlined
			sx={{
				fontSize: '1rem',
				marginRight: theme.spacing(0.5),
			}}
		/>
	);

	return (
		<Typography
			sx={{
				color: `${grey[600]}`,
			}}
			variant={'subtitle2'}
		>
			<Box sx={{ alignItems: 'end', display: 'flex' }}>
				<Box sx={{ color: 'transparent' }}>
					<LocationIcon />
				</Box>

				{time.toLocaleTimeString('en-US', {
					hour: 'numeric',
					hour12: true,
					minute: '2-digit',
					second: '2-digit',
					timeZone: `${myTimeZone}`,
				})}
			</Box>

			<Box sx={{ alignItems: 'center', display: 'flex' }}>
				<LocationIcon />
				{myLocation}
			</Box>
		</Typography>
	);
};

import { Box } from '@mui/material';
import Link from 'next/link';

import { AlternateEmail, Storage, Web } from '@mui/icons-material';

import {
	AWSIcon,
	BootstrapIcon,
	ExpressIcon,
	GitIcon,
	JSIcon,
	MarkdownIcon,
	MongoDBIcon,
	MUIIcon,
	NextIcon,
	NodeIcon,
	PostgresIcon,
	PrismaIcon,
	PythonIcon,
	ReactIcon,
	TailwindIcon,
	TSIcon,
} from '@/app/lib/icons';

export const projects = [
	{
		bannerText: 'Visit the live application',
		description:
			"Joy of Cooking's latest edition boasts thousands of recipes across 1,100 pages. My project implements those recipes in a large font, mobile-friendly web app that allows users to enjoy the content without a four pound tome in the kitchen.",
		features: [
			'All 2,591 recipes dynamically recreated to model the style of the original text',
			'Search keywords, browse by chapter, and store and retrieve recipe bookmarks in localStorage',
			'Interleaves server- and client-side components to query the database without HTTP requests',
		],
		href: '/recipes',
		title: 'Joy of Cooking recipes',
	},
	{
		bannerText: 'Visit the live application',
		description:
			"As the Joy of Cooking sister project, this program allows the user to upload the book's .epub file to be scanned. The app verifies the file's integrity, unzips it, and returns a JSON file with each recipe separated into its own object.",
		features: [
			"Includes all text, the full XHTML for styling, servings, and the physical text's page number scraped from the index",
			'Clean, straightforward drag and drop interface',
		],
		href: '/parser',
		title: 'Joy of Cooking recipe parser',
	},
	{
		bannerText: 'Coming soon!',
		description:
			'Every valid sudoku puzzle has ~1.2 trillion symmetries that reorder or relabel the numbers, but maintain the core puzzle "seed." My application provides a clean interface for generating and solving puzzles, as well as an API to apply any and all symmetric operations to your favorite puzzle seeds.',
		features: [
			'Generate endless symmetries using relabeling, rotation, and band, row, stack, or column swapping',
			"Incredibly efficient backtracking algorithm to quickly brute force Arto Inkala's hardest puzzles (and all their transpositions)",
		],
		href: '',
		title: 'Transpose sudoku',
	},

	{
		bannerText: 'In development',
		description: (
			<Box>
				I&apos;m developing a simple, professional-oriented canvas for sharing
				quick illustrations and thoughts better expressed on a visual medium.
				Existing apps offer a glut of features, but when all I need is a digital
				whiteboard, I want MS Paint, not Photoshop. I intend to emulate the
				design simplicity of Google&apos;s{' '}
				<Box
					component={Link}
					href={'https://www.autodraw.com/'}
					sx={{ textDecoration: 'none' }}
					target={'_blank'}
				>
					<Box component={'span'} sx={{ color: '#2563eb', fontWeight: 600 }}>
						AutoDraw
					</Box>
				</Box>{' '}
				canvas and implement real-time collaboration via WebSocket and WebRTC.
			</Box>
		),
		features: [],
		href: '',
		title: 'Collaborative canvas app',
	},
];

export const skills = [
	{
		href: 'https://aws.amazon.com',
		icon: <AWSIcon sx={{ marginTop: '0.25rem' }} />,
		name: 'AWS',
	},
	{
		href: 'https://getbootstrap.com',
		icon: <BootstrapIcon />,
		name: 'Bootstrap CSS',
	},
	{
		href: 'https://expressjs.com',
		icon: <ExpressIcon />,
		name: 'ExpressJS',
	},
	{
		href: 'https://git-scm.com',
		icon: <GitIcon sx={{ fontSize: '2rem', marginTop: '0.125rem' }} />,
		name: 'Git',
	},
	{
		href: 'https://tc39.es/ecma262',
		icon: <JSIcon />,
		name: 'JavaScript ES6+',
	},
	{
		href: 'https://jsdoc.app',
		icon: <AlternateEmail />,
		name: 'JSDoc',
	},
	{
		href: 'https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax',
		icon: <MarkdownIcon />,
		name: 'Markdown',
	},

	{
		href: 'https://mui.com/material-ui',
		icon: <MUIIcon sx={{ marginRight: '0.25rem' }} />,
		name: 'Material UI',
	},
	{
		href: 'https://www.mongodb.com',
		icon: <MongoDBIcon sx={{ marginRight: '-0.25rem' }} />,
		name: 'MongoDB',
	},
	{
		href: 'https://nextjs.org',
		icon: <NextIcon sx={{ fontSize: '2rem' }} />,
		name: 'NextJS',
	},
	{
		href: 'https://nodejs.org/en',
		icon: <NodeIcon sx={{ fontSize: '2rem', marginTop: '0.25rem' }} />,
		name: 'NodeJS',
	},
	{
		href: 'https://www.postgresql.org',
		icon: <PostgresIcon />,
		name: 'PostgreSQL',
	},
	{
		href: 'https://www.prisma.io/orm',
		icon: <PrismaIcon />,
		name: 'Prisma ORM',
	},
	{ href: 'https://www.python.org', icon: <PythonIcon />, name: 'Python' },
	{ href: 'https://react.dev', icon: <ReactIcon />, name: 'React' },
	{
		href: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components',
		icon: <Storage />,
		name: 'Server-side rendering',
	},
	{
		href: 'https://tailwindcss.com',
		icon: <TailwindIcon />,
		name: 'Tailwind CSS',
	},
	{
		href: 'https://www.typescriptlang.org',
		icon: <TSIcon />,
		name: 'TypeScript',
	},
	{
		href: 'https://developer.mozilla.org/en-US/docs/Web/API',
		icon: <Web />,
		name: 'Web APIs',
	},
];

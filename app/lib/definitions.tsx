import { AlternateEmail, Storage, Web } from '@mui/icons-material';

import {
	BootstrapIcon,
	GitIcon,
	JSIcon,
	MongoDBIcon,
	MUIIcon,
	NextIcon,
	NodeIcon,
	PostgresIcon,
	PrismaIcon,
	ReactIcon,
	TailwindIcon,
	TSIcon,
} from '@/app/lib/icons';

export const projects = [
	{
		description:
			"This project displays all of JoC's 2,591 recipes in an accessible, user-friendly, and responsive web application.",
		features: [
			'Custom hooks to store and retrieve recipe bookmarks in localStorage',
			'Interleaves server- and client-side components to retrieve data without HTTP requests',
		],
		title: 'Joy of Cooking recipe viewer',
	},
	{
		description: 'test test',
		features: ['thing1', 'thing2'],
		title: 'Joy of Cooking recipe parser',
	},
];

export const skills = [
	{
		href: 'https://getbootstrap.com',
		icon: <BootstrapIcon />,
		name: 'Bootstrap CSS',
	},
	{
		href: 'https://git-scm.com',
		icon: <GitIcon sx={{ fontSize: '2rem' }} />,
		name: 'Git',
	},
	{
		href: 'https://tc39.es/ecma262',
		icon: <JSIcon />,
		name: 'JavaScript ES6+',
	},
	{ href: 'https://jsdoc.app', icon: <AlternateEmail />, name: 'JSDoc' },
	{
		href: 'https://mui.com/material-ui',
		icon: <MUIIcon />,
		name: 'Material UI',
	},
	{
		href: 'https://www.mongodb.com',
		icon: <MongoDBIcon />,
		name: 'MongoDB',
	},
	{
		href: 'https://nextjs.org',
		icon: <NextIcon sx={{ fontSize: '2rem' }} />,
		name: 'NextJS',
	},
	{
		href: 'https://nodejs.org/en',
		icon: <NodeIcon sx={{ fontSize: '2rem' }} />,
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
	{ href: 'https://react.dev', icon: <ReactIcon />, name: 'React' },
	{
		href: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components',
		icon: <Storage />,
		name: 'SSR',
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

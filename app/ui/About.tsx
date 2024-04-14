import { Typography } from '@mui/material';

import { Section } from '@/app/ui/index';

export default function About() {
	return (
		<Section
			description={
				'We assist our clients in making a significant impact through well-informed, authentic digital identities and cutting-edge user experiences.'
			}
			id={'about'}
			title={'About me'}
		>
			<Typography variant={'body1'}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
				quasi sapiente aut alias reprehenderit error dolore porro saepe
				unde sint accusamus veniam quibusdam ab inventore qui dolorem
				harum totam vel ullam cumque, ad libero quas, adipisci quisquam.
				Optio laboriosam deserunt corporis deleniti similique nulla
				accusantium, quia temporibus dolores, molestiae eius.
			</Typography>
		</Section>
	);
}

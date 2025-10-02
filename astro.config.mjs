// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://lucas6rm.github.io/',
	integrations: [
		starlight({
            locales: {
                root: {
                    label: 'Français',
                    lang: 'fr-FR',
                },
            },
			title: 'Mon Activité Psy - Docs',
			social: [
                {
                icon: 'facebook', label: 'Facebook',
                href: 'https://github.com/withastro/starlight'
                },
                {
                    icon: 'linkedin', label: 'LinkedIn',
                    href: 'https://github.com/withastro/starlight'
                },
                {
                    icon: 'instagram', label: 'Instagram',
                    href: 'https://github.com/withastro/starlight'
                },
            ],
			sidebar: [
				{
					label: 'LEGAL',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Politique de confidentialite', slug: 'legal/privacies' },
					],
				},
			],
		}),
	],
});

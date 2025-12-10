// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://lucas6rm.github.io/',
    base: '/DocumentationMonActivitePsy/',
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
                href: 'https://lucas6rm.github.io/LandingPageMonActivitePsy/'
                },
                {
                    icon: 'linkedin', label: 'LinkedIn',
                    href: 'https://lucas6rm.github.io/LandingPageMonActivitePsy/'
                },
                {
                    icon: 'instagram', label: 'Instagram',
                    href: 'https://lucas6rm.github.io/LandingPageMonActivitePsy/'
                },
            ],
			sidebar: [
				{
					label: 'LEGAL',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Politique de confidentialite', slug: 'legal/privacies' },
                        { label: 'Conditions d\'utilisations', slug: 'legal/terms_of_use' },
					],
				},
			],
		}),
	],
});

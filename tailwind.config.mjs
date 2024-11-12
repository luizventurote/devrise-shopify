/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					largemobile: '400px',
					tablet: '400px',
					laptop: '400px',
					desktop: '400px',
					wide: '400px',
				},
			},
			fontFamily: {
				'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
				'serif': ['DM Serif Display', 'Helvetica', 'Arial', 'sans-serif'],
				'heading': ['DM Serif Display', 'Helvetica', 'Arial', 'sans-serif'],
			},
			colors: {
				background: '#000',
				primaryInner: '#000',
				secondary: '#ED1E7A',
				highlight: '#00FFA3',
				secondaryBackground: '#343434',
				border: '#2f2f2f',
				glass: '#1c1c1c',
				neutral: '#a1a1a1',
				primary: {
					400: '#FF539F',
					500: '#ED1E7A',
					600: '#810a3d',
				},
				onPrimary: {
					400: '#FFFFFF',
					500: '#FFFFFF',
					600: '#FFFFFF',
				},
				secondary: {
					400: '#717171',
					500: '#343434',
					600: '#202020',
				},
				onSecondary: {
					400: '#FFFFFF',
					500: '#FFFFFF',
					600: '#FFFFFF',
				},
				tertiary: {
					400: '#00FFA3',
					500: '#00FFA3',
					600: '#00FFA3',
				},
				onTertiary: {
					400: '#000000',
					500: '#000000',
					600: '#000000',
				},
				accent: {
					400: '#00FFA3',
					500: '#00FFA3',
					600: '#00FFA3',
				},
				onAccent: {
					400: '#000000',
					500: '#000000',
					600: '#000000',
				},
				alert: {
					success: '#AEE893',
					error: '#FF8383',
					warning: '#FFC658',
				},
				onAlert: {
					success: '#194600',
					error: '#460000',
					warning: '#522800',
				},
				base: {
					background: '#000000',
					surface: '#343434',
					border: '#717171',
				},
				onBase: {
					background: '#FFF',
					surface: '#FFF',
				},
				neutral: {
					dark: '#000000',
					light: '#FFFFFF',
				},
				onNeutral: {
					dark: '#FFFFFF',
					light: '#000000',
				}
			},
			screens: {
				'largemobile': '640px',
				'tablet': '768px',
				'laptop': '1024px',
				'desktop': '1280px',
				'wide': '1536px'
			},
		},
	},
	plugins: [],
}

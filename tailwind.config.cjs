/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                accent: 'var(--accent)',
                surface: 'var(--surface)',
                muted: 'var(--muted)'
            },
            fontFamily: {
                heading: ['var(--font-heading)'],
                body: ['var(--font-body)']
            }
        }
    },
    plugins: []
}

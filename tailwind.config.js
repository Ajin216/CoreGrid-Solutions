/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'ag-bg':      '#F5F4FF',
        'ag-bg-alt':  '#F0EFFE',
        'ag-surface': '#FFFFFF',
        'ag-violet':  '#7B61FF',
        'ag-teal':    '#00C4A7',
        'ag-text':    '#12102A',
        'ag-muted':   '#6B7199',
        'ag-glow':    '#A78BFF',
        'ag-border':  '#E8E6FF',
        'ag-footer':  '#F8F7FF',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: { tightest: '-0.03em' },
      boxShadow: {
        'card':      '0 8px 40px rgba(123,97,255,0.10), 0 2px 8px rgba(0,0,0,0.04)',
        'card-hover':'0 0 0 1.5px #7B61FF, 0 16px 60px rgba(123,97,255,0.18)',
        'btn':       '0 4px 24px rgba(123,97,255,0.30)',
        'btn-hover': '0 0 0 1.5px #7B61FF, 0 8px 40px rgba(123,97,255,0.40)',
      },
    },
  },
  plugins: [],
}

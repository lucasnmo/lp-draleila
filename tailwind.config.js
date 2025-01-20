module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Inclui todos os arquivos JS, TS, JSX, TSX, e MDX na pasta src
    "./src/public/assets/**/*.{js,ts,jsx,tsx,mdx}", // Inclui todos os arquivos nestes tipos na pasta assets
    "./src/public/fonts/**/*.{js,ts,jsx,tsx,mdx}", // Inclui todos os arquivos nestes tipos na pasta assets
    "./src/public/styles/**/*.{js,ts,jsx,tsx,mdx}", // Inclui todos os arquivos nestes tipos na pasta assets
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Inclui todos os arquivos nestes tipos na pasta components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Inclui todos os arquivos nestes tipos na pasta app
    "./src/service/**/*.{js,ts,jsx,tsx,mdx}", // Inclui todos os arquivos nestes tipos na pasta components
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],

      },
      colors: {
        'cinza-claro':'#fefefe',
        'dourado-claro':'#EDC87D',
        'zap':'#25D366',
        'rosa-claro':'#F4E3D9',
        'azul':'#00298f',
        'azul-claro':'#00298f',
        'azul-escuro':'#000066',
        'cinza-escuro':'#121212',
        'cinza-medio':'#2E2E2E',
        'branco-suave':'#F5F5F5'
      },
    },
  },
  plugins: [],
}

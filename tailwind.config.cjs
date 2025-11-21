module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    { pattern: /(bg|text|border)-(cyan|orange|purple)-(300|400|500|600)/ },
    { pattern: /(bg|border)-(cyan|orange|purple)-500\/(10|20|30|50)/ },
    { pattern: /bg-(cyan|orange|purple)-900\/(10|20|30)/ },
    { pattern: /text-(cyan|orange|purple)-300/ },
    { pattern: /shadow-(cyan|orange|purple)-500\/(20|25)/ },
    { pattern: /(from|to)-(cyan|orange|purple)-(400|500|600)/ },
    'hover:bg-cyan-500/10',
    'hover:bg-orange-500/10',
    'hover:bg-purple-500/10',
    'hover:from-cyan-500',
    'hover:from-orange-500',
    'hover:from-purple-500',
    'hover:to-cyan-400',
    'hover:to-orange-400',
    'hover:to-purple-400',
    'group-hover:text-cyan-400',
    'group-hover:text-orange-400',
    'group-hover:text-purple-400',
    'group-hover:border-cyan-500/50',
    'group-hover:border-orange-500/50',
    'group-hover:border-purple-500/50',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

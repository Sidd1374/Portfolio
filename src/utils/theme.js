export const createTheme = (color, rgb) => ({
    color,
    rgb,
    accent: `text-${color}-400`,
    accentLight: `text-${color}-300`,
    accentBg: `bg-${color}-500/10`,
    accentGlowBg: `bg-${color}-500/30`,
    mutedBg: `bg-${color}-900/10`,
    badgeBg: `bg-${color}-900/20`,
    badgeBgDark: `bg-${color}-900/30`,
    borderSoft: `border-${color}-500/20`,
    borderMedium: `border-${color}-500/30`,
    borderBold: `border-${color}-500/50`,
    borderSolid: `border-${color}-500`,
    gradient: `from-${color}-400 to-${color}-500`,
    gradientDeep: `from-${color}-600 to-${color}-400`,
    gradientText: `from-${color}-400 to-white`,
    gradientOverlay: `from-${color}-500/20`,
    viaLine: `via-${color}-500`,
    bgSolid: `bg-${color}-500`,
    hoverBg: `hover:bg-${color}-500/10`,
    hoverFrom: `hover:from-${color}-500`,
    hoverTo: `hover:to-${color}-400`,
    shadowStrong: `shadow-${color}-500/20`,
    shadowSoft: `shadow-${color}-500/25`,
    accentBright: `text-${color}-500`,
    groupHoverAccent: `group-hover:text-${color}-400`,
    groupHoverBorder: `group-hover:border-${color}-500/50`,
    glowShadow: `0 0 20px rgba(${rgb}, 0.55)`,
    progressShadow: `0 0 10px rgba(${rgb}, 0.8)`,
});

export const THEME = {
    builder: createTheme('cyan', '6, 182, 212'),
    leader: createTheme('orange', '249, 115, 22'),
    creator: createTheme('purple', '168, 85, 247'),
};

export const getTheme = (personaKey) => THEME[personaKey] || THEME.builder;

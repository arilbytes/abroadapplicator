// Single source of truth for brand themes. Each theme sets the same 8 CSS variables.
//   navy    sidebar / dark surfaces / headings      navy2  sidebar hover + active row
//   primary buttons, links, badges                  accent highlights (active marker, KPI top border, chart highlight)
//   bg      page background                         line   borders      mute  secondary text      tint  light highlight fill
// export const DEFAULT_THEME = 'jcg'

// export const THEMES = [
//   { id: 'jcg', name: 'JCG Classic', tagline: 'Default JCG brand',
//     vars: { navy: '#01033D', navy2: '#0B0E52', primary: '#FF1C1C', accent: '#FF1C1C', bg: '#F5F6FA', line: '#E3E5EF', mute: '#5B5E7A', tint: '#FFECEC' } },
//   { id: 'executive', name: 'Executive Navy + Champagne Gold', tagline: 'Premium & formal',
//     vars: { navy: '#101F38', navy2: '#1B2E4F', primary: '#1D3557', accent: '#D6B66E', bg: '#F5F3EE', line: '#E4E0D6', mute: '#5F6672', tint: '#F6EFD9' } },
//   { id: 'cyan', name: 'Midnight Blue + Electric Cyan', tagline: 'Modern SaaS',
//     vars: { navy: '#111827', navy2: '#1E293B', primary: '#1E293B', accent: '#22D3EE', bg: '#F1F5F9', line: '#E2E8F0', mute: '#64748B', tint: '#D9F7FC' } },
//   { id: 'emerald', name: 'Deep Emerald + Warm Gold', tagline: 'Trust & growth',
//     vars: { navy: '#123C35', navy2: '#1A4A41', primary: '#20594D', accent: '#D6B66E', bg: '#F4F6F2', line: '#DDE3DB', mute: '#5B6B66', tint: '#F6EFD9' } },
//   { id: 'periwinkle', name: 'Royal Blue + Soft Periwinkle', tagline: 'Professional & approachable',
//     vars: { navy: '#172554', navy2: '#21357A', primary: '#3156A3', accent: '#A5B4FC', bg: '#F1F5FF', line: '#DCE3F5', mute: '#5C6794', tint: '#E3E7FF' } },
//   { id: 'burgundy', name: 'Charcoal + Burgundy + Silver', tagline: 'Distinctive & corporate',
//     vars: { navy: '#24252B', navy2: '#34353D', primary: '#702D40', accent: '#D9A6AF', bg: '#F2F1F0', line: '#E3E1DF', mute: '#6B6670', tint: '#F6E4E7' } },
//   { id: 'samsung', name: 'Samsung Blue + Pure White', tagline: 'Bold & clean',
//     vars: { navy: '#1428A0', navy2: '#1F38B8', primary: '#2563EB', accent: '#93C5FD', bg: '#F3F6FC', line: '#DCE4F5', mute: '#5A6788', tint: '#E0EBFF' } },
//   { id: 'indigo', name: 'Indigo + Soft Pink + White', tagline: 'Creative & friendly',
//     vars: { navy: '#292B72', navy2: '#36388A', primary: '#6366F1', accent: '#F0ABFC', bg: '#F5F3FF', line: '#E4E0F7', mute: '#6B6890', tint: '#FBE8FF' } },
//   { id: 'azure', name: 'Deep Navy + Vibrant Azure', tagline: 'Sharp & modern',
//     vars: { navy: '#0B1739', navy2: '#16264F', primary: '#1D4ED8', accent: '#3B82F6', bg: '#F8FAFC', line: '#E2E8F0', mute: '#5F6B85', tint: '#DBEAFE' } },
// ]


export const DEFAULT_THEME = 'jcg'

export const THEMES = [
  // 1. JCG CLASSIC
  {
    id: 'jcg',
    name: 'JCG Classic',
    tagline: 'Default JCG brand',
    // vars: {
    //   navy: '#01033D',
    //   navy2: '#0B0E52',
    //   primary: '#FF1C1C',
    //   accent: '#FF1C1C',
    //   bg: '#F5F6FA',
    //   line: '#E3E5EF',
    //   mute: '#5B5E7A',
    //   tint: '#FFECEC'
    // }
    vars : {
      navy: '#0B1739',
      navy2: '#16264F',
      primary: '#1D4ED8',
      accent: '#3B82F6',
      bg: '#F8FAFC',
      line: '#E2E8F0',
      mute: '#5F6B85',
      tint: '#DBEAFE'
    }
  },

  // 2. EXECUTIVE NAVY + CHAMPAGNE GOLD
  {
    id: 'executive',
    name: 'Executive Navy + Champagne Gold',
    tagline: 'Premium & formal',
    vars: {
      navy: '#101F38',
      navy2: '#1B2E4F',
      primary: '#1D3557',
      accent: '#D6B66E',
      bg: '#F5F3EE',
      line: '#E4E0D6',
      mute: '#5F6672',
      tint: '#F6EFD9'
    }
  },

  // 3. MIDNIGHT BLUE + ELECTRIC CYAN
  {
    id: 'cyan',
    name: 'Midnight Blue + Electric Cyan',
    tagline: 'Modern SaaS',
    vars: {
      navy: '#111827',
      navy2: '#1E293B',
      primary: '#1E293B',
      accent: '#22D3EE',
      bg: '#F1F5F9',
      line: '#E2E8F0',
      mute: '#64748B',
      tint: '#D9F7FC'
    }
  },

  // 4. DEEP EMERALD + WARM GOLD
  {
    id: 'emerald',
    name: 'Deep Emerald + Warm Gold',
    tagline: 'Trust & growth',
    vars: {
      navy: '#123C35',
      navy2: '#1A4A41',
      primary: '#20594D',
      accent: '#D6B66E',
      bg: '#F4F6F2',
      line: '#DDE3DB',
      mute: '#5B6B66',
      tint: '#F6EFD9'
    }
  },

  // 5. ROYAL BLUE + SOFT PERIWINKLE
  {
    id: 'periwinkle',
    name: 'Royal Blue + Soft Periwinkle',
    tagline: 'Professional & approachable',
    vars: {
      navy: '#172554',
      navy2: '#21357A',
      primary: '#3156A3',
      accent: '#A5B4FC',
      bg: '#F1F5FF',
      line: '#DCE3F5',
      mute: '#5C6794',
      tint: '#E3E7FF'
    }
  },

  // 6. CHARCOAL + BURGUNDY + SILVER
  {
    id: 'burgundy',
    name: 'Charcoal + Burgundy + Silver',
    tagline: 'Distinctive & corporate',
    vars: {
      navy: '#24252B',
      navy2: '#34353D',
      primary: '#702D40',
      accent: '#D9A6AF',
      bg: '#F2F1F0',
      line: '#E3E1DF',
      mute: '#6B6670',
      tint: '#F6E4E7'
    }
  },

  // 7. SAMSUNG BLUE + PURE WHITE
  {
    id: 'samsung',
    name: 'Samsung Blue + Pure White',
    tagline: 'Bold & clean',
    vars: {
      navy: '#1428A0',
      navy2: '#1F38B8',
      primary: '#2563EB',
      accent: '#93C5FD',
      bg: '#F3F6FC',
      line: '#DCE4F5',
      mute: '#5A6788',
      tint: '#E0EBFF'
    }
  },

  // 8. INDIGO + SOFT PINK + WHITE
  {
    id: 'indigo',
    name: 'Indigo + Soft Pink + White',
    tagline: 'Creative & friendly',
    vars: {
      navy: '#292B72',
      navy2: '#36388A',
      primary: '#6366F1',
      accent: '#F0ABFC',
      bg: '#F5F3FF',
      line: '#E4E0F7',
      mute: '#6B6890',
      tint: '#FBE8FF'
    }
  },

  // 9. DEEP NAVY + VIBRANT AZURE
  {
    id: 'azure',
    name: 'Deep Navy + Vibrant Azure',
    tagline: 'Sharp & modern',
    vars: {
      navy: '#0B1739',
      navy2: '#16264F',
      primary: '#1D4ED8',
      accent: '#3B82F6',
      bg: '#F8FAFC',
      line: '#E2E8F0',
      mute: '#5F6B85',
      tint: '#DBEAFE'
    }
  },

  // 10. IMPERIAL TEAL + JADE GOLD
  {
    id: 'imperial-teal',
    name: 'Imperial Teal + Jade Gold',
    tagline: 'Premium authority & trust',
    vars: {
      navy: '#073B3A',
      navy2: '#0B5550',
      primary: '#147D70',
      accent: '#D4AF67',
      bg: '#F3F7F4',
      line: '#DCE7E0',
      mute: '#60746B',
      tint: '#E0F0E9'
    }
  },

  // 11. MIDNIGHT COBALT + PLATINUM
  {
    id: 'midnight-cobalt',
    name: 'Midnight Cobalt + Platinum',
    tagline: 'Institutional & confident',
    vars: {
      navy: '#101B3F',
      navy2: '#172B65',
      primary: '#2855C5',
      accent: '#A9C7F5',
      bg: '#F4F7FC',
      line: '#DFE6F1',
      mute: '#65728C',
      tint: '#E3ECFC'
    }
  },

  // 12. ROYAL INDIGO + CHAMPAGNE
  {
    id: 'royal-indigo',
    name: 'Royal Indigo + Champagne',
    tagline: 'Prestige & exclusivity',
    vars: {
      navy: '#211D54',
      navy2: '#302A79',
      primary: '#5145B8',
      accent: '#D9BD83',
      bg: '#F6F4F8',
      line: '#E5E0EF',
      mute: '#6D6988',
      tint: '#EBE8F8'
    }
  },

  // 13. EMERALD SOVEREIGN + MINT
  {
    id: 'emerald-sovereign',
    name: 'Emerald Sovereign + Mint',
    tagline: 'Growth & security',
    vars: {
      navy: '#103D35',
      navy2: '#15594B',
      primary: '#27816B',
      accent: '#9BD6BC',
      bg: '#F2F7F3',
      line: '#DCE8DF',
      mute: '#62756A',
      tint: '#E1F1E6'
    }
  },

  // 14. ATLANTIC NAVY + COPPER
  {
    id: 'atlantic',
    name: 'Atlantic Navy + Copper',
    tagline: 'Executive & established',
    vars: {
      navy: '#10243D',
      navy2: '#183B61',
      primary: '#28618C',
      accent: '#C77B48',
      bg: '#F5F3EF',
      line: '#E3E0D8',
      mute: '#66717E',
      tint: '#F5E9DE'
    }
  },

  // 15. BURGUNDY ROYALE + ROSE GOLD
  {
    id: 'burgundy-royale',
    name: 'Burgundy Royale + Rose Gold',
    tagline: 'Prestige & distinction',
    vars: {
      navy: '#351727',
      navy2: '#55243D',
      primary: '#843653',
      accent: '#D6A0A7',
      bg: '#FAF4F3',
      line: '#EBDDDD',
      mute: '#79656D',
      tint: '#F6E5E8'
    }
  },

  // 16. SAPPHIRE + ARCTIC BLUE
  {
    id: 'sapphire-arctic',
    name: 'Sapphire + Arctic Blue',
    tagline: 'Modern & transparent',
    vars: {
      navy: '#10265C',
      navy2: '#193C91',
      primary: '#2874DC',
      accent: '#68C5F1',
      bg: '#F3F8FF',
      line: '#DCE7F5',
      mute: '#63728D',
      tint: '#E1EEFF'
    }
  },

  // 17. OBSIDIAN + VIBRANT FERN
  {
    id: 'obsidian-fern',
    name: 'Obsidian + Vibrant Fern',
    tagline: 'Bold & contemporary',
    vars: {
      navy: '#202A2B',
      navy2: '#293B38',
      primary: '#34765B',
      accent: '#A7D66D',
      bg: '#F4F7F1',
      line: '#DEE6D9',
      mute: '#68756B',
      tint: '#E7F0DD'
    }
  },

  // 18. IMPERIAL INDIGO + ELECTRIC VIOLET
  {
    id: 'imperial-violet',
    name: 'Imperial Indigo + Electric Violet',
    tagline: 'Innovation & premium technology',
    vars: {
      navy: '#191B4B',
      navy2: '#292D78',
      primary: '#635BDB',
      accent: '#B9A9FF',
      bg: '#F5F3FF',
      line: '#E4E0F5',
      mute: '#6B6992',
      tint: '#EAE6FF'
    }
  },

  // 19. GLOBAL NAVY + TURQUOISE
  {
    id: 'global-turquoise',
    name: 'Global Navy + Turquoise',
    tagline: 'International & dependable',
    vars: {
      navy: '#0C1F3F',
      navy2: '#17365E',
      primary: '#087F8C',
      accent: '#48C5C2',
      bg: '#F2F7F8',
      line: '#DCE8EA',
      mute: '#61747C',
      tint: '#DDF2F1'
    }
  }
]

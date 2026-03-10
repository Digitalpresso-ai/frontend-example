export const shadows = {
  '2xs': {
    offsetX: 0,
    offsetY: 1,
    blurRadius: 0,
    spreadRadius: 0,
    color: 'rgba(0, 0, 0, 0.05)',
  },
  xs: {
    offsetX: 0,
    offsetY: 1,
    blurRadius: 2,
    spreadRadius: 0,
    color: 'rgba(0, 0, 0, 0.05)',
  },
  sm: {
    offsetX: 0,
    offsetY: 1,
    blurRadius: 3,
    spreadRadius: 0,
    color: 'rgba(0, 0, 0, 0.1)',
  },
  md: {
    offsetX: 0,
    offsetY: 4,
    blurRadius: 6,
    spreadRadius: -1,
    color: 'rgba(0, 0, 0, 0.1)',
  },
  lg: {
    offsetX: 0,
    offsetY: 10,
    blurRadius: 15,
    spreadRadius: -3,
    color: 'rgba(0, 0, 0, 0.1)',
  },
  xl: {
    offsetX: 0,
    offsetY: 20,
    blurRadius: 25,
    spreadRadius: -5,
    color: 'rgba(0, 0, 0, 0.1)',
  },
  '2xl': {
    offsetX: 0,
    offsetY: 25,
    blurRadius: 50,
    spreadRadius: -12,
    color: 'rgba(0, 0, 0, 0.25)',
  },
} as const

export const insetShadows = {
  '2xs': {
    offsetX: 0,
    offsetY: 1,
    blurRadius: 0,
    spreadRadius: 0,
    color: 'rgba(0, 0, 0, 0.05)',
    inset: true,
  },
  xs: {
    offsetX: 0,
    offsetY: 1,
    blurRadius: 2,
    spreadRadius: 0,
    color: 'rgba(0, 0, 0, 0.05)',
    inset: true,
  },
  sm: {
    offsetX: 0,
    offsetY: 2,
    blurRadius: 4,
    spreadRadius: 0,
    color: 'rgba(0, 0, 0, 0.05)',
    inset: true,
  },
} as const

export type Shadows = typeof shadows
export type InsetShadows = typeof insetShadows

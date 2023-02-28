export interface ColorsDataDS {
  variable: string;
  hex: string;
}

export const WarningColors: ColorsDataDS[] = [
  {
    variable: '$color-warning-400',
    hex: '#ff5b24',
  },
];
export const NeutralColors: ColorsDataDS[] = [
  {
    variable: '$color-neutral-100',
    hex: '#d0d3dd',
  },
  {
    variable: '$color-neutral-200',
    hex: '#b0b5c4',
  },
  {
    variable: '$color-neutral-900',
    hex: '#252a37',
  },
];
export const SecondaryColors: ColorsDataDS[] = [
  {
    variable: '$color-secondary-25',
    hex: '#fffef5',
  },
  {
    variable: '$color-secondary-100',
    hex: '#fff9a8',
  },
  {
    variable: '$color-secondary-400',
    hex: '#fff01a',
  },
  {
    variable: '$color-secondary-500',
    hex: '#fae900',
  },
  {
    variable: '$color-secondary-600',
    hex: '#e5d600',
  },
  {
    variable: '$color-secondary-800',
    hex: '#ccbe00',
  },
];

export const PrimaryColors: ColorsDataDS[] = [
  {
    variable: '$color-primary-50',
    hex: '#cce3ff',
  },
  {
    variable: '$color-primary-400',
    hex: ' #1a81ff',
  },
  {
    variable: '$color-primary-600',
    hex: '#005ccc',
  },
  {
    variable: '$color-primary-700',
    hex: '#0053b8',
  },
  {
    variable: '$color-primary-800',
    hex: '#0049a3',
  },
  {
    variable: '$color-primary-900',
    hex: '#00377a',
  },
];

export const ColorsCSSeColors = `// Primary Color
$color-primary-50: #cce3ff;
$color-primary-400: #1a81ff;
$color-primary-600: #005ccc;
$color-primary-700: #0053b8;
$color-primary-800: #0049a3;
$color-primary-900: #00377a;

// Secondary Color
$color-secondary-25: #fffef5;
$color-secondary-100: #fff9a8;
$color-secondary-400: #fff01a;
$color-secondary-500: #fae900;
$color-secondary-600: #e5d600;
$color-secondary-800: #ccbe00;

// Warning Color
$color-warning-400: #ff5b24;

// neutral Color
$color-neutral-100: #d0d3dd;
$color-neutral-200: #b0b5c4;
$color-neutral-900: #252a37;`;

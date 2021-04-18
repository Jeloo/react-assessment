export const ColorType = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
};

export const Size = {
  x05: 'x05',
  x1: 'x1',
  x2: 'x2',
  x3: 'x3',
};

export const palette = {
  text: {
    [ColorType.primary]: '#353839',
    [ColorType.secondary]: '#0c5d8f',
    [ColorType.danger]: '#a1535e',
    buttonSecondary: '#0c5d8f',
  },
  background: {
    [ColorType.primary]: '#fff',
    buttonPrimary: '#dcf4ff',
    buttonSecondary: '#fff',
    buttonDanger: '#a1535e',
  },
  border: {
    [ColorType.primary]: '#0c5d8f',
    [ColorType.secondary]: '#fff',
    [ColorType.danger]: '#a1535e',
  },
};

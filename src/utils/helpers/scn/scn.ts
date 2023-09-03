type ScnFn = (baseClassName: string, boolClassName?: { [key: string]: boolean }) => string;

export const scn: ScnFn = (baseClassName, additionalClassNames) => {
  if (!additionalClassNames) return baseClassName;

  let boolStyle = '';

  if (additionalClassNames) {
    Object.keys(additionalClassNames).forEach((key) => {
      if (additionalClassNames[key]) boolStyle += ` ${key}`;
    });
  }

  return baseClassName + boolStyle;
};

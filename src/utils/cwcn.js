function toVal(mix) {
  if (typeof mix === 'string') return mix;
  if (typeof mix === 'boolean') return '';
  if (Array.isArray(mix)) return mix.map(toVal).filter(Boolean).join(' ');
  return Object.keys(mix).filter((key) => mix[key]).join(' ');
}

/**
   * @example cn(active && 'text-red500', 'font-bold', red || 'text-5xl')
   * @param args
   * @returns {String}
   */
export function cn(...args) {
  const data = args.reduce((str, curr) => {
    if (curr && typeof curr === 'string') return str + (str ? ' ' : '') + curr;
    return str;
  }, '');
  return data;
}

/**
   * @example cnAny(active && 'text-red500', 'font-bold', red || 'text-5xl')
   * @example cnAny([active && 'text-red500', 'font-bold', red || 'text-5xl'])
   * @example cnAny({'text-red500':active}, {'font-bold': active})
   * @param args
   * @returns {string}
   */
export function cnPro(...args) {
  const data = args.reduce((str, curr) => {
    const x = toVal(curr);
    return str + (str ? ' ' : '') + x;
  }, '');
  return data;
}

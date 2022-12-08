import { formatCurrency, valueFormat } from '../utils/formatCurrency';

describe('formatCurrency', () => {
  it('should return a currency value', () => {
    expect(formatCurrency('0')).toContain('0.00');
    expect(formatCurrency('10000')).toContain('100.00');
    expect(formatCurrency('100.40')).toContain('100.40');
    expect(formatCurrency('3400.40')).toContain('3,400.40');
    expect(formatCurrency('340000')).toContain('3,400.00');
  });

  it('should handle invalide values', () => {
    expect(formatCurrency('aaa')).toContain('0.00');
    expect(formatCurrency('')).toContain('0.00');
    expect(formatCurrency('100.40aa')).toContain('100.40');
  });
});

describe('valueFormat', () => {
  it('should format a number value into currency', () => {
    expect(valueFormat(0)).toContain('0.00');
    expect(valueFormat(100)).toContain('100.00');

    expect(valueFormat(100.4)).toContain('100.40');
    expect(valueFormat(3400.4)).toContain('3,400.40');
  });
});

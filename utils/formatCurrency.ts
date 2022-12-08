export const formatCurrency = (value: string) => {
  const cleanValue = value.replace(/\D/g, '');
  if (!cleanValue) return '0.00';
  const valueAsFloat = parseFloat(cleanValue) / 100;
  const result = valueFormat(valueAsFloat);

  return result;
};

export const valueFormat = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

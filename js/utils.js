export const formatCurrency = (value) => {
  return value.toFixed(2);
};

export const validateInput = (description, amount) => {
  if (!description.trim()) return false;
  if (isNaN(amount) || amount <= 0) return false;
  return true;
};

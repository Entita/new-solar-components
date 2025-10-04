export function formatPhone(value: string | number | undefined) {
  const str = String(value ?? '');
  return str.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
}

export function formatZip(value: string | number | undefined) {
  const str = String(value ?? '').replace(/\s/g, '');
  return str.replace(/^(\d{3})(\d{0,2})$/, '$1 $2').trim();
}
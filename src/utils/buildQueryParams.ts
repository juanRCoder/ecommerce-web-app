export const buildQueryParams = (
  params: Record<string, string | number | null | undefined>
) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    searchParams.set(key, String(value));
  }

  return searchParams.toString();
};
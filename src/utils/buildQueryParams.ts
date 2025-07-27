export const buildQueryParams = (
  params: Record<string, string | string[] | number | null | undefined>
) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;

    if (Array.isArray(value)) searchParams.set(key, value.join(",")); // for categories
    else searchParams.set(key, String(value));
  }

  return searchParams.toString();
};

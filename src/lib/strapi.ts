interface Props {
  endpoint: string;
  query?: string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from (e.g., "hero-section")
 * @param query - Optional query string for filtering/population
 * @returns The fetched data
 */
export async function fetchApi<T>({ endpoint, query }: Props): Promise<T> {
  const strapUrl = import.meta.env.STRAPI_URL || 'http://127.0.0.1:1337';
  const strapiToken = import.meta.env.STRAPI_TOKEN;

  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(`/api/${endpoint}${query ? `?${query}` : ''}`, strapUrl);

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${strapiToken}`,
    },
  });

  const { data } = await res.json();
  return data;
}

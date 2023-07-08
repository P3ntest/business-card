export async function fetchCockpit(endpoint: string) {
  const response = await fetch(`${import.meta.env.COCKPIT_URL}/api${endpoint}`);
  const data = await response.json();

  return data;
}

export function cockpitImage(path: string | any) {
  if (path.path) path = path.path;

  return `${import.meta.env.COCKPIT_URL}/storage/uploads${path}`;
}

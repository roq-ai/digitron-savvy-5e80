const mapping: Record<string, string> = {
  clients: 'client',
  feedbacks: 'feedback',
  interactions: 'interaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

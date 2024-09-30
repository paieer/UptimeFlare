const pageConfig = {
  title: "Clouds Status Page",
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'mailto:paieer@gmail.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  // passwordProtection: 'username:password',
  monitors: [
    {
      id: 'ss_monitor',
      name: 'My SS Monitor',
      method: 'GET',
      target: 'https://ss.yunt.in',
      checkLocationWorkerRoute: 'https://us.letspeed.net',
    },

  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }

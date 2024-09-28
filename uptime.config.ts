const pageConfig = {
  // Title for your status page
  title: "Cloud Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  passwordProtection: 'username:password',
  monitors: [
    {
      id: 'foo_monitor',
      name: 'My API Monitor',
      method: 'GET',
      target: 'https://www.google.com'
    },
    {
      id: 'test_tcp_monitor',
      name: 'Example TCP Monitor',
      method: 'TCP_PING',
      target: '1.2.3.4:22'
    },
    // You can continue to define more monitors here...
  ],
  notification: {
    //...
  },
  callbacks: {
    //...
  },
}


// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }

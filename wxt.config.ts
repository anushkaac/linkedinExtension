
import { defineConfig } from 'wxt'

export default defineConfig({
  manifest: {
    name: 'LinkedIn Connector',
    description: 'Automate LinkedIn connection requests',
    version: '1.0.0',
    permissions: ['activeTab'],
    host_permissions: ['https://www.linkedin.com/*']
  }
})

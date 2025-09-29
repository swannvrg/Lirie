// Mock data for the under construction page
export const mockSiteData = {
  siteName: 'LIRIE',
  tagline: 'Ingénierie de la construction',
  mainMessage: {
    title: 'Notre site web est en construction',
    subtitle: 'Nous préparons quelque chose de solide pour vous !'
  },
  contact: {
    email: 'g.collette@lirie.fr',
    phone: '06.63.02.29.22'
  },
  colors: {
    primary: '#B86A5B',    // Terracotta
    secondary: '#052633',  // Dark blue
    background: '#D9D9D9'  // Light gray
  },
  progressPercent: 85,
  launchStatus: 'Lancement prévu bientôt'
};

// Mock animation settings
export const mockAnimations = {
  constructionElements: [
    { type: 'hammer', duration: '2s', delay: '0s' },
    { type: 'helmet', duration: '3s', delay: '1s' },
    { type: 'crane', duration: '20s', delay: '0s' },
    { type: 'tools', duration: '4s', delay: '2s' }
  ],
  progressBar: {
    animationDuration: '4s',
    maxProgress: 85
  }
};
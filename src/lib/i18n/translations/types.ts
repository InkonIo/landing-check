export type Locale = 'ru' | 'kz' | 'en'

export type TranslationSchema = {
  header: {
    openMenu: string
  }
  nav: {
    platformDevelopment: string
    statusFeatures: string
    ratingSystem: string
    contacts: string
  }
  legal: {
    privacy: string
    agreement: string
    requisites: string
  }
  hero: {
  title: string
  description: string[]
  downloadIn: string
  availableIn: string
}
  about: {
    title: string
    mission: { title: string; text: string }
    values: { title: string; text: string }
  }
  benefits: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  features: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  pricing: {
    title: string
    subtitle: string
    table: {
      status: string
      price: string
      evaluations: string
      rating: string
    }
    statuses: { name: string; price: string; rating: string; evaluations: string }[]
    additionalInfo: { title: string; description: string }[]
  }
  security: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  footer: {
    description: string
    navigation: string
    documents: string
    contacts: string
    copyright: string
  }
  requisites: {
    title: string
    beneficiary: string
    bin: string
    account: string
    bank: string
    bik: string
    kbe: string
  }
}
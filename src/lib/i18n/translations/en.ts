import type { TranslationSchema } from './types'

export const en: TranslationSchema = {
  header: { openMenu: 'Open menu' },
  nav: {
    platformDevelopment: 'Platform Development',
    statusFeatures: 'Statuses & Features',
    ratingSystem: 'Rating System',
    contacts: 'Contacts',
  },
  legal: {
    privacy: 'Privacy Policy',
    agreement: 'Terms of Service',
    requisites: 'Company Requisites',
  },
  hero: {
  title: 'Persona 1.0',
  description: [
    'A worldwide database of people in the form of user profiles and their interactions. Profile data is filled in according to the participant\'s wishes and self-positioning.',
  ],
  downloadIn: 'Download on the',
  availableIn: 'Get it on',
},
  about: {
    title: 'About the Platform',
    mission: {
      title: 'Our Mission',
      text: 'To create a safe and inspiring space where every person can grow, share experiences, and find support among like-minded people.',
    },
    values: {
      title: 'Our Values',
      text: 'We believe in the uniqueness of each individual and build a platform where everyone can be themselves, grow, and inspire others.',
    },
  },
  benefits: {
    title: 'Platform Development',
    subtitle: 'The platform is designed for personal growth and building trustworthy relationships',
    items: [
      {
        title: 'Personal Growth',
        description: 'As a participant develops as a person — and most importantly, as their mindset and thinking shift to support mental and material progress — new levels for further growth become available.',
      },
      {
        title: 'Trust System',
        description: 'A new level is an honest degree of trust, thanks to the personal rating system. A new environment and the search for like-minded people pushes participants to develop and strive for higher achievements.',
      },
      {
        title: 'Status System',
        description: 'The app will feature 5 personal statuses, assigned to participants upon meeting conditions in their profile. Most importantly, on a voluntary basis.',
      },
    ],
  },
  features: {
    title: 'Key Features',
    subtitle: 'The platform provides extensive capabilities for search and interaction',
    items: [
      {
        title: 'Profile Search',
        description: 'Search for specific people\'s profiles by keywords using filters configured for each category',
      },
      {
        title: 'Search Categories',
        description: 'Country, city, name, profession, hobbies, work experience, and other parameters for precise search',
      },
      {
        title: 'Rating System',
        description: 'Automatic evaluation system for generating and maintaining personal ratings for participants',
      },
    ],
  },
  pricing: {
    title: 'Statuses & Features',
    subtitle: 'First year free for all users. Access to higher levels depends on rating and number of evaluations',
    table: {
      status: 'Status',
      price: 'Subscription Fee',
      evaluations: 'Number of Evaluations',
      rating: 'Rating',
    },
    statuses: [
      { name: 'Beginner', price: '10,000₸ / year', rating: 'actual', evaluations: '0 - 300' },
      { name: 'Amateur', price: '50,000₸ / year', rating: '80-85%', evaluations: '501 - 1,000' },
      { name: 'Master', price: '250,000₸ / year', rating: '85-90%', evaluations: '1,001 - 5,000' },
      { name: 'Pro', price: '1,500,000₸ / year', rating: '90-95%', evaluations: '5,001-10,000' },
      { name: 'Patron', price: '5,000,000₸ / year', rating: 'Above 95%', evaluations: 'Above 10,001' },
    ],
    additionalInfo: [
      {
        title: 'First Year Free',
        description: 'Free for all users until January 1, 2027. After that, access to higher levels depends on rating and number of evaluations',
      },
      {
        title: 'Autonomous Funds',
        description: 'Each fund will exist and operate autonomously from other funds',
      },
      {
        title: 'Fund Allocation',
        description: 'One of the key directions in addressing modern society\'s problems will be investing in the development of flora and fauna and solving ecological issues',
      },
      {
        title: 'Transparency',
        description: 'All investment and charitable projects and current information will be covered on social media',
      },
    ],
  },
  security: {
    title: 'Rating & Development System',
    subtitle: 'Every person is the author of their own life. Grow, improve your rating, and unlock new opportunities',
    items: [
      {
        title: 'Rating System',
        description: 'The automatic evaluation system builds a personal rating based on a participant\'s activity and contribution to the community. The higher your rating, the more trust and opportunities open up for you.',
      },
      {
        title: 'Personal Growth',
        description: 'As participants develop as individuals and shift their mindset to support mental and material progress, new levels for further growth become available.',
      },
      {
        title: 'Status System',
        description: 'The app features 5 personal statuses, assigned based on a participant\'s achievements and contributions to the community. Transitions between statuses happen on a voluntary basis.',
      },
      {
        title: 'Global Community',
        description: 'The platform unites people from around the world, creating a unique space for sharing experiences, knowledge, and opportunities. Every participant can contribute to the community\'s growth.',
      },
    ],
  },
  footer: {
    description: 'A platform for personal development and self-expression',
    navigation: 'Navigation',
    documents: 'Documents',
    contacts: 'Contacts',
    copyright: 'All rights reserved.',
  },
  requisites: {
    title: 'Company Requisites',
    beneficiary: 'Beneficiary',
    bin: 'IIN/BIN',
    account: 'Account Number',
    bank: 'Bank Name',
    bik: 'BIC',
    kbe: 'Recipient KBE',
  },
}
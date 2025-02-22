// Return tracking data in format
// [ 'trackEvent', 'Category', 'Action', 'Name', 'Value' ]

export const trackingInteraction = ['trackEvent', 'Misc', 'Clicked somewhere']

export const trackingIframe = (url: string) => [
  'trackEvent',
  'Misc',
  'Iframe visit',
  url,
]

export const trackingLocale = (locale: string) => [
  'trackEvent',
  'Misc',
  'Language',
  locale,
]
export const trackingRegion = (region: string) => [
  'trackEvent',
  'Misc',
  'Region',
  region,
]

export const trackingDownloadRavijenChart = [
  'trackEvent',
  'Misc',
  'Download Ravijen chart',
]

export const trackingClickRegionBanner = [
  'trackEvent',
  'Misc',
  'Click Region Banner',
]

export const trackingSplitTesting = (branch: string) => [
  'trackEvent',
  'Misc',
  'Split testing',
  branch,
]

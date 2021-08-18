import { FluentBundle, FluentResource } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'

import enResources from '../locales/en.ftl'
import ukResources from '../locales/uk.ftl'

// Create bundles
const enBundle = new FluentBundle('en')
const ukBundle = new FluentBundle('uk')

// Add global resources
enBundle.addResource(new FluentResource(enResources))
ukBundle.addResource(new FluentResource(ukResources))

// Create Vue plugin and set default locales
export const fluent = createFluentVue({
  bundles: [enBundle]
})

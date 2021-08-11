import { FluentBundle, FluentResource } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'

// Create bundles
const enBundle = new FluentBundle('en')
const ukBundle = new FluentBundle('uk')

// Add global resources
enBundle.addResource(new FluentResource('hello-user = Hello, {$username}!'))
ukBundle.addResource(new FluentResource('hello-user = Привіт, {$username}!'))

// Create Vue plugin and set default locales
export const fluent = createFluentVue({
  bundles: [enBundle]
})

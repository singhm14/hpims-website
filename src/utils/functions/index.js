import React from 'react'

export const getSlug = (tag) => {
  if (tag) {
    tag = tag.replace(/^\s+|\s+$/g, '')
    tag = tag.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaeeeeiiiioooouuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
      tag = tag.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    tag = tag
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes
  }

  return tag
}

export const unSlug = (slug) => {
  if (slug) {
    slug = slug.replace(/-/gi, ' ')
    slug = capitalize(slug)
  }

  return slug
}

export const useToggle = (initialValue = false) => {
  const [value, setValue] = React.useState(initialValue)
  const toggle = React.useCallback(() => {
    setValue((v) => !v)
  }, [])
  return [value, toggle]
}

export const capitalize = (string) => {
  string = string.split(' ')

  for (var i = 0, x = string.length; i < x; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1)
  }

  return string.join(' ')
}

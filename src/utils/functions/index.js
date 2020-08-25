export const getSlug = (tag) => {
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

  return tag
}

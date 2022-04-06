const ghpages = require('gh-pages')

ghpages.publish('docs', {
  branch: 'docs',
  dest: '.',
  dotfiles: true
}, err => {
  if (err) {
    console.error(err)
    process.exit(255)
  }
})

const ghpages = require('gh-pages')

ghpages.publish('docs', {
  user: {
    name: 'Semantic Release Bot',
    email: 'semantic-release-bot@semantic-release.org'
  },
  repo: `https://git:${process.env.GH_TOKEN}@github.com/boxsnake/js-tutorial.git`,
  message: `update docs`,
  branch: 'docs',
  dest: '.',
  dotfiles: true
}, err => {
  if (err) {
    console.error(err)
    process.exit(255)
  }
})

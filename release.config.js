const branch = "${{ github.github_base_ref }}"

const config = {
  branches: [
    'production', 
    { name: 'dev', prerelease: true }, 
    { name: 'develop', prerelease: true }, 
    { name: 'homolog', prerelease: true }
  ],
  "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/github",
        {
          "assets": [
            {
              "path": "dist.zip",
              "label": "Distribution"
            }
          ]
        }
      ]
    ]
}

if (config.branches.some(it => it === branch || (it.name === branch && !it.prerelease))) {
  config.plugins.push('@semantic-release/changelog', [
    '@semantic-release/git',
    {
      assets: ['CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
    },
  ])
}

module.exports = config
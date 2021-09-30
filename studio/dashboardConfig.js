export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61553a3ea8c35c83c6e7ecef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8f13d16i',
                  apiId: 'ad876567-95df-4bab-9809-b1c96c357056'
                },
                {
                  buildHookId: '61553a3e68e8ca8a733fcb62',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yrb1pmcn',
                  apiId: '01eef16a-7c66-43e7-8805-c8776c5e4c0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AmanySamy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yrb1pmcn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb92c47588ceac388bfbc18',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s75yyj4s',
                  apiId: 'af4ed629-cacf-4149-b717-5786bbac0723'
                },
                {
                  buildHookId: '5eb92c479b13490a45291ed4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y1f1n843',
                  apiId: '67f3ca2b-1dcc-4d0d-9eba-4764d9506b8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SiriMMN/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y1f1n843.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

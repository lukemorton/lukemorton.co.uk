import { Projects } from 'ui'
import Page from './Page'

export default ({ githubUrl, projects }) => (
  <Page title="An exploration of the way we use technology">
    <main>
      <Projects
        title={<h1 className="larger">Open source projects</h1>}
        projects={projects}
        after={
          <p>
            You can find even more of my open source work on my{' '}
            <a href={githubUrl}>GitHub profile</a>.
          </p>
        }
      />
    </main>
  </Page>
)

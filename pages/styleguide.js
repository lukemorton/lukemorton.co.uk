import React from 'react'
import Page from '../src/app/components/Page'

export default function Index({ archiveUrl, thoughts }) {
  return (
    <Page title="Styleguide">
      <style jsx>
        {`
          .example {
            border: 3px dotted #ccc;
            margin: 0 0 2em 0;
          }

          .example-demo {
            padding: 1em;
          }

          .example-code {
            background: #eee;
            border-top: 1px solid #ddd;
            margin: 0;
            padding: 1em;
            white-space: normal;
          }

          .example-code::before {
            color: #999;
            content: 'example code';
            display: block;
            font-size: 0.8em;
            margin: 0 0 1em 0;
          }
        `}
      </style>

      <main>
        <h1>Styleguide</h1>
        <p>
          An almost comprehensive example of styles. (It's not that
          comprehensive.)
        </p>

        <h2>Headings</h2>

        <div className="example">
          <div className="example-demo">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <div className="h3">Heading 3</div>
            <h4>Heading 4</h4>
          </div>

          <pre className="example-code">
            <div>&lt;h1&gt;Heading 1&lt;/h1&gt;</div>
            <div>&lt;h2&gt;Heading 2&lt;/h2&gt;</div>
            <div>&lt;h3&gt;Heading 3&lt;/h3&gt;</div>
            <div>&lt;div className="h3"&gt;Heading 3&lt;/div&gt;</div>
            <div>&lt;h4&gt;Heading 4&lt;/h4&gt;</div>
          </pre>
        </div>

        <h2>Paragraphs</h2>

        <div className="example">
          <div className="example-demo">
            <p>
              This is a <strong>strong</strong> paragraph with <em>emphasis</em>{' '}
              on features of CSS <code>code</code>.
            </p>
          </div>

          <pre className="example-code">
            &lt;p&gt;This is a &lt;strong&gt;strong&lt;/strong&gt; paragraph
            with &lt;em&gt;emphasis&lt;/em&gt; on features of CSS
            &lt;code&gt;code&lt;/code&gt;.&lt;/p&gt;
          </pre>
        </div>

        <h2>Links</h2>

        <div className="example">
          <div className="example-demo">
            <h1>
              <a href="#">Link to nowhere</a>
            </h1>
            <h2>
              <a href="#">Link to nowhere</a>
            </h2>
            <h3>
              <a href="#">Link to nowhere</a>
            </h3>
            <h4>
              <a href="#">Link to nowhere</a>
            </h4>
            <a href="#">Link to nowhere</a>
          </div>

          <pre className="example-code">
            <div>
              &lt;h1&gt;&lt;a href="#"&gt;Link to nowhere&lt;/a&gt;&lt;/h1&gt;
            </div>
            <div>
              &lt;h2&gt;&lt;a href="#"&gt;Link to nowhere&lt;/a&gt;&lt;/h2&gt;
            </div>
            <div>
              &lt;h3&gt;&lt;a href="#"&gt;Link to nowhere&lt;/a&gt;&lt;/h3&gt;
            </div>
            <div>
              &lt;h4&gt;&lt;a href="#"&gt;Link to nowhere&lt;/a&gt;&lt;/h4&gt;
            </div>
            <div>&lt;a href="#"&gt;Link to nowhere&lt;/a&gt;</div>
          </pre>
        </div>
      </main>
    </Page>
  )
}

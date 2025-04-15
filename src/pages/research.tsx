import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../css/styles.module.css';

export default function Research() {
  const {siteConfig} = useDocusaurusContext();
  // Use `useBaseUrl` to generate the correct URL for the PDF in static/research
  const pdfUrl = useBaseUrl('/research/ResearchPaper.pdf');

  return (
    <Layout
      title={`Research - ${siteConfig.title}`}
      description="Research papers and publications from Superior Agents"
    >
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col">
            <h1>Research</h1>
            <p>
              Our research paper on <em>Generalising from Self-Produced Data: Model Training Beyond Human Constraints </em> 
               was authored by top experts in AI and blockchain. You can read it below or view our 
              {' '}<a href="https://arxiv.org/abs/2504.04711" target="_blank" rel="noopener">arXiv publication</a> 
              {' '}for more details.
            </p>

            <div className={styles.researchPaper}>
              {/* Embed the PDF in an iframe using the resolved URL */}
              <iframe
                src={pdfUrl}
                title="Superior Agents Research Paper"
                width="100%"
                height="800px"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

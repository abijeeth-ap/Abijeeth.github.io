import { education } from '../data/education'
import { achievements } from '../data/achievements'
import { certifications } from '../data/certifications'
import { repositories } from '../data/repositories'
import { profile } from '../data/profile'
import { sections } from '../config/sections'

export function Details() {
  const getCertificateUrl = (cert: (typeof certifications)[number]) => cert.certificateUrl ?? cert.credentialUrl

  return (
    <section className="section section-white detail-section">
      <div className="container details-grid">
        {sections.education && <article id="education" className="detail-card">
          <div className="detail-icon">◇</div><h2>Education</h2>
          <div className="education-list">{education.map((item) => (
            <div key={`${item.degree}-${item.institution}`}>
              <h3>{item.degree}</h3><p>{item.institution}</p><p>{item.duration}</p>
              <strong>{item.scoreLabel}: {item.cgpa}</strong>
              <ul>{item.coursework.map((course) => <li key={course}>{course}</li>)}</ul>
            </div>
          ))}</div>
        </article>}
        {sections.achievements && <article id="achievements" className="detail-card">
          <div className="detail-icon">♢</div><h2>Competitive Programming</h2>
          <div className="achievement-list">{achievements.map((item) => <div key={item.platform}><span><strong>{item.platform}</strong><small>{item.result}</small></span><i aria-hidden="true"><b /><b /><b /><b /></i></div>)}</div>
        </article>}
        {sections.projects && <article className="detail-card">
          <div className="detail-icon">&lt;/&gt;</div><h2>Repository Highlights</h2>
          <p>{profile.repositoryIntro}</p>
          <div className="repo-list">{repositories.map((repo) => <a key={repo.name} href={repo.url}><strong>{repo.name}</strong><small>{repo.description} · {repo.language}</small></a>)}</div>
        </article>}
        {sections.certifications && <article className="detail-card">
          <div className="detail-icon">✦</div><h2>Certifications</h2>
          <div className="cert-list">{certifications.map((cert) => (
            <div key={cert.title}>
              <span>✓</span>
              <p>
                <strong>{cert.title}</strong>
                <small>{cert.issuer} · {cert.year}</small>
                {cert.credentialId && <small>Credential ID: {cert.credentialId}</small>}
                {(getCertificateUrl(cert) || cert.verificationUrl) && (
                  <span className="cert-actions">
                    {getCertificateUrl(cert) && (
                      <a
                        href={getCertificateUrl(cert)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open certificate for ${cert.title} in a new tab`}
                      >
                        View Certificate
                      </a>
                    )}
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify credential for ${cert.title} in a new tab`}
                      >
                        Verify Credential
                      </a>
                    )}
                  </span>
                )}
              </p>
            </div>
          ))}</div>
        </article>}
      </div>
    </section>
  )
}

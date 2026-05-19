import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Website Audit App</h1>
        <p>
          A powerful tool for auditing and analyzing websites.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Performance Audit</h2>
          <p>Analyze page load speed and Core Web Vitals.</p>
        </div>

        <div className={styles.card}>
          <h2>Security Scan</h2>
          <p>Check for security vulnerabilities and best practices.</p>
        </div>

        <div className={styles.card}>
          <h2>SEO Analysis</h2>
          <p>Evaluate SEO optimization and meta tags.</p>
        </div>

        <div className={styles.card}>
          <h2>Accessibility</h2>
          <p>Test compliance with accessibility standards.</p>
        </div>
      </div>
    </main>
  )
}

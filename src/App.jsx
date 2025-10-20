import "./app.css";

const App = () => {
  return (
    <article className="app-wrapper | container">
      <div>
        <header className="main-header">
          <h1 className="main-title">
            <em>O</em>lympian Coding Organisation
          </h1>
          <nav>
            <ul>
              <li>
                <div className="wrapper-github">
                  <img
                    className="img-github"
                    src="/ffmpeg-logo.jpg"
                    alt="ffmpeg-logo"
                  />
                  <a className="link-github" href="https://github.com/real-oco">
                    #Github
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <article className="main-sec-content">
            <section className="main-block">
              <h3 className="sec-content-title">
                Technical Bootcamp on Industrial-Grade Programming Applications
              </h3>
              <p className="sec-content-description">
                A hands-on technical bootcamp organized by Ranveer Arakharao
                (T.Y. EXTC) and team, focusing on industrial-grade programming
                applications. The bootcamp aims to enhance students’ practical
                understanding of modern programming languages and their
                real-world applications in industry.
              </p>
            </section>
            <section className="main-block">
              <h3 className="sec-content-title">
                Gaming Tournament for Aspiring E-Sports Students
              </h3>
              <p className="sec-content-description">
                A competitive gaming tournament designed for students passionate
                about gaming and interested in exploring it as a career path.
                The event aims to provide a healthy and engaging platform for
                participants to showcase their gaming skills, teamwork, and
                strategic thinking. It will be conducted in a fair and
                well-organized manner, ensuring an enjoyable experience for all
                players. High-end laptops and PCs will be provided to ensure
                smooth gameplay and a professional tournament environment. The
                goal is to promote the spirit of competition, collaboration, and
                exposure to the growing world of gaming and e-sports.
              </p>
            </section>
          </article>
        </main>
      </div>
      <div>
        <footer className="main-footer">
          <p className="footer-para">
            <a className="footer-link" href="https://www.realrnvr.social">
              <em>@realrnvr 2025</em>
            </a>
          </p>
          <p className="footer-para">
            <em>more otw</em>
          </p>
        </footer>
      </div>
    </article>
  );
};

export default App;

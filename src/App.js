import "./App.css";
// import Contactform from "./form.js";
import BackToTop from "./components/totop";
import FormModal from "./components/modal"

function App() {
  return (
    <div className="container">
      <div className="gf">
        <h1>eric has no taste</h1>
      </div>
      hello, this is eric has no taste(i actually have great taste).
      <span className="bio">
        a collection of curated music reviews.
      </span>
      <a
        href="https://www.discogs.com/user/ericflatt/collection"
        target={"blank"}
      >
        my discogs
      </a>
      <div>
        <div className="form">

          {/* <Contactform /> */}
          <FormModal />
        </div>
      </div>
      <table className="accordion-container names">
        <tbody>
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>SMUG - sunking</span>
                </summary>
                <div className="content">
                  Great Bobby Granfelt and Antoine Martel side project. Their
                  DIY approach to jazz is what makes them a great duo. <br></br>{" "}
                  8/10
                </div>
                <div>
                  <a
                    target={"blank"}
                    href="https://open.spotify.com/album/7i1c0SEaAoHUB0lD82C2AZ?si=eaQmnO-zSjGBKUXPghY1Fg"
                  >
                    Listen here
                  </a>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Anyhow - Leland Whitty</span>
                </summary>
                <div className="content">
                  30 minutes of amazing music. A fantastic solo album from
                  BBNG's Leland Whitty. <br></br> 9/10
                </div>
                <div>
                  <a
                    target={"blank"}
                    href="https://open.spotify.com/album/6TD6EZnIkBVaeJMXltgfJ9?si=nlViAAC2QDeBPLa4VektNg"
                  >
                    Listen here
                  </a>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Skinty Fia - Fontaines D.C.</span>
                </summary>
                <div className="content">
                  A refreshing post punk album and step up from there also great
                  2019 album. <br></br> 8.5/10
                </div>
                <div>
                  <a
                    target={"blank"}
                    href="https://open.spotify.com/album/1R7vPDuTFeqCGOLj1JwfRH?si=oJUdXmCLRNG4sPuAEj4TXw"
                  >
                    Listen here
                  </a>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Cracker Island - Gorillaz (feat. Thundercat)</span>
                </summary>
                <div className="content">
                  Old Gorillaz = Great, Thundercat = Great. New Gorillaz +
                  Thundercat = Pretty Good. This track has tones of old Gorillaz
                  plus great Thundercat bass lines making it pretty decent
                  overall.
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Modern Baseball</span>
                </summary>
                <div className="content">
                  An overall incredible band. My cousin was/maybe still is
                  friends with the bass player, met him once at his parents
                  house. Unpopular opinion; they shouldn't come back. What they
                  have now is special and is something not a lot of bands have.
                </div>
                <div>
                  <a
                    target={"blank"}
                    href="https://open.spotify.com/album/4QElAwQufg6wCeyvpafqwA?si=a1WBQg6aTG6yBdOZP3kRjA"
                  >
                    Listen here
                  </a>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Crisis - Alexisonfire</span>
                </summary>
                <div className="content">
                  pretty fire album. a classic.
                  <div className="track">
                    my favorite track:
                    <iframe
                      title="crisis"
                      style={{ borderRadius: "none" }}
                      src="https://open.spotify.com/embed/track/6hKnIY2Ssrmqw2TYXW0K5e?utm_source=generator"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Portamento - The Drums</span>
                </summary>
                <div className="content">
                  Pretty great album.
                  <div className="track">
                    my favorite track:
                    <iframe
                      title="money"
                      style={{ borderRadius: "none" }}
                      src="https://open.spotify.com/embed/track/5Q1H7ASDiJpACNx5ziyhuN?si?utm_source=generator"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Move 78 - my thoughts</span>
                </summary>
                <div className="content">
                  awesome berlin based jazz group with nice electronic elements.
                  <div className="track">
                    my favorite track:
                    <iframe
                      title="move 78"
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/track/54fg2iMaPpysn7VYeBGTE3?si?utm_source=generator"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>Ebi Soda - my thoughts</span>
                </summary>
                <div className="content">
                  another great modern experimental jazz group out of england.
                  <div className="track">
                    my favorite track:
                    <iframe
                      title="ebi soda"
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/track/0cgv5WtlYuDYlCtM7Ux2cp?si?utm_source=generator"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>High Pulp - my opinion</span>
                </summary>
                <div className="content">
                  greatest jazz group my ears have ever heard. listen to them.
                  you won't regret it.
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>check out my record collection on discogs</span>
                </summary>
                <div className="content">
                  <a
                    href="https://www.discogs.com/user/ericflatt/collection?header=1"
                    target={"blank"}
                  >
                    my discogs
                  </a>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>you like jazz?</span>
                </summary>
                <div className="content">
                  jazz sabbath is a 10/10
                  <div className="track">
                    my favorite track:
                    <iframe
                      title="jazz sabbath"
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/track/2ev6UJ3ag8XlCCVZpNsgAg?utm_source=generator"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>The Ladies - They Mean Us</span>
                </summary>
                <div className="content">
                  a great Zach Hill side project. 8/10
                  <div className="track">
                    my favorite track:
                    <iframe
                      title="the ladies"
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/track/46Hh3GTtSUtVMXuuxvx6c1?utm_source=generator"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
          {/* begginning */}
          <tr>
            <td className="accordion">
              <details>
                <summary className="title">
                  <span>High Pulp - Pursuit of Ends</span>
                </summary>
                <div className="content">
                  a no skips experimental jazz album that's pretty good. 9/10
                  <div className="track">
                    my favorite track:
                    <iframe
                      title="high pulp - all roads lead to los angeles"
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/track/1PHkwus4CNhHE17xM8k5Fx?utm_source=generator"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </details>
            </td>
          </tr>
          {/* end */}
        </tbody>
      </table>
      <BackToTop />
    </div>
  );
}

export default App;

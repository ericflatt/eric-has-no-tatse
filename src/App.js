import "./App.css";
import Contactform from "./form.js";
import BackToTop from "./totop";

function App() {
  return (
    <div className="container">
      <div className="gf">
        <h1>eric has no taste</h1>
      </div>
      hello, this is eric has no taste(i actually have great taste).
      <span className="bio">
        a collection of whatever i want to write/am thinking about(mostly music reviews).
      </span>
      <div>
        <div className="form">
          <span>want me to review your music? send me the details.</span>
          <Contactform />
        </div>
      </div>
      <table className="accordion-container names">
        <tbody>
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
                  <span>movie review - Kill Bill Vol 1</span>
                </summary>
                <div className="content">
                  i need a track suit
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
                  greatest jazz group my ears have ever heard. listen to them. you won't regret it.
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
                  <span>music review: The Ladies - They Mean Us</span>
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
                  <span>music review: High Pulp - Pursuit of Ends</span>
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

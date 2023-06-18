import "../../Css/About.css";
const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="content-about ">
          <div className="image-me"></div>
          <div className="table">
            <div className="me">
              <h1 >I'm, Hassan</h1>
              <p>
                i am a founding member of Queen, a world-renowned guitarist,
                songwriter, producer and performer, also a Doctor of
                Astrophysics, 3-D stereoscopic photographic authority and a
                passionate advocate and campaigner for animal rights.
              </p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name :</th>
                  <td>Hassan Bahmandar</td>
                  <th>Age :</th>
                  <td>11/7/2005 - (17)</td>
                </tr>
              </thead>
              <thead>
                <tr>
                <th>Website :</th>
                  <td>www.Refuge.ref</td>
                  <th>Emil :</th>
                  <td>hasanbahmnadar5@gmail.com</td>
                </tr>
              </thead>
            
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

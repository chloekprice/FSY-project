import './App.css';

function App() {
  return (
    <div class="view">

      <div>
        <h1 class="title">Available FSY Sessions</h1>
        <h2 class="stake-name">Lindon Utah Stake</h2>
        <p class="warning">Travel is not provided. Times and dates are subject to change.</p>
      </div>

      <div class="parent">
        <div class="session-map">
          <p class="instruction">
            Hover over the location to see the available sessions.
          </p>

          <div class="map">
            <img src="https://dynamiclearningmaps.org/sites/default/files/pictures/states/UT_state.png" alt="Map of Utah" class="Utah"/>
            <img src="https://www.clker.com/cliparts/R/V/j/c/V/d/hot-pink-dot-md.png" alt="Location: Brigham Young University" class="BYU"/> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Location_dot_sky_blue.png" alt="Location: Utah State University" class="USU"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Location_dot_orange.svg" alt="Location: Snow College" class="SC"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" alt="Location: University of Utah" class="UofU"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" alt="Location: Snow College" class="WSU"/>
            <img src="https://www.clker.com/cliparts/w/L/r/f/3/U/purple-dot-md.png" alt="Location: Utah Valley University" class="UVU"/>
            <div class="information">
              <table>
                <tr>
                  <th>
                    Available Session Dates at Weber State University:
                  </th>
                </tr>
                <tr>
                  <td>6/16/2025-6/21/2025</td>
                  <td>
                    <a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/session-details?id=10001624&lang=eng">FSY UT Ogden 01</a>
                  </td>
                </tr>
                <tr>
                  <td>6/23/2025-6/28/2025</td>
                  <td>
                    <a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/session-details?id=10001634&lang=eng">FSY UT Ogden 02</a>
                  </td>
                </tr>
                <tr>
                  <td>6/30/2025-7/05/2025</td>
                  <td>
                    <a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/session-details?id=10001645&lang=eng">FSY UT Ogden 03</a>
                  </td>
                </tr>
                <tr>
                  <td>7/07/2025-7/12/2025</td>
                  <td>
                    <a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/session-details?id=10001653&lang=eng">FSY UT Ogden 04</a>
                  </td>
                </tr>
                <tr>
                  <td>7/14/2025-7/19/2025</td>
                  <td>
                    <a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/session-details?id=10001666&lang=eng">FSY UT Ogden 05</a>
                  </td>
                </tr>
                <tr>
                  <td>7/21/2025-7/26/2025</td>
                  <td>
                    <a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/session-details?id=10001608&lang=eng">FSY UT Ogden 06</a>
                  </td>
                </tr>
                <tr>
                  <td>7/28/2025-8/02/2025</td>
                  <td>
                    <a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/session-details?id=10001604&lang=eng">FSY UT Ogden 07</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="table">
          <table>
            <tr>
              <th>Color</th>
              <th>Campus</th>
              <th>Location</th>
            </tr>
            <tr>
              <td>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Location_dot_sky_blue.png" alt="Blue" class="blue"/>
              </td>
              <td>Utah State University</td>
              <td>Logan, UT</td>
            </tr>
            <tr>
            <td>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" alt="Green" class="green"/>
              </td>
              <td>University of Utah</td>
              <td>Salt Lake City, UT</td>
            </tr>
            <tr>
              <td>
              <img src="https://www.clker.com/cliparts/R/V/j/c/V/d/hot-pink-dot-md.png" alt="Pink" class="pink"/> 
              </td>
              <td>Brigham Young University</td>
              <td>Provo, UT</td>
            </tr>
            <tr>
            <td>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Location_dot_orange.svg" alt="Orange" class="orange"/>
              </td>
              <td>Snow College</td>
              <td>Ephraim, UT</td>
            </tr>
            <tr>
            <td>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GAudit_YellowDot.png" alt="Yellow" class="yellow"/>
              </td>
              <td>Weber State University</td>
              <td>Ogden, UT</td>
            </tr>
            <tr>
            <td>
            <img src="https://www.clker.com/cliparts/w/L/r/f/3/U/purple-dot-md.png" alt="Purple" class="purple"/>
              </td>
              <td>Utah Valley University</td>
              <td>Orem, UT</td>
            </tr>
            <tr>
            <td>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Location_dot_grey.svg" class="grey" alt="Location: Boise State University"/>
              </td>
              <td>
                Boise State University
              </td>
              <td>Boise, ID</td>
            </tr>
          </table>
          <p class="idaho">
            Only session available at BSU is 6/2/2025-6/7/2025
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div class="view">

      <div>
        <h1 class="title">Available FSY Sessions</h1>
        <p class="stake-name">Orem Utah Windsor Stake</p>
      </div>

      <div class="code">
        <p>
          CODE GOES HERE
        </p>
      </div>

      <div class="session-map">
        <p class="instruction">
          Hover over the location to see the available sessions.
        </p>

        <div class="map">
          <img src="https://dynamiclearningmaps.org/sites/default/files/pictures/states/UT_state.png" alt="Map of Utah"/>
        </div>
      </div>

    </div>
  );
}

export default App;

import "@picocss/pico";
import * as emoji from 'node-emoji'

function Main() {
  return (
    <div className="container">
      <hgroup>
        <h1>
          <br />
          От самого большого поклонника Умки {emoji.get('polar_bear')} 
        </h1>
        <h3>Или почему я 🐻‍❄️</h3>
      </hgroup>
    </div>
  );
}

export default Main;

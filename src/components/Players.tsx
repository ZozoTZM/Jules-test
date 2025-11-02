import { useEffect } from "preact/hooks";
import { api } from "../services/api";
import { players, activeFilter, filteredPlayers } from "../signals/playerSignals";

const filters = ['ALL', 'TOP', 'JUNGLE', 'MID', 'BOTTOM', 'SUPPORT'];

export function Players() {
  useEffect(() => {
    api.getPlayers().then(p => {
      players.value = p;
    });
  }, []);

  return (
    <div className="card players-table">
      <h2>Most Picked Players</h2>
      <div className="filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={activeFilter.value === filter ? 'active' : ''}
            onClick={() => activeFilter.value = filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Team</th>
              <th scope="col">Position</th>
              <th scope="col">Pick Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.value.map(player => (
              <tr key={player.name}>
                <td>
                  <div className="player-info">
                    <img src={player.image} alt="Player image" />
                    <span className="material-symbols-outlined">{player.icon}</span>
                    <span>{player.name}</span>
                  </div>
                </td>
                <td>{player.team}</td>
                <td>{player.position}</td>
                <td>{player.pickRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
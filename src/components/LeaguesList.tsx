const leagues = [
  "Pro League",
  "Challenger Series",
  "Academy League",
];

export function LeaguesList() {
  const handleLeagueClick = (league: string) => console.log(`League ${league} was pressed`);

  return (
    <div className="card leagues-list">
      <h2>Your Leagues</h2>
      <ul>
        {leagues.map(league => (
          <li key={league} onClick={() => handleLeagueClick(league)}>
            <p>{league}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
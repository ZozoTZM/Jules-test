import { Header } from './components/Header';
import { LeaguesList } from './components/LeaguesList';
import { Players } from './components/Players';

export function App() {
  return (
    <div class="dark">
      <Header />
      <main>
        <div className="container">
          <LeaguesList />
          <Players />
        </div>
      </main>
    </div>
  )
}
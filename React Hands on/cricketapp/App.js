import logo from './logo.svg';
import './App.css';
import { ListofPlayers } from './Components/ListofPlayers';
import { Scorebelow70 } from './Components/Scorebelow70';
import { OddPlayers } from './Components/OddPlayers';
import { EvenPlayers } from './Components/EvenPlayers';
import { ListofIndianPlayers } from './Components/ListofIndianPlayers';

const T20Players=["First Player","Second Player","Third Player"];
const RanjiTrophyPlayers=["Fourth Player","Fifth Player","Sixth Player"];
export const IndianPlayers=[...T20Players,...RanjiTrophyPlayers]
function App() {
  var players=
    [{name:"Jack",score:50},{name:"Michael",score:70},
{name:" John",score:40},{name:" Ann",score:61},
{name:" Elisabeth",score:61},{name:" Sachin",score:95},
{name:" Dhoni",score:100},{name:" Virat",score:84},
{name:" Jadeja",score:64},{name:" Rana",score:75},
{name:" Rohit",score:80}];

var flag=true;
if(flag===false)
{ 
  return (
   <div>
      <h1>List of players</h1>
    <ListofPlayers players={players}/>
    <hr/>
    <h1>List of Players having Scores Less than 70</h1>
    <Scorebelow70 players={players}/>
    </div>
  );
}
else {
  return(
    <div>
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        {OddPlayers(players)}
        <hr/>
        <h1>Even Players</h1>
        {EvenPlayers(players)}
        <hr/>
        <h1>List of players merged</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers}/>
      </div>
    </div>
  )
}
}
export default App;
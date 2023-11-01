import { checkDistanceResult, printWinner } from './functions/gameFinish';
import { playRounds, printResultMessage } from './functions/gameProgress';
import {
  getCarName,
  getPlayNum,
  setInitialDistance,
} from './functions/gameStart';

class App {
  constructor() {
    this.racingResult = [];
    this.playCount = 0;
  }

  async start() {
    const carList = await getCarName();
    this.playCount = await getPlayNum();
    this.racingResult = setInitialDistance(carList);
  }

  progress() {
    printResultMessage();
    playRounds(this.racingResult, this.playCount);
  }

  finish() {
    const winnerList = checkDistanceResult(this.racingResult);
    printWinner(winnerList);
  }

  async play() {
    await this.start();
    this.progress();
    this.finish();
  }
}

export default App;

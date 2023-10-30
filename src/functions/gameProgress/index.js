import { Random } from '@woowacourse/mission-utils';

const getCanMove = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  if (randomNumber < 4) return false;
  return true;
};

const playOneRound = carDistanceList => {
  carDistanceList.forEach(car => {
    if (getCanMove) {
      const updateCar = car;
      updateCar.distance += '-';
      return updateCar;
    }
    return car;
  });
};

export default playOneRound;
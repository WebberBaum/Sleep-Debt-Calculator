const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 9;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 6;
      break;
  }
  
};

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You are sleeping properly, keep the good work');
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log('You should sleep more!');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You are sleeping too much!!!');
  }
};
calculateSleepDebt();

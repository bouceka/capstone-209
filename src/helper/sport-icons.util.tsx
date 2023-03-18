import { ReactComponent as IconBaseball } from '../assets/icons/baseball.svg';
import { ReactComponent as IconBasketball } from '../assets/icons/basketball.svg';
import { ReactComponent as IconFootball } from '../assets/icons/football.svg';
import { ReactComponent as IconIceHockey } from '../assets/icons/puck.svg';
import { ReactComponent as IconSoccer } from '../assets/icons/soccer.svg';
import { ReactComponent as IconVolleyball } from '../assets/icons/volleyball.svg';

interface Props {
  sportType: 'Soccer' | 'Volleyball' | 'IceHockey' | 'Basketball' | 'Football' | 'Baseball';
}

const SportSVG = {
  Soccer: IconSoccer,
  Volleyball: IconVolleyball,
  IceHockey: IconIceHockey,
  Baseball: IconBaseball,
  Basketball: IconBasketball,
  Football: IconFootball,
};

export const IconSport = ({ sportType }: Props) => {
  const SportIcon = SportSVG[sportType];
  return <SportIcon />;
};

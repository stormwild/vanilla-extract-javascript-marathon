import { useState } from 'react';

import Button from './components/Button';
import { SpecialButton } from './components/SpecialButton';
import './styles/style.css';

export const App = () => {
  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    specialCount: 0,
  });

  return (
    <div className="container">
      <div>
        <Button
          color="purple"
          onClick={() => setCounts({ ...counts, count1: counts.count1 + 1 })}
        >
          {`Clicked me ${counts.count1} times.`}
        </Button>
      </div>
      <div>
        <Button
          color="red"
          onClick={() => setCounts({ ...counts, count2: counts.count2 + 1 })}
        >
          {`Clicked me ${counts.count2} times.`}
        </Button>
      </div>
      <div>
        <SpecialButton
          color="green"
          onClick={() =>
            setCounts({ ...counts, specialCount: counts.specialCount + 1 })
          }
        >
          {`Clicked me ${counts.specialCount} times.`}
        </SpecialButton>
      </div>
    </div>
  );
};

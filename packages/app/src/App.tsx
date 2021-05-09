import { LabeledSlider } from '@learn-vite/core/components/LabeledSlider';
import { observer } from 'mobx-react';
import { useMemo, useRef, useState } from 'react';
import { TimerStore } from './TimerStore';
import { useContext } from './useContext';
import { UserStore } from './UserStore';

export const App = () => {
  const userStore = useRef(new UserStore());

  return (
    <UserStore.Context.Provider value={userStore.current}>
      <BMI />
      <hr />
      <Timer store={timerStore} />
      <hr />
      <Fetch />
    </UserStore.Context.Provider>
  );
};

const BMI = () => {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(170);

  const calcBMI = useMemo(() => {
    const heightMeters = height * 0.01;

    return Math.round(weight / (heightMeters * heightMeters));
  }, [weight, height]);

  return (
    <>
      <LabeledSlider label="Weight" unit="kg" min={40} max={150} value={weight} onChange={setWeight} />
      <LabeledSlider label="Height" unit="cm" min={140} max={220} value={height} onChange={setHeight} />
      <p>BMI: {calcBMI}</p>
    </>
  );
};

const timerStore = new TimerStore();

const Timer = observer(({ store }: { store: TimerStore }) => (
  <div>
    <p>count: {store.secondsPassed}</p>
    <button onClick={() => store.increaseTimer()}>+ count up</button>
  </div>
));

const Fetch = observer(() => {
  const store = useContext(UserStore.Context);

  const handleClick = () => {
    store.fetchUsers();
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch</button>
      <pre>
        <code>{JSON.stringify(store.users, null, 2)}</code>
      </pre>
    </div>
  );
});

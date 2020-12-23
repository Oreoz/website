import React, { FC, useEffect, useMemo, useState } from "react";

const Wow: FC = () => {
  const [ratios, setRatios] = useState({ allies: 0, enemies: 0 });
  const [state, setState] = useState({
    allies: { atk: 0, def: 0 },
    enemies: { atk: 0, def: 0 },
  });

  useEffect(() => {
    setRatios({
      enemies: Number((state.enemies.def / state.allies.atk).toFixed(2)),
      allies: Number((state.allies.def / state.enemies.atk).toFixed(2)),
    });
  }, [state]);

  const success = useMemo(() => ratios.enemies < ratios.allies, [ratios]);

  return (
    <>
      <h1 className="text-2xl text-center font-bold">Table Calculator</h1>

      <div
        className={`${
          success ? "bg-green-400" : "bg-red-400"
        } rounded-full h-20 w-20 m-4`}
        data-test-id="success-indicator"
      ></div>

      <h2 className="text-lg font-semibold leading-8 mt-2">Enemy Forces</h2>
      <h3
        className="text-lg mb-2 italic text-gray-700"
        data-test-id="enemy-ratio"
      >
        {ratios.enemies}
      </h3>

      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-grow items-center">
          <span className="mx-2 w-6">🛡</span>
          <input
            className="border border-gray-500 rounded p-2 flex flex-grow"
            data-test-id="enemy-def"
            type="number"
            min="0"
            value={state.enemies.def}
            onChange={(event) =>
              setState({
                ...state,
                enemies: { ...state.enemies, def: Number(event.target.value) },
              })
            }
          />
        </div>

        <div className="flex flex-grow items-center mt-2 md:mt-0">
          <span className="mx-2 w-6">⚔</span>
          <input
            className="border border-gray-500 rounded p-2 flex flex-grow"
            data-test-id="enemy-atk"
            type="number"
            min="0"
            value={state.enemies.atk}
            onChange={(event) =>
              setState({
                ...state,
                enemies: { ...state.enemies, atk: Number(event.target.value) },
              })
            }
          />
        </div>
      </div>

      <h2 className="text-lg font-semibold leading-8 mt-2">Your Squad</h2>
      <h3
        className="text-lg mb-2 italic text-gray-700"
        data-test-id="ally-ratio"
      >
        {ratios.allies}
      </h3>

      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-grow items-center">
          <span className="mx-2 w-6">🛡</span>
          <input
            className="border border-gray-500 rounded p-2 flex flex-grow"
            data-test-id="ally-def"
            type="number"
            min="0"
            value={state.allies.def}
            onChange={(event) =>
              setState({
                ...state,
                allies: { ...state.allies, def: Number(event.target.value) },
              })
            }
          />
        </div>

        <div className="flex flex-grow items-center mt-2 md:mt-0">
          <span className="mx-2 w-6">⚔</span>
          <input
            className="border border-gray-500 rounded p-2 flex flex-grow"
            data-test-id="ally-atk"
            type="number"
            min="0"
            value={state.allies.atk}
            onChange={(event) =>
              setState({
                ...state,
                allies: { ...state.allies, atk: Number(event.target.value) },
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default Wow;

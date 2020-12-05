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

  const backgroundColor = useMemo(
    () => (ratios.enemies < ratios.allies ? "bg-green-400" : "bg-red-400"),
    [ratios]
  );

  return (
    <>
      <h1 className="text-2xl font-bold">Shadowlands Table Calculator</h1>

      <div className={`${backgroundColor} rounded-full h-20 w-20 m-4`}></div>

      <h2 className="text-lg font-semibold leading-8 mt-2">Enemy Forces</h2>
      <h3 className="text-lg mb-2 italic text-gray-700">{ratios.enemies}</h3>

      <div className="flex items-center">
        <span className="mx-2">⚔</span>
        <input
          className="border border-gray-500 rounded p-2"
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

        <span className="mx-2">🛡</span>
        <input
          className="border border-gray-500 rounded p-2"
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

      <h2 className="text-lg font-semibold leading-8 mt-2">Your Squad</h2>
      <h3 className="text-lg mb-2 italic text-gray-700">{ratios.allies}</h3>

      <div className="flex items-center">
        <span className="mx-2">⚔</span>
        <input
          className="border border-gray-500 rounded p-2"
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

        <span className="mx-2">🛡</span>
        <input
          className="border border-gray-500 rounded p-2"
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
    </>
  );
};

export default Wow;

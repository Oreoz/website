import { EffectCallback, useEffect } from "react";

const useOnRender = (effect: EffectCallback) => {
  useEffect(() => effect(), [effect]);
};

export default useOnRender;

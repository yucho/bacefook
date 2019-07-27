import { useState } from 'react';

export const appendAccessor = (data) => {
  const [ctxData, setCtxData] = useState({});
  return Object.assign({}, data, {
    getCtxData: () => ctxData,
    setCtxData: (data) => setCtxData((prev) => Object.assign({}, prev, data))
  });
};

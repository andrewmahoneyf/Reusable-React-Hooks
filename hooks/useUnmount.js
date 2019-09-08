import { useEffect } from 'react';

export const useUnmount = func => {
  useEffect(
    () => () => {
      func();
    },
    []
  );
};

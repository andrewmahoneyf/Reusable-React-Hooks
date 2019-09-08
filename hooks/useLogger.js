import { useEffect } from 'react';

export const useLogger = (name, props) => {
  useEffect(() => {
    console.log(`${name} mounted`, props);
    return () => {
      console.log(`${name} un-mounted`, props);
    };
  }, []);

  useEffect(() => {
    console.log(`${name} props updated`, props);
  });
};

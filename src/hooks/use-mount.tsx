import { useEffect, useState } from 'react';

import { ANIMATION_TIME } from '@/components/modal/animation-style/const.ts';
import { TimerId } from '@/types/default';

interface UseMountProps {
  opened: boolean;
}
export const useMount = ({ opened }: UseMountProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      const cb = () => {
        setMounted(false);
      };
      const id: TimerId = setTimeout(cb, ANIMATION_TIME);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [opened]);

  return {
    mounted,
  };
};

interface UseAnimationIn {
  opened: boolean;
}
export const useAnimationIn = ({ opened }: UseAnimationIn) => {
  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return { animationIn };
};

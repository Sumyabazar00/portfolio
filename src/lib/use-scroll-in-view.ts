import { useEffect, useState, type RefObject } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export function useScrollInView<T extends Element>(
  ref: RefObject<T | null>,
  topRatio = 0.92,
) {
  const [inView, setInView] = useState(false);
  const { scrollY } = useScroll();

  const isVisible = () => {
    const el = ref.current;
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight * topRatio && r.bottom > 0;
  };

  useEffect(() => {
    if (isVisible()) setInView(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(scrollY, "change", () => {
    if (!inView && isVisible()) setInView(true);
  });

  return inView;
}

// hooks/useInView.js
import { useState, useEffect, useRef } from "react";

/**
 * useInView - Custom hook dùng Intersection Observer
 * @param {Object} options - tuỳ chọn cho IntersectionObserver
 * @returns [ref, inView]
 *   ref: attach vào element muốn quan sát
 *   inView: boolean, true nếu element nằm trong viewport
 */
export default function useInView(options) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Nếu muốn chỉ xuất hiện một lần, bỏ quan sát sau khi đã inView
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, inView];
}

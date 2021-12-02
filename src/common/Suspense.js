import { useState, useEffect } from "react";

export default function FakeSuspense(props) {
  const { children, delay } = props;
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, delay);
  }, [delay]);

  return isShown ? children : [];
}

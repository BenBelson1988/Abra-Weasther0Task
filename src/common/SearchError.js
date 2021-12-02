import { useState, useEffect } from "react";
import { SearchError } from "../styled/Divs";

export default (props) => {
  const [count, setCount] = useState(0);
  const [ticking, setTicking] = useState(true);
  const [showlikedMsg, setShowlikedMsg] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => ticking && setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (count === 4) {
      setCount(0);
      setTicking(false);
      setShowlikedMsg(false);
      props.setError(false);
    }
  });

  return <>{showlikedMsg && <SearchError>{props.msg}</SearchError>}</>;
};

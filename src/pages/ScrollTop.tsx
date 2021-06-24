import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

interface Props {
  history: History;
}

const ScrollTop: React.FC<Props> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};

export default withRouter(ScrollTop);

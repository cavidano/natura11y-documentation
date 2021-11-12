import React, { Fragment } from 'react';
import { navigate } from "gatsby";

const Docs = () => {

    navigate(
      "/docs/get-started",
      { replace: true }
    )

  return (
    <Fragment></Fragment>
  );
}

export default Docs;
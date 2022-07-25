import React, { Fragment, useEffect } from 'react';

import { navigate } from 'gatsby';

import Header from '../../components/Header';

const Docs = () => {
  useEffect(() => {
    navigate('/docs/get-started');
  }, []);
  return (
    <Fragment>
            
        <Header />

    </Fragment>
  );
};

export default Docs;
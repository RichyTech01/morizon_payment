import React from 'react';
import { CircularProgress } from '@material-ui/core';

const PageLoading = () => {
  return (
    <div style={{ display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20vh',
              animation:'fadeIn 1s'
         }}>

      <CircularProgress />
      
    </div>
  );
};

export default PageLoading;

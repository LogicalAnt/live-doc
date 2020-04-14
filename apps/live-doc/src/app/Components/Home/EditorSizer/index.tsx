import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

interface EditorSizerProps {
  activeButton: number;
  setActiveButton: (size: number) => any;
}
export const EditorSizer = ({
  activeButton,
  setActiveButton
}: EditorSizerProps) => {
  return (
    <>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color={activeButton === 1 ? 'primary' : 'default'}
          onClick={() => setActiveButton(1)}
        >
          Small
        </Button>
      </Grid>

      <Grid item xs={1}>
        <Button
          variant="contained"
          color={activeButton === 2 ? 'primary' : 'default'}
          onClick={() => setActiveButton(2)}
        >
          Medium
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color={activeButton === 3 ? 'primary' : 'default'}
          onClick={() => setActiveButton(3)}
        >
          Large
        </Button>
      </Grid>
    </>
  );
};

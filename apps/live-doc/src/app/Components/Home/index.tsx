import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import { useState } from 'react';
import { QuillEditor } from '../QuillEditor';
import { EditorSizer } from './EditorSizer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

export const Home = () => {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState(1);
  const editorSize: any = activeButton * 4;
  return (
    <>
      <div className={classes.root} style={{ marginTop: 50 }}>
        <Grid container spacing={1} justify="center">
          <EditorSizer
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </Grid>
        <Grid container spacing={1} justify="center">
          <Grid item xs={editorSize}>
            <QuillEditor />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

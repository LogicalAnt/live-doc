import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import io from 'socket.io-client';
interface EditorSizerProps {
  activeButton: number;
  setActiveButton: (size: number) => void;
}
export const EditorSizer = ({
  activeButton,
  setActiveButton
}: EditorSizerProps) => {
  const socket = io('http://localhost:3333');
  socket.on('emittedEditorSize', (value: number) => {
    setActiveButton(value);
  });

  const sizes = [
    { size: 1, name: 'small' },
    { size: 2, name: 'medium' },
    { size: 3, name: 'large' }
  ];

  const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      height: 38,
      padding: '0 20px',
      backgroundColor: '#045de9',
      backgroundImage: 'linear-gradient(315deg, #045de9 0%, #09c6f9 74%)'
    }
  });

  const classes = useStyles();
  return (
    <>
      {sizes.map(item => (
        <Grid item xs={1} key={item.size}>
          <Button
            className={activeButton === item.size ? classes.root : ''}
            variant="contained"
            onClick={() => {
              setActiveButton(item.size);
              socket.emit('editorSize', item.size);
            }}
          >
            {item.name}
          </Button>
        </Grid>
      ))}
    </>
  );
};

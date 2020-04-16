import { Button, Grid } from '@material-ui/core';
import React from 'react';
import io from 'socket.io-client';
interface EditorSizerProps {
  activeButton: number;
  setActiveButton: (size: number) => any;
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
  return (
    <>
      {sizes.map(item => (
        <Grid item xs={1}>
          <Button
            variant="contained"
            color={activeButton === item.size ? 'primary' : 'default'}
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

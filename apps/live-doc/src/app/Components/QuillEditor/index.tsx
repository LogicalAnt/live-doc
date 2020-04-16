import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import io from 'socket.io-client';

interface EmitData {
  content: string;
  editorSize: number;
}
export const QuillEditor = () => {
  const [value, setValue] = useState('');
  const socket = io('http://localhost:3333');
  socket.on('emittedText', (value: string) => {
    setValue(value);
  });

  const handleChange = content => {
    socket.emit('editorText', content);
  };

  return (
    <ReactQuill
      style={{ height: 300 }}
      placeholder="Type and share..."
      theme="snow"
      value={value}
      onChange={(content, delta) => {
        handleChange(content);
      }}
    />
  );
};

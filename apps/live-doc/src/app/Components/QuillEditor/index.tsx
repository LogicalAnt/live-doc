import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

interface EmitData {
  content: string;
  editorSize: number;
}
export const QuillEditor = () => {
  const [value, setValue] = useState('');
  const socket = io('http://localhost:3333');
  const { id } = useParams();

  //group data handler
  useEffect(() => {
    fetch(`http://localhost:3333/group/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setValue(data.data);
      });
  }, [id]);

  // receive emitted data from socket server
  socket.on('emittedText', ({ content }) => {
    setValue(content);
  });

  // emit editor data
  const emitEditorData = (content: any) => {
    socket.emit('editorText', { content: content, id: id });
  };

  return (
    <>
      <ReactQuill
        style={{ height: 300 }}
        placeholder="Type and share..."
        theme="snow"
        value={value}
        onChange={(content, delta, editor) => {
          emitEditorData(content);
        }}
      />
    </>
  );
};

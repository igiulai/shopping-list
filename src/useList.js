import { useState } from 'react';

export function useList() {
  // Initialize the list state
  const [list, setList] = useState([]);

  // Function to create a new item
  const createItem = () => {
    const newItem = {
      id: Date.now(), // unique id
      title: '',
      done: false,
    };
    setList((prevList) => [...prevList, newItem]);
  };

  // Function to set the title of an item
  const setItemTitle = (id, title) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, title } : item))
    );
  };

  // Function to toggle the done status of an item
  const toggleItem = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // Function to delete an item
  const deleteItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
import { useState } from 'react';

const list = [
  {
    id: 1,
    title: 'January 2020'
  },
  {
    id: 2,
    title: 'February 2020'
  },
  {
    id: 3,
    title: 'March 2020'
  },
  {
    id: 4,
    title: 'April 2020'
  },
  {
    id: 5,
    title: 'May 2020'
  },
];

const useHistory = () => {
  const [history, setHistory] = useState(list);

  const removeItems = (itemsToRemove) => {
    const withRemovedItems = history.filter(
      (item) => !itemsToRemove.includes(item.title)
    );

    setHistory(withRemovedItems);
  };

  return { history, removeItems };
};

export default useHistory;

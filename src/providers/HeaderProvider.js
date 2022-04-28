import { HeaderContext } from '../contexts/HeaderContext';
import { useState } from 'react';

export const HeaderProvider = ({ children }) => {
  const [status, setStatus] = useState('');

  const [open, setOpen] = useState({
    options: false,
    date: false,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });

  const handleOption = (opt, operation) => {
    setOptions((prev) => ({
      ...prev,
      [opt]: operation === 'i' ? options[opt] + 1 : options[opt] - 1,
    }));
  };

  const handleOpen = (value) => {
    setOpen((prev) => ({ ...!prev, [value]: !open[value] }));
  };

  const data = {
    status,
    setStatus,
    date,
    setDate,
    options,
    open,
    handleOption,
    handleOpen,
  };

  return (
    <HeaderContext.Provider value={data}>{children}</HeaderContext.Provider>
  );
};

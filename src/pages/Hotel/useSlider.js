import { useState } from 'react';

export const useSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (idx) => {
    setSliderIndex(idx);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSliderIndex(null);
    setIsOpen(false);
  };

  const handleMove = (direction) => {
    let sliderNumber;
    if (direction === 'l') {
      sliderNumber = sliderIndex === 0 ? 5 : sliderIndex - 1;
    } else {
      sliderNumber = sliderIndex === 5 ? 0 : sliderIndex + 1;
    }
    setSliderIndex(sliderNumber);
  };

  return {
    isOpen,
    handleClose,
    handleOpen,
    handleMove,
    sliderIndex,
  };
};

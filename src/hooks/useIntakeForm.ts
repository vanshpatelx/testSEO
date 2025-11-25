import { useState } from 'react';

export const useIntakeForm = (initialState?: string) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(initialState || '');

  const openForm = (state?: string) => {
    if (state) {
      setSelectedState(state);
    }
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return {
    isFormOpen,
    selectedState,
    openForm,
    closeForm
  };
};
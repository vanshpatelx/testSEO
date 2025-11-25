import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IntakeFormContextType {
  isFormOpen: boolean;
  selectedState: string;
  openForm: (state?: string) => void;
  closeForm: () => void;
}

const IntakeFormContext = createContext<IntakeFormContextType | undefined>(undefined);

export function IntakeFormProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  const openForm = (state?: string) => {
    if (state) {
      setSelectedState(state);
    }
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <IntakeFormContext.Provider value={{ isFormOpen, selectedState, openForm, closeForm }}>
      {children}
    </IntakeFormContext.Provider>
  );
}

export function useIntakeFormContext() {
  const context = useContext(IntakeFormContext);
  if (context === undefined) {
    throw new Error('useIntakeFormContext must be used within an IntakeFormProvider');
  }
  return context;
}

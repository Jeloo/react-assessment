import { useState } from 'react';

const useModals = () => {
  const [shownModals, setShownModals] = useState([]);

  const closeAll = () => {
    setShownModals([]);
  };

  const showModal = (modalId, closeOthers = true) => {
    setShownModals(closeOthers ? [modalId] : [...shownModals, modalId]);
  };

  const closeModal = (modalId) => {
    setShownModals(shownModals.filter((id) => modalId !== id));
  };

  const isShown = (modalId) => shownModals.includes(modalId);

  const anyShown = () => shownModals.length > 0;

  return {
    showModal,
    closeModal,
    isShown,
    closeAll,
    anyShown,
  };
};

export default useModals;

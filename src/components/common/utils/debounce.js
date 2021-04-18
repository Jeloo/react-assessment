const debounce = (func, wait = 5000) => {
  let timeout = null;

  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return () => {
    cleanup();

    timeout = setTimeout(func, wait);
  };
};

export default debounce;

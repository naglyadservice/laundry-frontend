function setColor(data, setStatus) {

  switch (data.status) {
    case 'available':
      setStatus(prev => ({
        ...prev,
        text: "Вільна",
        color: "green",
        disabled: false,
      }));
      break;

    case 'busy':
      setStatus(prev => ({
        ...prev,
        text: "Зайнята",
        color: "red",
      }));
      break;

    case 'unavailable':
      setStatus(prev => ({
        ...prev,
        text: "Не доступна",
        color: "red",
      }));
      break;

    default:
      setStatus(prev => ({
        ...prev,
        text: "Відключена",
        color: "gray",
      }));
  }

}

export { setColor };
export const trimString = (bodyText, trimLength) => {
  if (bodyText) {
    if (bodyText.length > trimLength) {
      return bodyText.substring(0, trimLength) + '...';
    }
  }

  return bodyText;
};

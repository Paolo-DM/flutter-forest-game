function getRandom(max, min) {
  return Math.random() * (max - min + 1) + min;
}

export { getRandom };

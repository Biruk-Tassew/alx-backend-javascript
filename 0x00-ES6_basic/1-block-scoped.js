export default function taskBlock(trueOrFalse) {
  const t = false;
  const t2 = true;

  if (trueOrFalse) {
    const t = true; 
    const t2 = false;
  }

  return [t, t2];
}

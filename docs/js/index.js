window.addEventListener('load', () => {
  const inputResult = document.getElementById('Result');
  const inputR = document.getElementById('R');
  const inputM = document.getElementById('M');
  const inputB = document.getElementById('B');
  const inputLevel = document.getElementById('Level');

  const calculateState = function() {
    const R = +inputR.value;
    const M = +inputM.value;
    const B = +inputB.value;
    const level = +inputLevel.value;
    inputResult.value = Math.floor(((M - B)/R) * level + B);
  };

  inputR.addEventListener('input', calculateState);
  inputM.addEventListener('input', calculateState);
  inputB.addEventListener('input', calculateState);
  inputLevel.addEventListener('input', calculateState);

  calculateState();
});
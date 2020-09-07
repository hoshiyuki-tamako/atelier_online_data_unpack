// state calculate
window.addEventListener('load', () => {
  const inputR = document.getElementById('status-r');
  const inputM = document.getElementById('status-m');
  const inputB = document.getElementById('status-b');
  const inputLevel = document.getElementById('status-level');
  const inputResult = document.getElementById('status-result');

  const calculate = function() {
    const R = +inputR.value;
    const M = +inputM.value;
    const B = +inputB.value;
    const level = +inputLevel.value;
    inputResult.value = Math.floor(((M - B)/R) * level + B);
  };

  inputR.addEventListener('input', calculate);
  inputM.addEventListener('input', calculate);
  inputB.addEventListener('input', calculate);
  inputLevel.addEventListener('input', calculate);

  calculate();
});

// sub calculate
window.addEventListener('load', () => {
  const inputV = document.getElementById('sub-status-v');
  const inputResult = document.getElementById('sub-status-result');

  const calculate = function() {
    const V = +inputV.value;
    inputResult.value = Math.floor(V * 0.05);
  };

  inputV.addEventListener('input', calculate);

  calculate();
});

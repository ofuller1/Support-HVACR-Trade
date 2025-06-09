// Smart Thermostat ROI Calculator
window.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('roi-form');
  if (!form) return;
  var results = document.getElementById('roi-results');
  var annualEl = document.getElementById('annual-savings');
  var paybackEl = document.getElementById('payback-period');
  var roiEl = document.getElementById('roi-value');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var monthly = parseFloat(document.getElementById('monthly').value) || 0;
    var savingsPercent = parseFloat(document.getElementById('savings').value) || 0;
    var cost = parseFloat(document.getElementById('thermostat-cost').value) || 0;
    if (monthly <= 0 || savingsPercent <= 0 || cost <= 0) {
      results.style.display = 'none';
      return;
    }
    var monthlySavings = monthly * (savingsPercent / 100);
    var annualSavings = monthlySavings * 12;
    var paybackMonths = cost / monthlySavings;
    var roi = ((annualSavings - cost) / cost) * 100;

    annualEl.textContent = 'Estimated annual savings: $' + annualSavings.toFixed(2);
    paybackEl.textContent = 'Payback period: ' + paybackMonths.toFixed(1) + ' months';
    roiEl.textContent = 'Estimated ROI: ' + roi.toFixed(1) + '%';
    results.style.display = 'block';
  });
});

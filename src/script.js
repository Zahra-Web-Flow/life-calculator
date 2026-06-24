function calculate(unit) {
    const age = parseInt(document.getElementById('ageInput').value);
    const demo = document.getElementById('demo');
    
    if (!age || age < 0) {
        demo.innerHTML = '<p style="color: red; font-size: 14px;">Invalid input! ⚠️</p>';
        return;
    }

    let result = 0;
    const multipliers = { 'Years': 1, 'Months': 12, 'Days': 365, 'Hours': 8760, 'Minutes': 525600, 'Seconds': 31536000 };
    result = age * (multipliers[unit] || 1);

    const birthYearAD = (2026 - age) - 1; 
    const birthYearSolar = birthYearAD - 621;

    demo.innerHTML = 
        '<div style="text-align: center; padding: 5px;">' +
            '<div style="color: #6b21a8; font-size: 20px; font-weight: bold;">Age in ' + unit + ':</div>' +
            '<div style="color: #db2777; font-size: 35px; font-weight: 900; margin: 2px 0;">' + result.toLocaleString() + '</div>' +
            '<div style="border-top: 1px solid #e9d5ff; padding-top: 4px; font-size: 16px; color: #7e22ce; display: flex; justify-content: center; gap: 15px;">' +
                '<span>AD: <b>' + birthYearAD + '</b></span>' +
                '<span>Solar: <b>' + birthYearSolar + '</b></span>' +
            '</div>' +
        '</div>';
}
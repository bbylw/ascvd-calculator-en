let currentLang = 'en';

// 语言切换功能
function initLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    
    // 先尝试从localStorage获取语言设置
    let savedLang = localStorage.getItem('preferred-language');
    
    if (!savedLang) {
        // 如果没有保存的语言设置，则使用浏览器语言
        const userLang = navigator.language || navigator.userLanguage;
        savedLang = userLang.split('-')[0];
        
        // 如果不支持该语言，默认使用英语
        if (!i18n[savedLang]) savedLang = 'en';
    }
    
    currentLang = savedLang;
    languageSelect.value = currentLang;
    updateLanguage(currentLang);

    // 监听语言切换
    languageSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('preferred-language', currentLang);
        updateLanguage(currentLang);
    });
}

// 更新页面文本
function updateLanguage(lang) {
    try {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            try {
                const key = element.getAttribute('data-i18n');
                const translation = getNestedTranslation(i18n[lang], key);
                if (translation) {
                    if (element.tagName === 'INPUT' && element.type === 'submit') {
                        element.value = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            } catch (err) {
                console.error(`Translation error for key: ${key}`, err);
            }
        });
    } catch (err) {
        console.error('Language update failed:', err);
        // 回退到英语
        currentLang = 'en';
    }
}

// 获取嵌套的翻译值
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
    }, obj);
}

// 修改显示结果函数以支持多语言
function displayResult(risk, data) {
    const resultDiv = document.getElementById('result');
    const riskScore = document.getElementById('riskScore');
    const riskLevel = document.getElementById('riskLevel');
    
    resultDiv.classList.remove('hidden');
    riskScore.textContent = risk.toFixed(1);
    
    const riskAdvice = getRiskAdvice(risk, data);
    
    // 使用当前语言显示风险等级
    const translations = i18n[currentLang].result.levels;
    let adviceHtml = `<div class="${riskAdvice.level.toLowerCase().replace(/\s+/g, '-')}-risk">`;
    adviceHtml += `<h3>${translations[riskAdvice.level.toLowerCase()]}</h3><ul>`;
    
    riskAdvice.advice.forEach(item => {
        if (typeof item === 'string') {
            const adviceItems = item.split('\n');
            adviceItems.forEach(adviceItem => {
                if (adviceItem.trim()) {
                    // 处理指南提示的特殊格式
                    if (adviceItem.startsWith('•')) {
                        adviceHtml += `<li style="margin-left: 20px;">${adviceItem}</li>`;
                    } else {
                        adviceHtml += `<li>${adviceItem}</li>`;
                    }
                }
            });
        }
    });
    
    adviceHtml += '</ul></div>';
    
    riskLevel.innerHTML = adviceHtml;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// 添加表单数据保持功能
function saveFormData() {
    const formData = {
        age: document.getElementById('age').value,
        sex: document.getElementById('sex').value,
        race: document.getElementById('race').value,
        totalChol: document.getElementById('totalChol').value,
        hdl: document.getElementById('hdl').value,
        systolic: document.getElementById('systolic').value,
        bpTreat: document.querySelector('input[name="bpTreat"]:checked')?.value,
        diabetes: document.querySelector('input[name="diabetes"]:checked')?.value,
        smoker: document.querySelector('input[name="smoker"]:checked')?.value
    };
    
    sessionStorage.setItem('formData', JSON.stringify(formData));
}

// 恢复表单数据
function restoreFormData() {
    const savedData = sessionStorage.getItem('formData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                const element = document.getElementById(key);
                if (element) {
                    element.value = value;
                } else {
                    // 处理单选按钮
                    const radio = document.querySelector(`input[name="${key}"][value="${value}"]`);
                    if (radio) radio.checked = true;
                }
            }
        });
    }
}

// 在页面加载时恢复数据
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    restoreFormData();
});

// 在表单输入时保存数据
document.getElementById('riskForm').addEventListener('input', saveFormData);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
});

// 修改表单提交处理
document.getElementById('riskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    try {
        // 收集表单数据
        const data = {
            age: document.getElementById('age').value,
            sex: document.getElementById('sex').value,
            race: document.getElementById('race').value,
            totalChol: document.getElementById('totalChol').value,
            hdl: document.getElementById('hdl').value,
            systolic: document.getElementById('systolic').value,
            bpTreat: document.querySelector('input[name="bpTreat"]:checked').value,
            diabetes: document.querySelector('input[name="diabetes"]:checked').value,
            smoker: document.querySelector('input[name="smoker"]:checked').value
        };
        
        // 验证数据
        if (!validateData(data)) {
            alert(i18n[currentLang].validation.error);
            return;
        }
        
        // 计算风险
        const risk = calculateRisk(data);
        displayResult(risk, data);
    } catch (err) {
        console.error('Form submission error:', err);
        alert(i18n[currentLang].error.general);
    }
});

// 添加数据验证函数
function validateData(data) {
    if (isNaN(data.age) || data.age < 40 || data.age > 79) return false;
    if (isNaN(data.systolic) || data.systolic < 90 || data.systolic > 200) return false;
    if (isNaN(data.totalChol) || data.totalChol <= 0) return false;
    if (isNaN(data.hdl) || data.hdl <= 0) return false;
    return true;
}

// 需要添加单位转换处理函数
function handleUnitChange(field, unit) {
    const input = document.getElementById(field);
    const value = parseFloat(input.value);
    if (isNaN(value)) return;
    
    if (unit === 'mmoll') {
        input.value = (value / 38.67).toFixed(2); // mg/dL to mmol/L
    } else {
        input.value = (value * 38.67).toFixed(0); // mmol/L to mg/dL
    }
}

// 修改风险建议函数
function getRiskAdvice(risk, data) {
    let level;
    let advice = [];
    
    // 基于风险水平确定建议
    if (risk < 5) {
        level = "low";
        advice.push(i18n[currentLang].advice.lowRisk.guidelines_notice);
        advice.push(i18n[currentLang].advice.lowRisk.lifestyle);
        
        if (data.bpTreat === 'yes') {
            advice.push(i18n[currentLang].advice.lowRisk.bp_treated);
        } else if (parseFloat(data.systolic) > 130) {
            advice.push(i18n[currentLang].advice.lowRisk.bp_untreated);
        }

        if (data.diabetes === 'yes') {
            advice.push(i18n[currentLang].advice.lowRisk.diabetes);
        }

        advice.push(i18n[currentLang].advice.lowRisk.lipids);
    } else if (risk < 7.5) {
        level = "moderate";
        advice.push(i18n[currentLang].advice.moderate);
        advice.push(i18n[currentLang].advice.lowRisk.guidelines_notice);
        advice.push(i18n[currentLang].advice.lowRisk.lifestyle);
        
        if (data.bpTreat === 'yes') {
            advice.push(i18n[currentLang].advice.lowRisk.bp_treated);
        }
        if (data.diabetes === 'yes') {
            advice.push(i18n[currentLang].advice.lowRisk.diabetes);
        }
        advice.push(i18n[currentLang].advice.lowRisk.lipids);
    } else {
        level = "high";
        advice.push(i18n[currentLang].advice.high);
        advice.push(i18n[currentLang].advice.lowRisk.guidelines_notice);
        advice.push(i18n[currentLang].advice.lowRisk.lifestyle);
        
        if (data.bpTreat === 'yes') {
            advice.push(i18n[currentLang].advice.lowRisk.bp_treated);
        }
        if (data.diabetes === 'yes') {
            advice.push(i18n[currentLang].advice.lowRisk.diabetes);
        }
        advice.push(i18n[currentLang].advice.lowRisk.lipids);
    }
    
    return {
        level: level,
        advice: advice
    };
}

// 修改风险计算函数
function calculateRisk(data) {
    try {
        // 数据验证
        if (!validateData(data)) {
            throw new Error(i18n[currentLang].error.validation);
        }

        // 将输入值转换为数值
        const age = parseFloat(data.age);
        const systolic = parseFloat(data.systolic);
        // 确保胆固醇值使用正确的单位（mg/dL）
        let totalChol = parseFloat(data.totalChol);
        let hdl = parseFloat(data.hdl);
        
        // 如果当前单位是mmol/L，转换为mg/dL
        const totalCholUnit = document.getElementById('totalCholUnit').value;
        const hdlUnit = document.getElementById('hdlUnit').value;
        if (totalCholUnit === 'mmoll') {
            totalChol = totalChol * 38.67;
        }
        if (hdlUnit === 'mmoll') {
            hdl = hdl * 38.67;
        }

        const isSmoker = data.smoker === 'yes';
        const hasDiabetes = data.diabetes === 'yes';
        const onBPMeds = data.bpTreat === 'yes';
        const race = data.race;
        const sex = data.sex;

        // 选择正确的系数集
        let raceCoef = race;
        if (race === 'asian' || race === 'other') {
            raceCoef = 'white'; // 亚裔和其他种族使用白人的系数
        }

        // 获取对应的系数
        const coef = coefficients[raceCoef][sex];

        // 计算自然对数值
        const lnAge = Math.log(age);
        const lnTotalChol = Math.log(totalChol);
        const lnHDL = Math.log(hdl);
        const lnSBP = Math.log(systolic);

        // 计算风险得分
        let sum = 0;

        // 添加基础项
        sum += coef.age * lnAge;
        if (coef.ageSquared) {
            sum += coef.ageSquared * Math.pow(lnAge, 2);
        }
        sum += coef.totalChol * lnTotalChol;
        if (coef.ageTC) {
            sum += coef.ageTC * lnAge * lnTotalChol;
        }
        sum += coef.hdl * lnHDL;
        if (coef.ageHDL) {
            sum += coef.ageHDL * lnAge * lnHDL;
        }
        sum += coef.systolic * lnSBP;
        if (coef.ageSBP) {
            sum += coef.ageSBP * lnAge * lnSBP;
        }

        // 添加条件项
        if (onBPMeds) {
            sum += coef.bpTreat;
            if (coef.ageTreat) {
                sum += coef.ageTreat * lnAge;
            }
        }
        if (isSmoker) {
            sum += coef.smoker;
            if (coef.ageSmoker) {
                sum += coef.ageSmoker * lnAge;
            }
        }
        if (hasDiabetes) {
            sum += coef.diabetes;
        }

        // 添加基线值
        sum += coef.baseline;

        // 计算10年风险
        let risk;
        if (raceCoef === 'white') {
            risk = 1 - Math.pow(0.9144, Math.exp(sum - 19.54));
        } else { // 非裔美国人
            risk = 1 - Math.pow(0.8954, Math.exp(sum - (-29.18)));
        }

        // 转换为百分比
        risk = risk * 100;
        
        // 确保结果在有效范围内
        risk = Math.min(Math.max(risk, 0), 100);
        
        console.log('Risk calculation details:', {
            age, totalChol, hdl, systolic,
            isSmoker, hasDiabetes, onBPMeds,
            race: raceCoef, sex,
            sum,
            risk
        });

        return parseFloat(risk.toFixed(1));
    } catch (err) {
        console.error('Risk calculation error:', err);
        throw new Error(i18n[currentLang].error.general);
    }
}

// 添加验证函数
function validateData(data) {
    const age = parseFloat(data.age);
    const systolic = parseFloat(data.systolic);
    const totalChol = parseFloat(data.totalChol);
    const hdl = parseFloat(data.hdl);

    if (age < 40 || age > 79) return false;
    if (systolic < 90 || systolic > 200) return false;
    if (totalChol <= 0 || hdl <= 0) return false;
    
    return true;
}

// 添加在文件开头
const coefficients = {
    white: {
        male: {
            age: 12.344,
            ageSquared: 0,
            totalChol: 11.853,
            ageTC: -2.664,
            hdl: -7.990,
            ageHDL: 1.769,
            systolic: 1.797,
            ageSBP: 0,
            bpTreat: 1.764,
            ageTreat: 0,
            smoker: 7.837,
            ageSmoker: -1.795,
            diabetes: 0.658,
            baseline: -29.799,
            meanSum: 61.18
        },
        female: {
            age: -29.799,
            ageSquared: 4.884,
            totalChol: 13.540,
            ageTC: -3.114,
            hdl: -13.578,
            ageHDL: 3.149,
            systolic: 2.019,
            ageSBP: 0,
            bpTreat: 2.019,
            ageTreat: 0,
            smoker: 7.574,
            ageSmoker: -1.665,
            diabetes: 0.661,
            baseline: -29.799,
            meanSum: 86.61
        }
    },
    aa: {
        male: {
            age: 2.469,
            ageSquared: 0,
            totalChol: 0.302,
            ageTC: 0,
            hdl: -0.307,
            ageHDL: 0,
            systolic: 1.916,
            ageSBP: 0,
            bpTreat: 1.809,
            ageTreat: 0,
            smoker: 0.549,
            ageSmoker: 0,
            diabetes: 0.645,
            baseline: -19.54,
            meanSum: 19.54
        },
        female: {
            age: 17.114,
            ageSquared: 0,
            totalChol: 0.940,
            ageTC: 0,
            hdl: -18.920,
            ageHDL: 4.475,
            systolic: 29.291,
            ageSBP: -6.432,
            bpTreat: 29.291,
            ageTreat: -6.432,
            smoker: 0.691,
            ageSmoker: 0,
            diabetes: 0.874,
            baseline: -86.61,
            meanSum: 86.61
        }
    }
}; 
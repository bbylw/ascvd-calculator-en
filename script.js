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

function getRiskAdvice(risk, data) {
    let level;
    let advice = [];
    
    if (risk < 5) {
        level = "low";
        advice.push(i18n[currentLang].advice.low);
    } else if (risk < 7.5) {
        level = "moderate";
        advice.push(i18n[currentLang].advice.moderate);
    } else {
        level = "high";
        advice.push(i18n[currentLang].advice.high);
    }
    
    return {
        level: level,
        advice: advice
    };
}

// 添加风险计算函数
function calculateRisk(data) {
    // 这里添加实际的风险计算逻辑
    const age = parseFloat(data.age);
    const systolic = parseFloat(data.systolic);
    const totalChol = parseFloat(data.totalChol);
    const hdl = parseFloat(data.hdl);
    
    // 示例计算逻辑，需要根据实际PCE算法修改
    let risk = (age * 0.1 + systolic * 0.01 + totalChol * 0.05 - hdl * 0.1);
    
    if (data.smoker === 'yes') risk *= 1.5;
    if (data.diabetes === 'yes') risk *= 1.4;
    if (data.bpTreat === 'yes') risk *= 1.2;
    
    return Math.min(Math.max(risk, 0), 100); // 确保结果在0-100之间
} 
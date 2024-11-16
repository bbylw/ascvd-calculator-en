import i18n from './i18n.js';

let currentLang = 'en';

// 语言切换功能
function initLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    
    // 设置初始语言
    const userLang = navigator.language || navigator.userLanguage;
    currentLang = userLang.split('-')[0];
    if (!i18n[currentLang]) currentLang = 'en';
    
    languageSelect.value = currentLang;
    updateLanguage(currentLang);

    languageSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
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

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
});

// 需要添加表单提交处理
document.getElementById('riskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // 计算风险
    const risk = calculateRisk(data);
    displayResult(risk, data);
});

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
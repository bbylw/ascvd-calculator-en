let currentLang = 'en';
let refreshing = false;

// 语言切换功能
function initLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    
    // 先尝试从localStorage获取语言设置
    let savedLang = localStorage.getItem('preferred-language');
    
    if (!savedLang) {
        // 如果没有保存的语言设置，则使用浏览器语言
        const userLang = navigator.language || navigator.userLanguage;
        savedLang = userLang.startsWith('zh') ? 'zh' : 'en';
    }
    
    // 确保语言选项有效（只允许中英文）
    currentLang = ['zh', 'en'].includes(savedLang) ? savedLang : 'en';
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

// 修改显示结果函数
function displayResults(risk, data) {
    const resultDiv = document.getElementById('result');
    const riskScoreSpan = document.getElementById('riskScore');
    
    // 清除之前的建议内容
    const oldAdvice = document.getElementById('adviceContainer');
    if (oldAdvice) {
        oldAdvice.remove();
    }

    // 显示风险分数
    riskScoreSpan.textContent = risk.toFixed(1);
    
    // 获取风险等级和建议
    const riskLevel = getRiskLevel(risk);
    const advice = i18n[currentLang].advice[riskLevel];
    
    // 创建建议容器
    const adviceContainer = document.createElement('div');
    adviceContainer.id = 'adviceContainer';
    
    // 创建建议内容
    const adviceSection = document.createElement('div');
    adviceSection.className = 'advice-section';
    
    // 构建完整的建议内容
    let adviceContent = `<div class="${riskLevel}">
        ${advice.content}
        ${data.diabetes === 'yes' ? advice.diabetes_addon : ''}
    </div>`;
    
    adviceSection.innerHTML = adviceContent;
    adviceContainer.appendChild(adviceSection);
    
    // 添加建议到结果区域
    resultDiv.appendChild(adviceContainer);
    resultDiv.classList.remove('hidden');
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
    
    // 添加更新检查
    handleServiceWorkerUpdate();
    
    // 更频繁地检查更新（每15分钟）
    setInterval(checkForUpdates, 900000);
});

// 在表单输入时保存数据
document.getElementById('riskForm').addEventListener('input', saveFormData);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
});

// 修改表单提交处理函数
document.getElementById('riskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    try {
        const formData = {
            age: document.getElementById('age').value,
            sex: document.getElementById('sex').value,
            race: document.getElementById('race').value,
            totalChol: document.getElementById('totalChol').value,
            hdl: document.getElementById('hdl').value,
            systolic: document.getElementById('systolic').value,
            smoker: document.querySelector('input[name="smoker"]:checked')?.value || 'no',
            diabetes: document.querySelector('input[name="diabetes"]:checked')?.value || 'no',
            bpTreat: document.querySelector('input[name="bpTreat"]:checked')?.value || 'no'
        };

        // 添加调试日志
        console.log('Form data:', formData);
        
        const risk = calculateRisk(formData);
        
        // 添加调试日志
        console.log('Calculated risk:', risk);
        
        // 显示结果
        const resultDiv = document.getElementById('result');
        const riskScoreSpan = document.getElementById('riskScore');
        const riskLevelDiv = document.getElementById('riskLevel');
        
        // 清除之前的建议内容
        const oldAdvice = document.getElementById('adviceContainer');
        if (oldAdvice) {
            oldAdvice.remove();
        }

        // 显示风险分数
        riskScoreSpan.textContent = risk.toFixed(1);
        
        // 获取建议
        const riskLevel = getRiskLevel(risk);
        const advice = i18n[currentLang].advice[riskLevel];
        
        // 创建建议容器
        const adviceContainer = document.createElement('div');
        adviceContainer.id = 'adviceContainer';
        
        // 添加每条建议
        ['guidelines_notice', 'lifestyle', 'bp', 'lipids'].forEach(section => {
            if (advice[section]) {
                const div = document.createElement('div');
                div.className = 'advice-section';
                div.innerHTML = `
                    <h4>${i18n[currentLang][section + '_title'] || section}</h4>
                    <div class="advice-content">
                        <pre>${advice[section]}</pre>
                    </div>
                `;
                adviceContainer.appendChild(div);
            }
        });
        
        // 如果有糖尿病，添加糖尿病建议
        if (formData.diabetes === 'yes' && advice.diabetes) {
            const div = document.createElement('div');
            div.className = 'advice-section';
            div.innerHTML = `
                <h4>${i18n[currentLang].diabetes_title}</h4>
                <div class="advice-content">
                    <pre>${advice.diabetes}</pre>
                </div>
            `;
            adviceContainer.appendChild(div);
        }
        
        // 添加建议到结果区域
        resultDiv.appendChild(adviceContainer);
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });

    } catch (err) {
        console.error('Form submission error:', err);
        alert(i18n[currentLang].error.general);
    }
});

// 修改数据验证函数
function validateData(data) {
    // 扩展年龄范围到20-90岁，但会给出警告
    if (isNaN(data.age) || data.age < 20 || data.age > 90) return false;
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

// 修改获取建议函数
function getRiskAdvice(risk, data) {
    const level = getRiskLevel(risk);
    const advice = i18n[currentLang].advice[level];
    const adviceArray = [];

    // 添加风险等级说明
    adviceArray.push({
        title: i18n[currentLang].result.levels[level.replace('Risk', '').toLowerCase()],
        content: i18n[currentLang].risk_explanation[level.replace('Risk', '').toLowerCase()]
    });

    // 添加指南建议
    if (advice.guidelines_notice) {
        adviceArray.push({
            title: i18n[currentLang].guidelines_title,
            content: advice.guidelines_notice
        });
    }

    // 添加生活方式建议
    if (advice.lifestyle) {
        adviceArray.push({
            title: i18n[currentLang].lifestyle_title,
            content: advice.lifestyle
        });
    }

    // 添加血压建议
    if (advice.bp) {
        adviceArray.push({
            title: i18n[currentLang].bp_title,
            content: advice.bp
        });
    }

    // 添加血脂建议
    if (advice.lipids) {
        adviceArray.push({
            title: i18n[currentLang].lipids_title,
            content: advice.lipids
        });
    }

    // 如果有糖尿病，添加糖尿病建议
    if (data.diabetes === 'yes' && advice.diabetes) {
        adviceArray.push({
            title: i18n[currentLang].diabetes_title,
            content: advice.diabetes
        });
    }

    return {
        level: level,
        adviceArray: adviceArray
    };
}

// 修改风险计算函数
function calculateRisk(data) {
    try {
        // 提取并验证输入数据
        const { sex, race, smoker, diabetes, bpTreat } = data;
        const isSmoker = smoker === 'yes';
        const hasDiabetes = diabetes === 'yes';
        const onBPMeds = bpTreat === 'yes';

        // 单位转换：mmol/L -> mg/dL
        const totalCholUnit = document.getElementById('totalCholUnit').value;
        const hdlUnit = document.getElementById('hdlUnit').value;
        let totalCholValue = parseFloat(data.totalChol);
        let hdlValue = parseFloat(data.hdl);
        let systolicValue = parseFloat(data.systolic);
        let ageValue = parseFloat(data.age);
        
        if (totalCholUnit === 'mmoll') {
            totalCholValue = totalCholValue * 38.67;
        }
        if (hdlUnit === 'mmoll') {
            hdlValue = hdlValue * 38.67;
        }

        // 验证数据
        if (!validateData({
            age: ageValue,
            systolic: systolicValue,
            totalChol: totalCholValue,
            hdl: hdlValue
        })) {
            throw new Error(i18n[currentLang].validation.error);
        }

        // 年轻高血压风险调整
        let riskMultiplier = 1.0;
        let baselineRiskAdjustment = 0;

        // 对45岁以下未服药的高血压患者进行特殊处理
        if (ageValue < 45 && !onBPMeds) {
            // 根据血压水平调整基线风险和乘数
            if (systolicValue >= 180) {  // 极重度高血压
                riskMultiplier = 2.0;
                baselineRiskAdjustment = 5.0;  // 添加基线风险
            } else if (systolicValue >= 160) {  // 重度高血压
                riskMultiplier = 1.75;
                baselineRiskAdjustment = 3.0;
            } else if (systolicValue >= 140) {  // 中度高血压
                riskMultiplier = 1.5;
                baselineRiskAdjustment = 1.5;
            }
        }

        // 年龄范围调整
        let ageForCalculation = ageValue;
        if (ageValue < 40) {
            ageForCalculation = 40;
            // 对于非常年轻的患者，增加基线风险调整
            if (ageValue < 30) {
                baselineRiskAdjustment *= 1.5;
            }
        } else if (ageValue > 79) {
            ageForCalculation = 79;
        }

        // 计算自然对数值
        const lnAge = Math.log(ageForCalculation);
        const lnTotalChol = Math.log(totalCholValue);
        const lnHDL = Math.log(hdlValue);
        const lnSBP = Math.log(systolicValue);

        let sum = 0;
        let S0 = 0;

        // 根据2023 ACC/AHA指南更新的系数计算
        if (race === 'white' || race === 'asian' || race === 'other') {
            if (sex === 'male') {
                // 白人/亚裔男性
                sum = (12.344 * lnAge) +
                      (11.853 * lnTotalChol) +
                      (-2.664 * lnAge * lnTotalChol) +
                      (-7.990 * lnHDL) +
                      (1.769 * lnAge * lnHDL) +
                      (1.764 * lnSBP) +
                      (onBPMeds ? 1.797 : 0) +
                      (isSmoker ? (7.837 - 1.795 * lnAge) : 0) +
                      (hasDiabetes ? 0.658 : 0) +
                      (-61.18);
                S0 = 0.9144;
            } else {
                // 白人/亚裔女性
                sum = (-29.799 * lnAge) +
                      (4.884 * Math.pow(lnAge, 2)) +
                      (13.540 * lnTotalChol) +
                      (-3.114 * lnAge * lnTotalChol) +
                      (-13.578 * lnHDL) +
                      (3.149 * lnAge * lnHDL) +
                      (2.019 * lnSBP) +
                      (onBPMeds ? 1.957 : 0) +
                      (isSmoker ? (7.574 - 1.665 * lnAge) : 0) +
                      (hasDiabetes ? 0.661 : 0) +
                      (-29.18);
                S0 = 0.9665;
            }
        } else { // African American
            if (sex === 'male') {
                // 非美国人男性
                sum = (2.469 * lnAge) +
                      (0.302 * lnTotalChol) +
                      (-0.307 * lnHDL) +
                      (1.916 * lnSBP) +
                      (onBPMeds ? 1.809 : 0) +
                      (isSmoker ? 0.549 : 0) +
                      (hasDiabetes ? 0.645 : 0) +
                      (-19.54);
                S0 = 0.8954;
            } else {
                // 非裔美国人女性
                sum = (17.114 * lnAge) +
                      (0.940 * lnTotalChol) +
                      (-18.920 * lnHDL) +
                      (4.475 * lnAge * lnHDL) +
                      (27.820 * lnSBP) +
                      (-6.087 * lnAge * lnSBP) +
                      (onBPMeds ? 0.691 : 0) +
                      (isSmoker ? 0.874 : 0) +
                      (hasDiabetes ? 0.874 : 0) +
                      (-86.61);
                S0 = 0.9533;
            }
        }

        // 计算基础风险
        let risk = (1 - Math.pow(S0, Math.exp(sum))) * 100;

        // 应用风险调整
        if (riskMultiplier > 1 || baselineRiskAdjustment > 0) {
            // 先添加基线风险，再应用乘数
            risk = (risk + baselineRiskAdjustment) * riskMultiplier;
        }

        // 确保结果在有效范围内
        let finalRisk = Math.min(Math.max(risk, 0), 100);

        // 添加详细的调试日志
        console.log('PCE Risk calculation details:', {
            input: {
                originalAge: ageValue,
                calculationAge: ageForCalculation,
                sex,
                race,
                totalChol: totalCholValue,
                hdl: hdlValue,
                systolic: systolicValue,
                isSmoker,
                hasDiabetes,
                onBPMeds
            },
            riskAdjustments: {
                riskMultiplier,
                baselineRiskAdjustment,
                systolicLevel: systolicValue >= 180 ? 'Severe' : 
                             systolicValue >= 160 ? 'High' : 
                             systolicValue >= 140 ? 'Moderate' : 'Normal'
            },
            calculation: {
                baseRisk: (1 - Math.pow(S0, Math.exp(sum))) * 100,
                adjustedRisk: risk,
                finalRisk: finalRisk
            }
        });

        return finalRisk;

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

// 检查更新函数
function checkForUpdates() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.update()
                .then(() => {
                    console.log('Service Worker 更新检查完成');
                })
                .catch(err => {
                    console.error('Service Worker 更新检查失败:', err);
                });
        });
    }
}

// 处理 Service Worker 更新
function handleServiceWorkerUpdate() {
    if ('serviceWorker' in navigator) {
        // 注册 Service Worker
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                // 监听更新
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            showUpdateNotification();
                        }
                    });
                });

                // 立即检查更新
                registration.update();
            })
            .catch(err => {
                console.error('Service Worker 注册失败:', err);
            });

        // 监听控制变更
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
                refreshing = true;
                window.location.reload();
            }
        });
    }
}

// 显示更新提示
function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
        <p>新版本可用！</p>
        <button onclick="updateServiceWorker()">立即更新</button>
    `;
    document.body.appendChild(notification);
}

// 更新 Service Worker
function updateServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            if (registration.waiting) {
                registration.waiting.postMessage('skipWaiting');
            }
        });
    }
}

// 修改风险等级判断函数
function getRiskLevel(risk) {
    if (isNaN(risk) || risk === null) {
        console.error('Invalid risk value:', risk);
        throw new Error(i18n[currentLang].error.validation);
    }
    
    // 根据2023 ACC/AHA指南更新的风险分层标准
    if (risk < 5) {
        return 'lowRisk';
    } else if (risk >= 5 && risk < 7.5) {
        return 'moderateRisk';
    } else {
        return 'highRisk';
    }
}

function displayAdvice(advice, container) {
    const section = document.createElement('div');
    section.className = 'advice-section';
    
    const title = document.createElement('h4');
    title.textContent = advice.title;
    
    const content = document.createElement('div');
    content.className = 'advice-content';
    content.innerHTML = advice.content
        .replace(/<low-risk>/g, '<div class="low-risk">')
        .replace(/<moderate-risk>/g, '<div class="moderate-risk">')
        .replace(/<high-risk>/g, '<div class="high-risk">')
        .replace(/<\/(low|moderate|high)-risk>/g, '</div>');
    
    section.appendChild(title);
    section.appendChild(content);
    container.appendChild(section);
} 
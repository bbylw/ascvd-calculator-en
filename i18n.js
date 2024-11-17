const i18n = {
    en: {
        title: "PCE Risk Calculator",
        description: "10-year ASCVD Risk Assessment Calculator",
        form: {
            age: "Age",
            gender: {
                label: "Gender",
                male: "Male",
                female: "Female"
            },
            race: {
                label: "Race",
                white: "White",
                aa: "African American",
                other: "Other",
                asian: "Asian"
            },
            systolic: "Systolic Blood Pressure (mmHg)",
            cholesterol: {
                total: "Total Cholesterol",
                hdl: "HDL Cholesterol"
            },
            diabetes: {
                label: "Diabetes",
                yes: "Yes",
                no: "No"
            },
            smoker: {
                label: "Smoker",
                yes: "Yes",
                no: "No"
            },
            calculate: "Calculate Risk",
            units: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            bpMedication: {
                label: "Are you currently taking blood pressure medication",
                hint: "If you are currently taking blood pressure medication, please select 'Yes'"
            },
            asian: "Asian"
        },
        result: {
            title: "Results",
            risk: "10-year ASCVD Risk:",
            levels: {
                low: "Low Risk",
                moderate: "Moderate Risk",
                high: "High Risk"
            }
        },
        guidelines: {
            title: "Important Guidelines",
            // ... 其他指南相关翻译
        },
        advice: {
            lowRisk: {
                content: `Based on latest guidelines (2024 ADA Standards of Care, 2023 ACC/AHA Prevention Guidelines):

RISK ASSESSMENT:
Your 10-year cardiovascular disease risk is <5%, which indicates low risk.

RECOMMENDATIONS:
1. Lifestyle Management:
• Physical activity: 150-300 min/week moderate or 75-150 min/week vigorous
• Mediterranean or DASH diet
• Sodium <2300mg/day
• BMI target: 18.5-24.9 kg/m²
• Smoking cessation if applicable

2. Blood Pressure Management:
• Target: <130/80 mmHg
• Lifestyle intervention focused
• Regular BP monitoring
• Follow-up every 3-6 months

3. Lipids Management:
• LDL-C target: <100 mg/dL (<2.6 mmol/L)
• Lifestyle intervention focused
• Consider moderate-intensity statin
• Annual CV risk assessment`,
                diabetes_addon: `
4. Diabetes Management:
• HbA1c target: <7.0%
• FPG: 4.4-7.2 mmol/L (80-130 mg/dL)
• PPG: <10.0 mmol/L (<180 mg/dL)
• First-line: Metformin
• Monitor HbA1c every 3-6 months`
            },
            moderateRisk: {
                content: `Based on latest guidelines (2024 ADA Standards of Care, 2023 ACC/AHA Prevention Guidelines):

RISK ASSESSMENT:
Your 10-year cardiovascular disease risk is 5-7.5%, which indicates moderate risk.

RECOMMENDATIONS:
1. Lifestyle Management:
• Structured exercise program: >200 min/week
• Strict Mediterranean or DASH diet
• Sodium <2000mg/day
• BMI target: 18.5-24.9 kg/m²
• Smoking cessation required

2. Blood Pressure Management:
• Target: <130/80 mmHg
• Consider combination therapy
• Regular BP monitoring
• Monthly follow-up

3. Lipids Management:
• LDL-C target: <70 mg/dL (<1.8 mmol/L)
• Moderate to high-intensity statin
• Consider ezetimibe if needed
• Monitor every 3-6 months`,
                diabetes_addon: `
4. Diabetes Management:
• HbA1c target: <7.0%
• Consider early combination therapy
• GLP-1 RA or SGLT2i preferred
• Monitor HbA1c every 3 months`
            },
            highRisk: {
                content: `Based on latest guidelines (2024 ADA Standards of Care, 2023 ACC/AHA Prevention Guidelines):

RISK ASSESSMENT:
Your 10-year cardiovascular disease risk is >7.5%, which indicates high risk.

RECOMMENDATIONS:
1. Lifestyle Management:
• Intensive exercise program: >300 min/week
• Strict Mediterranean or DASH diet
• Sodium <2000mg/day
• BMI target: 18.5-24.9 kg/m²
• Immediate smoking cessation required

2. Blood Pressure Management:
• Target: <130/80 mmHg
• Initiate combination therapy
• Weekly BP monitoring
• Regular organ damage assessment

3. Lipids Management:
• LDL-C target: <55 mg/dL (<1.4 mmol/L)
• High-intensity statin
• Add ezetimibe if needed
• Consider PCSK9 inhibitors
• Monitor every 3 months`,
                diabetes_addon: `
4. Diabetes Management:
• HbA1c target: <7.0% (individualized: 6.5-8.0%)
• Early combination therapy:
  - GLP-1 RA
  - SGLT2i
• Monitor HbA1c every 2-3 months
• Close complication monitoring`
            }
        },
        error: {
            general: "An error occurred. Please try again.",
            validation: "Please check your input values.",
            age: "Age must be between 40 and 79 years.",
            systolic: "Systolic blood pressure must be between 90 and 200 mmHg.",
            cholesterol: "Please enter valid cholesterol values.",
            required: "All fields are required."
        },
        validation: {
            error: "Please enter valid values in all fields."
        },
        guidelines_title: "Important Guidelines",
        lifestyle_title: "Lifestyle Recommendations",
        bp_title: "Blood Pressure Management",
        diabetes_title: "Diabetes Management",
        lipids_title: "Lipid Management",
        risk_explanation: {
            low: "Your 10-year cardiovascular risk is <5%, which is considered low risk. Recommendations:\n" +
                "• Maintain healthy lifestyle\n" +
                "• Regular risk assessment\n" +
                "• Follow-up as advised",
            moderate: "Your 10-year cardiovascular risk is 5-7.5%, which is considered moderate risk. Recommendations:\n" +
                "• Actively improve lifestyle\n" +
                "• Strict control of risk factors\n" +
                "• Follow-up every 3-6 months",
            high: "Your 10-year cardiovascular risk is >7.5%, which is considered high risk. Recommendations:\n" +
                "• Seek medical attention immediately\n" +
                "• Strictly follow medical advice\n" +
                "• Close monitoring of all indicators\n" +
                "• Follow-up every 1-3 months"
        }
    },
    zh: {
        title: "PCE风险评估计算器",
        description: "评估10年ASCVD风险的在线计算器",
        form: {
            age: "年龄",
            gender: {
                label: "性别",
                male: "男",
                female: "女"
            },
            race: {
                label: "种族",
                white: "白人",
                aa: "非裔美国人",
                other: "其他",
                asian: "亚洲人"
            },
            systolic: "收缩压 (mmHg)",
            cholesterol: {
                total: "总胆固醇",
                hdl: "HDL胆固醇"
            },
            diabetes: {
                label: "糖尿病",
                yes: "是",
                no: "否"
            },
            smoker: {
                label: "吸烟",
                yes: "是",
                no: "否"
            },
            calculate: "计算风险",
            units: {
                mgdl: "mg/dL",
                mmoll: "mmol/L",
                conversion_hint: "点击可切换单位",
                total_chol_hint: "总胆固醇参考范围：",
                hdl_chol_hint: "HDL胆固醇参考范围："
            },
            bpMedication: {
                label: "您目前是否服用降压药物",
                hint: "如果您目前正在服用降压药物，请选择\"是\""
            },
            asian: "亚洲人"
        },
        result: {
            title: "计算结果",
            risk: "10年ASCVD风险:",
            levels: {
                low: "低风险",
                moderate: "中等风险",
                high: "高风险"
            }
        },
        guidelines: {
            title: "重要指南",
            // ... 其他指南相关翻译
        },
        advice: {
            lowRisk: {
                content: `基于最新指南（2024 ADA糖尿病诊疗标准，2023 ACC/AHA心血管疾病预防指南）：

风险评估：
您的10年心血管疾病风险<5%，属于低风险人群。

建议：
1. 生活方式管理：
• 体育锻炼：每周150-300分钟中等强度或75-150分钟高强度
• 地中海或DASH饮食
• 钠摄入<2300mg/日
• BMI目标：18.5-24.9 kg/m²
• 戒烟（如适用）

2. 血压管理：
• 目标：<130/80 mmHg
• 以生活方式干预为主
• 定期监测血压
• 每3-6个月随访一次

3. 血脂管理：
• LDL-C目标：<100 mg/dL (<2.6 mmol/L)
• 以生活方式干预为主
• 考虑中等强度他汀类药物
• 每年评估心血管风险`,
                diabetes_addon: `
4. 血糖管理：
• HbA1c目标：<7.0%
• 空腹血糖：4.4-7.2 mmol/L
• 餐后血糖：<10.0 mmol/L
• 一线用药：二甲双胍
• 每3-6个月监测HbA1c`
            },
            moderateRisk: {
                content: `基于最新指南（2024 ADA糖尿病诊疗标准，2023 ACC/AHA心血管疾病预防指南）：

风险评估：
您的10年心血管疾病风险5-7.5%，属于中等风险人群。

建议：
1. 生活方式管理：
• 体育锻炼：每周>200分钟中等强度或>100分钟高强度
• 严格执行地中海或DASH饮食
• 钠摄入<2000mg/日
• BMI目标：18.5-24.9 kg/m²
• 必须戒烟限酒

2. 血压管理：
• 目标：<130/80 mmHg
• 启动降压治疗
• 首选ACEi/ARB、CCB或噻嗪类利尿剂
• 每月监测血压直至达标
• 每3个月随访评估

3. 血脂管理：
• LDL-C目标：<70 mg/dL (<1.8 mmol/L)
• 中高强度他汀（如阿托伐他汀20-40mg）
• 未达标可考虑依折麦布
• 每4-6个月监测血脂`,
                diabetes_addon: `
4. 血糖管理：
• HbA1c目标：<7.0%
• 空腹血糖：4.4-7.2 mmol/L
• 餐后血糖：<10.0 mmol/L
• 二甲双胍+GLP-1 RA或SGLT2i
• 每3个月监测HbA1c`
            },
            highRisk: {
                content: `基于最新指南（2024 ADA糖尿病诊疗标准，2023 ACC/AHA心血管疾病预防指南）：

风险评估：
您的10年心血管疾病风险>7.5%，属于高风险人群。

建议：
1. 生活方式管理：
• 体育锻炼：每周>300分钟中等强度或>150分钟高强度
• 严格执行地中海或DASH饮食
• 钠摄入<2000mg/日
• BMI目标：18.5-24.9 kg/m²
• 必须立即戒烟限酒

2. 血压管理：
• 目标：<130/80 mmHg
• 立即启动联合降压治疗
• 首选ACEi/ARB+CCB+噻嗪类利尿剂
• 每周监测血压
• 定期评估靶器官损害

3. 血脂管理：
• LDL-C目标：<55 mg/dL (<1.4 mmol/L)
• 高强度他汀（阿托伐他汀40-80mg）
• 未达标加用依折麦布
• 必要时考虑PCSK9抑制剂
• 每3个月监测血脂`,
                diabetes_addon: `
4. 血糖管理：
• HbA1c目标：<7.0%（个体化：6.5-8.0%）
• 早期联合用药：
  - GLP-1 RA
  - SGLT2i
• 每2-3个月监测HbA1c
• 密切监测并发症`
            }
        },
        error: {
            general: "计算过程中发生错误，请重试。",
            validation: "请检查输入值是否符合要求。",
            age: "年龄必须在40至79岁之间。",
            systolic: "收缩压必须在90至200 mmHg之间。",
            cholesterol: "请输入有效的胆固醇值。",
            required: "请填写所有必填项。"
        },
        validation: {
            error: "请确保所有输入值都在有效范围内。"
        },
        guidelines_title: "重要指南",
        lifestyle_title: "生活方式建议",
        bp_title: "血压管理",
        diabetes_title: "血糖管理",
        lipids_title: "血脂管理",
        risk_explanation: {
            low: "您的10年心血管疾病风险 <5%，属于低风险人群。",
            moderate: "您的10年心血管疾病风险在5-7.5%之间，属于中等风险人群。",
            high: "您的10年心血管疾病风险 >7.5%，属于高风险人群。"
        }
    }
};

window.i18n = i18n; 
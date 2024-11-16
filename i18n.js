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
                other: "Other"
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
                guidelines_notice: "Based on latest ACC/AHA and ESC Guidelines:\n" +
                    "• 2023 ACC/AHA Prevention Guidelines\n" +
                    "• 2023 ACC/AHA Blood Pressure Guidelines\n" +
                    "• 2023 ACC/AHA Cholesterol Guidelines\n" +
                    "• 2023 ADA Standards of Care",

                lifestyle: "Lifestyle recommendations:\n" +
                    "Physical Activity:\n" +
                    "• 150-300 min/week moderate or 75-150 min/week vigorous activity\n" +
                    "• Muscle strengthening 2-3 times/week\n" +
                    "• Reduce sedentary time\n\n" +
                    "Diet:\n" +
                    "• Mediterranean or DASH diet pattern\n" +
                    "• Reduce saturated fats (<7% of calories)\n" +
                    "• Increase fruits, vegetables, whole grains\n" +
                    "• Limit processed foods and added sugars\n" +
                    "• Reduce sodium (<2.3g/day)\n\n" +
                    "Weight Management:\n" +
                    "• Target BMI <25 kg/m²\n" +
                    "• Waist circumference: men <40 inches, women <35 inches\n\n" +
                    "Other:\n" +
                    "• Smoking cessation\n" +
                    "• Limit alcohol (men ≤2, women ≤1 drinks/day)\n" +
                    "• Adequate sleep (7-9 hours)\n" +
                    "• Stress management",

                bp_treated: "Blood pressure management (on medication):\n" +
                    "BP Targets:\n" +
                    "• Primary target: <130/80 mmHg for most adults\n" +
                    "• Age ≥65: Consider <130/80 mmHg if tolerated\n" +
                    "• With CKD + albuminuria: <130/80 mmHg\n" +
                    "• With diabetes: <130/80 mmHg\n\n" +
                    "Medications:\n" +
                    "• First-line options:\n" +
                    "  - ACEi/ARB (e.g., Lisinopril 10-40mg, Valsartan 80-320mg)\n" +
                    "  - CCB (e.g., Amlodipine 2.5-10mg)\n" +
                    "  - Thiazide-like diuretics (e.g., Chlorthalidone 12.5-25mg)\n\n" +
                    "• Initial combination therapy if BP ≥20/10 mmHg above target:\n" +
                    "  - Preferred: ACEi/ARB + CCB\n" +
                    "  - Alternative: ACEi/ARB + Thiazide-like diuretic\n" +
                    "  - Consider SPC (Single-pill combination)\n\n" +
                    "• Third-line options:\n" +
                    "  - Add Spironolactone (25-50mg)\n" +
                    "  - Or other potassium-sparing diuretic\n" +
                    "  - Beta-blockers for specific indications\n\n" +
                    "Monitoring:\n" +
                    "• Home BP monitoring: twice daily\n" +
                    "• Lab monitoring:\n" +
                    "  - Baseline: Cr, K+, eGFR\n" +
                    "  - 2-4 weeks after starting/changing ACEi/ARB/diuretics\n" +
                    "  - Then every 3-12 months based on stability\n\n" +
                    "Side effects monitoring:\n" +
                    "• ACEi/ARB: cough, hyperkalemia, acute kidney injury\n" +
                    " CCB: peripheral edema, constipation\n" +
                    "• Thiazides: hypokalemia, hyperuricemia\n" +
                    "• Spironolactone: hyperkalemia, gynecomastia\n\n" +
                    "Lifestyle modifications (essential):\n" +
                    "• Sodium restriction: <2000mg/day\n" +
                    "• DASH diet\n" +
                    "• Regular aerobic exercise\n" +
                    "• Weight management\n" +
                    "• Alcohol limitation\n" +
                    "• Stress management",

                bp_untreated: "Blood pressure management (no medication):\n" +
                    "BP Targets:\n" +
                    "• Optimal: <120/80 mmHg\n" +
                    "• Normal: 120-129/<80 mmHg\n" +
                    "• Elevated: 130-139/80-89 mmHg\n\n" +
                    "Consider starting medication if:\n" +
                    "• BP consistently ≥130/80 mmHg with high CV risk\n" +
                    "• BP consistently ≥140/90 mmHg for others\n" +
                    "• With diabetes or kidney disease\n" +
                    "• With target organ damage\n\n" +
                    "Lifestyle Modifications (Essential):\n" +
                    "• DASH diet plan:\n" +
                    "  - Rich in fruits, vegetables, whole grains\n" +
                    "  - Low-fat dairy products\n" +
                    "  - Reduce saturated fat\n" +
                    "• Sodium restriction:\n" +
                    "  - Ideal: <1.5g/day\n" +
                    "  - Maximum: <2.3g/day\n" +
                    "• Physical activity:\n" +
                    "  - 150 min/week moderate activity\n" +
                    "  - Or 75 min/week vigorous activity\n" +
                    "• Weight management:\n" +
                    "  - Target BMI <25 kg/m²\n" +
                    "  - Weight loss if overweight\n" +
                    "• Alcohol limitation:\n" +
                    "  - Men: ≤2 standard drinks/day\n" +
                    "  - Women: ≤1 standard drink/day\n\n" +
                    "Monitoring:\n" +
                    "• BP measurements at least 3 days/week\n" +
                    "• Detailed BP diary\n" +
                    "• Monthly follow-up evaluation\n" +
                    "• Regular assessment of target organ damage\n" +
                    "• Close monitoring of cardiovascular risk factors",

                diabetes: "Diabetes management:\n" +
                    "• Blood glucose control targets:\n" +
                    "  - HbA1c <7% (most patients)\n" +
                    "  - Individualized targets: 6.5-8%\n" +
                    "• Medications:\n" +
                    "  - First-line: Metformin\n" +
                    "  - Prefer SGLT2 inhibitors or GLP-1 receptor agonists\n" +
                    "  - Preferred for patients with cardiovascular disease\n" +
                    "• Monitoring:\n" +
                    "  - Check HbA1c every 3-6 months\n" +
                    "  - Monitor kidney function\n" +
                    "  - Perform annual eye and foot exams\n" +
                    "  - Regular cardiovascular risk assessment",

                lipids: "Lipid management:\n" +
                    "• LDL-C target values based on risk:\n" +
                    "  - Very high risk (>20%): LDL-C <55 mg/dL (1.4 mmol/L)\n" +
                    "  - High risk (7.5-19.9%): LDL-C <70 mg/dL (1.8 mmol/L)\n" +
                    "  - Moderate risk (5-7.4%): LDL-C <100 mg/dL (2.6 mmol/L)\n" +
                    "  - Low risk (<5%): Consider LDL-C <116 mg/dL (3.0 mmol/L)\n\n" +
                    "• Statin therapy:\n" +
                    "  - High-intensity: Atorvastatin 40-80mg or Rosuvastatin 20-40mg\n" +
                    "  - Moderate-intensity: Atorvastatin 10-20mg or Rosuvastatin 5-10mg\n\n" +
                    "• Non-statin medications:\n" +
                    "  - Ezetimibe 10mg\n" +
                    "  - PCSK9 inhibitors\n" +
                    "  - Bile acid sequestrants\n\n" +
                    "• Lifestyle modifications:\n" +
                    "  - Mediterranean or low-fat diet\n" +
                    "  - Regular exercise\n" +
                    "  - Weight management\n" +
                    "  - Smoking cessation\n\n" +
                    "• Monitoring:\n" +
                    "  - Check liver function before starting\n" +
                    "  - Check lipid and liver function every 3-12 months\n" +
                    "  - Monitor for muscle symptoms"
            },
            moderateRisk: {
                bp_untreated: "Blood pressure management (no medication):\n" +
                    "BP Targets:\n" +
                    "• Optimal: <120/80 mmHg\n" +
                    "• Normal: 120-129/<80 mmHg\n" +
                    "• Elevated: 130-139/80-89 mmHg\n\n" +
                    "Consider starting medication if:\n" +
                    "• BP consistently ≥130/80 mmHg with high CV risk\n" +
                    "• BP consistently ≥140/90 mmHg for others\n" +
                    "• With diabetes or kidney disease\n" +
                    "• With target organ damage\n\n" +
                    "Lifestyle Modifications (Essential):\n" +
                    "• DASH diet plan:\n" +
                    "  - Rich in fruits, vegetables, whole grains\n" +
                    "  - Low-fat dairy products\n" +
                    "  - Reduce saturated fat\n" +
                    "• Sodium restriction:\n" +
                    "  - Ideal: <1.5g/day\n" +
                    "  - Maximum: <2.3g/day\n" +
                    "• Physical activity:\n" +
                    "  - 150 min/week moderate activity\n" +
                    "  - Or 75 min/week vigorous activity\n" +
                    "• Weight management:\n" +
                    "  - Target BMI <25 kg/m²\n" +
                    "  - Weight loss if overweight\n" +
                    "• Alcohol limitation:\n" +
                    "  - Men: ≤2 drinks/day\n" +
                    "  - Women: ≤1 drink/day\n\n" +
                    "Monitoring:\n" +
                    "• Regular BP checks\n" +
                    "• Keep BP diary\n" +
                    "• Follow-up as advised by healthcare provider",
                diabetes: "Diabetes management:\n" +
                    "• Blood glucose control targets:\n" +
                    "  - HbA1c <7% (most patients)\n" +
                    "  - Individualized targets: 6.5-8%\n" +
                    "• Medications:\n" +
                    "  - First-line: Metformin\n" +
                    "  - Prefer SGLT2 inhibitors or GLP-1 receptor agonists\n" +
                    "  - Preferred for patients with cardiovascular disease\n" +
                    "• Monitoring:\n" +
                    "  - Check HbA1c every 3-6 months\n" +
                    "  - Monitor kidney function\n" +
                    "  - Perform annual eye and foot exams\n" +
                    "  - Regular cardiovascular risk assessment",
                lipids: "Lipid management:\n" +
                    "• LDL-C target values based on risk:\n" +
                    "  - Very high risk (>20%): LDL-C <55 mg/dL (1.4 mmol/L)\n" +
                    "  - High risk (7.5-19.9%): LDL-C <70 mg/dL (1.8 mmol/L)\n" +
                    "  - Moderate risk (5-7.4%): LDL-C <100 mg/dL (2.6 mmol/L)\n" +
                    "  - Low risk (<5%): Consider LDL-C <116 mg/dL (3.0 mmol/L)\n\n" +
                    "• Statin therapy:\n" +
                    "  - High-intensity: Atorvastatin 40-80mg or Rosuvastatin 20-40mg\n" +
                    "  - Moderate-intensity: Atorvastatin 10-20mg or Rosuvastatin 5-10mg\n\n" +
                    "• Non-statin medications:\n" +
                    "  - Ezetimibe 10mg\n" +
                    "  - PCSK9 inhibitors\n" +
                    "  - Bile acid sequestrants\n\n" +
                    "• Lifestyle modifications:\n" +
                    "  - Mediterranean or low-fat diet\n" +
                    "  - Regular exercise\n" +
                    "  - Weight management\n" +
                    "  - Smoking cessation\n\n" +
                    "• Monitoring:\n" +
                    "  - Check liver function before starting\n" +
                    "  - Check lipid and liver function every 3-12 months\n" +
                    "  - Monitor for muscle symptoms"
            },
            highRisk: {
                bp_untreated: "Blood pressure management (no medication):\n" +
                    "BP Targets:\n" +
                    "• Optimal: <120/80 mmHg\n" +
                    "• Normal: 120-129/<80 mmHg\n" +
                    "• Elevated: 130-139/80-89 mmHg\n\n" +
                    "Consider starting medication if:\n" +
                    "• BP consistently ≥130/80 mmHg with high CV risk\n" +
                    "• BP consistently ≥140/90 mmHg for others\n" +
                    "• With diabetes or kidney disease\n" +
                    "• With target organ damage\n\n" +
                    "Lifestyle Modifications (Essential):\n" +
                    "• DASH diet plan:\n" +
                    "  - Rich in fruits, vegetables, whole grains\n" +
                    "  - Low-fat dairy products\n" +
                    "  - Reduce saturated fat\n" +
                    "• Sodium restriction:\n" +
                    "  - Ideal: <1.5g/day\n" +
                    "  - Maximum: <2.3g/day\n" +
                    "• Physical activity:\n" +
                    "  - 150 min/week moderate activity\n" +
                    "  - Or 75 min/week vigorous activity\n" +
                    "• Weight management:\n" +
                    "  - Target BMI <25 kg/m²\n" +
                    "  - Weight loss if overweight\n" +
                    "• Alcohol limitation:\n" +
                    "  - Men: ≤2 drinks/day\n" +
                    "  - Women: ≤1 drink/day\n\n" +
                    "Monitoring:\n" +
                    "• Regular BP checks\n" +
                    "• Keep BP diary\n" +
                    "• Follow-up as advised by healthcare provider",
                diabetes: "Diabetes management:\n" +
                    "• Blood glucose control targets:\n" +
                    "  - HbA1c <7% (most patients)\n" +
                    "  - Individualized targets: 6.5-8%\n" +
                    "• Medications:\n" +
                    "  - First-line: Metformin\n" +
                    "  - Prefer SGLT2 inhibitors or GLP-1 receptor agonists\n" +
                    "  - Preferred for patients with cardiovascular disease\n" +
                    "• Monitoring:\n" +
                    "  - Check HbA1c every 3-6 months\n" +
                    "  - Monitor kidney function\n" +
                    "  - Perform annual eye and foot exams\n" +
                    "  - Regular cardiovascular risk assessment",
                lipids: "Lipid management:\n" +
                    "• LDL-C target values based on risk:\n" +
                    "  - Very high risk (>20%): LDL-C <55 mg/dL (1.4 mmol/L)\n" +
                    "  - High risk (7.5-19.9%): LDL-C <70 mg/dL (1.8 mmol/L)\n" +
                    "  - Moderate risk (5-7.4%): LDL-C <100 mg/dL (2.6 mmol/L)\n" +
                    "  - Low risk (<5%): Consider LDL-C <116 mg/dL (3.0 mmol/L)\n\n" +
                    "• Statin therapy:\n" +
                    "  - High-intensity: Atorvastatin 40-80mg or Rosuvastatin 20-40mg\n" +
                    "  - Moderate-intensity: Atorvastatin 10-20mg or Rosuvastatin 5-10mg\n\n" +
                    "• Non-statin medications:\n" +
                    "  - Ezetimibe 10mg\n" +
                    "  - PCSK9 inhibitors\n" +
                    "  - Bile acid sequestrants\n\n" +
                    "• Lifestyle modifications:\n" +
                    "  - Mediterranean or low-fat diet\n" +
                    "  - Regular exercise\n" +
                    "  - Weight management\n" +
                    "  - Smoking cessation\n\n" +
                    "• Monitoring:\n" +
                    "  - Check liver function before starting\n" +
                    "  - Check lipid and liver function every 3-12 months\n" +
                    "  - Monitor for muscle symptoms"
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
                other: "其他"
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
                hint: "如果您目前正在服用降压药物，请选择“是”"
            },
            asian: "亚洲"
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
                guidelines_notice: "以下建议基于最新国际指南：\n" +
                    "• 2023年 ACC/AHA预防指南\n" +
                    "• 2023年 ACC/AHA血压指南\n" +
                    "• 2023年 ACC/AHA胆固醇指南\n" +
                    "• 2023年 ADA糖尿病诊疗标准",

                lifestyle: "生活方式建议：\n" +
                    "• 体育活动：\n" +
                    "  - 每周150-300分钟中等强度或75-150分钟高强度有氧运动\n" +
                    "  - 每周2-3次肌肉力量训练\n" +
                    "  - 减少久坐时间\n\n" +
                    "• 饮食建议：\n" +
                    "  - 遵循地中海饮食或DASH饮食模式\n" +
                    "  - 限制饱和脂肪（<7%总热量）\n" +
                    "  - 增加水果、蔬菜、全谷物摄入\n" +
                    "  - 限制加工食品和添加糖\n" +
                    "  - 限制钠摄入（<2.3g/天）\n\n" +
                    "• 体重管理：\n" +
                    "  - 目标BMI <25 kg/m²\n" +
                    "  - 腰围目标：男性<90cm，女性<85cm\n\n" +
                    "• 其他建议：\n" +
                    "  - 戒烟\n" +
                    "  - 限制饮酒（男性≤2杯/天，女性≤1杯/天）\n" +
                    "  - 保证充足睡眠（7-9小时）\n" +
                    "  - 压力管理",
                bp_treated: "血压管理（服用降压药）：\n" +
                    "血压目标：\n" +
                    "• 主要目标：大多数成年人 <130/80 mmHg\n" +
                    "• 65岁及以上：如果耐受则考虑 <130/80 mmHg\n" +
                    "• 慢性肾病伴蛋白尿：<130/80 mmHg\n" +
                    "• 合并糖尿病：<130/80 mmHg\n\n" +
                    "药物治疗：\n" +
                    "• 一线用药选择：\n" +
                    "  - ACEi/ARB（如：赖诺普利10-40mg、缬沙坦80-320mg）\n" +
                    "  - CCB（如：氨氯地平2.5-10mg）\n" +
                    "  - 噻嗪样利尿剂（如��氯噻酮12.5-25mg）\n\n" +
                    "• 血压超过目标值20/10 mmHg以上时的初始联合治疗：\n" +
                    "  - 首选：ACEi/ARB + CCB\n" +
                    "  - 替代：ACEi/ARB + 噻嗪样利尿剂\n" +
                    "  - 考虑单片复方制剂\n\n" +
                    "• 三线用药选择：\n" +
                    "  - 加用螺内酯（25-50mg）\n" +
                    "  - 或其他保钾利尿剂\n" +
                    "  - 特定适应证时使用β受体阻滞剂\n\n" +
                    "监测要求：\n" +
                    "• 家庭血压监测：每天两次\n" +
                    "• 实验室测：\n" +
                    "  - 基线：肌酐、钾离子、eGFR\n" +
                    "  - ACEi/ARB/利尿剂开始/调整后2-4周\n" +
                    "  - 之后根据稳定性每3-12个月\n\n" +
                    "不良反应监测：\n" +
                    "• ACEi/ARB：咳嗽、高钾血症、急性肾损伤\n" +
                    "• CCB：外周水肿、便秘\n" +
                    "• 噻嗪类：低钾血症、高尿酸血症\n" +
                    "• 螺内酯：高钾血症、男性乳腺发育\n\n" +
                    "生活方式干预（必要）：\n" +
                    "• 限制钠摄入：<2000mg/天\n" +
                    "• DASH饮食\n" +
                    "• 规律有氧运动\n" +
                    "• 体重管理\n" +
                    "• 限制饮酒\n" +
                    "• 压力管理",
                bp_untreated: "血压管理（未服用降压药）：\n" +
                    "血压目标：\n" +
                    "• 理想：<120/80 mmHg\n" +
                    "• 正常：120-129/<80 mmHg\n" +
                    "• 偏高：130-139/80-89 mmHg\n\n" +
                    "考虑开始药物治疗的情况：\n" +
                    "• 高CV风险者血压持续≥130/80 mmHg\n" +
                    "• 其他人群血压持续≥140/90 mmHg\n" +
                    "• 合并糖尿病或肾病\n" +
                    "• 存在靶器官损害\n\n" +
                    "生活方式干预（必要）：\n" +
                    "• DASH饮食计划：\n" +
                    "  - 富含水果、蔬菜、全谷物\n" +
                    "  - 低脂乳制品\n" +
                    "  - 减少饱和脂肪\n" +
                    "• 钠摄入限制：\n" +
                    "  - 理想：<1.5g/天\n" +
                    "  - 最大：<2.3g/天\n" +
                    "• 运动建议：\n" +
                    "  - 每周150分钟中等强度运动\n" +
                    "  - 或每周75分钟高强度运动\n" +
                    "• 体重管理：\n" +
                    "  - 目标BMI <25 kg/m²\n" +
                    "  - 超重者需减重\n" +
                    "• 限制饮酒：\n" +
                    "  - 男性：每天不超过2个标准杯\n" +
                    "  - 女性：每天不超过1个标准杯\n\n" +
                    "监测要求：\n" +
                    "• 每周至少测量3天血压\n" +
                    "• 详细记录血压日志\n" +
                    "• 每月随访评估\n" +
                    "• 定期评估靶器官损害\n" +
                    "• 密切监测心血管风险因素",
                diabetes: "糖尿病管理：\n" +
                    "• 血糖控制目标：\n" +
                    "  - HbA1c <7%（大多数患者）\n" +
                    "  - 个体化目标：6.5-8%\n" +
                    "• 药物治疗：\n" +
                    "  - 一线：二甲双胍\n" +
                    "  - 优先考虑SGLT2抑制剂或GLP-1受体激动剂\n" +
                    "  - 有心血管疾病时首选SGLT2抑制剂\n" +
                    "• 监测要求：\n" +
                    "  - 每3-6个月检查HbA1c\n" +
                    "  - 定期监测肾功能\n" +
                    "  - 每年进行眼底和足部检查\n" +
                    "  - 定期评估心血管风险",
                lipids: "血脂管理：\n" +
                    "• 基于风险的LDL-C目标值：\n" +
                    "  - 极高风险（>20%）：<55 mg/dL (1.4 mmol/L)\n" +
                    "  - 高风险（7.5-19.9%）：<70 mg/dL (1.8 mmol/L)\n" +
                    "  - 中等风险（5-7.4%）：<100 mg/dL (2.6 mmol/L)\n" +
                    "  - 低风险（<5%）：<116 mg/dL (3.0 mmol/L)\n\n" +
                    "• 他汀类药物治疗：\n" +
                    "  - 高强度：阿托伐他汀40-80mg或瑞舒伐他汀20-40mg\n" +
                    "  - 中等强度：阿托伐他汀10-20mg或瑞舒伐他汀5-10mg\n\n" +
                    "• 非他汀类药物：\n" +
                    "  - 依折麦布10mg\n" +
                    "  - PCSK9抑制剂\n" +
                    "  - 倍他米酸\n\n" +
                    "• 生活方式干预：\n" +
                    "  - 地中海式或低脂饮食\n" +
                    "  - 规律运动\n" +
                    "  - 体重管理\n" +
                    "  - 戒烟\n\n" +
                    "• 监测要求：\n" +
                    "  - 开始治疗前检查肝功能\n" +
                    "  - 治疗后4-12周复查血脂和肝功能\n" +
                    "  - 之后每3-12个月监测\n" +
                    "  - 注意肌肉症状",
                guidelines_title: "指南建议",
                lifestyle_title: "生活方式建议",
                bp_title: "血压管理",
                diabetes_title: "糖尿病管理",
                lipids_title: "血脂管理"
            },
            moderateRisk: {
                bp_untreated: "血压管理（未服用降压药，中等风险）：\n" +
                    "血压目标：\n" +
                    "• 严格控制至 <130/80 mmHg\n" +
                    "• 建议立即开始药物治疗\n" +
                    "• 定期随访调整方案\n" +
                    "• 考虑联合用药\n\n" +
                    "生活方式干预（加强）：\n" +
                    "• DASH饮食：\n" +
                    "  - 严格限制钠摄入 <1.5g/天\n" +
                    "  - 增加钾的摄入\n" +
                    "• 运动：\n" +
                    "  - 每周>150分钟中等强度运动\n" +
                    "  - 增加运动频率和强度\n" +
                    "• 体重管理：\n" +
                    "  - 超重者3-6个月内减重5-10%\n" +
                    "  - 定期监测体重\n" +
                    "• 戒烟限酒：\n" +
                    "  - 必须完全戒烟\n" +
                    "  - 严格限制饮酒\n\n" +
                    "监测要求：\n" +
                    "• 每周至少测量3天血压\n" +
                    "• 详细记录血压日志\n" +
                    "• 每月随访评估\n" +
                    "• 定期评估靶器官损害\n" +
                    "• 密切监测心血管风险因素",
                diabetes: "糖尿病管理：\n" +
                    "• 血糖控制目标：\n" +
                    "  - HbA1c <7%（大多数患者）\n" +
                    "  - 个体化目标：6.5-8%\n" +
                    "• 药物治疗：\n" +
                    "  - 一线：二甲双胍\n" +
                    "  - 优先考虑SGLT2抑制剂或GLP-1受体激动剂\n" +
                    "  - 有心血管疾病时首选SGLT2抑制剂\n" +
                    "• 监测要求：\n" +
                    "  - 每3-6个月检查HbA1c\n" +
                    "  - 定期监测肾功能\n" +
                    "  - 每年进行眼底和足部检查\n" +
                    "  - 定期评估心血管风险",
                lipids: "血脂管理：\n" +
                    "• 基于风险的LDL-C目标值：\n" +
                    "  - 极高风险（>20%）：<55 mg/dL (1.4 mmol/L)\n" +
                    "  - 高风险（7.5-19.9%）：<70 mg/dL (1.8 mmol/L)\n" +
                    "  - 中等风险（5-7.4%）：<100 mg/dL (2.6 mmol/L)\n" +
                    "  - 低风险（<5%）：<116 mg/dL (3.0 mmol/L)\n\n" +
                    "• 他汀类药物治疗：\n" +
                    "  - 高强度：阿托伐他汀40-80mg或瑞舒伐他汀20-40mg\n" +
                    "  - 中等强度：阿托伐他汀10-20mg或瑞舒伐他汀5-10mg\n\n" +
                    "• 非他汀类药物：\n" +
                    "  - 依折麦布10mg\n" +
                    "  - PCSK9抑制剂\n" +
                    "  - 倍他米酸\n\n" +
                    "• 生活方式干预：\n" +
                    "  - 地中海式或低脂饮食\n" +
                    "  - 规律运动\n" +
                    "  - 体重管理\n" +
                    "  - 戒烟\n\n" +
                    "• 监测要求：\n" +
                    "  - 开始治疗前检查肝功能\n" +
                    "  - 治疗后4-12周复查血脂和肝功能\n" +
                    "  - 之后每3-12个月监测\n" +
                    "  - 注意肌肉症状"
            },
            highRisk: {
                bp_untreated: "血压管理（未服用降压药，高风险）：\n" +
                    "血压目标：\n" +
                    "• 严格控制至 <130/80 mmHg\n" +
                    "• 建议立即开始联合降压治疗\n" +
                    "• 密切随访调整方案\n" +
                    "• 必须联合用药\n\n" +
                    "生活方式干预（强化）：\n" +
                    "• DASH饮食：\n" +
                    "  - 极严格限制钠摄入 <1.5g/天\n" +
                    "  - 最优化饮食结构\n" +
                    "• 运动：\n" +
                    "  - 在医生指导下进行运动\n" +
                    "  - 循序渐进增加运动量\n" +
                    "• 体重管理：\n" +
                    "  - 制定个性化减重计划\n" +
                    "  - 每周监测体重\n" +
                    "• 戒烟限酒：\n" +
                    "  - 必须立即完全戒烟\n" +
                    "  - 禁止饮酒\n\n" +
                    "监测要求：\n" +
                    "• 每天测量血压\n" +
                    "• 详细记录血压和症状\n" +
                    "• 每2周随访评估\n" +
                    "• 全面评估靶器官损害\n" +
                    "• 密切监测并发症风险"
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
        }
    }
};

window.i18n = i18n; 
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
                diabetes: "Diabetes management (moderate risk):\n" +
                    "Blood glucose control targets:\n" +
                    "• HbA1c <7.0% (general target)\n" +
                    "• Fasting blood glucose 4.4-7.0 mmol/L\n" +
                    "• Postprandial 2-hour blood glucose <10.0 mmol/L\n\n" +
                    "Drug treatment strategy:\n" +
                    "• Basal treatment:\n" +
                    "  - Metformin as the first choice\n" +
                    "  - Start from a small dose and gradually adjust\n" +
                    "• Consider combination therapy:\n" +
                    "  - SGLT2 inhibitors\n" +
                    "  - GLP-1 receptor agonists\n" +
                    "  - DPP-4 inhibitors\n" +
                    "• Special cases:\n" +
                    "  - SGLT2 inhibitors preferred for patients with cardiovascular disease\n" +
                    "  - GLP-1 receptor agonists for obese patients\n\n" +
                    "Complication screening:\n" +
                    "• Cardiovascular assessment:\n" +
                    "  - Every 6 months\n" +
                    "  - Regular ECG monitoring\n" +
                    "• Kidney function monitoring:\n" +
                    "  - Every 6 months\n" +
                    "  - Urine albumin creatinine ratio monitoring\n" +
                    "• Other checks:\n" +
                    "  - Annual fundus examination\n" +
                    "  - Regular foot examination\n" +
                    "  - Neuropathy screening\n\n" +
                    "Lifestyle management:\n" +
                    "• Diet control:\n" +
                    "  - Proper distribution of carbohydrates\n" +
                    "  - Control total calories\n" +
                    "  - Regular meals\n" +
                    "• Exercise guidance:\n" +
                    "  - 150 minutes of moderate-intensity exercise per week\n" +
                    "  - Monitor blood glucose before and after exercise\n" +
                    "  - Prevent hypoglycemia\n" +
                    "• Self-management:\n" +
                    "  - Regular blood glucose monitoring\n" +
                    "  - Record blood glucose logs\n" +
                    "  - Regular follow-up with healthcare provider",
                lipids: "Lipid management (moderate risk):\n" +
                    "Treatment targets:\n" +
                    "• LDL-C <2.6 mmol/L (100 mg/dL)\n" +
                    "• Non-HDL-C <3.4 mmol/L (130 mg/dL)\n" +
                    "• Triglycerides <1.7 mmol/L (150 mg/dL)\n\n" +
                    "Drug treatment:\n" +
                    "• Medium-high intensity statins:\n" +
                    "  - Atorvastatin 20-40mg\n" +
                    "  - Or rosuvastatin 10-20mg\n" +
                    "• Consider combination therapy if not reaching targets:\n" +
                    "  - Ezetimibe 10mg\n" +
                    "  - Or PCSK9 inhibitors\n" +
                    "• Special cases:\n" +
                    "  - Consider ezetimibe if statins are not tolerated\n" +
                    "  - Consider fibrates if very high triglycerides\n\n" +
                    "Monitoring requirements:\n" +
                    "• Before starting treatment:\n" +
                    "  - Comprehensive assessment of liver and kidney function\n" +
                    "  - Fasting lipid profile\n" +
                    "  - Baseline creatine kinase\n" +
                    "• Follow-up:\n" +
                    "  - Check lipid and liver function every 3-6 months\n" +
                    "  - Closely monitor muscle symptoms\n" +
                    "  - Regular cardiovascular risk assessment\n\n" +
                    "Lifestyle interventions:\n" +
                    "• Diet adjustments:\n" +
                    "  - Limit saturated fats (<7% total calories)\n" +
                    "  - Increase fiber intake\n" +
                    "  - Limit trans fats\n" +
                    "• Exercise guidance:\n" +
                    "  - 150 minutes of moderate-intensity exercise per week\n" +
                    "  - Include both aerobic and resistance exercises\n" +
                    "• Lifestyle changes:\n" +
                    "  - Strictly quit smoking\n" +
                    "  - Limit alcohol consumption\n" +
                    "  - Maintain a healthy weight"
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
                diabetes: "Diabetes management (high risk):\n" +
                    "Blood glucose control targets:\n" +
                    "• HbA1c <6.5% (when no hypoglycemic risk)\n" +
                    "• Fasting blood glucose 4.4-6.1 mmol/L\n" +
                    "• Postprandial 2-hour blood glucose <7.8 mmol/L\n\n" +
                    "Drug treatment strategy:\n" +
                    "• First-line drugs:\n" +
                    "  - Metformin (500-2000mg/day)\n" +
                    "  - Gradually increase the dose based on tolerance\n" +
                    "• Early combination therapy:\n" +
                    "  - SGLT2 inhibitors (Dapagliflozin 10mg/day or Empagliflozin 10mg/day)\n" +
                    "  - GLP-1 receptor agonists (Semaglutide 1mg/week or Liraglutide 1.8mg/day)\n" +
                    "• Treatment principles:\n" +
                    "  - Prioritize drugs with cardiovascular benefits\n" +
                    "  - Individualize based on patient characteristics\n" +
                    "  - Focus on improving adherence\n\n" +
                    "Complication screening and prevention:\n" +
                    "• Cardiovascular disease:\n" +
                    "  - Every 3 months, assess cardiovascular risk\n" +
                    "  - Strictly control blood pressure and lipids\n" +
                    "  - Heart ultrasound and stress test if necessary\n" +
                    "• Kidney disease:\n" +
                    "  - Every 3 months, assess kidney function and urinary albumin\n" +
                    "  - Optimize renal protective therapy\n" +
                    "  - Avoid nephrotoxic drugs\n" +
                    "• Retinopathy:\n" +
                    "  - Every 3-6 months, fundus examination\n" +
                    "  - Early detection and intervention\n" +
                    "• Neuropathy:\n" +
                    "  - Every 3 months, foot examination\n" +
                    "  - Prevent foot ulcers\n" +
                    "  - Pain management\n\n" +
                    "Monitoring requirements:\n" +
                    "• Blood glucose monitoring:\n" +
                    "  - Daily monitoring of 4-6 times\n" +
                    "  - Use a continuous glucose monitoring system\n" +
                    "  - Record blood glucose variability\n" +
                    "• Regular checkups:\n" +
                    "  - Every 3 months, HbA1c\n" +
                    "  - Every 3-6 months, liver and kidney function\n" +
                    "  - Annual comprehensive complication screening\n" +
                    "• Lifestyle management:\n" +
                    "  - Medical nutrition therapy\n" +
                    "  - Regular exercise plan\n" +
                    "  - Weight management\n" +
                    "  - Smoking cessation\n" +
                    "• Education and follow-up:\n" +
                    "  - Diabetes self-management education\n" +
                    "  - Doctor's visit every 2 weeks\n" +
                    "  - Psychological support\n" +
                    "  - Family support system",
                lipids: "Lipid management (high risk):\n" +
                    "Treatment targets:\n" +
                    "• LDL-C <1.4 mmol/L（55 mg/dL）\n" +
                    "• 非HDL-C <2.2 mmol/L（85 mg/dL）\n" +
                    "• 甘油三酯 <1.7 mmol/L（150 mg/dL）\n" +
                    "• ApoB <65 mg/dL\n\n" +
                    "药物治疗：\n" +
                    "• 强化他汀治疗（必须）：\n" +
                    "  - 阿托伐他汀80mg/天\n" +
                    "  - 或瑞舒伐他汀40mg/天\n" +
                    "  - 严密监测不良反应\n" +
                    "• 联合用药（必要时）：\n" +
                    "  - 依折麦布10mg/天（首选联合用药）\n" +
                    "  - PCSK9抑制剂（依洛尤单抗140mg/2周或阿利西尤单抗150mg/2周）\n" +
                    "  - 贝特类药物（高TG时）\n" +
                    "  - 胆固醇吸收抑制剂\n" +
                    "• 用药原则：\n" +
                    "  - 从最大耐受剂量他汀开始\n" +
                    "  - 2-4周评估疗效和耐受性\n" +
                    "  - LDL-C未达标时及时加用非他汀类药物\n" +
                    "  - 注意药物相互作用\n\n" +
                    "监测要求：\n" +
                    "• 治疗前评估：\n" +
                    "  - 空腹血脂全套\n" +
                    "  - 肝肾功能\n" +
                    "  - 空腹血糖\n" +
                    "  - 甲状腺功能\n" +
                    "  - 肌酸激酶基线值\n" +
                    "• 治疗期间监测：\n" +
                    "  - 开始治疗2-4周复查血脂和肝功能\n" +
                    "  - 达标后每4-8周复查\n" +
                    "  - 定期评估心血管风险\n" +
                    "  - 监测肌肉症状和肝功能\n" +
                    "• 不良反应监测：\n" +
                    "  - 肌肉症状（肌痛、无力）\n" +
                    "  - 肝功能异常\n" +
                    "  - 新发糖尿病风险\n" +
                    "  - 药物相互作用\n\n" +
                    "生活方式干预：\n" +
                    "• 饮食控制：\n" +
                    "  - 严格限制饱和脂肪（<5%总热量）\n" +
                    "  - 完全避免反式脂肪\n" +
                    "  - 增加单不饱和和多不饱和脂肪酸\n" +
                    "  - 增加膳食纤维（25-30g/天）\n" +
                    "  - 限制胆固醇摄入（<200mg/天）\n" +
                    "  - 增加植物固醇/甾醇（2g/天）\n" +
                    "• 运动计划：\n" +
                    "  - 每周≥150分钟中等强度有氧运动\n" +
                    "  - 每周2-3次抗阻运动\n" +
                    "  - 避免久坐\n" +
                    "  - 运动强度循序渐进\n" +
                    "• 体重管理：\n" +
                    "  - BMI目标<23 kg/m²\n" +
                    "  - 超重者每周减重0.5-1kg\n" +
                    "  - 记录体重变化\n" +
                    "  - 维持稳定体重\n" +
                    "• 其他要求：\n" +
                    "  - 严格戒烟\n" +
                    "  - 禁止饮酒\n" +
                    "  - 规律作息\n" +
                    "  - 压力管理\n" +
                    "  - 定期参加心脏康复"
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
                    "  - 每周2-3次肌肉力训练\n" +
                    "  - 减少久坐时间\n\n" +
                    "• 饮食建议：\n" +
                    "  - 遵循地中海饮食或DASH饮食模式\n" +
                    "  - 限制饱和脂肪（<7%总热量）\n" +
                    "  - 增加水果、蔬菜、全谷物摄入\n" +
                    "  - 限制加工食和添加糖\n" +
                    "  - 限制钠摄入（<2.3g/天）\n\n" +
                    "• 体重管理：\n" +
                    "  - 目标BMI <25 kg/m²\n" +
                    "  - 腰围目标：男性<90cm，女性<85cm\n\n" +
                    "• 其他建议：\n" +
                    "  - 戒烟\n" +
                    "  - 限制饮酒（男性≤2杯/天，女性≤1杯/天）\n" +
                    "  - 保证充足睡眠（7-9小时）\n" +
                    "  - 压力管理",
                bp_treated: "血压管理（服用降压药，低风险）：\n" +
                    "血压目标：\n" +
                    "• 一般目标：<130/80 mmHg\n" +
                    "• 老年人（≥65岁）：个体化目标，耐受情况下<130/80 mmHg\n" +
                    "• 合并CKD和蛋白尿：<130/80 mmHg\n" +
                    "• 合并糖尿病：<130/80 mmHg\n\n" +
                    "用药方案优化：\n" +
                    "• 现有方案评估：\n" +
                    "  - ACEi/ARB（如：赖诺普利10-20mg、缬沙坦80-160mg）\n" +
                    "  - CCB（如：氨氯地平2.5-5mg）\n" +
                    "  - 噻嗪样利尿剂（如：氯噻酮12.5mg）\n" +
                    "• 联合用药调整：\n" +
                    "  - 首选：ACEi/ARB + CCB\n" +
                    "  - 替代：ACEi/ARB + 噻嗪样利尿剂\n" +
                    "  - 优先使用单片复方制剂\n" +
                    "• 用药原则：\n" +
                    "  - 优先使用长效药物\n" +
                    "  - 根据血压水平调整剂量\n" +
                    "  - 注意药物相互作用\n\n" +
                    "监测要求：\n" +
                    "• 血压监测：\n" +
                    "  - 每天测量2次血压\n" +
                    "  - 记录血压变异情况\n" +
                    "  - 注意体位性低血压\n" +
                    "• 实验室检查：\n" +
                    "  - 每4-6周检查肾功能和电解质\n" +
                    "  - 定期评估尿蛋白\n" +
                    "  - 监测血糖和血脂\n" +
                    "• 不良反应监测：\n" +
                    "  - ACEi/ARB：咳嗽、高钾血症、肾功能\n" +
                    "  - CCB水肿、心率\n" +
                    "  - 利尿剂：电解质、尿酸\n\n" +
                    "生活方式干预：\n" +
                    "• 饮食控制：\n" +
                    "  - 限制钠摄入<2.0g/天\n" +
                    "  - DASH饮食模式\n" +
                    "  - 控制总热量\n" +
                    "• 运动指导：\n" +
                    "  - 每周≥150分钟中等强度运动\n" +
                    "  - 避免剧烈运动\n" +
                    "• 其他要求：\n" +
                    "  - 戒烟限酒\n" +
                    "  - 控制体重\n" +
                    "  - 规律作息",
                bp_untreated: "血压管理（未服用降压药，低风险）：\n" +
                    "血压目标：\n" +
                    "• 理想：<120/80 mmHg\n" +
                    "• 正常：120-129/<80 mmHg\n" +
                    "• 偏高：130-139/80-89 mmHg\n\n" +
                    "考虑开始药物治疗的情况：\n" +
                    "• 高CV风险者血压持续≥130/80 mmHg\n" +
                    "• 其他人群血压持续≥140/90 mmHg\n" +
                    "• 合并糖尿病或肾病\n" +
                    "• 存在靶器官损害\n\n" +
                    "用药建议：\n" +
                    "• 一线用药选择：\n" +
                    "  - ACEi/ARB（如：赖诺普利10-20mg、缬沙坦80-160mg）\n" +
                    "  - CCB（如：氨氯地平2.5-5mg）\n" +
                    "  - 噻嗪样利尿剂（如：氯噻酮12.5mg）\n" +
                    "• 单药治疗起始：\n" +
                    "  - 从小剂量开始\n" +
                    "  - 根据反应逐步调整\n" +
                    "  - 4-6周评估疗\n" +
                    "• 联合用药考虑：\n" +
                    "  - 血压超过目标值20/10 mmHg时\n" +
                    "  - 首选：ACEi/ARB + CCB\n" +
                    "  - 替代：ACEi/ARB + 噻嗪样利尿\n" +
                    "  - 优先使用单片复方制剂\n\n" +
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
                    "  - 每周2-3次力量训练\n" +
                    "• 体重管理：\n" +
                    "  - 目标BMI <25 kg/m²\n" +
                    "  - 超重者需减重\n" +
                    "• 限制饮酒：\n" +
                    "  - 男性：每天不超过2个标准杯\n" +
                    "  - 女性：每天不超过1个标准杯\n\n" +
                    "监测要求：\n" +
                    "• 开始治疗前检查：\n" +
                    "  - 基础肾功能和电解质\n" +
                    "  - 空腹血糖和血脂\n" +
                    "  - 心电图检查\n" +
                    "  - 尿常规和尿微量白蛋白\n" +
                    "• 定期随访：\n" +
                    "  - 每周至少测量3天血压\n" +
                    "  - 详细记录血压日志\n" +
                    "  - 每3个月随访评估\n" +
                    "  - 定期评估靶器官损害\n" +
                    "• 用药后监测：\n" +
                    "  - 开始/调整药物后2-4周复查\n" +
                    "  - 定期监测肾功能和电解质\n" +
                    "  - 关药物不良反应\n" +
                    "  - 评估用药依从性",
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
                    "  - 地中海或低脂饮食\n" +
                    "  - 规律运动\n" +
                    "  - 体重管理\n" +
                    "  - 戒烟\n\n" +
                    "• 监测要求：\n" +
                    "  - 开始治疗前检查肝功能\n" +
                    "  - 治疗后4-12周复查血脂和肝功能\n" +
                    "  - 之后每3-12个月监测\n" +
                    "  - 注意肌肉症状"
            },
            moderateRisk: {
                bp_untreated: "血压管理（未服用降压药，中等风险）：\n" +
                    "血压目标：\n" +
                    "• 严格控制至 <130/80 mmHg\n" +
                    "• 老年人（≥65岁）：个体化目标，耐受情况下<130/80 mmHg\n" +
                    "• 合并CKD和蛋白尿：<130/80 mmHg\n" +
                    "• 合并糖尿病：<130/80 mmHg\n\n" +
                    "用药方案优化：\n" +
                    "• 现有方案评估：\n" +
                    "  - ACEi/ARB（如：赖诺普利20-40mg、缬沙坦160-320mg）\n" +
                    "  - CCB（如：氨氯地平5-10mg）\n" +
                    "  - 噻嗪样利尿剂（如：氯噻酮12.5-25mg）\n" +
                    "• 联合用药调整：\n" +
                    "  - 首选：ACEi/ARB + CCB\n" +
                    "  - 替代：ACEi/ARB + 噻嗪样利尿剂\n" +
                    "  - 优先使用单片复方制剂\n" +
                    "• 用药调整：\n" +
                    "  - 2-4周内评估疗效\n" +
                    "  - 根据血压达标情况调整剂量\n" +
                    "  - 必要时加用第三种药物\n\n" +
                    "监测要求：\n" +
                    "• 血压监测：\n" +
                    "  - 每天早晚各测量1次\n" +
                    "  - 每次测量间隔1分钟，连续3次\n" +
                    "  - 记录所有测量值\n" +
                    "  - 必要时24小时动态血压监测\n" +
                    "• 实验室检查：\n" +
                    "  - 基线：肾功能、电解质、血糖、血脂\n" +
                    "  - 开始/调整药物后2周复查肾功能和电解质\n" +
                    "  - 之后每3个月复查\n" +
                    "• 靶器官评估：\n" +
                    "  - 每3个月心电图\n" +
                    "  - 每年超声心动图\n" +
                    "  - 定期眼底检查\n" +
                    "• 不良反应监测：\n" +
                    "  - ACEi/ARB：肾功能、血钾、咳嗽\n" +
                    "  - CCB：水肿、心率、牙龈增生\n" +
                    "  - 利尿剂：电解质、尿酸、血糖\n\n" +
                    "生活方式干预：\n" +
                    "• 饮食控制：\n" +
                    "  - 严格限制钠摄入<1.5g/天\n" +
                    "  - DASH饮食模式\n" +
                    "  - 限制总热量\n" +
                    "  - 增加钾摄入（无禁忌时）\n" +
                    "• 运动指导：\n" +
                    "  - 每周150-300分钟中等强度有氧运动\n" +
                    "  - 每周2-3次抗阻运动\n" +
                    "  - 避免剧烈运动\n" +
                    "  - 运动时监测血压反应\n" +
                    "• 其他要求：\n" +
                    "  - 严格戒烟限酒\n" +
                    "  - 减重目标：3-6个月内减重5%\n" +
                    "  - 规律作息，保证充足睡眠\n" +
                    "  - 积极进行压力管理"
            },
            highRisk: {
                bp_untreated: "血压管理（未服用降压药，高风险）：\n" +
                    "血压目标：\n" +
                    "• 严格控制至 <130/80 mmHg\n" +
                    "• 老年人（≥65岁）：个体化目标，耐受情况下<130/80 mmHg\n" +
                    "• 合并CKD和蛋白尿：<130/80 mmHg\n" +
                    "• 合并糖尿病：<130/80 mmHg\n\n" +
                    "用药方案优化：\n" +
                    "• 现有方案评估：\n" +
                    "  - 评估现有药物的剂量是否足够\n" +
                    "  - 检查服药依从性\n" +
                    "  - 评估不良反应\n" +
                    "• 联合用药调整：\n" +
                    "  - ACEi/ARB（赖诺普利40mg/天或缬沙坦320mg/天）\n" +
                    "  - CCB（氨氯地平10mg/天）\n" +
                    "  - 噻嗪样利尿剂（氯噻酮25mg/天）\n" +
                    "• 强化治疗方案：\n" +
                    "  - 四联治疗：ACEi/ARB + CCB + 噻嗪样利尿剂 + 醛固酮受体拮抗剂\n" +
                    "  - 醛固酮受体拮抗剂（螺内酯50mg/天）\n" +
                    "  - β受体阻滞剂（美托洛尔缓释片100-200mg/天）\n" +
                    "• 用药原则：\n" +
                    "  - 优先使用长效药物\n" +
                    "  - 首选单片复方制剂\n" +
                    "  - 睡前服用至少一种降压药\n" +
                    "  - 根据血压变异情况调整给药时间\n\n" +
                    "监测要求：\n" +
                    "• 血压监测：\n" +
                    "  - 每天早晚各测量2次\n" +
                    "  - 记录血压变异情况\n" +
                    "  - 监测体位性低血压\n" +
                    "  - 必要时24小时动态血压监测\n" +
                    "• 实验室检查：\n" +
                    "  - 每2周检查肾功能和电解质\n" +
                    "  - 每月评估尿蛋白\n" +
                    "  - 定期监测血糖和血脂\n" +
                    "  - 必要时NT-proBNP检测\n" +
                    "• 靶器官评估：\n" +
                    "  - 每3个月心电图检查\n" +
                    "  - 每6个月心脏超声\n" +
                    "  - 每年颈动脉超声\n" +
                    "  - 定期眼底检查\n" +
                    "• 不良反应监测：\n" +
                    "  - ACEi/ARB：咳嗽、高钾血症、肾功能\n" +
                    "  - CCB：水肿、心率、牙龈增生\n" +
                    "  - 利尿剂：电解质、尿酸、血糖\n" +
                    "  - 螺内酯：高钾血症、男性乳腺发育\n" +
                    "  - β受体阻滞剂：心率、血糖、疲劳\n\n" +
                    "生活方式干预（强化）：\n" +
                    "• 饮食控制：\n" +
                    "  - 严格限制钠摄入<1.5g/天\n" +
                    "  - DASH饮食模式\n" +
                    "  - 增加钾的摄入（如无禁忌）\n" +
                    "  - 限制总热量\n" +
                    "• 运动指导：\n" +
                    "  - 在医生指导下进行运动\n" +
                    "  - 循序渐进增加运动量\n" +
                    "  - 避免剧烈运动\n" +
                    "  - 监测动时血压反应\n" +
                    "• 其他要求：\n" +
                    "  - 严格戒烟限酒\n" +
                    "  - 控制体重\n" +
                    "  - 规律作息\n" +
                    "  - 避免精神压力\n" +
                    "  - 定期参加心脏康复\n" +
                    "• 家庭支持：\n" +
                    "  - 家属参与血压监测\n" +
                    "  - 协助用药管理\n" +
                    "  - 陪同就医随访",
                diabetes: "糖尿病管理（高风险）：\n" +
                    "血糖控制目标：\n" +
                    "• HbA1c <6.5%（当无低血糖风险）\n" +
                    "• 空腹血糖 4.4-6.1 mmol/L\n" +
                    "• 餐后2小时血糖 <7.8 mmol/L\n\n" +
                    "药物治疗策略：\n" +
                    "• 一线药物：\n" +
                    "  - 二甲双胍（500-2000mg/天）\n" +
                    "  - 根据耐受性逐渐增加剂量\n" +
                    "• 早期联合治疗：\n" +
                    "  - SGLT2抑制剂（Dapagliflozin 10mg/天或Empagliflozin 10mg/天）\n" +
                    "  - GLP-1受体激动剂（利拉鲁肽1.2-1.8mg/天）\n" +
                    "• 治疗原则：\n" +
                    "  - 优先使用心血管获益的药物\n" +
                    "  - 根据患者特点个体化治疗\n" +
                    "  - 注重提高依从性\n\n" +
                    "并发症筛查和预防：\n" +
                    "• 心血管疾病：\n" +
                    "  - 每3个月评估心血管风险\n" +
                    "  - 严格控制血压和血脂\n" +
                    "  - 必要时进行心脏超声和应激测试\n" +
                    "• 肾病：\n" +
                    "  - 每3个月评估肾功能和尿微量白蛋白\n" +
                    "  - 优化肾保护治疗\n" +
                    "  - 避免使用肾毒性药物\n" +
                    "• 视网膜病变：\n" +
                    "  - 每3-6个月进行眼底检查\n" +
                    "  - 早期发现和干预\n" +
                    "• 神经病变：\n" +
                    "  - 每3个月进行足部检查\n" +
                    "  - 预防足部溃疡\n" +
                    "  - 疼痛管理\n\n" +
                    "监测要求：\n" +
                    "• 血糖监测：\n" +
                    "  - 每天监测4-6次\n" +
                    "  - 使用连续血糖监测系统\n" +
                    "  - 记录血糖波动\n" +
                    "• 定期检查：\n" +
                    "  - 每3个月HbA1c\n" +
                    "  - 每3-6个月肝肾功能\n" +
                    "  - 每年全面并发症筛查\n" +
                    "• 生活方式管理：\n" +
                    "  - 医学营养治疗\n" +
                    "  - 定期运动计划\n" +
                    "  - 体重管理\n" +
                    "  - 戒烟\n" +
                    "• 教育与随访：\n" +
                    "  - 糖尿病自我管理教育\n" +
                    "  - 每2周一次医生访问\n" +
                    "  - 心理支持\n" +
                    "  - 家庭支持系统",
                lipids: "血脂管理（高风险）：\n" +
                    "治疗目标：\n" +
                    "• LDL-C <1.4 mmol/L（55 mg/dL）\n" +
                    "• 非HDL-C <2.2 mmol/L（85 mg/dL）\n" +
                    "• 甘油三酯 <1.7 mmol/L（150 mg/dL）\n" +
                    "• ApoB <65 mg/dL\n\n" +
                    "药物治疗：\n" +
                    "• 强化他汀治疗（必须）：\n" +
                    "  - 阿托伐他汀80mg/天\n" +
                    "  - 或瑞舒伐他汀40mg/天\n" +
                    "  - 严密监测不良反应\n" +
                    "• 联合用药（必要时）：\n" +
                    "  - 依折麦布10mg/天（首选联合用药）\n" +
                    "  - PCSK9抑制剂（依洛尤单抗140mg/2周或阿利西尤单抗150mg/2周）\n" +
                    "  - 贝特类药物（高TG时）\n" +
                    "  - 胆固醇吸收抑制剂\n" +
                    "• 用药原则：\n" +
                    "  - 从最大耐受剂量他汀开始\n" +
                    "  - 2-4周评估疗效和耐受性\n" +
                    "  - LDL-C未达标时及时加用非他汀类药物\n" +
                    "  - 注意药物相互作用\n\n" +
                    "监测要求：\n" +
                    "• 治疗前评估：\n" +
                    "  - 空腹血脂全套\n" +
                    "  - 肝肾功能\n" +
                    "  - 空腹血糖\n" +
                    "  - 甲状腺功能\n" +
                    "  - 肌酸激酶基线值\n" +
                    "• 治疗期间监测：\n" +
                    "  - 开始治疗2-4周复查血脂和肝功能\n" +
                    "  - 达标后每4-8周复查\n" +
                    "  - 定期评估心血管风险\n" +
                    "  - 监测肌肉症状和肝功能\n" +
                    "• 不良反应监测：\n" +
                    "  - 肌肉症状（肌痛、无力）\n" +
                    "  - 肝功能异常\n" +
                    "  - 新发糖尿病风险\n" +
                    "  - 药物相互作用\n\n" +
                    "生活方式干预：\n" +
                    "• 饮食控制：\n" +
                    "  - 严格限制饱和脂肪（<5%总热量）\n" +
                    "  - 完全避免反式脂肪\n" +
                    "  - 增加单不饱和和多不饱和脂肪酸\n" +
                    "  - 增加膳食纤维（25-30g/天）\n" +
                    "  - 限制胆固醇摄入（<200mg/天）\n" +
                    "  - 增加植物固醇/甾醇（2g/天）\n" +
                    "• 运动计划：\n" +
                    "  - 每周≥150分钟中等强度有氧运动\n" +
                    "  - 每周2-3次抗阻运动\n" +
                    "  - 避免久坐\n" +
                    "  - 运动强度循序渐进\n" +
                    "• 体重管理：\n" +
                    "  - BMI目标<23 kg/m²\n" +
                    "  - 超重者每周减重0.5-1kg\n" +
                    "  - 记录体重变化\n" +
                    "  - 维持稳定体重\n" +
                    "• 其他要求：\n" +
                    "  - 严格戒烟\n" +
                    "  - 禁止饮酒\n" +
                    "  - 规律作息\n" +
                    "  - 压力管理\n" +
                    "  - 定期参加心脏康复\n" +
                    "• 家庭支持：\n" +
                    "  - 家属参与血压监测\n" +
                    "  - 协助用药管理\n" +
                    "  - 陪同就医随访"
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
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
                guidelines_notice: "Based on latest international guidelines:\n" +
                    "• ADA (American Diabetes Association) Annual Standards\n" +
                    "• ACC/AHA Cardiovascular Disease Prevention Guidelines\n" +
                    "• ESC Cardiovascular Disease Prevention Guidelines",

                lifestyle: "Lifestyle Interventions:\n" +
                    "- 150-300 minutes moderate exercise weekly\n" +
                    "- Follow Mediterranean or DASH diet\n" +
                    "- Sodium intake <2300mg/day\n" +
                    "- Quit smoking, limit alcohol",

                bp: "Blood Pressure Management:\n" +
                    "- Target BP <130/80 mmHg\n" +
                    "- Regular BP monitoring\n" +
                    "- Consider medication if needed\n" +
                    "- Follow-up every 3-6 months",

                lipids: "Lipid Management:\n" +
                    "- Target LDL-C <2.6 mmol/L (100 mg/dL)\n" +
                    "- Consider statin therapy\n" +
                    "- Regular lipid monitoring\n" +
                    "- Annual CV risk assessment",

                diabetes: "Diabetes Management:\n" +
                    "- Target HbA1c <7.0%\n" +
                    "- Fasting glucose 4.4-7.0 mmol/L\n" +
                    "- 2h postprandial glucose <10.0 mmol/L\n" +
                    "- Consider metformin\n" +
                    "- Monitor HbA1c every 3-6 months"
            },
            moderateRisk: {
                guidelines_notice: "Based on latest international guidelines:\n" +
                    "• ADA (American Diabetes Association) Annual Standards\n" +
                    "• ACC/AHA Cardiovascular Disease Prevention Guidelines\n" +
                    "• ESC Cardiovascular Disease Prevention Guidelines",

                lifestyle: "Lifestyle Interventions:\n" +
                    "- >300 minutes exercise weekly\n" +
                    "- Strict Mediterranean diet\n" +
                    "- Sodium intake <2000mg/day",

                bp: "Blood Pressure Management:\n" +
                    "- Target BP <130/80 mmHg\n" +
                    "- Start antihypertensive therapy\n" +
                    "- Regular follow-up\n" +
                    "- Consider combination therapy",

                lipids: "Lipid Management:\n" +
                    "- Target LDL-C <1.8 mmol/L (70 mg/dL)\n" +
                    "- Moderate intensity statin\n" +
                    "- Increase dose if not at goal after 3 months\n" +
                    "- Monitor every 6 months",

                diabetes: "Diabetes Management:\n" +
                    "- Target HbA1c <6.5%\n" +
                    "- Fasting glucose 4.4-6.1 mmol/L\n" +
                    "- 2h postprandial glucose <7.8 mmol/L\n" +
                    "- Prefer SGLT2i or GLP-1 RA\n" +
                    "- Monitor HbA1c every 3 months"
            },
            highRisk: {
                guidelines_notice: "Based on latest international guidelines:\n" +
                    "• ADA (American Diabetes Association) Annual Standards\n" +
                    "• ACC/AHA Cardiovascular Disease Prevention Guidelines\n" +
                    "• ESC Cardiovascular Disease Prevention Guidelines\n" +
                    "As you are in high-risk group, please seek medical attention promptly.",

                lifestyle: "Lifestyle Interventions:\n" +
                    "- >300 minutes exercise weekly\n" +
                    "- Strict Mediterranean diet\n" +
                    "- Sodium intake <2000mg/day\n" +
                    "- Quit smoking and alcohol",

                bp: "Blood Pressure Management:\n" +
                    "<level-1>• 血压严格控制至 <130/80 mmHg\n" +
                    "• 立即启动联合降压治疗\n" +
                    "• 优先选用ACEi/ARB+CCB或噻嗪类利尿剂</level-1>\n" +
                    "<level-2>• 每周监测血压\n" +
                    "• 定期评估靶器官损害</level-2>\n" +
                    "<level-3>• 考虑家庭血压监测\n" +
                    "• 调整生活方式</level-3>",

                lipids: "Lipid Management:\n" +
                    "<level-1>• LDL-C目标值 <55 mg/dL (1.4 mmol/L)\n" +
                    "• 高强度他汀（如阿托伐他汀40-80mg）</level-1>\n" +
                    "<level-2>• 如4-6周未达标，联合依折麦布\n" +
                    "• 必要时考虑PCSK9抑制剂</level-2>\n" +
                    "<level-3>• 每3个月监测血脂水平</level-3>",

                diabetes: "Diabetes Management:\n" +
                    "<level-1>• HbA1c目标 <7.0%（个体化目标：6.5-8.0%）\n" +
                    "• 建议早期联合用药：\n" +
                    "  - GLP-1受体激动剂\n" +
                    "  - SGLT2抑制剂</level-1>\n" +
                    "<level-2>• 空腹血糖 4.4-7.2 mmol/L\n" +
                    "• 餐后2小时血糖 <10.0 mmol/L</level-2>\n" +
                    "<level-3>• 每2-3个月监测HbA1c\n" +
                    "• 密切监测并发症</level-3>"
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
                guidelines_notice: "以下建议基于最新国际指南，建议定期关注：\n" +
                    "• 美国糖尿病协会(ADA)年度标准更新\n" +
                    "• 美国心脏病学会(ACC/AHA)心血管疾病预防指南\n" +
                    "• 欧洲心脏病学会(ESC)心血管疾病预防指南",
                
                lifestyle: "生活方式干预：\n" +
                    "- 每周150-300分钟中等强度或75-150分钟高强度运动\n" +
                    "- 遵循地中海饮食或DASH饮食\n" +
                    "- 限制钠摄入（<2300mg/日）\n" +
                    "- 戒烟限酒，保持健康体重（BMI 18.5-24.9）",

                bp: "血压管理：\n" +
                    "- 血压控制目标 <130/80 mmHg\n" +
                    "- 定期监测血压\n" +
                    "- 生活方式干预为主\n" +
                    "- 每3-6个月随访评估",

                lipids: "血脂管理：\n" +
                    "- LDL-C目标值 <100 mg/dL (2.6 mmol/L)\n" +
                    "- 优先考虑生活方式干预\n" +
                    "- 定期监测血脂水平\n" +
                    "- 每年评估心血管风险",

                diabetes: "血糖管理：\n" +
                    "- HbA1c控制目标 <7.0%\n" +
                    "- 空腹血糖 4.4-7.2 mmol/L (80-130 mg/dL)\n" +
                    "- 餐后2小时血糖 <10.0 mmol/L (<180 mg/dL)\n" +
                    "- 首选二甲双胍\n" +
                    "- 每3-6个月监测HbA1c"
            },
            moderateRisk: {
                guidelines_notice: "以下建议基于最新国际指南，建议定期关注：\n" +
                    "• 美国糖尿病协会(ADA)年度标准更新\n" +
                    "• 美国心脏病学会(ACC/AHA)心血管疾病预防指南\n" +
                    "• 欧洲心脏病学会(ESC)心血管疾病预防指南",

                lifestyle: "生活方式干预：\n" +
                    "- 每周>300分钟中等强度或>150分钟高强度运动\n" +
                    "- 严格执行地中海饮食或DASH饮食\n" +
                    "- 限制钠摄入（<2000mg/日）\n" +
                    "- BMI目标：18.5-24.9",

                bp: "血压管理：\n" +
                    "- 血压控制目标 <130/80 mmHg\n" +
                    "- 考虑启动降压治疗\n" +
                    "- 优先选用ACEi/ARB、CCB或噻嗪类利尿剂\n" +
                    "- 每3个月随访评估",

                lipids: "血脂管理：\n" +
                    "- LDL-C目标值 <70 mg/dL (1.8 mmol/L)\n" +
                    "- 中等强度他汀（如阿托伐他汀20mg）\n" +
                    "- 如3个月未达标，考虑增加剂量\n" +
                    "- 每4-6个月监测血脂水平",

                diabetes: "血糖管理：\n" +
                    "- HbA1c目标 <7.0%\n" +
                    "- 空腹血糖 4.4-7.2 mmol/L (80-130 mg/dL)\n" +
                    "- 餐后2小时血糖 <10.0 mmol/L (<180 mg/dL)\n" +
                    "- 优先考虑SGLT2抑制剂或GLP-1受体激动剂\n" +
                    "- 每3个月监测HbA1c"
            },
            highRisk: {
                guidelines_notice: "以下建议基于最新国际指南，强烈建议定期关注：\n" +
                    "• 美国糖尿病协会(ADA)年度标准更新\n" +
                    "• 美国心脏病学会(ACC/AHA)心血管疾病预防指南\n" +
                    "• 欧洲心脏病学会(ESC)心血管疾病预防指南\n" +
                    "由于您属于高风险人群，建议及时就医获取个性化治疗方案。",

                lifestyle: "生活方式干预：\n" +
                    "- 每周>300分钟中等强度或>150分钟高强度运动\n" +
                    "- 严格执行地中海饮食或DASH饮食\n" +
                    "- 限制钠摄入（<2000mg/日）\n" +
                    "- BMI目标：18.5-24.9\n" +
                    "- 戒烟限酒",

                bp: "血压管理：\n" +
                    "<level-1>• 血压严格控制至 <130/80 mmHg\n" +
                    "• 立即启动联合降压治疗\n" +
                    "• 优先选用ACEi/ARB+CCB或噻嗪类利尿剂</level-1>\n" +
                    "<level-2>• 每周监测血压\n" +
                    "• 定期评估靶器官损害</level-2>\n" +
                    "<level-3>• 考虑家庭血压监测\n" +
                    "• 调整生活方式</level-3>",

                lipids: "血脂管理：\n" +
                    "<level-1>• LDL-C目标值 <55 mg/dL (1.4 mmol/L)\n" +
                    "• 高强度他汀（如阿托伐他汀40-80mg）</level-1>\n" +
                    "<level-2>• 如4-6周未达标，联合依折麦布\n" +
                    "• 必要时考虑PCSK9抑制剂</level-2>\n" +
                    "<level-3>• 每3个月监测血脂水平</level-3>",

                diabetes: "血糖管理：\n" +
                    "<level-1>• HbA1c目标 <7.0%（个体化目标：6.5-8.0%）\n" +
                    "• 建议早期联合用药：\n" +
                    "  - GLP-1受体激动剂\n" +
                    "  - SGLT2抑制剂</level-1>\n" +
                    "<level-2>• 空腹血糖 4.4-7.2 mmol/L\n" +
                    "• 餐后2小时血糖 <10.0 mmol/L</level-2>\n" +
                    "<level-3>• 每2-3个月监测HbA1c\n" +
                    "• 密切监测并发症</level-3>"
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
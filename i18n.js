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
                guidelines_notice: "Based on latest guidelines:\n" +
                    "• 2024 ADA Standards of Care\n" +
                    "• 2023 ACC/AHA Prevention Guidelines\n" +
                    "• 2023 ACC/AHA Hypertension Guidelines",
                lifestyle: {
                    title: "Lifestyle Management",
                    content: "• Physical activity: 150-300 min/week moderate or 75-150 min/week vigorous\n" +
                        "• Mediterranean or DASH diet\n" +
                        "• Sodium <2300mg/day\n" +
                        "• BMI target: 18.5-24.9 kg/m²\n" +
                        "• Smoking cessation"
                },
                bp: {
                    title: "Blood Pressure Management",
                    content: "• Target: <130/80 mmHg\n" +
                        "• Lifestyle intervention focused\n" +
                        "• Regular BP monitoring\n" +
                        "• Follow-up every 3-6 months"
                },
                lipids: {
                    title: "Lipids Management",
                    content: "• LDL-C target: <100 mg/dL (<2.6 mmol/L)\n" +
                        "• Lifestyle intervention focused\n" +
                        "• Consider moderate-intensity statin\n" +
                        "• Annual CV risk assessment"
                },
                diabetes: {
                    title: "Diabetes Management",
                    content: "• HbA1c target: <7.0%\n" +
                        "• FPG: 4.4-7.2 mmol/L (80-130 mg/dL)\n" +
                        "• PPG: <10.0 mmol/L (<180 mg/dL)\n" +
                        "• First-line: Metformin\n" +
                        "• Monitor HbA1c every 3-6 months"
                }
            },
            moderateRisk: {
                guidelines_notice: "Based on latest guidelines:\n" +
                    "• 2024 ADA Standards of Care\n" +
                    "• 2023 ACC/AHA Prevention Guidelines\n" +
                    "• 2023 ACC/AHA Hypertension Guidelines",
                lifestyle: {
                    title: "Lifestyle Management",
                    content: "• Physical activity: >300 min/week moderate or >150 min/week vigorous\n" +
                        "• Strict Mediterranean or DASH diet\n" +
                        "• Sodium <2000mg/day\n" +
                        "• BMI target: 18.5-24.9 kg/m²\n" +
                        "• Smoking cessation required"
                },
                bp: {
                    title: "Blood Pressure Management",
                    content: "• Target: <130/80 mmHg\n" +
                        "• Consider combination therapy\n" +
                        "• Regular BP monitoring\n" +
                        "• Monthly follow-up"
                },
                lipids: {
                    title: "Lipids Management",
                    content: "• LDL-C target: <70 mg/dL (<1.8 mmol/L)\n" +
                        "• Moderate to high-intensity statin\n" +
                        "• Consider ezetimibe if needed\n" +
                        "• Monitor every 3-6 months"
                },
                diabetes: {
                    title: "Diabetes Management",
                    content: "• HbA1c target: <7.0%\n" +
                        "• Consider early combination therapy\n" +
                        "• GLP-1 RA or SGLT2i preferred\n" +
                        "• Monitor HbA1c every 3 months"
                }
            },
            highRisk: {
                guidelines_notice: "Based on latest guidelines:\n" +
                    "• 2023 ACC/AHA Prevention Guidelines\n" +
                    "• 2024 ADA Standards of Care\n" +
                    "• 2021 ESC Prevention Guidelines\n" +
                    "Immediate medical consultation recommended.",
                lifestyle: {
                    title: "Lifestyle Management",
                    content: "• Physical activity: 150+ min/week moderate or 75+ min/week vigorous\n" +
                        "• Mediterranean or DASH diet mandatory\n" +
                        "• Sodium <2000mg/day\n" +
                        "• BMI target: 18.5-24.9 kg/m²\n" +
                        "• Smoking cessation urgent"
                },
                bp: {
                    title: "Blood Pressure Management",
                    content: "• Target: <130/80 mmHg\n" +
                        "• Initial combination therapy\n" +
                        "• Preferred: ACEi/ARB + CCB + thiazide\n" +
                        "• Weekly BP monitoring\n" +
                        "• Monitor organ damage"
                },
                lipids: {
                    title: "Lipid Management",
                    content: "• LDL-C target: <55 mg/dL (<1.4 mmol/L)\n" +
                        "• High-intensity statin\n" +
                        "• Add ezetimibe if needed\n" +
                        "• Consider PCSK9i for uncontrolled LDL-C\n" +
                        "• Monitor every 3 months"
                },
                diabetes: {
                    title: "Diabetes Management",
                    content: "• HbA1c target: <7.0%\n" +
                        "• Combination therapy:\n" +
                        "  - GLP-1 RA + SGLT2i preferred\n" +
                        "  - Consider early insulin if needed\n" +
                        "• Monitor HbA1c every 3 months\n" +
                        "• Aggressive CV risk management"
                }
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
                guidelines_notice: "基于最新指南：\n" +
                    "• 2024 ADA糖尿病诊疗标准\n" +
                    "• 2023 ACC/AHA心血管疾病预防指南\n" +
                    "• 2023 ACC/AHA高血压管理指南",
                lifestyle: {
                    title: "生活方式管理",
                    content: "• 运动：每周150-300分钟中等强度或75-150分钟高强度\n" +
                        "• 饮食：地中海或DASH饮食\n" +
                        "• 限盐：<2300mg/日\n" +
                        "• BMI目标：18.5-24.9 kg/m²\n" +
                        "• 戒烟限酒"
                },
                bp: {
                    title: "血压管理",
                    content: "• 目标：<130/80 mmHg\n" +
                        "• 生活方式干预为主\n" +
                        "• 定期监测血压\n" +
                        "• 每3-6个月随访评估"
                },
                lipids: {
                    title: "血脂管理",
                    content: "• LDL-C目标：<100 mg/dL (<2.6 mmol/L)\n" +
                        "• 生活方式干预为主\n" +
                        "• 考虑中等强度他汀\n" +
                        "• 每年评估心血管风险"
                },
                diabetes: {
                    title: "血糖管理",
                    content: "• HbA1c目标：<7.0%\n" +
                        "• 空腹血糖：4.4-7.2 mmol/L (80-130 mg/dL)\n" +
                        "• 餐后2h血糖：<10.0 mmol/L (<180 mg/dL)\n" +
                        "• 首选二甲双胍\n" +
                        "• 每3-6个月监测HbA1c"
                }
            },
            moderateRisk: {
                guidelines_notice: "基于最新指南：\n" +
                    "• 2024 ADA糖尿病诊疗标准\n" +
                    "• 2023 ACC/AHA心血管疾病预防指南\n" +
                    "• 2023 ACC/AHA高血压管理指南",
                lifestyle: {
                    title: "生活方式管理",
                    content: "• 运动：每周>200分钟中等强度或>100分钟高强度\n" +
                        "• 严格执行地中海或DASH饮食\n" +
                        "• 限盐：<2000mg/日\n" +
                        "• BMI目标：18.5-24.9 kg/m²\n" +
                        "• 必须戒烟限酒"
                },
                bp: {
                    title: "血压管理",
                    content: "• 目标：<130/80 mmHg\n" +
                        "• 启动降压治疗\n" +
                        "• 首选ACEi/ARB、CCB或噻嗪类利尿剂\n" +
                        "• 每月监测血压直至达标\n" +
                        "• 每3个月随访评估"
                },
                lipids: {
                    title: "血脂管理",
                    content: "• LDL-C目标：<70 mg/dL (<1.8 mmol/L)\n" +
                        "• 中高强度他汀（如阿托伐他汀20-40mg）\n" +
                        "• 未达标可考虑依折麦布\n" +
                        "• 每4-6个月监测血脂"
                },
                diabetes: {
                    title: "血糖管理",
                    content: "• HbA1c目标：<7.0%\n" +
                        "• 空腹血糖：4.4-7.2 mmol/L\n" +
                        "• 餐后2h血糖：<10.0 mmol/L\n" +
                        "• 二甲双胍+GLP-1 RA或SGLT2i\n" +
                        "• 每3个月监测HbA1c"
                }
            },
            highRisk: {
                guidelines_notice: "基于最新指南：\n" +
                    "• 2024 ADA糖尿病诊疗标准\n" +
                    "• 2023 ACC/AHA心血管疾病预防指南\n" +
                    "• 2023 ACC/AHA高血压管理指南\n" +
                    "建议及时就医获取个性化治疗方案",
                lifestyle: {
                    title: "生活方式管理",
                    content: "• 运动：每周>300分钟中等强度或>150分钟高强度\n" +
                        "• 严格执行地中海或DASH饮食\n" +
                        "• 限盐：<2000mg/日\n" +
                        "• BMI目标：18.5-24.9 kg/m²\n" +
                        "• 必须立即戒烟限酒"
                },
                bp: {
                    title: "血压管理",
                    content: "• 目标：<130/80 mmHg\n" +
                        "• 立即启动联合降压治疗\n" +
                        "• 首选ACEi/ARB+CCB+噻嗪类利尿剂\n" +
                        "• 每周监测血压\n" +
                        "• 定期评估靶器官损害"
                },
                lipids: {
                    title: "血脂管理",
                    content: "• LDL-C目标：<55 mg/dL (<1.4 mmol/L)\n" +
                        "• 高强度他汀（阿托伐他汀40-80mg）\n" +
                        "• 未达标加用依折麦布\n" +
                        "• 必要时考虑PCSK9抑制剂\n" +
                        "• 每3个月监测血脂"
                },
                diabetes: {
                    title: "血糖管理",
                    content: "• HbA1c目标：<7.0%（个体化：6.5-8.0%）\n" +
                        "• 早期联合用药：\n" +
                        "  - GLP-1 RA\n" +
                        "  - SGLT2i\n" +
                        "• 每2-3个月监测HbA1c\n" +
                        "• 密切监测并发症"
                }
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
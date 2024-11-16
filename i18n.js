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
                    "• CCB: peripheral edema, constipation\n" +
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
                    "  - Men: ≤2 drinks/day\n" +
                    "  - Women: ≤1 drink/day\n\n" +
                    "Monitoring:\n" +
                    "• Regular BP checks\n" +
                    "• Keep BP diary\n" +
                    "• Follow-up as advised by healthcare provider"
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
                mmoll: "mmol/L"
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
                guidelines_notice: "基于最新国际指南：\n" +
                    "• ADA（美国糖尿病协会）年度标准\n" +
                    "• ACC/AHA 心血管疾病预防指南\n" +
                    "• ESC（欧洲心脏病学会）心血管疾病预防指南",
                lifestyle: "生活方式建议：\n" +
                    "- 每周进行150-300分钟中等强度或75-150分钟高强度有氧运动\n" +
                    "- 遵循地中海饮食模式\n" +
                    "- 维持健康体重（BMI <25 kg/m²）",
                bp_treated: "高血压管理（服用降压药）：\n" +
                    "血压目标：\n" +
                    "• 主要目标：大多数成年人 <130/80 mmHg\n" +
                    "• 65岁及以上：如果耐受则考虑 <130/80 mmHg\n" +
                    "• 慢性肾病伴蛋白尿：<130/80 mmHg\n" +
                    "• 合并糖尿病：<130/80 mmHg\n\n" +
                    "药物治疗：\n" +
                    "• 一线用药选择：\n" +
                    "  - ACEi/ARB（如：赖诺普利10-40mg、缬沙坦80-320mg）\n" +
                    "  - CCB（如：氨氯地平2.5-10mg）\n" +
                    "  - 噻嗪样利尿剂（如：氯噻酮12.5-25mg）\n\n" +
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
                bp_untreated: "高血压管理（服用降压药）：\n" +
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
                    "• 体育活动：\n" +
                    "  - 150 min/week moderate activity\n" +
                    "  - Or 75 min/week vigorous activity\n" +
                    "• 体重管理：\n" +
                    "  - 目标BMI <25 kg/m²\n" +
                    "  - 超重者减重\n" +
                    "• 限制饮酒：\n" +
                    "  - 男性：≤2 drinks/day\n" +
                    "  - 女性：≤1 drink/day\n\n" +
                    "监测要求：\n" +
                    "• 定期测量血压\n" +
                    "• 记录血压日志\n" +
                    "• 遵医嘱随访",
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
            }
        },
        error: {
            general: "发生错误，请重试。",
            validation: "请检查输入值。",
            age: "年龄必须在40至79岁之间。",
            systolic: "收缩压必须在90至200 mmHg之间。",
            cholesterol: "请输入有效的胆固醇值。",
            required: "所有字段都必须填写。"
        },
        validation: {
            error: "请在所有字段中输入有效值。"
        }
    },
    es: {
        title: "Calculadora de Riesgo PCE",
        description: "Calculadora de Riesgo ASCVD a 10 años",
        form: {
            age: "Edad",
            gender: {
                label: "Género",
                male: "Masculino",
                female: "Femenino"
            },
            race: {
                label: "Raza",
                white: "Blanco",
                aa: "Afroamericano",
                asian: "Asiático",
                other: "Otro"
            },
            systolic: "Presión Arterial Sistólica (mmHg)",
            cholesterol: {
                total: "Colesterol Total",
                hdl: "Colesterol HDL"
            },
            diabetes: {
                label: "Diabetes",
                yes: "Sí",
                no: "No"
            },
            smoker: {
                label: "Fumador",
                yes: "Sí",
                no: "No"
            },
            calculate: "Calcular Riesgo",
            units: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            bpMedication: {
                label: "¿Toma medicamentos para la presión arterial?",
                hint: "Si actualmente toma medicamentos para la presión arterial, seleccione 'Sí'"
            },
            asian: "Asiático"
        },
        result: {
            title: "Resultados",
            risk: "Riesgo ASCVD a 10 años:",
            levels: {
                low: "Riesgo Bajo",
                moderate: "Riesgo Moderado",
                high: "Riesgo Alto"
            }
        },
        guidelines: {
            title: "Importantes Líneas de Guía",
            // ... 其他指南相关翻译
        },
        advice: {
            lowRisk: {
                guidelines_notice: "Basado en las últimas guías internacionales:\n" +
                    "• Guías ACC/AHA 2023 de Prevención\n" +
                    "• Guías ACC/AHA 2023 de Presión Arterial\n" +
                    "• Guías ACC/AHA 2023 de Colesterol\n" +
                    "• Estándares de Atención ADA 2023",

                lifestyle: "Recomendaciones de estilo de vida:\n" +
                    "- 150-300 minutos de actividad aeróbica moderada o 75-150 minutos de actividad vigorosa por semana\n" +
                    "- Seguir el patrón de dieta mediterránea\n" +
                    "- Mantener un peso saludable (IMC <25 kg/m²)",
                bp_treated: "Manejo de la presión arterial (con medicación):\n" +
                    "- Objetivo PA <130/80 mmHg\n" +
                    "- Continuar medicación y monitorear semanalmente\n" +
                    "- Suivi régulier\n" +
                    "- Monitorear efectos secundarios",
                bp_untreated: "Manejo de la presión arterial (sin medicación):\n" +
                    "- Consultar al profesional de salud\n" +
                    "- Objetivo PA <130/80 mmHg\n" +
                    "- Considerar iniciar medicación\n" +
                    "- Monitoreo regular",
                diabetes: "Manejo de la diabetes:\n" +
                    "- Objetivo HbA1c <7%\n" +
                    "- Considerar inhibidores SGLT2\n" +
                    "- Monitorear glucosa en sangre y función renal\n" +
                    "- Vérifier HbA1c cada 3-6 meses",
                lipids: "Manejo de lípidos:\n" +
                    "- Riesgo muy alto (riesgo ASCVD >20%): LDL-C <55 mg/dL (1.4 mmol/L)\n" +
                    "- Riesgo alto (riesgo 7.5-19.9%): LDL-C <70 mg/dL (1.8 mmol/L)\n" +
                    "- Riesgo moderado (riesgo 5-7.4%): LDL-C <100 mg/dL (2.6 mmol/L)\n" +
                    "- Riesgo bajo (riesgo <5%): Considerar LDL-C <116 mg/dL (3.0 mmol/L)\n" +
                    "- Estatinas de alta intensidad si riesgo a 10 años ≥20%\n" +
                    "- Estatinas de intensidad moderada si riesgo 7.5-19.9%\n" +
                    "- Monitorear lípidos cada 3-12 meses\n" +
                    "- Considerar terapia sin estatinas si no se alcanzan los objetivos"
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
    fr: {
        title: "Calculateur de Risque PCE",
        description: "Calculateur de Risque ASCVD sur 10 ans",
        form: {
            age: "Âge",
            gender: {
                label: "Sexe",
                male: "Homme",
                female: "Femme"
            },
            race: {
                label: "Origine ethnique",
                white: "Blanc",
                aa: "Afro-américain",
                asian: "Asiatique",
                other: "Autre"
            },
            systolic: "Pression Artérielle Systolique (mmHg)",
            cholesterol: {
                total: "Cholestérol Total",
                hdl: "Cholestérol HDL"
            },
            diabetes: {
                label: "Diabète",
                yes: "Oui",
                no: "Non"
            },
            smoker: {
                label: "Fumeur",
                yes: "Oui",
                no: "Non"
            },
            calculate: "Calculer le Risque",
            units: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            bpMedication: {
                label: "Prenez-vous des médicaments pour la tension?",
                hint: "Si vous prenez actuellement des médicaments pour la tension, sélectionnez 'Oui'"
            },
            asian: "Asiatique"
        },
        result: {
            title: "Résultats",
            risk: "Risque ASCVD sur 10 ans:",
            levels: {
                low: "Risque Faible",
                moderate: "Risque Modéré",
                high: "Risque Élevé"
            }
        },
        guidelines: {
            title: "Lignes Directrices Importantes",
            // ... 其他指南相关翻译
        },
        advice: {
            lowRisk: {
                guidelines_notice: "Basé sur les dernières directives internationales :\n" +
                    "• Directives ACC/AHA 2023 de Prévention\n" +
                    "• Directives ACC/AHA 2023 de Pression Artérielle\n" +
                    "• Directives ACC/AHA 2023 de Cholestérol\n" +
                    "• Standards de Soins ADA 2023",
                lifestyle: "Recommandations sur le mode de vie :\n" +
                    "- 150-300 minutes d'activité aérobique modérée ou 75-150 minutes d'activité vigoureuse par semaine\n" +
                    "- Suivre le régime méditerranéen\n" +
                    "- Maintenir un poids santé (IMC <25 kg/m²)",
                bp_treated: "Gestion de la pression artérielle (sous traitement):\n" +
                    "- Objectif PA <130/80 mmHg\n" +
                    "- Poursuivre le traitement et surveiller hebdomadairement\n" +
                    "- Suivi régulier\n" +
                    "- Surveiller les effets secondaires",
                bp_untreated: "Gestion de la pression artérielle (sans traitement):\n" +
                    "- Consulter un professionnel de santé\n" +
                    "- Objectif PA <130/80 mmHg\n" +
                    "- Envisager un traitement médicamenteux\n" +
                    "- Surveillance régulière",
                diabetes: "Gestion du diabète:\n" +
                    "- Objectif HbA1c <7%\n" +
                    "- Envisager les inhibiteurs SGLT2\n" +
                    "- Surveiller la glycémie et la fonction rénale\n" +
                    "- Vérifier l'HbA1c tous les 3-6 mois",
                lipids: "Gestion des lipides:\n" +
                    "- Risque très élevé (risque ASCVD >20%) : LDL-C <55 mg/dL (1,4 mmol/L)\n" +
                    "- Risque élevé (risque 7,5-19,9%) : LDL-C <70 mg/dL (1,8 mmol/L)\n" +
                    "- Risque modéré (risque 5-7,4%) : LDL-C <100 mg/dL (2,6 mmol/L)\n" +
                    "- Risque faible (risque <5%) : Envisager LDL-C <116 mg/dL (3,0 mmol/L)\n" +
                    "- Statines haute intensité si risque à 10 ans ≥20%\n" +
                    "- Statines intensité modérée si risque 7,5-19,9%\n" +
                    "- Surveiller les lipides tous les 3-12 mois\n" +
                    "- Envisager une thérapie sans statines si objectifs non atteints"
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
    de: {
        title: "PCE-Risikorechner",
        description: "10-Jahres-ASCVD-Risikorechner",
        form: {
            age: "Alter",
            gender: {
                label: "Geschlecht",
                male: "Männlich",
                female: "Weiblich"
            },
            race: {
                label: "Ethnische Herkunft",
                white: "Weiß",
                aa: "Afroamerikanisch",
                asian: "Asiatisch",
                other: "Andere"
            },
            systolic: "Systolischer Blutdruck (mmHg)",
            cholesterol: {
                total: "Gesamtcholesterin",
                hdl: "HDL-Cholesterin"
            },
            diabetes: {
                label: "Diabetes",
                yes: "Ja",
                no: "Nein"
            },
            smoker: {
                label: "Raucher",
                yes: "Ja",
                no: "Nein"
            },
            calculate: "Risiko berechnen",
            units: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            bpMedication: {
                label: "Nehmen Sie Blutdruckmedikamente?",
                hint: "Wenn Sie derzeit Blutdruckmedikamente nehmen, wählen Sie 'Ja'"
            },
            asian: "Asiatisch"
        },
        result: {
            title: "Ergebnisse",
            risk: "10-Jahres-ASCVD-Risiko:",
            levels: {
                low: "Niedriges Risiko",
                moderate: "Mittleres Risiko",
                high: "Hohes Risiko"
            }
        },
        guidelines: {
            title: "Wichtige Richtlinien",
            // ... 其他指南相关翻译
        },
        advice: {
            lowRisk: {
                guidelines_notice: "Basierend auf den neuesten internationalen Richtlinien:\n" +
                    "• ADA (American Diabetes Association) Jahresstandards\n" +
                    "• ACC/AHA Herz-Kreislauf-Präventionsrichtlinien\n" +
                    "• ESC (Europäische Gesellschaft für Kardiologie) CVD-Präventionsrichtlinien",
                lifestyle: "Lifestyle recommendations:\n" +
                    "- 150-300 minutes moderate or 75-150 minutes vigorous aerobic activity per week\n" +
                    "- Follow Mediterranean diet pattern\n" +
                    "- Maintain healthy weight (BMI <25 kg/m²)",
                bp_treated: "Blutdruckmanagement (mit Medikation):\n" +
                    "Blutdruckziele:\n" +
                    "• Allgemeines Ziel: <130/80 mmHg\n" +
                    "• Alter ≥65: <130/80 mmHg wenn vertragen\n" +
                    "• Mit CKD + Albuminurie: <130/80 mmHg\n" +
                    "• Mit Diabetes: <130/80 mmHg\n\n" +
                    "Medikamente:\n" +
                    "• Erstlinienoptionen:\n" +
                    "  - ACE-Hemmer/ARB (z.B. Lisinopril 10-40mg, Valsartan 80-320mg)\n" +
                    "  - Kalziumkanalblocker (z.B. Amlodipin 2,5-10mg)\n" +
                    "  - Thiazid-ähnliche Diuretika (z.B. Chlortalidon 12,5-25mg)\n\n" +
                    "• Initiale Kombinationstherapie bei BP ≥20/10 mmHg über Zielwert:\n" +
                    "  - Bevorzugt: ACE-Hemmer/ARB + Kalziumkanalblocker\n" +
                    "  - Alternative: ACE-Hemmer/ARB + Thiazid-ähnliches Diuretikum\n" +
                    "  - Erwägen Sie Fixkombinationen\n\n" +
                    "• Drittlinienoptionen:\n" +
                    "  - Spironolacton (25-50mg) hinzufügen\n" +
                    "  - Oder anderes kaliumsparendes Diuretikum\n" +
                    "  - Betablocker für spezifische Indikationen\n\n" +
                    "Überwachung:\n" +
                    "• Häusliche Blutdruckmessung: zweimal täglich\n" +
                    "• Laborüberwachung:\n" +
                    "  - Baseline: Kreatinin, K+, DFGe\n" +
                    "  - 2-4 Wochen nach Start/Änderung von ACE-Hemmer/ARB/Diuretika\n" +
                    "  - Dann alle 3-12 Monate je nach Stabilität\n\n" +
                    "Nebenwirkungsüberwachung:\n" +
                    "• ACE-Hemmer/ARB: Husten, Hyperkaliämie, akutes Nierenversagen\n" +
                    "• Kalziumkanalblocker: periphere Ödeme, Obstipation\n" +
                    "• Thiazide: Hypokaliämie, Hyperurikämie\n" +
                    "• Spironolacton: Hyperkaliämie, Gynäkomastie\n\n" +
                    "Lebensstiländerungen (essentiell):\n" +
                    "• Natriumrestriktion: <2000mg/Tag\n" +
                    "• DASH-Diät\n" +
                    "• Regelmäßige aerobe Aktivität\n" +
                    "• Gewichtsmanagement\n" +
                    "• Alkoholeinschränkung\n" +
                    "• Stressmanagement",
                bp_untreated: "Blutdruckmanagement (ohne Medikation):\n" +
                    "Blutdruckziele:\n" +
                    "• Optimal: <120/80 mmHg\n" +
                    "• Normal: 120-129/<80 mmHg\n" +
                    "• Erhöht: 130-139/80-89 mmHg\n\n" +
                    "Medikation erwägen wenn:\n" +
                    "• Blutdruck konstant ≥130/80 mmHg mit hohem CV-Risiko\n" +
                    "• Blutdruck konstant ≥140/90 mmHg für andere\n" +
                    "• Mit Diabetes oder Nierenerkrankung\n" +
                    "• Mit Endorganschäden\n\n" +
                    "Lebensstiländerungen (essentiell):\n" +
                    "• DASH-Ernährungsplan:\n" +
                    "  - Reich an Obst, Gemüse, Vollkornprodukten\n" +
                    "  - Fettarme Milchprodukte\n" +
                    "  - Reduzierte gesättigte Fette\n" +
                    "• Natriumrestriktion:\n" +
                    "  - Ideal: <1,5g/Tag\n" +
                    "  - Maximum: <2,3g/Tag\n" +
                    "• Körperliche Aktivität:\n" +
                    "  - 150 Min/Woche moderate Aktivität\n" +
                    "  - Oder 75 Min/Woche intensive Aktivität\n" +
                    "• Gewichtsmanagement:\n" +
                    "  - Ziel-BMI <25 kg/m²\n" +
                    "  - Gewichtsreduktion bei Übergewicht\n" +
                    "• Alkoholeinschränkung:\n" +
                    "  - Männer: ≤2 Drinks/Tag\n" +
                    "  - Frauen: ≤1 Drink/Tag\n\n" +
                    "Überwachung:\n" +
                    "• Regelmäßige Blutdruckmessungen\n" +
                    "• Blutdrucktagebuch führen\n" +
                    "• Ärztliche Kontrollen nach Anweisung"
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
    ja: {
        title: "PCEリスク計算機",
        description: "10年ASCVD リスク評価計算機",
        form: {
            age: "年齢",
            gender: {
                label: "性別",
                male: "男性",
                female: "女性"
            },
            race: {
                label: "人種",
                white: "白人",
                aa: "アフリカ系アメリカ人",
                asian: "アジア人",
                other: "その他"
            },
            systolic: "収縮期血圧 (mmHg)",
            cholesterol: {
                total: "総コレステロール",
                hdl: "HDLコレステロール"
            },
            diabetes: {
                label: "糖尿病",
                yes: "はい",
                no: "いいえ"
            },
            smoker: {
                label: "喫煙",
                yes: "はい",
                no: "いいえ"
            },
            calculate: "リスクを計算",
            units: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            bpMedication: {
                label: "血圧降下薬を服用していますか？",
                hint: "現在血圧降下薬を服用している場合は「はい」を選択してください"
            },
            asian: "アジア人"
        },
        result: {
            title: "計算結果",
            risk: "10年ASCVDリスク:",
            levels: {
                low: "低リスク",
                moderate: "中程度リスク",
                high: "高リスク"
            }
        },
        guidelines: {
            title: "重要なガイドライン",
            // ... 其他指南相关翻译
        },
        advice: {
            lowRisk: {
                guidelines_notice: "最新の国際ガイドラインに基づく：\n" +
                    "• 2023年 ACC/AHA予防ガイドライン\n" +
                    "• 2023年 ACC/AHA血圧ガイドライン\n" +
                    "• 2023年 ACC/AHAコレステロールガイドライン\n" +
                    "• 2023年 ADA糖尿病診療基準",

                lifestyle: "生活習慣の改善：\n" +
                    "運動：\n" +
                    "• 週150-300分の中等度運動または75-150分の高強度運動\n" +
                    "• 週2-3回の筋力トレーニング\n" +
                    "• 座位時間の削減\n\n" +
                    "食事：\n" +
                    "• 地中海式食事またはDASH食\n" +
                    "• 飽和脂肪を減らす（カロリーの7%未満）\n" +
                    "• 果物、野菜全粒穀物を増やす\n" +
                    "• 加工食品と添加糖を制限\n" +
                    "• 塩分制限（<2.3g/日）\n\n" +
                    "体重管理：\n" +
                    "• 目標BMI <25 kg/m²\n" +
                    "• 腹囲：男性 <90cm、女性 <80cm\n\n" +
                    "その他：\n" +
                    "• 禁煙\n" +
                    "• アルコール制限（男性≤2杯/日、女性≤1杯/日）\n" +
                    "• 十分な睡眠（7-9時間）\n" +
                    "• ストレス管理",

                bp_treated: "血圧管理（服薬中）：\n" +
                    "血圧目標：\n" +
                    "• 一般目標：<130/80 mmHg\n" +
                    "• 65歳以上：忍容性があれば <130/80 mmHg\n" +
                    "• CKD+アルブミン尿：<130/80 mmHg\n" +
                    "• 糖尿病合併：<130/80 mmHg\n\n" +
                    "薬物治療：\n" +
                    "• 第一選択薬：\n" +
                    "  - ACE阻害薬/ARB（例：リシノプリル10-40mg、バルサルタン80-320mg）\n" +
                    "  - Ca拮抗薬（例：アムロジピン2.5-10mg）\n" +
                    "  - チアジド系利尿薬（例：クロルタリドン12.5-25mg）\n\n" +
                    "• 目標値より20/10 mmHg以上高い場合の併用療法：\n" +
                    "  - 推奨：ACE阻害薬/ARB + Ca拮抗薬\n" +
                    "  - 代替：ACE阻害薬/ARB + チアジド系利尿薬\n" +
                    "  - 配合剤の使用を考慮\n\n" +
                    "• 第三選択薬：\n" +
                    "  - スピロノラクトン（25-50mg）\n" +
                    "  - または他のK保持性利尿薬\n" +
                    "  - 特定の適応でβ遮断薬\n\n" +
                    "モニタリング：\n" +
                    "• 家庭血圧：1日2回測定\n" +
                    "• 検査モニタリング：\n" +
                    "  - ベースライン：Cr、K+、eGFR\n" +
                    "  - ACE阻害薬/ARB/利尿薬開始/変更後2-4週\n" +
                    "  - その後は安定性に応じて3-12ヶ月毎\n\n" +
                    "副作用モニタリング：\n" +
                    "• ACE阻害薬/ARB：咳嗽、高K血症、急性腎障害\n" +
                    "• Ca拮抗薬：末梢性浮腫、便秘\n" +
                    "• チアジド系：低K血症、高尿酸血症\n" +
                    "• スピロノラクトン：高K血症、女性化乳房\n\n" +
                    "生活習慣の改善（必須）：\n" +
                    "• 塩分制限：<2000mg/日\n" +
                    "• DASH食\n" +
                    "• 定期的な有酸素運動\n" +
                    "• 体重管理\n" +
                    "• アルコール制限\n" +
                    "• ストレス管理",

                bp_untreated: "血圧管理（未服薬）：\n" +
                    "血圧目標：\n" +
                    "• 最適：<120/80 mmHg\n" +
                    "• 正常：120-129/<80 mmHg\n" +
                    "• 高値：130-139/80-89 mmHg\n\n" +
                    "薬物治療を考慮する場合：\n" +
                    "• 心血管リスク高値で血圧が持続的に≥130/80 mmHg\n" +
                    "• その他の場合で血圧が持続的に≥140/90 mmHg\n" +
                    "• 糖尿病または腎臓病合併\n" +
                    "• 標的臓器障害あり\n\n" +
                    "生活習慣の改善（必須）：\n" +
                    "• DASH食：\n" +
                    "  - 果物、野菜、全粒穀物が豊富\n" +
                    "  - 低脂肪乳製品\n" +
                    "  - 飽和脂肪を減らす\n" +
                    "• 塩分制限：\n" +
                    "  - 理想：<1.5g/日\n" +
                    "  - 最大：<2.3g/日\n" +
                    "• 運動：\n" +
                    "  - 週150分の中等度運動\n" +
                    "  - または週75分の高強度運動\n" +
                    "• 体重管理：\n" +
                    "  - 目標BMI <25 kg/m²\n" +
                    "  - 過体重の場合は減量\n" +
                    "• アルコール制限：\n" +
                    "  - 男性：≤2杯/日\n" +
                    "  - 女性：≤1杯/日\n\n" +
                    "モニタリング：\n" +
                    "• 定期的な血圧測定\n" +
                    "• 血圧日記をつける\n" +
                    "• 医師の指示に従って受診",

                diabetes: "糖尿病管理：\n" +
                    "• 血糖コントロール目標：\n" +
                    "  - HbA1c <7.0%（多くの成人）\n" +
                    "  - 個別化目標：6.5-8.0%\n" +
                    "• 薬物治療：\n" +
                    "  - 第一選択：メトホルミン\n" +
                    "  - SGLT2阻害薬またはGLP-1受容体作動薬を優先考慮\n" +
                    "  - 心血管疾患がある場合はSGLT2阻害薬を推奨\n" +
                    "• モニタリング：\n" +
                    "  - 3-6ヶ月毎のHbA1c測定\n" +
                    "  - 定期的な腎機能検査\n" +
                    "  - 年1回の眼底・足部検査\n" +
                    "  - 定期的な心血管リスク評価",

                lipids: "脂質管理：\n" +
                    "• リスクに基づくLDL-C目標値：\n" +
                    "  - 超高リスク（>20%）：<55 mg/dL (1.4 mmol/L)\n" +
                    "  - 高リスク（7.5-19.9%）：<70 mg/dL (1.8 mmol/L)\n" +
                    "  - 中等度リスク（5-7.4%）：<100 mg/dL (2.6 mmol/L)\n" +
                    "  - 低リスク（<5%）：<116 mg/dL (3.0 mmol/L)\n\n" +
                    "• スタチン治療：\n" +
                    "  - 高強度：アトルバスタチン40-80mgまたはロスバスタチン20-40mg\n" +
                    "  - 中等度：アトルバスタチン10-20mgまたはロスバスタチン5-10mg\n\n" +
                    "• 非スタチン薬：\n" +
                    "  - エゼチミブ10mg\n" +
                    "  - PCSK9阻害薬\n" +
                    "  - ベンペド酸\n\n" +
                    "• 生活習慣の改善：\n" +
                    "  - 地中海式食事または低脂肪食\n" +
                    "  - 定期的な運動\n" +
                    "  - 体重管理\n" +
                    "  - 禁煙\n\n" +
                    "• モニタリング：\n" +
                    "  - 治療開始前の肝機能検査\n" +
                    "  - 治療開始4-12週後の脂質・肝機能検査\n" +
                    "  - その後3-12ヶ月毎のモニタリング\n" +
                    "  - 筋症状に注意"
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
    }
};

window.i18n = i18n; 
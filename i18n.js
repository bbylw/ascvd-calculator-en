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
            low: "Your 10-year risk is low.",
            moderate: "Your 10-year risk is moderate.",
            high: "Your 10-year risk is high.",
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
                    "• General target: <130/80 mmHg\n" +
                    "• Age >65: <130-139/70-79 mmHg\n" +
                    "• With diabetes: <130/80 mmHg\n" +
                    "• With CKD: <130/80 mmHg\n\n" +
                    "Medications:\n" +
                    "• First-line options:\n" +
                    "  - ACEi/ARB (e.g., Lisinopril, Valsartan)\n" +
                    "  - CCB (e.g., Amlodipine)\n" +
                    "  - Thiazide diuretics (e.g., HCTZ)\n" +
                    "• Combination therapy if >20/10 mmHg above target:\n" +
                    "  - ACEi/ARB + CCB preferred\n" +
                    "  - ACEi/ARB + Thiazide alternative\n" +
                    "  - Avoid ACEi + ARB combination\n\n" +
                    "Monitoring:\n" +
                    "• Home BP monitoring 2x daily\n" +
                    "• Check kidney function and electrolytes:\n" +
                    "  - 2-4 weeks after starting/changing ACEi/ARB\n" +
                    "  - Then every 6-12 months\n" +
                    "• Monitor for side effects:\n" +
                    "  - ACEi/ARB: cough, hyperkalemia\n" +
                    "  - CCB: edema\n" +
                    "  - Thiazides: hypokalemia\n\n" +
                    "Lifestyle Modifications:\n" +
                    "• Reduce sodium (<2.3g/day)\n" +
                    "• DASH diet\n" +
                    "• Regular physical activity\n" +
                    "• Weight management\n" +
                    "• Limit alcohol\n" +
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
                    "• Follow-up as advised by healthcare provider",

                diabetes: "Diabetes management:\n" +
                    "Glycemic Targets:\n" +
                    "• HbA1c <7.0% for most adults\n" +
                    "• Consider <6.5% for selected individuals\n" +
                    "• Less stringent targets for elderly/comorbid\n\n" +
                    "Medications:\n" +
                    "• First-line: Metformin\n" +
                    "• Early consideration of GLP-1 RA or SGLT2i\n" +
                    "• SGLT2i preferred with CV disease\n\n" +
                    "Monitoring:\n" +
                    "• HbA1c every 3-6 months\n" +
                    "• Regular kidney function\n" +
                    "• Annual eye and foot exams\n" +
                    "• Regular CV risk assessment",

                lipids: "Lipid management:\n" +
                    "LDL-C Targets by Risk:\n" +
                    "• Very high risk (>20%): <55 mg/dL (1.4 mmol/L)\n" +
                    "• High risk (7.5-19.9%): <70 mg/dL (1.8 mmol/L)\n" +
                    "• Moderate risk (5-7.4%): <100 mg/dL (2.6 mmol/L)\n" +
                    "• Low risk (<5%): <116 mg/dL (3.0 mmol/L)\n\n" +
                    "Statin Therapy:\n" +
                    "• High intensity:\n" +
                    "  - Atorvastatin 40-80mg\n" +
                    "  - Rosuvastatin 20-40mg\n" +
                    "• Moderate intensity:\n" +
                    "  - Atorvastatin 10-20mg\n" +
                    "  - Rosuvastatin 5-10mg\n" +
                    "  - Simvastatin 20-40mg\n" +
                    "  - Pravastatin 40-80mg\n\n" +
                    "Non-statin Therapy:\n" +
                    "• Ezetimibe 10mg\n" +
                    "• PCSK9 inhibitors\n" +
                    "• Bempedoic acid\n" +
                    "• Icosapent ethyl\n\n" +
                    "Monitoring:\n" +
                    "• Lipids every 3-12 months\n" +
                    "• Liver function at baseline and as needed\n" +
                    "• Monitor for muscle symptoms"
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
            low: "您的10年风险是低风险。",
            moderate: "您的10年风险是中等风险。",
            high: "您的10年风险是高风险。",
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
                    "• 一般目标：<130/80 mmHg\n" +
                    "• 65岁以上：<130-139/70-79 mmHg\n" +
                    "• 合并糖尿病：<130/80 mmHg\n" +
                    "• 合并慢性肾病：<130/80 mmHg\n\n" +
                    "药物治疗：\n" +
                    "• 一线用药选择：\n" +
                    "  - ACEi/ARB（如：赖诺普利、缬沙坦）\n" +
                    "  - CCB（如：氨氯地平）\n" +
                    "  - 噻嗪类利尿剂（如：氢氯噻嗪）\n" +
                    "• 血压超过目标值20/10 mmHg以上考虑联合用药：\n" +
                    "  - 首选ACEi/ARB + CCB\n" +
                    "  - 替代方案ACEi/ARB + 噻嗪类\n" +
                    "  - 避免ACEi + ARB联用\n\n" +
                    "监测要求：\n" +
                    "• 每天2次家庭血压监测\n" +
                    "• 肾功能和电解质检查：\n" +
                    "  - ACEi/ARB开始/调整后2-4周\n" +
                    "  - 之后每6-12个月\n" +
                    "• 药物不良反应监测：\n" +
                    "  - ACEi/ARB：咳嗽、高钾血症\n" +
                    "  - CCB：水肿\n" +
                    "  - 噻嗪类：低钾血症\n\n" +
                    "生活方式干预：\n" +
                    "• 限制钠摄入（<2.3g/天）\n" +
                    "• DASH饮食\n" +
                    "• 规律运动\n" +
                    "• 体重管理\n" +
                    "• 限制饮酒\n" +
                    "• 压力管理",
                bp_untreated: "高血压管理（未服用降压药）：\n" +
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
                    "  - 每周150分钟中等强度活动\n" +
                    "  - 或每周75分钟剧烈活动\n" +
                    "• 体重管理：\n" +
                    "  - 目标BMI <25 kg/m²\n" +
                    "  - 超重者减重\n" +
                    "• 限制饮酒：\n" +
                    "  - 男性：≤2杯/天\n" +
                    "  - 女性：≤1杯/天\n\n" +
                    "监测要求：\n" +
                    "• 定期测量血压\n" +
                    "• 记录血压日志\n" +
                    "• 遵医嘱随访",
                diabetes: "糖尿病管理：\n" +
                    "- HbA1c控制目标 <7%\n" +
                    "- 优先考虑SGLT2抑制剂\n" +
                    "- 定期监测血糖和肾功能\n" +
                    "- 每3-6个月进行HbA1c检查",
                lipids: "血脂管理：\n" +
                    "- 基于风险的LDL-C目标值：\n" +
                    "  • 极高风险（>20%）：<55 mg/dL (1.4 mmol/L)\n" +
                    "  • 高风险（7.5-19.9%）：<70 mg/dL (1.8 mmol/L)\n" +
                    "  • 中等风险（5-7.4%）：<100 mg/dL (2.6 mmol/L)\n" +
                    "  • 低风险（<5%）：<116 mg/dL (3.0 mmol/L)\n" +
                    "- 他汀类药物治疗：\n" +
                    "  • 高强度：阿托伐他汀40-80mg或瑞舒伐他汀20-40mg\n" +
                    "  • 中等强度：阿托伐他汀10-20mg或瑞舒伐他汀5-10mg\n" +
                    "- 需要时的非他汀类药物：\n" +
                    "  • 依折麦布\n" +
                    "  • PCSK9抑制剂\n" +
                    "  • 倍他米酸\n" +
                    "- 生活方式干预：\n" +
                    "  • 地中海式饮食模式\n" +
                    "  • 规律运动\n" +
                    "  • 体重管理\n" +
                    "  • 戒烟\n" +
                    "- 每3-12个月监测\n" +
                    "- 治疗前及治疗期间检查肝功能"
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
            low: "Su riesgo de 10 años es bajo.",
            moderate: "Su riesgo de 10 años es moderado.",
            high: "Su riesgo de 10 años es alto.",
            lowRisk: {
                guidelines_notice: "Basado en las últimas guías internacionales:\n" +
                    "• Estándares Anuales de la ADA (Asociación Americana de Diabetes)\n" +
                    "• Guías de Prevención de Enfermedades Cardiovasculares ACC/AHA\n" +
                    "• Guías de Prevención de ECV de la ESC (Sociedad Europea de Cardiología)",
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
                    "- Verificar HbA1c cada 3-6 meses",
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
            low: "Votre risque de 10 ans est faible.",
            moderate: "Votre risque de 10 ans est modéré.",
            high: "Votre risque de 10 ans est élevé.",
            lowRisk: {
                guidelines_notice: "Basé sur les dernières directives internationales :\n" +
                    "• Standards annuels de l'ADA (Association Américaine du Diabète)\n" +
                    "• Directives ACC/AHA de prévention des maladies cardiovasculaires\n" +
                    "• Directives ESC (Société Européenne de Cardiologie) pour la prévention des MCV",
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
            low: "Ihr 10-Jahres-Risiko ist niedrig.",
            moderate: "Ihr 10-Jahres-Risiko ist mittel.",
            high: "Ihr 10-Jahres-Risiko ist hoch.",
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
                    "• Alter >65: <130-139/70-79 mmHg\n" +
                    "• Mit Diabetes: <130/80 mmHg\n" +
                    "• Mit chronischer Nierenerkrankung: <130/80 mmHg\n\n" +
                    "Medikamente:\n" +
                    "• Erstlinienoptionen:\n" +
                    "  - ACE-Hemmer/ARB (z.B. Lisinopril, Valsartan)\n" +
                    "  - Kalziumkanalblocker (z.B. Amlodipine)\n" +
                    "  - Thiazid-Diuretika (z.B. HCT)\n" +
                    "• Kombinationstherapie wenn >20/10 mmHg über Zielwert:\n" +
                    "  - ACE-Hemmer/ARB + Kalziumkanalblocker bevorzugt\n" +
                    "  - ACE-Hemmer/ARB + Thiazid alternativ\n" +
                    "  - ACE-Hemmer + ARB Kombination vermeiden\n\n" +
                    "Überwachung:\n" +
                    "• Häusliche Blutdruckmessung 2x täglich\n" +
                    "• Nierenfunktion und Elektrolyte kontrollieren:\n" +
                    "  - 2-4 Wochen nach Start/Änderung von ACE-Hemmer/ARB\n" +
                    "  - Dann alle 6-12 Monate\n" +
                    "• Nebenwirkungsüberwachung:\n" +
                    "  - ACE-Hemmer/ARB: Husten, Hyperkaliämie\n" +
                    "  - Kalziumkanalblocker: Ödeme\n" +
                    "  - Thiazide: Hypokaliämie",
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
                    "• DASH-Ernährungsplan\n" +
                    "• Natriumrestriktion (<2,3g/Tag)\n" +
                    "• Regelmäßige körperliche Aktivität\n" +
                    "• Gewichtsmanagement\n" +
                    "• Alkoholeinschränkung"
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
            low: "あなたの10年リスクは低リスクです。",
            moderate: "あなたの10年リスクは中程度リスクです。",
            high: "あなたの10年リスクは高リスクです。",
            lowRisk: {
                guidelines_notice: "最新の国際ガイドラインに基づく：\n" +
                    "• ADA（米国糖尿病学会）年次基準\n" +
                    "• ACC/AHA心血管疾患予防ガイドライン\n" +
                    "• ESC（欧州心臓病学会）CVD予防ガイドライン",
                lifestyle: "Lifestyle recommendations:\n" +
                    "- 150-300 minutes moderate or 75-150 minutes vigorous aerobic activity per week\n" +
                    "- Follow Mediterranean diet pattern\n" +
                    "- Maintain healthy weight (BMI <25 kg/m²)",
                bp_treated: "血圧管理（服薬中）：\n" +
                    "血圧目標：\n" +
                    "• 一般目標：<130/80 mmHg\n" +
                    "• 65歳以上：<130-139/70-79 mmHg\n" +
                    "• 糖尿病合併：<130/80 mmHg\n" +
                    "• 慢性腎臓病合併：<130/80 mmHg\n\n" +
                    "薬物治療：\n" +
                    "• 第一選択薬：\n" +
                    "  - ACE阻害薬/ARB（例：リシノプリル、バルサルタン）\n" +
                    "  - Ca拮抗薬（例：アムロジピン）\n" +
                    "  - サイアザイド系利尿薬（例：HCTZ）\n" +
                    "• 目標値より20/10 mmHg以上高い場合の併用療法：\n" +
                    "  - ACE阻害薬/ARB + Ca拮抗薬が推奨\n" +
                    "  - ACE阻害薬/ARB + サイアザイド系が代替\n" +
                    "  - ACE阻害薬 + ARBの併用は避ける\n\n" +
                    "モニタリング：\n" +
                    "• 家庭血圧を1日2回測定\n" +
                    "• 腎機能と電解質の確認：\n" +
                    "  - ACE阻害薬/ARB開始/変更後2-4週間\n" +
                    "  - その後6-12ヶ月ごと\n" +
                    "• 副作用モニタリング：\n" +
                    "  - ACE阻害薬/ARB：咳嗽、高カリウム血症\n" +
                    "  - Ca拮抗薬：浮腫\n" +
                    "  - サイアザイド系：低カリウム血症",
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
                    "• DASH食\n" +
                    "• 食塩制限（<2.3g/日）\n" +
                    "• 定期的な運動\n" +
                    "• 体重管理\n" +
                    "• 節酒"
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
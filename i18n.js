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
                guidelines_notice: "Based on latest international guidelines:\n" +
                    "• ADA (American Diabetes Association) Annual Standards\n" +
                    "• ACC/AHA Cardiovascular Disease Prevention Guidelines\n" +
                    "• ESC (European Society of Cardiology) CVD Prevention Guidelines",
                lifestyle: "Lifestyle recommendations:\n" +
                    "- 150-300 minutes moderate or 75-150 minutes vigorous aerobic activity per week\n" +
                    "- Follow Mediterranean diet pattern\n" +
                    "- Maintain healthy weight (BMI <25 kg/m²)",
                bp_treated: "Blood pressure management (on medication):\n" +
                    "- Target BP <130/80 mmHg\n" +
                    "- Continue medication and monitor weekly\n" +
                    "- Regular follow-up\n" +
                    "- Monitor for side effects",
                bp_untreated: "Blood pressure management (no medication):\n" +
                    "- Consult healthcare provider\n" +
                    "- Target BP <130/80 mmHg\n" +
                    "- Consider starting medication\n" +
                    "- Regular monitoring",
                diabetes: "Diabetes management:\n" +
                    "- Target HbA1c <7%\n" +
                    "- Consider SGLT2 inhibitors\n" +
                    "- Monitor blood glucose and kidney function\n" +
                    "- Check HbA1c every 3-6 months",
                lipids: "Lipid management:\n" +
                    "- Very high risk (ASCVD risk >20%): LDL-C <55 mg/dL (1.4 mmol/L)\n" +
                    "- High risk (risk 7.5-19.9%): LDL-C <70 mg/dL (1.8 mmol/L)\n" +
                    "- Moderate risk (risk 5-7.4%): LDL-C <100 mg/dL (2.6 mmol/L)\n" +
                    "- Low risk (risk <5%): Consider LDL-C <116 mg/dL (3.0 mmol/L)\n" +
                    "- High-intensity statin if 10-year risk ≥20%\n" +
                    "- Moderate-intensity statin if risk 7.5-19.9%\n" +
                    "- Monitor lipids every 3-12 months\n" +
                    "- Consider non-statin therapy if targets not met"
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
                bp_treated: "高血压管理（已在服用降压药）：\n" +
                    "- 血压控制目标 <130/80 mmHg\n" +
                    "- 坚持服药并每周监测血压\n" +
                    "- 定期随访评估用药效果\n" +
                    "- 注意监测不良反应",
                bp_untreated: "高血压管理（未服用降压药）：\n" +
                    "- 建议就医评估降压治疗\n" +
                    "- 血压控制目标 <130/80 mmHg\n" +
                    "- 考虑开始药物治疗\n" +
                    "- 定期监测血压",
                diabetes: "糖尿病管理：\n" +
                    "- HbA1c控制目标 <7%\n" +
                    "- 优先考虑SGLT2抑制剂\n" +
                    "- 定期监测血糖和肾功能\n" +
                    "- 每3-6个月进行HbA1c检查",
                lipids: "血脂管理：\n" +
                    "- 极高风险（ASCVD风险>20%）：LDL-C <55 mg/dL (1.4 mmol/L)\n" +
                    "- 高风险（风险7.5-19.9%）：LDL-C <70 mg/dL (1.8 mmol/L)\n" +
                    "- 中等风险（风险5-7.4%）：LDL-C <100 mg/dL (2.6 mmol/L)\n" +
                    "- 低风险（风险<5%）：考虑LDL-C <116 mg/dL (3.0 mmol/L)\n" +
                    "- 10年风险≥20%使用高强度他汀\n" +
                    "- 风险在7.5-19.9%使用中等强度他汀\n" +
                    "- 每3-12个月监测血脂\n" +
                    "- 未达标时考虑非他汀类药物治疗"
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
                    "- Seguimiento regular\n" +
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
                guidelines_notice: "Based on latest international guidelines:\n" +
                    "• ADA (American Diabetes Association) Annual Standards\n" +
                    "• ACC/AHA Cardiovascular Disease Prevention Guidelines\n" +
                    "• ESC (European Society of Cardiology) CVD Prevention Guidelines",
                lifestyle: "Lifestyle recommendations:\n" +
                    "- 150-300 minutes moderate or 75-150 minutes vigorous aerobic activity per week\n" +
                    "- Follow Mediterranean diet pattern\n" +
                    "- Maintain healthy weight (BMI <25 kg/m²)",
                bp_treated: "Blutdruckmanagement (mit Medikation):\n" +
                    "- Zielwert RR <130/80 mmHg\n" +
                    "- Medikation fortsetzen und wöchentlich überwachen\n" +
                    "- Regelmäßige Nachsorge\n" +
                    "- Nebenwirkungen überwachen",
                bp_untreated: "Blutdruckmanagement (ohne Medikation):\n" +
                    "- Arzt konsultieren\n" +
                    "- Zielwert RR <130/80 mmHg\n" +
                    "- Medikation erwägen\n" +
                    "- Regelmäßige Überwachung",
                diabetes: "Diabetesmanagement:\n" +
                    "- Zielwert HbA1c <7%\n" +
                    "- SGLT2-Hemmer erwägen\n" +
                    "- Blutzucker und Nierenfunktion überwachen\n" +
                    "- HbA1c alle 3-6 Monate kontrollieren",
                lipids: "Lipidmanagement:\n" +
                    "- Sehr hohes Risiko (ASCVD-Risiko >20%): LDL-C <55 mg/dL (1,4 mmol/L)\n" +
                    "- Hohes Risiko (Risiko 7,5-19,9%): LDL-C <70 mg/dL (1,8 mmol/L)\n" +
                    "- Mittleres Risiko (Risiko 5-7,4%): LDL-C <100 mg/dL (2,6 mmol/L)\n" +
                    "- Niedriges Risiko (Risiko <5%): Erwägen LDL-C <116 mg/dL (3,0 mmol/L)\n" +
                    "- Hochintensive Statine bei 10-Jahres-Risiko ≥20%\n" +
                    "- Moderat intensive Statine bei Risiko 7,5-19,9%\n" +
                    "- Lipide alle 3-12 Monate überwachen\n" +
                    "- Bei Nichterreichen der Zielwerte Nicht-Statin-Therapie erwägen"
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
                guidelines_notice: "Based on latest international guidelines:\n" +
                    "• ADA (American Diabetes Association) Annual Standards\n" +
                    "• ACC/AHA Cardiovascular Disease Prevention Guidelines\n" +
                    "• ESC (European Society of Cardiology) CVD Prevention Guidelines",
                lifestyle: "Lifestyle recommendations:\n" +
                    "- 150-300 minutes moderate or 75-150 minutes vigorous aerobic activity per week\n" +
                    "- Follow Mediterranean diet pattern\n" +
                    "- Maintain healthy weight (BMI <25 kg/m²)",
                bp_treated: "血圧管理（服薬中）：\n" +
                    "- 目標血圧 <130/80 mmHg\n" +
                    "- 服薬を継続し、週1回モニタリング\n" +
                    "- 定期的なフォローアップ\n" +
                    "- 副作用のモニタリング",
                bp_untreated: "血圧管理（未服薬）：\n" +
                    "- 医療機関を受診\n" +
                    "- 目標血圧 <130/80 mmHg\n" +
                    "- 投薬開始を検討\n" +
                    "- 定期的なモニタリング",
                diabetes: "糖尿病管理：\n" +
                    "- HbA1c目標値 <7%\n" +
                    "- SGLT2阻害薬の検討\n" +
                    "- 血糖値と腎機能のモニタリング\n" +
                    "- 3-6ヶ月ごとにHbA1cをチェック",
                lipids: "脂質管理：\n" +
                    "- 超高リスク（ASCVD リスク>20%）：LDL-C <55 mg/dL (1.4 mmol/L)\n" +
                    "- 高リスク（リスク7.5-19.9%）：LDL-C <70 mg/dL (1.8 mmol/L)\n" +
                    "- 中等度リスク（リスク5-7.4%）：LDL-C <100 mg/dL (2.6 mmol/L)\n" +
                    "- 低リスク（リスク<5%）：LDL-C <116 mg/dL (3.0 mmol/L)を考慮\n" +
                    "- 10年リスク≥20%の場合は高強度スタチン\n" +
                    "- リスク7.5-19.9%の場合は中等度スタチン\n" +
                    "- 3-12ヶ月ごとに脂質をモニタリング\n" +
                    "- 目標未達成の場合は非スタチン療法を検討"
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
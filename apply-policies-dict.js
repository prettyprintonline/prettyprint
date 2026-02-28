const fs = require('fs');
const path = require('path');

const dictDir = path.join(__dirname, 'src', 'i18n', 'dictionaries');

const locales = ['en', 'es', 'fr', 'de', 'zh', 'hi', 'pt', 'ru', 'id', 'ja', 'ar', 'bn', 'ur'];

const translations = {
    en: {
        privacy: {
            badge: "Privacy First",
            title: "Privacy Policy",
            subtitle: "Transparency is at the core of Pretty Print. Because your code never leaves your browser, your privacy is literally built into the architecture.",
            box1Title: "100% Client-Side",
            box1Desc: "We process all formatting, minification, and validation logic directly within your web browser using JavaScript and Web Workers. Your data is never transmitted to our servers.",
            box2Title: "No Data Logging",
            box2Desc: "Since we don't have a backend processing layer for your code, we cannot and do not log the contents of your formatting requests. What you paste is for your eyes only.",
            s1Title: "1. Information We Collect",
            s1Desc: "We aim for minimal data collection. We do not require account creation, and we do not store your source code. The only information we interact with includes:",
            s1Li1: "We use browser Local Storage to save your editor settings (theme, tab size) and your last input to improve your workflow between sessions. You can clear this anytime by clearing your browser cache.",
            s1Li2: "Standard web server logs (IP addresses, browser types) are collected by our hosting provider for security and analytics purposes, but these are never linked to the content you format.",
            s2Title: "2. Third-Party Services",
            s2Desc: "We may use third-party tools like Google Analytics to understand site traffic. These tools may use cookies to track anonymous usage patterns (pages visited, time on site). No code data is ever shared with these providers.",
            s3Title: "3. Security",
            s3Desc: "Security is our primary feature. By eliminating the transit of your code over the internet to a central server, we eliminate the primary risk associated with online development tools. Your data remains in your browser's memory partition.",
            s4Title: "4. Policy Updates",
            s4Desc: "We may update this policy periodically. Significant changes will be noted on this page. Last updated: February 2026.",
            s4Footer: "If you have questions, please reach out via our GitHub repository or main contact channels.",
            returnHome: "Return to Home"
        },
        terms: {
            badge: "Usage Guidelines",
            title: "Terms of Service",
            subtitle: "By using Pretty Print, you agree to these simple terms designed to keep the service free and fast for everyone.",
            s1Title: "1. Acceptance of Terms",
            s1Desc: "Pretty Print provides a web-based code formatting service. By accessing our website, you acknowledge that you have read, understood, and agree to be bound by these terms. This service is provided 'as is' without warranty of any kind.",
            s2Title: "2. Permitted Use",
            s2Desc: "You are free to use Pretty Print for personal, educational, or commercial purposes. You may format as much code as you need. However, you agree not to:",
            s2Li1: "Use the service for any illegal activities or to process malicious code.",
            s2Li2: "Attempt to scrape, heavy-load, or DDoS the platform services.",
            s2Li3: "Bypass any security measures or rate limits if implemented.",
            s3Title: "3. Limitation of Liability",
            s3Desc: "While we strive for 100% accuracy in our formatting algorithms, Pretty Print is not responsible for any bugs, data loss, or system failures that may occur after you use the formatted output in your own projects. Always verify critical code before deployment.",
            s4Title: "4. Intellectual Property",
            s4Desc: "Pretty Print does not claim any ownership over the code you paste or format. The code remains your intellectual property. Our website's design, logo, and custom logic remain the property of the Pretty Print developers.",
            returnHome: "Back to Toolbase"
        },
        tool: {
            whatIs: "What is",
            howTo: "How to Pretty Print",
            online: "Online",
            faqs: "Formatter — Frequently Asked Questions",
            p1_1: "is a free online tool that lets you instantly format, beautify, and indent your",
            p1_2: "code directly in your browser. No signup, no installation, no server uploads — your code stays 100% private. Simply paste your unformatted",
            p1_3: "code, click \"Format Code\", and get clean, readable output in seconds.",
            li1: "Navigate to the",
            li1_2: "formatter page (you're already here!).",
            li2: "Paste your messy or minified",
            li2_2: "code into the editor above.",
            li3: "Click the",
            li3_1: '"Format Code"',
            li3_2: "button to instantly pretty print your code.",
            li4: "Copy the formatted result to your clipboard or download it as a file."
        }
    },
    es: {
        privacy: {
            badge: "Privacidad Primero",
            title: "Política de Privacidad",
            subtitle: "La transparencia es fundamental. Como tu código nunca sale de tu navegador, tu privacidad está integrada en la arquitectura.",
            box1Title: "100% Lado del Cliente",
            box1Desc: "Procesamos todo dentro de tu navegador web usando JavaScript. Tus datos nunca se transmiten a nuestros servidores.",
            box2Title: "Sin Registros de Datos",
            box2Desc: "Al no tener una capa de procesamiento backend, no podemos registrar tus peticiones de formato. Lo que pegas es solo para tus ojos.",
            s1Title: "1. Información que Recopilamos",
            s1Desc: "Buscamos la mínima recolección de datos. No requerimos creación de cuenta y no almacenamos tu código.",
            s1Li1: "Usamos Local Storage para guardar configuraciones del editor (tema, espaciado).",
            s1Li2: "Registros estándar del servidor web (IP, tipo de navegador) para seguridad y analíticas.",
            s2Title: "2. Servicios de Terceros",
            s2Desc: "Podemos usar herramientas como Google Analytics para entender el tráfico. Pero tu código NUNCA se comparte.",
            s3Title: "3. Seguridad",
            s3Desc: "La seguridad es nuestra principal característica. Al eliminar el tránsito de tu código eliminamos los riesgos primarios.",
            s4Title: "4. Actualizaciones",
            s4Desc: "Esta política puede actualizarse periódicamente. Última actualización: Febrero 2026.",
            s4Footer: "Si tienes preguntas, contáctanos vía GitHub.",
            returnHome: "Volver a Inicio"
        },
        terms: {
            badge: "Directrices de Uso",
            title: "Términos de Servicio",
            subtitle: "Al usar Pretty Print, aceptas estos simples términos para mantener el servicio gratis y rápido.",
            s1Title: "1. Aceptación",
            s1Desc: "Al acceder a nuestro sitio web, aceptas estar regido por estos términos. El servicio se ofrece 'tal cual'.",
            s2Title: "2. Uso Permitido",
            s2Desc: "Eres libre de usar la herramienta para propósitos personales o comerciales. Sin embargo, no debes:",
            s2Li1: "Usar el servicio para actividades ilegales.",
            s2Li2: "Intentar hacer scraping o ataques DDoS al servidor.",
            s2Li3: "Evadir medidas de seguridad o límites de tasa.",
            s3Title: "3. Limitación de Responsabilidad",
            s3Desc: "No somos responsables por ningún error de formato o pérdida de datos. Verifica siempre tu código crítico antes de usarlo.",
            s4Title: "4. Propiedad Intelectual",
            s4Desc: "No reclamamos derechos sobre el código que subes. Sigue siendo tu propiedad intelectual.",
            returnHome: "Volver a Inicio"
        },
        tool: {
            whatIs: "Qué es",
            howTo: "Cómo Pretty Print",
            online: "Online",
            faqs: "Formatter — Preguntas Frecuentes",
            p1_1: "es una herramienta gratuita para formatear instantáneamente tu código",
            p1_2: "directamente en el navegador. 100% privado y sin servidores. Simplemente pega tu código no formateado",
            p1_3: ", presiona 'Formatear' y obtén un resultado limpio.",
            li1: "Navega a la página del",
            li1_2: "formateador.",
            li2: "Pega tu código desordenado",
            li2_2: "en el editor de arriba.",
            li3: "Haz clic en el botón",
            li3_1: '"Format Code"',
            li3_2: "para embellecer tu código instantáneamente.",
            li4: "Copia el resultado a tu portapapeles o descárgalo."
        }
    },
    fr: {
        privacy: {
            badge: "Confidentialité d'abord",
            title: "Politique de confidentialité",
            subtitle: "Votre code ne quitte jamais votre navigateur, votre sécurité est intégrée par défaut.",
            box1Title: "100% Côté Client",
            box1Desc: "Tout le traitement est fait dans votre navigateur. Aucune donnée n'est transmise.",
            box2Title: "Pas d'enregistrement",
            box2Desc: "Nous n'enregistrons pas votre code, car il n'y a aucun backend pour ça.",
            s1Title: "1. Informations collectées",
            s1Desc: "Aucun compte requis. Nous ne stockons pas votre code source.",
            s1Li1: "Stockage local de vos paramètres d'apparence (thème).",
            s1Li2: "Logs serveurs standards uniquement pour l'analyse globale.",
            s2Title: "2. Tiers",
            s2Desc: "Utilisation d'outils d'analyse (Google Analytics). Aucun code n'est partagé.",
            s3Title: "3. Sécurité",
            s3Desc: "Le principal atout de notre outil est la suppression du transfert réseau pour le code.",
            s4Title: "4. Mises à jour",
            s4Desc: "Des changements peuvent advenir. Dernier : Février 2026.",
            s4Footer: "Contactez-nous sur GitHub pour toute question.",
            returnHome: "Retour à l'accueil"
        },
        terms: {
            badge: "Conditions",
            title: "Conditions d'utilisation",
            subtitle: "En utilisant notre outil, vous acceptez ces règles simples.",
            s1Title: "1. Acceptation",
            s1Desc: "L'utilisation de notre site implique l'acceptation des règles. Le site est fourni 'tel quel'.",
            s2Title: "2. Utilisation permise",
            s2Desc: "Gratuit pour un usage commercial ou personnel. Ne faites pas :",
            s2Li1: "D'actions illégales ou malicieuses.",
            s2Li2: "D'attaques DDoS.",
            s2Li3: "De contournement direct de sécurité.",
            s3Title: "3. Limite de responsabilité",
            s3Desc: "Nous ne sommes pas responsables en cas de bug de formatage.",
            s4Title: "4. Propriété",
            s4Desc: "Le code vous appartient entièrement.",
            returnHome: "Retour à l'accueil"
        },
        tool: {
            whatIs: "Qu'est-ce que le Formateur",
            howTo: "Comment utiliser",
            online: "En Ligne",
            faqs: "Formateur — FAQ",
            p1_1: "est un outil gratuit pour embeller instantanément votre",
            p1_2: "directement sur votre navigateur. Vous n'avez pas de compte à créer et c'est 100% privé. Collez votre code",
            p1_3: ", cliquez sur Formater, et obtenez le résultat super facilement.",
            li1: "Allez sur la page",
            li1_2: "du formateur.",
            li2: "Collez votre code",
            li2_2: "désordonné dans l'éditeur.",
            li3: "Cliquez sur le bouton",
            li3_1: '"Format Code"',
            li3_2: "pour formater instantanément.",
            li4: "Copiez ou téléchargez le fichier."
        }
    },
    de: {
        privacy: {
            badge: "Datenschutz im Fokus",
            title: "Datenschutzerklärung",
            subtitle: "Transparenz ist uns wichtig. Ihr Code verlässt niemals Ihren Browser.",
            box1Title: "100% Client-Seite",
            box1Desc: "Der gesamte Vorgang geschieht lokal in Ihrem Browser.",
            box2Title: "Keine Daten-Protokollierung",
            box2Desc: "Da wir keinen Server haben, um Ihren Code zu lesen, loggen wir ihn nicht.",
            s1Title: "1. Welche Daten wir sammeln",
            s1Desc: "Wir sammeln keine Kontodaten oder Quellcodes.",
            s1Li1: "Local Storage für Ihre Interface-Einstellungen.",
            s1Li2: "Server-Logs für allgemeine Analysen.",
            s2Title: "2. Drittanbieter",
            s2Desc: "Analytics-Tools sammeln nur anonyme Nutzungsmetriken.",
            s3Title: "3. Sicherheit",
            s3Desc: "Ohne Datenübertragung entfallen die größten Risiken.",
            s4Title: "4. Änderungen",
            s4Desc: "Regelmäßige Updates dieses Dokuments (Feb. 2026).",
            s4Footer: "Fragen per GitHub stellen.",
            returnHome: "Zur Startseite"
        },
        terms: {
            badge: "Nutzungsbedingungen",
            title: "Allgemeine Geschäftsbedingungen",
            subtitle: "Diese Richtlinien helfen, den Dienst kostenlos zu halten.",
            s1Title: "1. Annahme der Regeln",
            s1Desc: "Durch die Nutzung der Website erklären Sie sich einverstanden.",
            s2Title: "2. Benutzung",
            s2Desc: "Kostenlos für jeden Zweck. Sie dürfen nicht:",
            s2Li1: "Illeagle Scripte oder Manipulationen durchführen.",
            s2Li2: "Den Server mit Anfragen überlasten.",
            s2Li3: "Sicherheitssperren umgehen.",
            s3Title: "3. Haftungsbeschränkung",
            s3Desc: "Wir garantieren keine Perfektion der formatierten Ergebnisse.",
            s4Title: "4. Geistiges Eigentum",
            s4Desc: "Sie bleiben der alleinige Besitzer Ihres formatieren Codes.",
            returnHome: "Zur Startseite"
        },
        tool: {
            whatIs: "Was ist der",
            howTo: "Wie formatiert man",
            online: "Online",
            faqs: "Formatter — Häufige Fragen",
            p1_1: "ist ein kostenloses Online-Tool für die Formatierung von",
            p1_2: "direkt im Webbrowser. Ohne Anmeldung, 100% sicher. Fügen Sie den Quellcode",
            p1_3: ", ein und klicken auf 'Format Code'.",
            li1: "Gehen Sie auf die Formatter-Seite für",
            li1_2: ".",
            li2: "Fügen Sie Ihren unformatierten Quellcode in",
            li2_2: "den Editor ein.",
            li3: "Klicken Sie auf den Button",
            li3_1: '"Format Code"',
            li3_2: "für das schnelle Format.",
            li4: "Kopieren oder laden Sie es sich runter."
        }
    },
    zh: {
        privacy: {
            badge: "隐私第一",
            title: "隐私政策",
            subtitle: "因为你的代码永远不会离开浏览器，所以隐私是从架构上得到保证的。",
            box1Title: "100% 客户端",
            box1Desc: "我们在浏览器中使用JavaScript处理所有逻辑。数据不会传输。",
            box2Title: "没有数据记录",
            box2Desc: "因为没有后端，所以我们不可能记录你的代码。",
            s1Title: "1. 我们收集的信息",
            s1Desc: "我们追求最少的数据收集。无需创建账户。",
            s1Li1: "使用本地存储(Local Storage)保存主题设置。",
            s1Li2: "出于安全考虑的匿名网络日志。",
            s2Title: "2. 第三方服务",
            s2Desc: "仅用于分析网站流量，您的代码绝对不会分享给他们。",
            s3Title: "3. 安全",
            s3Desc: "安全是首要特点，切断服务器通信确保最安全的开发体验。",
            s4Title: "4. 政策更新",
            s4Desc: "这是最新版本：2026年2月。",
            s4Footer: "如果有任何问题，通过GitHub联系我们。",
            returnHome: "返回首页"
        },
        terms: {
            badge: "使用指南",
            title: "服务条款",
            subtitle: "同意这些简单的条款以保持服务的免费和快速。",
            s1Title: "1. 接受条款",
            s1Desc: "访问网站即代表同意这些规则。服务按“原样”提供。",
            s2Title: "2. 允许的用途",
            s2Desc: "个人和商业用途均免费。您不能：",
            s2Li1: "用于非法代码处理。",
            s2Li2: "进行恶意网络攻击(DDoS)。",
            s2Li3: "绕过安全防范限制。",
            s3Title: "3. 责任限制",
            s3Desc: "虽然我们提供高质量格式化，但我们不对任何数据丢失或错误负责。",
            s4Title: "4. 知识产权",
            s4Desc: "您的代码完全属于您。我们只提供平台架构。",
            returnHome: "返回首页"
        },
        tool: {
            whatIs: "什么是",
            howTo: "如何在线格式化",
            online: "在线工具",
            faqs: "格式化工具 — 常见问题与解答",
            p1_1: "是一个可以在浏览器中即时缩进并美化",
            p1_2: "代码的免费工具。零服务器通信，100%安全私密。只需粘贴",
            p1_3: "代码，即可获得优雅直观的干净输出。",
            li1: "导航至在线的",
            li1_2: "格式化程序页面。",
            li2: "将丑陋或被压缩的",
            li2_2: "代码粘贴至上方编辑器。",
            li3: "点击",
            li3_1: '"Format Code"',
            li3_2: "按钮进行代码重构。",
            li4: "将已格式化的结果复制并下载。"
        }
    },
    hi: {
        privacy: {
            badge: "गोपनीयता सर्वप्रथम",
            title: "गोपनीयता नीति",
            subtitle: "प्रिटी प्रिंट आपके कोड को आपके ब्राउज़र से बाहर कभी नहीं भेजता है, इसलिए आपकी गोपनीयता सुरक्षित है।",
            box1Title: "100% क्लाइंट-साइड",
            box1Desc: "हम सभी प्रक्रियाएं आपके ब्राउज़र में करते हैं। आपका डेटा कभी भी हमारे सर्वर पर नहीं भेजा जाता।",
            box2Title: "कोई डेटा लॉगिंग नहीं",
            box2Desc: "क्योंकि हम आपके कोड के लिए बैकएंड का उपयोग नहीं करते हैं, हम आपके द्वारा स्वरूपित किए जा रहे कोड को नहीं देख सकते।",
            s1Title: "1. हम कौन सी जानकारी एकत्र करते हैं",
            s1Desc: "हम कम से कम डेटा एकत्र करते हैं। हमें किसी खाते की आवश्यकता नहीं है और हम आपका कोड संग्रहीत नहीं करते हैं।",
            s1Li1: "हम आपकी थीम जैसी सेटिंग्स को सहेजने के लिए स्थानीय संग्रहण (Local Storage) का उपयोग करते हैं।",
            s1Li2: "सुरक्षा के लिए केवल मानक वेब लॉग एकत्र किए जाते हैं, वे आपके कोड से नहीं जुड़े हैं।",
            s2Title: "2. तृतीय-पक्ष सेवाएं",
            s2Desc: "हम Google Analytics जैसे उपकरणों का उपयोग कर सकते हैं। लेकिन वे कभी भी आपका कोड नहीं देखेंगे।",
            s3Title: "3. सुरक्षा",
            s3Desc: "सबसे सुरक्षित विकास उपकरण के लिए आपके डेटा को इंटरनेट पर नहीं भेजा जाता है।",
            s4Title: "4. नीति अपडेट",
            s4Desc: "हम इस पृष्ठ पर नीति को अपडेट कर सकते हैं। (फ़रवरी 2026)",
            s4Footer: "GitHub पर हमसे संपर्क करें।",
            returnHome: "होम पर वापस जाएँ"
        },
        terms: {
            badge: "उपयोग दिशानिर्देश",
            title: "सेवा की शर्तें",
            subtitle: "प्रिटी प्रिंट का उपयोग करके, आप सेवा को निःशुल्क रखने के लिए इन शर्तों से सहमत होते हैं।",
            s1Title: "1. शर्तों की स्वीकृति",
            s1Desc: "इस टूल का उपयोग करके, आप हमारे नियमों को स्वीकार करते हैं। यह सेवा बिना किसी 100% गारंटी के प्रदान की जाती है।",
            s2Title: "2. अनुमत उपयोग",
            s2Desc: "आप इसका उपयोग व्यक्तिगत और व्यावसायिक दोनों के लिए कर सकते हैं। लेकिन आप यह नहीं कर सकते:",
            s2Li1: "अवैध गतिविधियों के लिए उपयोग करना।",
            s2Li2: "प्लेटफ़ॉर्म पर DDoS हमले करना।",
            s2Li3: "सुरक्षा प्रणालियों को बायपास करना।",
            s3Title: "3. देयता की सीमा",
            s3Desc: "हम कोड में गड़बड़ी होने पर जिम्मेदार नहीं होंगे। उपयोग से पहले अपने अंतिम कोड की जांच अवश्य करें।",
            s4Title: "4. बौद्धिक संपदा",
            s4Desc: "आपका कोड आपका ही रहता है। हम उस पर कोई दावा नहीं करते।",
            returnHome: "होम पर वापस जाएँ"
        },
        tool: {
            whatIs: "क्या है",
            howTo: "कैसे करें फॉर्मेट",
            online: "ऑनलाइन टूल",
            faqs: "फॉर्मेटर — सामान्य प्रश्न (FAQ)",
            p1_1: "एक पूरी तरह से निःशुल्क ऑनलाइन टूल है जो आपको अपने",
            p1_2: "कोड को सीधे ब्राउज़र के अंदर फॉर्मेट और सुंदर बनाने की अनुमति देता है। यह 100% निजी है। बस अपना",
            p1_3: "कोड पेस्ट करें और सेकंडों में साफ़ परिणाम पाएं।",
            li1: "नेविगेट करें हमारे",
            li1_2: "फॉर्मेटिंग टूल पर।",
            li2: "अपना खराब लिखा हुआ",
            li2_2: "कोड ऊपर दिए गए संपादक में डालें।",
            li3: "क्लिक करें",
            li3_1: '"Format Code"',
            li3_2: "बटन पर और अपनी आंखों के सामने फर्क देखें।",
            li4: "लास्ट में आप कोड कॉपी कर लें या फाइल के तौर पर डाउनलोड कर लें।"
        }
    },
    // Generate fallback identical structures for remaining languages but with native translations
    pt: {
        privacy: { badge: "Privacidade Primeiro", title: "Política de Privacidade", subtitle: "Totalmente focado em proteger os seus dados no seu navegador.", box1Title: "100% no Cliente", box1Desc: "Toda a formatação sem servidores e conexões.", box2Title: "Nenhum Registo de Dados", box2Desc: "O código não é guardado nas nossas bases da dados.", s1Title: "1. Dados Recolhidos", s1Desc: "Não temos contas de utilizadores.", s1Li1: "Local Storage restrito.", s1Li2: "Logs de rede normais.", s2Title: "2. Serviços de Terceiros", s2Desc: "O Google Analytics analisa tráfego, sem ligação a código.", s3Title: "3. Segurança", s3Desc: "A internet pode ser perigosa. Por isso os teus dados não circulam nela.", s4Title: "4. Atualizações", s4Desc: "Última versão: 2026", s4Footer: "GitHub está acessível.", returnHome: "Ínicio Seguro" },
        terms: { badge: "Regras de Serviço", title: "Termos de Serviço", subtitle: "Termos simples de usar a internet.", s1Title: "1. Aceitação", s1Desc: "Aviso Legal Simples de utilizar a aplicação.", s2Title: "2. Regras e Condições", s2Desc: "Deveres Gerais que nos ajudam.", s2Li1: "Não utilize código não válido.", s2Li2: "Não ataque aos servidores cloud.", s2Li3: "Respeite as barreiras impostas.", s3Title: "3. Direitos de Renúncia", s3Desc: "Responsabilidade para validar antes de enviar código de produção.", s4Title: "4. Propriedades", s4Desc: "Garantia que seus códigos mantêm proteção intelectual.", returnHome: "Ínicio Seguro" },
        tool: { whatIs: "O que é o Formatar de", howTo: "Instruções de Estilizar", online: "Online Livre.", faqs: "Perguntas Populares na Internet", p1_1: "O programa de beleza converte o teu", p1_2: "texto perigoso de forma local. Basta copiar e colar", p1_3: "sem necessitar registo garantindo formato ideal.", li1: "Navega e abre a página de", li1_2: ".", li2: "Cola e anexa conteúdo não organizado", li2_2: ".", li3: "Pressiona imediatamente do bloco verde", li3_1: "Format Code", li3_2: "rapidamente e analisa linhas vermelhos de avisos das correções.", li4: "Ver resultados perfeitamente concluídas." }
    },
    ru: {
        privacy: { badge: "Сначала конфиденциальность", title: "Политика конфиденциальности", subtitle: "Ваш код никогда не покидает браузер.", box1Title: "100% клиентская сторона", box1Desc: "Данные не передаются на серверы.", box2Title: "Без сбора данных", box2Desc: "Ничего не регистрируется.", s1Title: "1. Сбор информации", s1Desc: "Абсолютно 0 кода хранится у нас.", s1Li1: "Только localStorage.", s1Li2: "Данные для трафика сервера.", s2Title: "2. Третья сторона", s2Desc: "Никаких передач кода третьим лицам.", s3Title: "3. Защита", s3Desc: "Реально защищенное соединение в браузере.", s4Title: "4. Обновления", s4Desc: "Опубликовано 2026.", s4Footer: "Гитхаб", returnHome: "На главную" },
        terms: { badge: "Использование", title: "Условия использования", subtitle: "Легко понять.", s1Title: "1. Соглашение", s1Desc: "Прозрачные данные.", s2Title: "2. Использование сервиса", s2Desc: "Правила использования:", s2Li1: "Без незаконных скриптов.", s2Li2: "Без Ddos атак.", s2Li3: "Не пытайтесь обойти.", s3Title: "3. Ограничения", s3Desc: "Мы не ответственны за сломанный код.", s4Title: "4. Авторские права", s4Desc: "Все принадлежит вам.", returnHome: "На главную" },
        tool: { whatIs: "Что такое", howTo: "Руководство как отформатировать", online: "Онлайн Бесплатно", faqs: "Популярные Вопросы", p1_1: "Настраиваемый инструмент для", p1_2: "позволяет быстро исправить структуру. Никто и никогда не узнает ваш", p1_3: "интеллектуальный результат. Решение на высоте!", li1: "Откройте страницу инструмента", li1_2: "прямо здесь.", li2: "Перетянуть мышкой или скопируй свой", li2_2: "текст из редактора.", li3: "Жми на кнопку очистку", li3_1: "Format Code", li3_2: "мгновенно и надежно.", li4: "Передача результата к вам на накопитель." }
    },
    id: {
        privacy: { badge: "Privasi Utama", title: "Kebijakan Privasi", subtitle: "Kode berada di komputer peramban.", box1Title: "100% Berkas Lokal", box1Desc: "Data kode tidak dikirim.", box2Title: "Tanpa Pelacakan", box2Desc: "Tidak ada log teks data.", s1Title: "1. Informasi Kami", s1Desc: "Aplikasi tak butuh daftar.", s1Li1: "Tema layar direkam.", s1Li2: "Pemblokiran analitis eksternal.", s2Title: "2. Layanan Eksternal", s2Desc: "Data kode disembunyikan kuat.", s3Title: "3. Keamanan", s3Desc: "Pemograman lebih hebat.", s4Title: "4. Pembaruan", s4Desc: "Sejak Tahun Angka 2026.", s4Footer: "Kirim isyarat via Github.", returnHome: "Kembali Awal Pusat" },
        terms: { badge: "Syarat Web", title: "Syarat dan Ketentuan", subtitle: "Disetujui secara umum oleh ahli perangkat lunak.", s1Title: "1. Konfirmasi Hak", s1Desc: "Membaca dan dipahami.", s2Title: "2. Akses Diberi", s2Desc: "Gratis tetapi patuhi larangan yang mana:", s2Li1: "Tidak mengeksploitasi alat terlarang.", s2Li2: "Beban web dihancurkan (Serangan cyber).", s2Li3: "Pembobolan keamanan log alat.", s3Title: "3. Pembatasan Penggunaan", s3Desc: "Pengembang PrettyPrint terbebas hasil output alat.", s4Title: "4. Kekayaan Harta Cerdik", s4Desc: "Semua Hak Kekayaan Terpelihara Untuk Saudara.", returnHome: "Kembali Awal Pusat" },
        tool: { whatIs: "Apa tujuan Formater", howTo: "Cara Beroperasi", online: "Daring Internet", faqs: "Menjawab apa yang sering ditanyakan pengguna", p1_1: "adalah formater kode sumber secara bebas bagi berkas", p1_2: "komputer peramban. Sangat privasi buat dokumen file", p1_3: "sehingga teks terlihat luar biasa cantik.", li1: "Berkunjung melayari aplikasi", li1_2: "langsung ke atas.", li2: "Salin tampal di daerah form teks", li2_2: "terkini ini.", li3: "Menekan butang sistem hijau formater", li3_1: "Format Code", li3_2: "memproses peramban.", li4: "Ke keping ingatan dan pengunduhan sistem arsip." }
    },
    ja: {
        privacy: { badge: "プライバシー重視", title: "プライバシーポリシー", subtitle: "あなたのコードがブラウザーから送られない為、完璧な保護になります。", box1Title: "完全なクライアント仕様", box1Desc: "情報は送信されません。", box2Title: "記録無効", box2Desc: "コードなどのログは保持しません。", s1Title: "1. 情報収集について", s1Desc: "アカウント無用かつコード取得ゼロ。", s1Li1: "Cookieではなくローカル・ストレージ.", s1Li2: "アナリティクス目的のIPなど.", s2Title: "2. ツール連携", s2Desc: "Google等", s3Title: "3. セキュリティ", s3Desc: "万全の安全です。", s4Title: "4. 更新", s4Desc: "2026年.", s4Footer: "問題はGitHubから.", returnHome: "ホームへ" },
        terms: { badge: "ガイドライン", title: "利用規約", subtitle: "このツールの利用に先立ち利用規約をご確認下さい。", s1Title: "1. 規約の承諾", s1Desc: "理解と同意が完了しました。", s2Title: "2. 利用条件", s2Desc: "フリーソフト。以下の禁止事項:", s2Li1: "ハッキング", s2Li2: "DOS攻撃", s2Li3: "不正アクセス制限の回避", s3Title: "3. 責任限界", s3Desc: "結果に100％の責任はありません。ご自身でテストしてください。", s4Title: "4. 知的財産権", s4Desc: "ユーザーのものはユーザーへ帰属。", returnHome: "ホームへ" },
        tool: { whatIs: "何のためのツール？", howTo: "オンライン・コード整形のやり方", online: "整形", faqs: "フォーマッターQ&A", p1_1: "本オンライン無料ツールで", p1_2: "の構文コードを綺麗に直します。ユーザーの", p1_3: "ファイルをブラウザのみを利用し、プライベートで安心に変換処理できます！", li1: "専用のコードページ", li1_2: "にアクセスします。", li2: "文字化けしたような", li2_2: "を貼り付けます。", li3: "実行ボタンたる", li3_1: "Format Code", li3_2: "で数秒の間に整形完了です。", li4: "コピーやダウンロードによるファイルとしての利用が自由自在です。" }
    },
    ar: {
        privacy: { badge: "آمن للجميع", title: "سياسة وبروتوكول الخصوصية", subtitle: "شفافية عالية من بداية المشروع لنهاياه. كودك آمن تماما بالمتصفح.", box1Title: "جانب المتصفح للعميل", box1Desc: "خالي من الارسال.", box2Title: "انعدام تسجيل البيانات", box2Desc: "لا يوجد تسجيل لنشاطك.", s1Title: "1. معلومات نحفظها", s1Desc: "لا يوجد تسجيل حسابات.", s1Li1: "التفضيلات في الجهاز فقط.", s1Li2: "تحسين الجودة و تتبع السيرفر.", s2Title: "2. اطراف ثالثة", s2Desc: "جوجل وغيره لكن الكود لا يصلهم ابدا.", s3Title: "3. التشفير والحماية", s3Desc: "الامان من الصفر بالمائة لتلائم جميع متطلبات المشاريع الكبرى.", s4Title: "4. تاريخ التعديل", s4Desc: "2026.", s4Footer: "للتواصل.", returnHome: "الرئيسية والمحطة الأولى" },
        terms: { badge: "حقوق التطبيق", title: "شروط استخدام المنصة", subtitle: "لتظل الخدمة مجانية يجب التقيد ببعض الامور البسيطة.", s1Title: "1. الموافقة بالدخول", s1Desc: "يعتبر دخولك اقرار بالموافقة التامة المسبقة لسياساتنا.", s2Title: "2. الصلاحيات", s2Desc: "مجاني تجاري وشخصي. لكن يمنع:", s2Li1: "الضرر بالغير او الاختراق.", s2Li2: "الهياكل الهجومية والمصادرة.", s2Li3: "التهرب والتطفل.", s3Title: "3. الحدود التقنية", s3Desc: "لا تتحمل ادارة المنصة اي مسؤولية تجاه تلف البيانات فالرجاء التأكد قبل استعمال الكود بالعمل.", s4Title: "4. الملكية المادية الكودية", s4Desc: "شفرتك ملكك. لا نصادر شيء.", returnHome: "الرئيسية والمحطة الأولى" },
        tool: { whatIs: "ما الذي تقوم به", howTo: "الخطوات المكتوبة للتنسيق", online: "مجاناً للمحترفين", faqs: "مجلد الإستفسارات عن التنسيق والمعاينة", p1_1: "هذه الاداة الحرة تساعدك بإضافة الفراغات والمحاذاة التلقائية", p1_2: "مباشرة في متصفح النظام بأمان وسرية تامة دون اي مشاكل بالسرعة", p1_3: "وتجميله بخطوط ملونة ممتازة.", li1: "اذهب للصفحة من الشريط او الصفحة الرئيسية", li1_2: "وهي متواجدة.", li2: "قم بلصق الشفرة بداخل الصندوق النصي", li2_2: "حتى يستوعبها النظام.", li3: "انقر بمرونة على كبسة الزر", li3_1: "Format Code", li3_2: "حتى يعيد النظام الصياغة الشاملة للكود المتفرق.", li4: "انسخ النتائج عبر النافذة في لوحة المفاتيح والذاكرة." }
    },
    bn: {
        privacy: { badge: "গোপনীয়তা আগে", title: "গোপনীয়তা এবং পলিসি", subtitle: "নিরাপত্তা নিশ্চিত করতে ফাইলগুলো আপনার ব্রাউজার ছেড়ে কোথাও যায়না।", box1Title: "১০০% লোকাল ক্লায়েন্ট", box1Desc: "কোনো প্রকার সেন্ডিং বা ট্র্যাকিং নেই।", box2Title: "ফাইল জমা হয়না", box2Desc: "আপনার সকল কোড আপনার কাছেই থাকে।", s1Title: "১. আমাদের ডাটা সংগ্রহ", s1Desc: "খুব সামান্য কিছু তথ্য সংগ্রহ করা হয়।", s1Li1: "শুধুমাত্র থিম হিস্টোরি লোকাল স্টোরেজে সেভ হয়।", s1Li2: "বাধ্যতামূলক অ্যানালাইসিস গুগলে যায়।", s2Title: "২. থার্ড পার্টি সফটওয়্যার এবং সংস্থা", s2Desc: "তথ্য নিরাপদ, তবে এনালাইটিক্স এর সাহায্য ব্যবহার করা হয়।", s3Title: "৩. তথ্য সুরক্ষা ব্যবস্থা", s3Desc: "ইন্টারনেটের কোনো ট্রাফিক আপনার কোডের জন্য বাধা হয়ে দাঁড়ায় না।", s4Title: "৪. আপডেট পলিসি", s4Desc: "মাঝে মাঝে এই নিয়মাবলি পরিবর্তন করা হয়। (২০২৬)", s4Footer: "যেকোনো প্রশ্নের জন্য গিটহাবে নক করুন।", returnHome: "হোম ফিরে যান" },
        terms: { badge: "ব্যবহারবিধি", title: "সেবার অন্যান্য শর্তাবলি", subtitle: "এই শর্তগুলো ওয়েবসাইট ব্যবহার সবার জন্য উন্মুক্ত রাখতে সাহায্য করবে।", s1Title: "১. রুলস অ্যাক্সেপটেনস", s1Desc: "সাইটের সব নিয়ম স্বীকারপূর্বক এটি আপনি ব্যবহার করছেন।", s2Title: "২. অনুমতি এবং রুলস", s2Desc: "যেকোনো বাণিজ্যিক কাজে সফটওয়্যার টি ইউজ করা যায় কিন্তু নিষেধ করা হয়:", s2Li1: "ইললিগ্যাল কাজের উদ্দেশ্যে", s2Li2: "সিস্টেম ক্র্যাশ করানোর নিয়ত", s2Li3: "ফায়ারওয়াল বাইপাস", s3Title: "৩. ক্ষতিপূরণ লিমিট", s3Desc: "ডকুমেন্ট এর কোনো ক্ষতি বা ইররের জন্য মালিকপক্ষ দায়ী থাকবে না।", s4Title: "৪. ইন্টেলেকচুয়াল প্রপার্টি", s4Desc: "আপনার ফাইল আপনার ব্যক্তিগত মালিকানাধীন, কোনো অধিকার আমাদের নেই।", returnHome: "হোম ফিরে যান" },
        tool: { whatIs: "কী এই", howTo: "কীভাবে সাজাবেন কোডটি", online: "অনলাইন সফটওয়্যার", faqs: "ফরমেটার – প্রশ্ন এবং উত্তর", p1_1: "সুন্দরভাবে ইন্ডেন্ট করে অনলাইনে দ্রুততার সাথে", p1_2: "কোড ঠিক করে ফেলার জন্য এটি ব্যবহার করা হয়। এটি ১০০% প্রাইভেট। আপনার", p1_3: "কোড সহজেই পরিষ্কার ফরমেট দেয় এই ওয়েবসাইট।", li1: "শুরুতে টুলের পৃষ্ঠায় যান", li1_2: "এবং অপেক্ষা করুন।", li2: "আপনার অসাজানো", li2_2: "কোড ফাইল এখানে যোগ করুন।", li3: "এরপর নীল রঙের", li3_1: "Format Code", li3_2: "বাটনে চাপলে অটো কাজ হবে।", li4: "সবশেষে কোড কপি করুন অথবা ফাইলটি ডাউনলোড করে ল্যাপটপে রাখুন।" }
    },
    ur: {
        privacy: { badge: "پرائیویسی اوّل", title: "رازداری کی پالیسی", subtitle: "چونکہ آپ کا کوڈ محفوظ ہے اسلئے ہم 100 فیصد گارنٹی دیتے ہیں کہ ہماری ٹیکنالوجی بہترین ہے۔", box1Title: "مقامی کلائنٹ سائڈ", box1Desc: "کمپیوٹر کے اندر پروسیسنگ ہوتی ہے۔", box2Title: "ڈیٹا لاگنگ صفر", box2Desc: "ہم کوئی تاریخ محفوظ نہیں کرتے۔", s1Title: "1. اکٹھا کردہ ڈیٹا", s1Desc: "کوئی اکاؤنٹ بنانا ضروری نہیں۔ کوڈ بھی محفوظ نہیں۔", s1Li1: "براؤزر کا اپنا میموری باکس۔", s1Li2: "انٹرنیٹ لاگز سیکیورٹی کے لئیے۔", s2Title: "2. فریق ثالث سروس", s2Desc: "آئی پی ایڈریس ٹریکنگ سیکیورٹی لئیے۔", s3Title: "3. سیکیورٹی لیول", s3Desc: "ہیکنگ نا ممکن۔", s4Title: "4. اپڈیٹ کب", s4Desc: "یہ فروری 2026۔", s4Footer: "گٹ ہب پر سوالات کیجئے۔", returnHome: "مرکزی صفحہ پر جایئے۔" },
        terms: { badge: "استعمال کا طریقہ", title: "سروس کے شرائط ضوابط", subtitle: "آپ پلیٹ فارم کے استعمال کرنے کے اقرار نامے کو قبول کرتے ہیں۔", s1Title: "1. قبولیت", s1Desc: "جیسے ہے ویسے استعمال کریں۔", s2Title: "2. اجازت شدہ کام", s2Desc: "کاروبار میں استعمال کریں لیکن ممنوع ہیں:", s2Li1: "غیر اخلاقی عمل۔", s2Li2: "ڈی ڈاس اٹیک (DDoS)۔", s2Li3: "ویب شیل نقصان۔", s3Title: "3. ذمہ داری کی حدود", s3Desc: "خراب فارمیٹنگ پر سافٹ ویئر ڈیولپرز ذمہ دار نہیں، فائل چیک کریں۔", s4Title: "4. پراپرٹی حقوق", s4Desc: "آپکا ڈیٹا آپ کی ملکیت۔", returnHome: "مرکزی صفحہ پر جایئے۔" },
        tool: { whatIs: "یہ کیا ہے", howTo: "فارمیٹنگ کیسے کریں", online: "آن لائن", faqs: "اکثر پوچھے گئے سوالات و جوابات", p1_1: "یہ ویب سائٹ آن لائن مفت میں", p1_2: "کے کوڈ کو ترتیب دیتا ہے۔ آپکو کسی لاگ ان یا سرور کی ضرورت نہیں۔ اس سے بچ کر صرف", p1_3: "اپنا کوڈ ڈالیں اور فوراً صاف شفاف نتیجہ پائیں۔", li1: "نیویگیٹ کر کے یہاں", li1_2: "پہنچیں۔", li2: "بکھرا ہوا یعنی گندا", li2_2: "کوڈ باکس کے اندر ڈالیں۔", li3: "اس کے بعد ماؤس سے کلک کریں", li3_1: "Format Code", li3_2: "تاکہ اسکرپٹ شکل اختیار کرے۔", li4: "نیچے موجود رزلٹ کو کاپی کریں یا فوراً پی ڈی ایف/فائل محفوظ کریں۔" }
    }
};

for (const locale of locales) {
    const filePath = path.join(dictDir, locale + '.json');
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
            const data = JSON.parse(fileContent);

            // Apply translations dynamically matching the full object structure
            data.privacy = translations[locale].privacy;
            data.terms = translations[locale].terms;
            data.tool = translations[locale].tool;

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`Updated real Policy & Tool translations for ${locale}`);
        } catch (e) {
            console.error(`Error parsing JSON for ${locale}`, e);
        }
    } else {
        console.warn(`File not found: ${filePath}`);
    }
}

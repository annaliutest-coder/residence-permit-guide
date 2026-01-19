// =====================================
// Multilingual Translations
// =====================================
const translations = {
    'zh-TW': {
        page_title: '外國學生申請居留證指南 | Residence Permit Application Guide',
        main_title: '外國學生申請居留證完整指南',
        subtitle: '跟著影片一步步完成申請',
        important_notice: '重要提醒',
        notice_1: '第一次辦理可以線上申請',
        notice_2: '體檢部分一定要完成體檢才能領取居留證',
        notice_3: '居留證逾期將處新臺幣1萬元至5萬元罰鍰',
        step1_title: '準備文件',
        step2_title: '註冊帳號',
        step3_title: '填寫申請',
        step4_title: '繳費完成',
        step1_heading: '步驟一：準備必要文件',
        step2_heading: '步驟二：註冊移民署帳號',
        step3_heading: '步驟三：填寫線上申請表',
        step4_heading: '步驟四：繳費與領證',
        required_docs: '必備文件清單',
        doc_passport: '護照',
        doc_passport_desc: '護照正本及影本',
        doc_visa: '居留簽證',
        doc_visa_desc: '註記「外國留學生」的居留簽證',
        doc_enrollment: '在學證明',
        doc_enrollment_desc: '繳費註冊後可下載或至教務處申請',
        doc_residence: '住宿證明',
        doc_residence_desc: '宿舍住宿證明或租屋契約',
        doc_photo: '照片',
        doc_photo_desc: '白色背景2吋半身脫帽正面相片',
        doc_fee: '費用',
        doc_fee_desc: '新臺幣1,000元（一年期）',
        enrollment_cert_title: '📄 如何取得在學證明',
        method1: '方法一：使用 NTNU APP 下載（推薦）',
        method2: '方法二：i-Portal 網頁下載',
        method3: '方法三：至教務處申請',
        enrollment_app_step1: '下載並登入「NTNU APP」（國立臺灣師範大學APP）',
        enrollment_app_step2: '進入「我的校園」→「學生專區」',
        enrollment_app_step3: '選擇「教務資訊」→「在學證明」',
        enrollment_app_step4: '選擇當學期並點擊「下載PDF」',
        app_note: '💡 APP下載的在學證明已內建教務處電子章戳，無需另外用印！',
        enrollment_step1: '登入校務行政資訊入口網',
        enrollment_step2: '進入「教務資訊系統」→「學籍相關」',
        enrollment_step3: '選擇「當學期在學證明」並下載',
        enrollment_step4: '確認已繳完學費',
        enrollment_step5: '帶著繳費收據到教務處註冊組申請（費用：NT$10/份）',
        enrollment_important_note: '⚠️ 重要提醒：剛繳完學費的同學，系統可能需要2-3個工作天更新狀態，才能下載在學證明。',
        go_to_portal: '前往校務系統 →',
        residence_cert_title: '🏠 如何取得住宿證明',
        dorm_student: '住學校宿舍：',
        residence_step1: '確認已繳交住宿費用',
        residence_step2: '登入校務行政資訊入口網',
        residence_step3: '進入「學生宿舍相關系統」下載住宿證明',
        off_campus: '住校外：',
        rental_contract: '請提供與房東簽訂的租賃契約（租屋契約）',
        video_not_supported: '您的瀏覽器不支援影片播放',
        video1_caption: '觀看影片學習如何註冊移民署線上申辦系統帳號',
        video2_caption: '跟著影片一步步完成居留證申請表填寫',
        video3_caption: '了解如何完成繳費並領取居留證',
        registration_steps: '註冊步驟說明',
        reg_step1: '前往移民署線上申辦網站：https://reurl.cc/GEbr2p',
        reg_step2: '點選「註冊新帳號」',
        reg_step3: '填寫個人基本資料（護照資訊、聯絡方式等）',
        reg_step4: '設定帳號密碼',
        reg_step5: '驗證電子郵件',
        reg_step6: '完成註冊',
        application_steps: '申請步驟說明',
        app_step1: '登入移民署線上申辦系統',
        app_step2: '選擇「外僑居留證申請」',
        app_step3: '填寫個人基本資料',
        app_step4: '上傳必要文件：',
        upload_enrollment: '在學證明',
        upload_residence: '住宿證明',
        upload_photo: '2吋照片電子檔',
        app_step5: '確認資料無誤',
        app_step6: '送出申請',
        permit_duration: '⏰ 居留證效期說明',
        duration_note1: '初次入國未註冊（未上傳在學證明）：核發6個月效期',
        duration_note2: '初次入國已註冊（上傳在學證明）：核發1年效期',
        duration_note3: '居留證到期前3個月應申請延展',
        payment_steps: '繳費步驟說明',
        pay_step1: '線上申請完成後，系統會產生繳費單',
        pay_step2: '列印繳費單或記下繳費代碼',
        pay_step3: '前往便利商店、郵局或銀行繳費（NT$1,000）',
        pay_step4: '保留繳費收據',
        pay_step5: '等待審核通知（約7-14個工作天）',
        pay_step6: '收到通知後，攜帶護照和收據前往移民署領證',
        congratulations: '恭喜！',
        completion_message: '完成以上步驟後，您就成功申請了台灣居留證！',
        important_reminders: '📌 重要事項提醒',
        reminder1: '居留證到期前3個月應申請延展',
        reminder2: '變更居住地址須於30日內辦理變更登記',
        reminder3: '居留證逾期將處新臺幣1萬元至5萬元罰鍰',
        reminder4: '請妥善保管居留證，遺失需立即申報',
        need_help: '需要協助？',
        immigration_office: '內政部移民署',
        immigration_website: '網站：線上申辦系統',
        school_office: '學校國際處',
        school_location: '位置：和平校區 普通大樓1樓',
        next_step: '下一步 →',
        prev_step: '← 上一步',
        start_over: '重新開始',
        footer_text: '© 2024 台灣師範大學 - 外國學生居留證申請指南'
    },
    'en': {
        page_title: 'Taiwan Residence Permit Application Guide for International Students',
        main_title: 'Complete Guide for Residence Permit Application',
        subtitle: 'Follow the videos step by step',
        important_notice: 'Important Notice',
        notice_1: 'First-time applications can be submitted online',
        notice_2: 'Health examination is required to receive residence permit',
        notice_3: 'Overdue permit will result in NT$10,000-50,000 fine',
        step1_title: 'Prepare Documents',
        step2_title: 'Register Account',
        step3_title: 'Fill Application',
        step4_title: 'Payment',
        step1_heading: 'Step 1: Prepare Required Documents',
        step2_heading: 'Step 2: Register Immigration Office Account',
        step3_heading: 'Step 3: Fill Out Online Application',
        step4_heading: 'Step 4: Payment and Collection',
        required_docs: 'Required Documents',
        doc_passport: 'Passport',
        doc_passport_desc: 'Original and copy of passport',
        doc_visa: 'Resident Visa',
        doc_visa_desc: 'Resident visa marked "Foreign Student"',
        doc_enrollment: 'Enrollment Certificate',
        doc_enrollment_desc: 'Download after registration or apply at Registrar Office',
        doc_residence: 'Residence Proof',
        doc_residence_desc: 'Dormitory certificate or rental contract',
        doc_photo: 'Photo',
        doc_photo_desc: '2-inch photo with white background',
        doc_fee: 'Fee',
        doc_fee_desc: 'NT$1,000 (one-year permit)',
        enrollment_cert_title: '📄 How to Obtain Enrollment Certificate',
        method1: 'Method 1: Download via NTNU APP (Recommended)',
        method2: 'Method 2: i-Portal Web Download',
        method3: 'Method 3: Apply at Registrar Office',
        enrollment_app_step1: 'Download and log in to "NTNU APP" (National Taiwan Normal University APP)',
        enrollment_app_step2: 'Go to "My School" → "Student Zone"',
        enrollment_app_step3: 'Select "Academic Affairs" → "Enrollment Certificate"',
        enrollment_app_step4: 'Select current semester and click "Download PDF"',
        app_note: '💡 Certificates downloaded via APP include built-in official digital stamp - no additional stamping needed!',
        enrollment_step1: 'Log in to Student Portal',
        enrollment_step2: 'Enter "Academic Affairs System" → "Student Status"',
        enrollment_step3: 'Select "Current Semester Enrollment Certificate" and download',
        enrollment_step4: 'Confirm tuition payment',
        enrollment_step5: 'Bring receipt to Registrar Office (Fee: NT$10/copy)',
        enrollment_important_note: '⚠️ Important: After paying tuition, it may take 2-3 working days for the system to update before you can download the certificate.',
        go_to_portal: 'Go to Portal →',
        residence_cert_title: '🏠 How to Obtain Residence Proof',
        dorm_student: 'Dormitory Students:',
        residence_step1: 'Confirm payment of accommodation fees',
        residence_step2: 'Log in to Student Portal',
        residence_step3: 'Download certificate from "Dormitory System"',
        off_campus: 'Off-Campus:',
        rental_contract: 'Provide rental contract signed with landlord',
        video_not_supported: 'Your browser does not support video playback',
        video1_caption: 'Learn how to register an immigration online system account',
        video2_caption: 'Follow the video to complete the application form',
        video3_caption: 'Learn how to complete payment and collect permit',
        registration_steps: 'Registration Steps',
        reg_step1: 'Visit Immigration Office website: https://reurl.cc/GEbr2p',
        reg_step2: 'Click "Register New Account"',
        reg_step3: 'Fill in personal information (passport, contact, etc.)',
        reg_step4: 'Set username and password',
        reg_step5: 'Verify email address',
        reg_step6: 'Complete registration',
        application_steps: 'Application Steps',
        app_step1: 'Log in to Immigration online system',
        app_step2: 'Select "Alien Residence Certificate Application"',
        app_step3: 'Fill in personal information',
        app_step4: 'Upload required documents:',
        upload_enrollment: 'Enrollment certificate',
        upload_residence: 'Residence proof',
        upload_photo: '2-inch photo file',
        app_step5: 'Confirm information',
        app_step6: 'Submit application',
        permit_duration: '⏰ Permit Duration',
        duration_note1: 'First entry without enrollment: 6-month permit',
        duration_note2: 'First entry with enrollment: 1-year permit',
        duration_note3: 'Apply for extension 3 months before expiry',
        payment_steps: 'Payment Steps',
        pay_step1: 'Payment slip will be generated after application',
        pay_step2: 'Print payment slip or note payment code',
        pay_step3: 'Pay at convenience store, post office or bank (NT$1,000)',
        pay_step4: 'Keep payment receipt',
        pay_step5: 'Wait for approval (7-14 working days)',
        pay_step6: 'Collect permit at Immigration Office with passport and receipt',
        congratulations: 'Congratulations!',
        completion_message: 'You have successfully applied for Taiwan residence permit!',
        important_reminders: '📌 Important Reminders',
        reminder1: 'Apply for extension 3 months before expiry',
        reminder2: 'Report address changes within 30 days',
        reminder3: 'Overdue permit will result in NT$10,000-50,000 fine',
        reminder4: 'Keep permit safe, report immediately if lost',
        need_help: 'Need Help?',
        immigration_office: 'Immigration Office',
        immigration_website: 'Website: Online Application System',
        school_office: 'School International Office',
        school_location: 'Location: General Building 1F, Heping Campus',
        next_step: 'Next Step →',
        prev_step: '← Previous Step',
        start_over: 'Start Over',
        footer_text: '© 2024 NTNU - International Student Residence Permit Guide'
    }
};

// Additional languages (Japanese, Korean, Vietnamese, Thai, Indonesian, French, German, Russian)
// Abbreviated for brevity - full translations would be added here

let currentLang = 'zh-TW';
let currentStep = 1;

// =====================================
// Initialize
// =====================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNav();
    updateProgress();
});

// =====================================
// Language Functions
// =====================================
function initLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'zh-TW';
    switchLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    if (!translations[lang]) {
        lang = 'zh-TW';
    }

    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update page title
    document.title = translations[lang].page_title;
}

// =====================================
// Navigation Functions
// =====================================
function initNav() {
    // Mark completed steps
    updateStepStatus();
}

function nextStep() {
    if (currentStep < 4) {
        currentStep++;
        showStep(currentStep);
        updateProgress();
        updateStepStatus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        updateProgress();
        updateStepStatus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showStep(step) {
    // Hide all step contents
    document.querySelectorAll('.step-content').forEach(content => {
        content.classList.remove('active');
    });

    // Show current step content
    const stepContent = document.querySelector(`.step-content[data-content="${step}"]`);
    if (stepContent) {
        stepContent.classList.add('active');
    }

    // Update step indicators
    document.querySelectorAll('.step').forEach((el, index) => {
        el.classList.toggle('active', index + 1 === step);
    });
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const percentage = (currentStep / 4) * 100;
    progressFill.style.width = `${percentage}%`;
}

function updateStepStatus() {
    document.querySelectorAll('.step').forEach((el, index) => {
        const stepNum = index + 1;
        if (stepNum < currentStep) {
            el.classList.add('completed');
        } else {
            el.classList.remove('completed');
        }
    });
}

function resetGuide() {
    currentStep = 1;
    showStep(1);
    updateProgress();
    updateStepStatus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

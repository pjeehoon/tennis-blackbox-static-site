let lang = localStorage.getItem('lang') || 'en';

// 페이지 로드 시 언어 선택기 상태 설정
document.addEventListener('DOMContentLoaded', function() {
  updateLanguageSwitcher();
  loadTexts();
});

function updateLanguageSwitcher() {
  // 현재 언어 플래그와 코드 업데이트
  const currentFlag = document.getElementById('current-lang-flag');
  const currentCode = document.getElementById('current-lang-code');
  
  if (lang === 'ko') {
    currentFlag.src = '/wp-content/plugins/translatepress-multilingual/assets/images/flags/ko_KR.png';
    currentFlag.alt = 'ko_KR';
    currentFlag.title = '한국어';
    currentCode.textContent = 'KO';
  } else {
    currentFlag.src = '/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png';
    currentFlag.alt = 'en_US';
    currentFlag.title = 'English';
    currentCode.textContent = 'EN';
  }
}

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', lang);
  updateLanguageSwitcher();
  loadTexts();
  
  // 언어 변경 시 페이지 새로고침 대신 부드러운 전환
  document.body.style.opacity = '0.8';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 300);
}

function loadTexts() {
  fetch('/lang/texts.xml')
    .then(res => res.text())
    .then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
    .then(xml => {
      // 모든 텍스트 매핑
      const mappings = [
        // Main sections
        ['main-title', 'main_title'],
        ['main-subtitle', 'main_subtitle'],
        ['intro-title', 'intro_title'],
        ['action-title', 'action_title'],
        ['feature-title', 'feature_title'],
        ['specialized-title', 'specialized_title'],
        ['specialized-desc', 'specialized_desc'],
        ['setup-guide-title', 'setup_guide_title'],
        ['equipment-title', 'equipment_title'],
        ['equipment-desc', 'equipment_desc'],
        ['dispute-title', 'dispute_title'],
        ['stopping-title', 'stopping_title'],
        ['stopping-desc', 'stopping_desc'],
        ['reviewing-title', 'reviewing_title'],
        ['reviewing-desc', 'reviewing_desc'],
        ['final-decision-title', 'final_decision_title'],
        ['agreement-fails-title', 'agreement_fails_title'],
        ['agreement-fails-desc', 'agreement_fails_desc'],
        ['automated-decision-title', 'automated_decision_title'],
        ['automated-decision-desc', 'automated_decision_desc'],
        ['atp-title', 'atp_title'],
        ['share-decision-title', 'share_decision_title'],
        ['share-decision-desc', 'share_decision_desc'],
        ['example-1-title', 'example_1_title'],
        ['example-1-desc', 'example_1_desc'],
        ['example-2-title', 'example_2_title'],
        ['example-2-desc', 'example_2_desc'],
        ['supported-devices-title', 'supported_devices_title'],
        ['old-devices-title', 'old_devices_title'],
        ['old-devices-desc', 'old_devices_desc'],
        ['installation-tip-1-title', 'installation_tip_1_title'],
        ['battery-title', 'battery_title'],
        ['battery-desc', 'battery_desc'],
        ['installation-tip-2-title', 'installation_tip_2_title'],
        ['tripod-title', 'tripod_title'],
        ['tripod-desc', 'tripod_desc'],
        ['cooling-title', 'cooling_title'],
        ['prevent-overheating-title', 'prevent_overheating_title'],
        ['prevent-overheating-desc', 'prevent_overheating_desc'],
        ['ipad-title', 'ipad_title'],
        ['remote-control-title', 'remote_control_title'],
        ['remote-control-desc', 'remote_control_desc'],
        ['no-wifi-title', 'no_wifi_title'],
        ['multipeer-title', 'multipeer_title'],
        ['multipeer-desc', 'multipeer_desc'],
        ['price-title', 'price_title'],
        ['price-desc', 'price_desc'],
        ['contact-text', 'contact_text'],
        ['download-button-text', 'download_button_text']
      ];
      
      mappings.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) {
          const node = xml.querySelector(`${key} > ${lang}`);
          if (node) {
            // innerHTML을 사용하여 줄바꿈 등을 유지
            el.innerHTML = node.textContent.replace(/\n/g, '<br>');
          }
        }
      });
      
      // 이메일 주소는 그대로 유지
      const contactEl = document.getElementById('contact-email');
      if (contactEl) {
        contactEl.href = 'mailto:info@tennisblackbox.net';
        contactEl.textContent = 'info@tennisblackbox.net';
      }
    })
    .catch(err => console.error('Error loading translations:', err));
}
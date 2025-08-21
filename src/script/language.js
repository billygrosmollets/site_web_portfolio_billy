document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement
  const languageToggle = document.querySelector('.language-toggle')

  // Applique la langue sauvegardée ou 'en' par défaut
  const savedLang = localStorage.getItem('language') || 'en'
  html.setAttribute('data-lang', savedLang)
  html.lang = savedLang
  updateTranslations(savedLang)

  // Bascule entre en et fr au clic
  languageToggle.addEventListener('click', () => {
    const currentLang = html.getAttribute('data-lang')
    const newLang = currentLang === 'en' ? 'fr' : 'en'
    html.setAttribute('data-lang', newLang)
    html.lang = newLang
    localStorage.setItem('language', newLang)
    updateTranslations(newLang)
  })

  // Met à jour les textes traduits et les placeholders
  function updateTranslations(lang) {
    // Traduit le contenu des éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n')
      element.textContent = translations[lang][key] || element.textContent
    })

    // Traduit les placeholders des éléments avec data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder')
      element.placeholder = translations[lang][key] || element.placeholder
    })
  }
})

import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import Overview from 'src/page/overview'


import { setLanguage } from 'store'

function App() {
  const [t, i18n] = useTranslation()
  const language = useSelector((state) => state.setting.language)
  
  const dispatch = useDispatch()
  const changeLanguage = (event) => {
    const lng = event.target.value
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng))
  };
  
  return (
    <>
      <div id="snackbar"></div>
      <div className="top-menu">
        <div className="align-left">
          <label htmlFor="language-select">{t("general.select-lang")}</label>
          <select
            id="language-select"
            value={language}
            onChange={changeLanguage}
          >
            <option value="en">{t('en')}</option>
            <option value="id">{t('id')}</option>
          </select>
        </div>
      </div>
      <Overview/>
    </>
  )
}

export default App

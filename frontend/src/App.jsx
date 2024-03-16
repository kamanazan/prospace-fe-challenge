import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { setLanguage} from './store'

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <label htmlFor="language-select">{t("select-lang")}:</label>
          <select
            id="language-select"
            value={language}
            onChange={changeLanguage}
          >
            <option value="en">{t('en')}</option>
            <option value="id">{t('id')}</option>
          </select>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {t('test-msg')}
      </p>
    </>
  )
}

export default App

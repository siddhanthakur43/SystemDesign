import React, { useState } from 'react'
import { MULTI_LANG } from './local'

const MultiLanguage = () => {
    const [lang, setLang] = useState('en')
    const handleChange = (e) => {
        setLang(e.target.value)
    }
    console.log(lang, 'lang');
    const locale = MULTI_LANG[lang]
  return (
      <div className='m-2 p-2'>
          <select className='p-2 w-72' value={lang} onChange={(e) => handleChange(e)}>
              <option value='en'>English</option>
              <option value='hi'>Hindi</option>
              <option value='fr'>French</option>
              <option value='it'>Italian</option>
          </select>
          <div className='pt-2 mt-2'>
              <h1 className='font-bold text-2xl'>{locale.title}</h1>
              <p>
                  {locale.teamIndia}
              </p>
          </div>
    </div>
  )
}

export default MultiLanguage
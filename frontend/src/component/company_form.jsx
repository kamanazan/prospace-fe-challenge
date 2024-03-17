import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid'

import { addCompany } from 'store'


const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [t] = useTranslation()
  const dispatch = useDispatch()
  
  const onSubmit = (data) => {
    dispatch(addCompany({
      id: uuidv4(),
      ...data
    }))
    reset()
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>{t('company.input-label.name')}</label>
        <br/>
        <input {...register('name', {required: true})}/>
        {errors.name && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('company.input-label.address')}</label>
        <br/>
        <input {...register('address', {required: true})}/>
        {errors.address && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('company.input-label.revenue')}</label>
        <br/>
        <input {...register('revenue', {required: true, pattern: /\d+/, min: 0})}/>
        {errors.revenue && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('company.input-label.phone')}</label>
        <br/>
        <input className="input-phone-code" {...register('phoneCityCode', {required: true, pattern: /\d+/})}/>
        <input {...register('phoneNumber', {required: true, pattern: /[\d|-]+/})}/>
        {(errors.phoneCityCode || errors.phoneNumber) && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div className="button-full">
        <button type="submit">{t('general.create-btn')}</button>
      </div>
    
    </form>
  )
}

export default CompanyForm

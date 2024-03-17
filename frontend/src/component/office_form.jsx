import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid'

import { addOffice } from 'store'


const OfficeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [t] = useTranslation()
  const dispatch = useDispatch()
  
  const companyList = useSelector((state) => state.company.companyList)
  
  const onSubmit = (data) => {
    dispatch(addOffice({
      id: uuidv4(),
      ...data
    }))
    reset()
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>{t('office.input-label.name')}</label>
        <br/>
        <input {...register('name', {required: true})}/>
        {errors.name && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('office.input-label.location')}</label>
        <br/>
        <input className="input-half" {...register('lat', {required: true})}/>
        <input className="input-half" {...register('lon', {required: true})}/>
        {errors.address && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('office.input-label.start-date')}</label>
        <br/>
        <input {...register('startDate', {required: true})}/>
        {errors.name && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('office.input-label.company')}</label>
        <br/>
        <input {...register('companyId', {required: true})}/>
        {errors.revenue && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div className="button-full">
        <button type="submit">{t('general.create-btn')}</button>
      </div>
    </form>
  )
}

export default OfficeForm

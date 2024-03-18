import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { v4 as uuidv4 } from 'uuid'

import { addOffice } from 'store'


const OfficeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    setValue
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
    const x = document.getElementById("snackbar");
    x.className = "show";
    x.textContent = t('office.msg.create-success');
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
  const setDateValue = (data) => {
    const value = new Date(data).toISOString().split('T')[0]
    setValue('startDate', value)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>{t('office.input-label.name')}</label>
        <br/>
        <input className="input-full" {...register('name', {required: true})}/>
        {errors.name && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('office.input-label.location')}</label>
        <br/>
        <input className="input-half" {...register('lat', {required: true})}/>
        <input className="input-half" {...register('lon', {required: true})}/>
        {errors.location && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('office.input-label.start-date')}</label>
        <br/>
        <Controller
          control={control}
          name='startDate'
          required
          render={({ field }) => (
            <DatePicker
              dateFormat="YYYY-MM-DD"
              placeholderText="Select date"
              onChange={setDateValue}
              selected={field.value}
              isClearable
              shouldCloseOnSelect
            />
          )}
        />
        {errors.startDate && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('office.input-label.company')}</label>
        <br/>
        <select defaultValue="" {...register('companyId', {required: true})}>
          <option value="">----</option>
          {companyList.map(value => (
            <option key={`${value.id}-${value.name}`} value={value.id}>
              {value.name}
            </option>
          ))}
        </select>
        {errors.companyId && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div className="button-full">
        <button type="submit">{t('general.create-btn')}</button>
      </div>
    </form>
  )
}

export default OfficeForm

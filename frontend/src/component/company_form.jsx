import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"

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
   
    const postData = async () => {
      try {
        const response = await fetch('/api/company', {
          method: 'POST',
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
          redirect: "follow",
          referrerPolicy: "no-referrer",
        })
        const newCompany = await response.json()
        dispatch(addCompany(newCompany))
        reset()
        const x = document.getElementById("snackbar");
        x.className = "show";
        x.textContent = t('company.msg.create-success');
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        
      } catch (error) {
        console.log({error})
      }

    }
    postData().then((r) => {console.log({created: r})}).catch(
      (err) => console.log(err)
    )
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>{t('company.input-label.name')}</label>
        <br/>
        <input className="input-full" {...register('name', {required: true})}/>
        {errors.name && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('company.input-label.address')}</label>
        <br/>
        <input className="input-full" {...register('address', {required: true})}/>
        {errors.address && <p role="alert">{t('general.error-required')}</p>}
      </div>
      <div>
        <label>{t('company.input-label.revenue')}</label>
        <br/>
        <input className="input-full" {...register('revenue', {required: {value: true, message:t('general.error-required')}, pattern: {value:/^(?!-)[1-9][0-9]*$/, message: t('company.input-error.revenue')}})}/>
        {errors.revenue && <p role="alert">{errors.revenue.message}</p>}
      </div>
      <div>
        <label>{t('company.input-label.phone')}</label>
        <br/>
        <input className="input-phone-code" {...register('phoneCityCode', {required: {value: true, message:t('general.error-required')}, pattern: {value:/\d+/, message: t('company.input-error.phoneCityCode')}})}/>
        <input {...register('phoneNumber', {required: {value: true, message:t('general.error-required')}, pattern: {message: t('company.input-error.phoneNumber'),value: /[\d|-]+/}})}/>
        {(errors.phoneCityCode || errors.phoneNumber) && <p role="alert">{errors.phoneCityCode?.message || errors.phoneNumber?.message}</p>}
      </div>
      <div className="button-full">
        <button type="submit">{t('general.create-btn')}</button>
      </div>
    
    </form>
  )
}

export default CompanyForm

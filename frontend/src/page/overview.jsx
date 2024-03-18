import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'

import {addOffice, deleteCompany, toggleModalShow} from 'store'

import DataCard from "src/component/card"
import CompanyForm from 'src/component/company_form'
import OfficeForm from 'src/component/office_form'
import ModalConfirmation from 'src/component/modal'
const Overview = () => {
  const [t] = useTranslation()
  const [idToDelete, setIdToDelete] = useState('')
  const companyList = useSelector((state) => state.company.companyList)
  const showConfirmation = useSelector((state) => state.setting.showConfirmation)
  const dispatch = useDispatch()
  const getCompanyCard = (data) => {
    return {
      [t('company.input-label.address')]: data.address,
      [t('company.input-label.revenue')]: data.revenue,
      [t('company.input-label.phone')]: `(${data.phoneCityCode}) ${data.phoneNumber}`
    }
  }
  
  const deleteData = () => {
    const x = document.getElementById("snackbar");
    const deleteData = async () => {
      try {
        const response = await fetch('/api/company/delete/'+idToDelete, {
          method: 'POST',
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          redirect: "follow",
          referrerPolicy: "no-referrer",
        })
        console.log({response})
        if (response.status === 400) {
          throw new Error(response.statusText)
        }
        dispatch(deleteCompany(idToDelete))
        setIdToDelete('')
        dispatch(toggleModalShow(false))
        x.className = "show";
        x.textContent = t('company.msg.delete-success');
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        
      } catch (error) {
        x.className = "show";
        x.textContent = error;
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
    }
    deleteData().then(() => {})
  }
  
  const setDataToDelete = (id) => {
    setIdToDelete(id)
    dispatch(toggleModalShow(true))
  }
  
  const cancelDelete = () => {
    setIdToDelete('')
    dispatch(toggleModalShow(false))
  }
  
  return (
    <>
      {showConfirmation && <ModalConfirmation
        title={t('general.warn')}
        bodyMessage={(t('company.msg.delete-confirm'))}
        onClickConfirm={deleteData}
        onClickCancel={cancelDelete}
      />}
      <div className="form-container">
        <div className="form">
          <p>{t('company.msg.create')}</p>
          <CompanyForm/>
        </div>
        <div className="form">
          <p>{t('office.msg.create')}</p>
          <OfficeForm/>
        </div>
      </div>
      <div className="card-container">
        <p>{t('company.msg.list')}</p>
        <div className="card-list">
          {companyList.length > 0 && companyList.map((c) => <DataCard title={c.name} data={getCompanyCard(c)}
                                                                      type="company" key={`company-${c._id}`} onDelete={()=>setDataToDelete(c._id)}/>)}
          {companyList.length === 0 && <span>{t('company.msg.empty')}</span>}
        </div>
      </div>
    
    </>
  )
}

export default Overview

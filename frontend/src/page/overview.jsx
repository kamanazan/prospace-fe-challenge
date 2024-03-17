import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { addCompany } from 'store'

import DataCard from "src/component/card"
import CompanyForm from 'src/component/company_form'
import OfficeForm from 'src/component/office_form'
const Overview = () => {
  const [t] = useTranslation()
  const companyList = useSelector((state) => state.company.companyList)
  const getCompanyCard = (data) => {
    return {
      [t('company.input-label.address')]: data.address,
      [t('company.input-label.revenue')]: data.revenue,
      [t('company.input-label.phone')]: `(${data.phoneCityCode}) ${data.phoneNumber}`,
      'lat': '123.45\n255.67'
    }
  }
  
  return (
    <>
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
                                                                      type="company" key={`company-${c.id}`}/>)}
          {companyList.length === 0 && <span>{t('company.msg.empty')}</span>}
        </div>
      </div>
    
    </>
  )
}

export default Overview

import React from 'react'
import { useSelector } from 'react-redux';

export default function Footer() {
  const info = useSelector(store => store.washer.info);

  return (
    <footer>
      {info?.page?.footer_text && <p>{info.page.footer_text}</p>}

      <div className="links">
        {info?.page?.service_description_url && <a href={info.page.service_description_url}>Опис послуги</a>}
        {info?.page?.terms_of_refund_url && <a href={info.page.terms_of_refund_url}>Умови повернення</a>}
        {info?.page?.offer_agreement_url && <a href={info.page.offer_agreement_url}>Договір оферти</a>}
      </div>

      <p>© Copyright 2024. All Rights Reserved.</p>
    </footer>
  )
}

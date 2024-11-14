import React from 'react'
import cn from "classnames";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { setColor } from '../helpers/setColor';
import launderItemSrc from "../images/launder-item.svg";



function AccordionItem({ slug, link }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [status, setStatus] = React.useState({ text: "", color: "", disabled: true });

  React.useEffect(() => {
    setIsLoading(true);

    fetch(`${process.env.REACT_APP_DOMAIN}/api/washing_machine/${slug.toLowerCase()}/status`)
      .then(res => res.json())
      .then(res => setColor(res, setStatus))
      .catch(err => setColor({}, setStatus))
      .finally(() => setIsLoading(false));
  }, [])

  const buttonClasses = cn({
    "btn": true,
    "disabled": status.disabled
  })

  return (
    <li className='all-launders__item'>
      <div className="all-launders__item-image">
        <img src={launderItemSrc} alt="" />
        <launder-circle style={{ backgroundColor: status.color }}></launder-circle>
      </div>

      <div className="all-launders__item-title">
        <h3>{slug}</h3>
        {isLoading ? (
          <div className="loader-circle small" style={{ margin: 0 }}></div>
        ) : (
          <launder-status style={{ color: status.color }}>{status.text}</launder-status>
        )}
      </div>

      <Link to={link} className={buttonClasses}>Перейти</Link>
    </li>
  )
}

AccordionItem.propTypes = {
  slug: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default AccordionItem
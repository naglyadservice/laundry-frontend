import React from 'react'
import cn from "classnames";
import PropTypes from "prop-types";

import AccordionItem from './AccordionItem';
import downArrowSrc from "../images/down-arrow.svg";



function Accordion({ groupLabel, groupItems }) {
  const [isOpened, setIsOpened] = React.useState(true);

  const itemClasses = cn({
    'all-launders__accordion-item': true,
    'opened': isOpened
  })

  return (
    <div className={itemClasses}>
      <div className="all-launders__accordion-title" onClick={() => setIsOpened(!isOpened)}>
        <h2>{groupLabel}</h2>
        <img src={downArrowSrc} alt="" />
      </div>

      <div className="all-launders__accordion-body">
        <hidden-content>
          <ul className="all-launders__accordion-content">
            {groupItems.map((item, index) => (
              <AccordionItem
                key={index}
                slug={item.slug}
                link={`https://laundry.iotapps.net/wm/${item.slug}`}
              />
            ))}
          </ul>
        </hidden-content>
      </div>
    </div>
  )
}

Accordion.propTypes = {
  groupLabel: PropTypes.string.isRequired,
  groupItems: PropTypes.array.isRequired
}

export default Accordion
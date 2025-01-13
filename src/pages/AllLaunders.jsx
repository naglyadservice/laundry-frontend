import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner';
import Error from './Error';
import Accordion from '../components/Accordion';
import { fetchAllLaunders } from '../redux/all-launders';
import { fetchInfo } from '../redux/washer-redux.async';



function AllLaunders() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector(store => store.allLaunders);

  React.useEffect(() => {
    dispatch(fetchInfo('k4'));
    dispatch(fetchAllLaunders(slug));
  }, [])

  if (isLoading) return <Spinner />;

  if (isError) return <Error title="Сторінку не знайдено" />;

  const groupedLaundersObjects = (data.washing_machines) && [...data.washing_machines]
    .reduce((accum, item) => {
      let label = item.group?.label ?? 'null';

      accum[label] = accum[label] ?? [];
      accum[label].push(item);

      return accum;
    }, {});

  const groupedLaundersArrays = (groupedLaundersObjects) && Object
    .keys(groupedLaundersObjects)
    .map((key) => {
      return {
        label: key,
        items: groupedLaundersObjects[key]
      }
    });

  return (
    <div className="wrapper">
      <Header />

      <div className="container" style={{ flexGrow: 1 }}>
        <main>
          <section className="all-launders">
            <div className="all-launders__top">
              {data?.location?.label && <h1>{data.location.label}</h1>}
              {data?.location?.address && <p>{data.location.address}</p>}
            </div>

            <div className="all-launders__accordion">
              {groupedLaundersArrays?.map((launders, index) => (
                <Accordion
                  key={index}
                  groupLabel={launders.label === "null" ? "Інше" : launders.label}
                  groupItems={launders.items}
                />
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default AllLaunders
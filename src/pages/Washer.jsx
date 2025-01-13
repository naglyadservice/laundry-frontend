import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';

import { setColor } from '../helpers/setColor';
import { fetchInfo, fetchStatus } from '../redux/washer-redux.async';

import Spinner from "../components/Spinner"
import RangeLayout from '../components/RangeLayout';
import Error from './Error';
import OoopsError from './OoopsError';



export default function Washer() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const info = useSelector(store => store.washer);

  const [status, setStatus] = React.useState({ text: "", color: "", disabled: true });

  React.useEffect(() => {
    dispatch(fetchInfo(slug));
    dispatch(fetchStatus(slug));
  }, [])

  React.useEffect(() => {
    if (typeof info.status === "object") return;
    setColor(info, setStatus)
  }, [info])

  console.log(info.status)

  // ---------------------

  if (info.isLoading) return <Spinner />;

  if (info.isError) return <OoopsError />;

  return (
    <ErrorBoundary fallback={<Error title="Сталася помилка, зверніться до адміністрації" />}>
      <RangeLayout status={status} />
    </ErrorBoundary>
  )
}

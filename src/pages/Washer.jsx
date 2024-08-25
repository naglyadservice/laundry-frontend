import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setColor } from '../helpers/setColor';
import { fetchInfo, fetchPayment } from '../redux/washer-redux';

import Spinner from "../components/Spinner"
import RangeLayout from '../components/RangeLayout';

export default function Washer() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const info = useSelector(store => store.washer);
  const [status, setStatus] = React.useState({ text: "", color: "", disabled: true });
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchInfo(slug));
    dispatch(fetchPayment(slug));
  }, [])

  React.useEffect(() => {
    console.log(info)
    setColor(info.payment, setStatus);
  }, [info]);

  // ---------------------

  if (info.isLoading) return <Spinner />;

  if (info.isError && info.info === 404) return navigate("/error404");

  if (info.isError && info.info === 500) return navigate("/error500");

  return <RangeLayout data={info} status={status} />
}

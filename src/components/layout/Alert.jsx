import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  // get the alert sate  , sestructure it
  // basicly we get alert object
  const { alert } = useContext(AlertContext);

  // if its not null then display its
  return (
    alert !== null && (
      <p className="flex alert items-start mb-4 space-x-2">
        {/* if alert is error  */}
        {alert.type == 'error' && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
          </svg>
        )}
        {/* Not error */}
        <p className="flex-1 text-base font-semibold leading-7 text-white ">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );

  return <div className="alert w-full">alert</div>;
}

export default Alert;

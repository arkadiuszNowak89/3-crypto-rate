import { FaArrowUp, FaArrowDown, FaArrowsAltH } from 'react-icons/fa';

export function getBalancedRate(rate, x) {
  if (x > 0)
    return (
      <span className='rate-up'>
        {rate} <FaArrowUp />
      </span>
    );
  else if (x < 0)
    return (
      <span className='rate-down'>
        {rate} <FaArrowDown />
      </span>
    );
  else
    return (
      <span className='rate-same'>
        {rate} <FaArrowsAltH />
      </span>
    );
}

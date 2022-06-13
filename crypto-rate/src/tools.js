import { FaArrowUp, FaArrowDown, FaArrowsAltH } from 'react-icons/fa';

export function getBalancedRate(r, x) {
  if (x > 0)
    return (
      <span className='rate-up'>
        {r} <FaArrowUp />
      </span>
    );
  else if (x < 0)
    return (
      <span className='rate-down'>
        {r} <FaArrowDown />
      </span>
    );
  else
    return (
      <span className='rate-same'>
        {r} <FaArrowsAltH />
      </span>
    );
}

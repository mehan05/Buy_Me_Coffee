/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Memo.css'; // Import the CSS file

const Memo = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const msgMemo = async () => {
      const msg = await contract.getMemo();
      setMemos(msg);
      console.log(msg);
    };
    contract && msgMemo();
  }, [contract]);

  return (
    <div className="memo-container">
      {memos.map((memo, index) => {
        return (
          <div key={index} className="memo-item">
            {/* <p className="memo-separator">--------------------------------------------------------------------------------------------------</p> */}
            <p className="memo-detail memo-name">Name: {memo.name}</p>
            <p className="memo-detail memo-message">Message: {memo.message}</p>
            <p className="memo-detail">Time & Date: {new Date(memo.timeStamp * 1000).toLocaleString()}</p>
            <p className="memo-detail">From Address: {memo.from}</p>
            {/* <p className="memo-separator">--------------------------------------------------------------------------------------------------</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Memo;

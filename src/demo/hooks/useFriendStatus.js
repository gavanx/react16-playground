/**
 * Created by gavan(guoming3@xiaomi.com) on 2019-11-11.
 */
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

const title = 'useFriendStatus Demo'

export default props => {
  const isOnline = useFriendStatus(props.id);
  return <div>
    <b>{title}</b>-{isOnline}
  </div>
}

function useFriendStatus(friendID = 5) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    console.log('ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)')
    return () => {
      console.log('ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)')
    };
  });

  return isOnline;
}

import ProfileCard from "./components/Profile/Profile";
import userData from "./userData.json";

import FriendsList from "./components/FriendList/FriendList";
import friendsData from "./friends.json";

import Transactions from "./components/TransactionHistory/TransactionHistory";
import transactionData from "./transactions.json";

const MainApp = () => {
  return (
    <div>
      <ProfileCard
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friendsData} />
      <Transactions items={transactionData} />
    </div>
  );
};

export default MainApp;

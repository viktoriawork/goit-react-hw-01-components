// Модули
import React from 'react';

// Компоненты
import Profile from "./components/social-profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


// json
// import user from "./components/social-profile/user.json";
// import statisticalData from "./components/statistics/statistical-data.json";
// import friends from './components/FriendList/friends.json';
// import transactions from './components/TransactionHistory/transactions.json';

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";


const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                url={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
            <Statistics
                title='Upload stats'
                stats={statisticalData}   
            />
            <Statistics
                stats={statisticalData}   
            />
            <FriendList
                friends={friends}
            />
            <TransactionHistory
            transactions={transactions}
            />
        </div>
    );
};

export default App;
import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friendCard from "./components/FriendCard";

import friends from "./friends.json";
const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <SpongeBobCard />
    <MrKrabsCard />
    <SquidwardCard />
  </Wrapper>
);

export default App;

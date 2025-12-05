// import MyFirstComponent from "./MyFirstComponent";
import ReactFacts from "./ReactFacts";
import Excitement from "./Excitement";
import Navbar from "./Components/Navbar";
import MyMain from "./Components/MyMain";
import HeaderTravel from "./TravelJournal/HeaderTravel";
import Entry from "./TravelJournal/Entry";
import MyJokes from "./Jokes/MyJokes";
import fuji from "./TravelJournal/Mt._Fuji.jpg"
import PracticeMap from "./PracticeMap";
import RenderArrays from "./RenderArrays";
import JokesData from "./Jokes/JokesData";
function App() {
    const jokes = JokesData.map((joke)=> {
        return <MyJokes setup={joke.setup} punchline={joke.punchline} />
});

return(
<>
{jokes}

{/* <RenderArrays/> */}
{/* <PracticeMap /> */}
{/* <PracticeMap />
<HeaderTravel/>
<Entry src={fuji} alt="Mount Fuji"
title="Mount Fuji"
date="12 Jan, 2021 - 24 Jan, 2021"
country="JAPAN"
description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707-1708. Mount Fuji is a popular destination for tourists and climbers, known for its symmetrical cone shape and cultural significance."


/> */}

</>
);
}
export default App

/*
<MyJokes serial={1} isItFunny={true} setup="Why did the scarecrow win an award?" punchline="Because he was outstanding in his field!" />
<MyJokes serial={2} isItFunny={true} setup="Why don't scientists trust atoms?" punchline="Because they make up everything!" />
<MyJokes serial={3} isItFunny={true} setup="Why did the bicycle fall over?" punchline="Because it was two-tired!" />
<MyJokes serial={4} isItFunny={true} setup="What do you call fake spaghetti?" punchline="An impasta!" />
<MyJokes serial={5} isItFunny={true} setup="Why did the math book look sad?" punchline="Because it had too many problems." />
<MyJokes serial={6} isItFunny={true} punchline="I told my wife she was drawing her eyebrows too high. She looked surprised." />
<MyJokes serial={7} isItFunny={true} punchline="I threw a boomerang a few years ago. I now live in constant fear." />
<MyJokes serial={8} isItFunny={true} punchline="Why don’t skeletons fight each other? They don’t have the guts." />
<MyJokes serial={9} isItFunny={true} punchline="What do you call cheese that isn't yours? Nacho cheese." />*/
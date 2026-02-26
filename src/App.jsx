import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Guild } from "./components/guild";
import { Member } from "./components/member";
import { MemberForm } from "./components/memberForm";
import { GuildForm } from "./components/guildForm";

const App = () => (
  <Router>
    <div className="bg-[#ECEAE0] w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guilds" element={<Guild />} />
        <Route path="/members" element={<Member />} />
          <Route path="/guilds/:guildId" element={<GuildForm />} />
          <Route path="/members/:memberId" element={<MemberForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
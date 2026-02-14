import "./App.scss";
import BooksLogo from "./assets/icons/Audiobookshelf_Logo.svg.png";
import ServerMapLogo from "./assets/icons/dynmap.webp";
import MovieLogo from "./assets/icons/jellyfin.png";
import MCServerLogo from "./assets/icons/minecraft.svg";
import NGINX from "./assets/icons/nginx-proxy-manager.webp";
import RequestLogo from "./assets/icons/overseerr-logo.svg";
import Proxmox from "./assets/icons/proxmox-light.svg";
import AdminPanel from "./assets/icons/pterodactyl-logo.png";
import TrueNAS from "./assets/icons/truenas.svg";
import { CardV2 } from "./components/cardV2";
import { MinecraftCard } from "./components/cardV2/minecraft";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const App = () => {
  return (
    <div className="MainContainer">
      <div className="MainContainer__heading">
        <h2>Josh & Nathan's</h2>
        <h1>Family Media Hub</h1>
        <p>Your gateway to movies, shows, books and more!</p>
      </div>
      <div className="Hr" />
      <div className="MainContainer__services">
        <CardV2
          title="Movies & Shows"
          link="https://media.joshandnathan.au/"
          heartbeat="https://media.joshandnathan.au/"
          icon={<img src={MovieLogo} />}
          className="movies"
        />
        <CardV2
          title="Movie Requests"
          link="https://request.joshandnathan.au/"
          heartbeat="https://request.joshandnathan.au/"
          icon={<img src={RequestLogo} />}
          className="requests"
        />
        <CardV2
          title="Audiobooks"
          link="https://audiobook.joshandnathan.au/"
          heartbeat="https://audiobook.joshandnathan.au/"
          icon={<img src={BooksLogo} />}
          className="audiobooks"
        />
      </div>
      <h3>Game Services</h3>
      <p>Available Game Servers</p>
      <div className="MainContainer__services">
        <MinecraftCard
          title="Minecraft Server"
          icon={<img src={MCServerLogo} />}
          link="https://mc.joshandnathan.au"
          className="minecraft"
        />
        <CardV2
          title="Minecraft Map"
          icon={<img src={ServerMapLogo} />}
          link="https://mc.joshandnathan.au/"
          heartbeat="https://mc.joshandnathan.au/"
          className="minecraft-map"
          hasOverlay
        />
        <CardV2
          title="MC Admin Panel"
          icon={<img src={AdminPanel} />}
          link="https://gamepanel.joshandnathan.au/server/f3b99e77"
          heartbeat="https://gamepanel.joshandnathan.au/server/f3b99e77"
          className="minecraft-panel"
        />
      </div>
      <h3>Internal Tools</h3>
      <p>Admin Tools for Managing Network / Home Server</p>
      <div className="MainContainer__services">
        <CardV2
          title="Proxmox"
          icon={<img src={Proxmox} />}
          link="https://proxmox.joshandnathan.au"
          heartbeat="https://proxmox.joshandnathan.au"
          className="proxmox"
        />
        <CardV2
          title="TrueNAS"
          icon={<img src={TrueNAS} />}
          link="https://nas.joshandnathan.au"
          heartbeat="https://nas.joshandnathan.au"
          className="truenas"
        />
        <CardV2
          title="NGINX Proxy Manager"
          icon={<img src={NGINX} />}
          link="https://proxy.joshandnathan.au"
          heartbeat="https://proxy.joshandnathan.au"
          className="nginx"
        />
      </div>
    </div>
  );
};

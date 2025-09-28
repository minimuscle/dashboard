import NginxIcon from "./assets/nginx.svg";
import ProxmoxIcon from "./assets/proxmox.svg";
import { Card } from "./components/card";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const App = () => {
	return (
		<div className="min-h-dvh bg-radial-[at_50%_-50%] from-indigo-950 to-gray-950 to-75%">
			<div className="flex w-full max-w-7xl m-auto flex-col items-center justify-center">
				<h2 className="text-4xl pt-10 center text-center">Josh & Nathan's</h2>
				<h1 className="text-8xl font-black text-center">Media Hub</h1>
				<p className="text-xl pt-5 text-center">
					Your gateway to movies, shows, books and more!
				</p>
				<div className="w-full pt-10 px-3 flex gap-10 flex-wrap justify-center">
					<Card
						title="Movies & Shows"
						description="via Jellyfin"
						url="https://media.joshandnathan.au/"
						linkDescription="media.joshandnathan.au"
						icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAq0lEQVR4nO2WsQ3CMBBFryADsAgDoCg0FETskVkyEnuwQaDKBlQPEYUGW3a4+CJE/Eqf/N/pZFsWyawG4AzcseMG1D7xq2BN5xMP+Na0xPJXLrZGlOI9sAMuycUSaOajdgSuUyWkEo/1DdAA/aLiN8AWaIGHWhzC2eRmVMEA7MQHtVgCzZiOWr4QA8Xih4vU1ylCafaAWCOaUc+RkMW/8PWpjeUdcHLEmb/lCaBUEFtK6GSWAAAAAElFTkSuQmCC"
						gradient1="fuchsia"
						gradient2="indigo"
					/>
					<Card
						title="Show Requests"
						description="via Jellyseer"
						url="https://request.joshandnathan.au/"
						linkDescription="request.joshandnathan.au"
						icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJ0lEQVR4nO2VS07DMBBAnRVwA8IlgEo9R3qqdtHeAlUsCcdo+BQuQXuKPjTCUUdW4pjE9qpPihRF9jxlxjM25kIkgI08uaUF8AMc5D2neM6ZeQ5hYaUfSvxuv037c+AVqHtqeqSf4+iaA6UKVI4Qr8eKKxVo4Um1pLflbXKqgaUKuMp2uIBGBWw86wrbStPbCZg5NTsBD571m9E1bQGugc+OA/MN3JgU8Cd99pzWrayJLZ0BXwyzBx6niErbMkvnIIXS2L2V2+dDEyk2dYi4TiB+GRSrVC9kOAC7f0pOds/KxghLdRfSpz1t5CK30b1J0E5bj/QJuIoqbZHAzh2bfoC0SJ921DRuevtwentnckHgtZhCXClxlVN8q8R32cRqwoVNpAvmzC9QCKM/dCAmqAAAAABJRU5ErkJggg=="
						gradient1="red"
						gradient2="fuchsia"
					/>
					<Card
						title="Audiobooks & eBooks"
						description="via AudioBookShelf"
						url="https://books.joshandnathan.au/"
						linkDescription="books.joshandnathan.au"
						icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVR4nO2UQQ7AIAgE+Qz//0NJ37U9eKqFWGlNtTBHwIxsokRJKADs0JHRYpPpxfCkhgJXNe4U918e72w8Rgw9SnmUGu6JXf3lxWzF+NuNL6RYg1I8i5irGjve8VpfJofb+BOxGGe2xkyrf5pJYnAAfPK4W6XkRYkAAAAASUVORK5CYII="
						gradient1="cyan"
						gradient2="blue"
					/>
				</div>
				<h3 className="pt-20 text-4xl text-center">Game Servers</h3>
				<p className="text-center">
					Listed here are the servers currently online for games
				</p>
				<div className="w-full pt-5 px-3 flex gap-10 flex-wrap justify-center">
					<Card
						url="mc.joshandnathan.au"
						noLink
						title="Minecraft Server"
						description="1.21.8 - Vanilla Survival"
						linkDescription="mc.joshandnathan.au"
						icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAX0lEQVR4nO2QQRIAIQjD+P+n450ZB3XXKmruNC1mjx0h4BwxjcG/F2KVuDf4HHGNqED1MJ0YFywrgFpMIGwttL+YwdfmE/cG5RXzMUC21CNfOgxqMdcs9SKZcLn4YRMp+2Vtr/m+pOoAAAAASUVORK5CYII="
						gradient1="lime"
						gradient2="green"
					/>
					<Card
						title="Minecraft Server Map"
						description="Interactive Server Map"
						url="http://mc.joshandnathan.au:8100/"
						linkDescription="mc.joshandnathan.au:8100"
						icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVR4nO2VsUodQRSG96oQSNJYGJSYV5BACrWX6FPYiF1MGyKW0UqfwAcIBLUS0yQQjKJiUOEGFBG0sUiVoFY2Xzjcf3AcZ+fO3nghkPyw3GXOv+fbc+bunKL4r79RwAPgNbANXOmy+ymLtQv6FDigXPvmaUelBwmoD7+/ymm0N1ev/hTWaZfud4Lkq2p9P7AWxLb0zItg/WsOcBw4Bh5q7TJI0u/5nwWxC613h60oEtAOYN3zOvCvCuCfkbxNwaMNCz9UdYfWN7mtNbXZoB+btdQFUuBleaaD9UnyNVEJDPQB17r6Ivu+lQHdcH/IKuBpxZdK4k+afMt7QE/wTJe2LAk+aYR5GTU0PI+BFe7KtuhRxO93ab0s6aEM42Vg+WrAey+h3ddKvEfyLFr1ZQldS45j+xR4n3vggYTPz9lVZuqUIbfqz8Cnsmor5eTmDQ+Le1JWTiImYE5zd7ZF8LBynqVMR2FbvHP6okXwgp5fSJlOZRr21mYFf9ci+Ew5h1Km+aZvVx3sVEuZBmU6t5Mq4bNT7BtQB0ZywEXGZ7Irbz0GF9Rivj7YpAp8vcDbLLDJzttI4pi+AzP6x6PfN8CYjlAbNk5fihwJ7iqPadd1QzPZKg51rRcYdXO9LbK9VqdONOlujdbin9dvmTzOLxJbklUAAAAASUVORK5CYII="
						gradient1="teal"
						gradient2="emerald"
					/>
				</div>
				<h3 className="pt-20 text-4xl text-center">Internal Tools</h3>
				<p className="text-center">
					These tools are only accessible when on Josh & Nathan's home network
				</p>
				<div className="w-full pt-5 px-3 flex gap-10 flex-wrap justify-center">
					<Card
						title="Server Host"
						description="via Proxmox"
						url="https://192.168.1.10:8006/"
						linkDescription="192.168.1.10:8006"
						icon={ProxmoxIcon}
						gradient1="orange"
						gradient2="red"
					/>
					<Card
						title="NAS Storage"
						description="via TrueNAS"
						url="https://192.168.1.24/ui"
						linkDescription="192.168.1.24"
						icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZUlEQVR4nO3TQQqAMAxE0ZxLdG/x/hdovceXLtwJNiXoIvPWgQ+BMZN0gAM4idOAMhLuh9HqSPi2AGtU2RzhHt2+DDd+enUJjldgfw3ng3YcxBxh7XiWdvxMOyaIOcLa8SztOKkLAhgV2UjIV3IAAAAASUVORK5CYII="
						gradient1="cyan"
						gradient2="teal"
					/>
					<Card
						title="Proxy Manager"
						description="via NGINX Proxy Manager"
						url="http://192.168.1.106:81/"
						linkDescription="192.168.1.106:81"
						icon={NginxIcon}
						gradient1="yellow"
						gradient2="orange"
					/>
				</div>
			</div>
		</div>
	);
};

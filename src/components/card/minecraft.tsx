import { useEffect, useState } from "react";

import type { Card } from ".";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const MinecraftCard: Card = ({
	title,
	description,
	gradient1,
	icon,
	linkDescription,
	gradient2,
}) => {
	/***** STATE *****/
	const [isOnline, setIsOnline] = useState(false);
	const [onlinePlayers, setOnlinePlayers] = useState({ current: 0, max: 0 });

	/***** HOOKS *****/
	const getServerStatus = async () => {
		const response = await fetch(
			"https://mcapi.us/server/status?ip=mc.joshandnathan.au",
		);
		const successResponse = await response.json();

		setIsOnline(successResponse.online);
		setOnlinePlayers({
			current: successResponse.players.now,
			max: successResponse.players.max,
		});
	};

	/***** EFFECTS *****/
	// biome-ignore lint/correctness/useExhaustiveDependencies: No need
	useEffect(() => {
		getServerStatus();
	}, []);

	/***** RENDER *****/
	return (
		<div className="max-w-90 w-full h-37 p-5 relative flex items-center gap-5 z-1">
			<div
				className="absolute top-0 left-0 h-full w-full rounded-2xl -z-1 bg-gradient-to-br opacity-75 from-(--tw-gradient-from) to-(--tw-gradient-to)"
				style={{
					// @ts-expect-error This is expected
					"--tw-gradient-from": `var(--tw-color-${gradient1}-500, ${gradient1})`,
					"--tw-gradient-to": `var(--tw-color-${gradient2}-500, ${gradient2})`,
				}}
			/>
			<div className="absolute top-1 right-3 flex items-baseline gap-2">
				<p className={isOnline ? "" : "opacity-50"}>
					{isOnline ? "Online" : "Offline"}
				</p>
				<div
					className={`rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"} h-2.5 w-2.5`}
				/>
				{isOnline && (
					<p>
						{onlinePlayers.current}/{onlinePlayers.max}
					</p>
				)}
			</div>
			<div
				style={{
					// @ts-expect-error This is expected
					"--tw-gradient-from": `var(--tw-color-${gradient1}-500, ${gradient1})`,
					"--tw-gradient-to": `var(--tw-color-${gradient2}-500, ${gradient2})`,
				}}
				className="flex items-center justify-center bg-linear-to-br rounded-2xl w-[50px]! h-[50px] from-(--tw-gradient-from) to-(--tw-gradient-to)"
			>
				<img
					src={icon}
					alt={`${title} icon`}
					className="text-white w-[30px] h-[30px]"
				/>
			</div>
			<div className="flex items-center justify-between w-full flex-1">
				<div className="flex flex-col">
					<h4 className="text-xl font-bold">{title}</h4>
					<p className="opacity-50">{description}</p>
				</div>
			</div>
			<p className="absolute bottom-1.5 right-3 opacity-50">
				{linkDescription}
			</p>
		</div>
	);
};

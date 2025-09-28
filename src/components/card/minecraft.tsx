import { useEffect, useState } from "react";
import type { Card } from ".";

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
// Minecraft status payload → TypeScript types

// Common helpers
type UUID = `${string}-${string}-${string}-${string}-${string}`;
type UnixTimestampString = `${number}`;
type DataUrlPng = `data:image/png;base64,${string}`;

// Minecraft text formatting colours (Bedrock/Java style)
type MinecraftColor =
	| "black"
	| "dark_blue"
	| "dark_green"
	| "dark_aqua"
	| "dark_red"
	| "dark_purple"
	| "gold"
	| "gray"
	| "dark_gray"
	| "blue"
	| "green"
	| "aqua"
	| "red"
	| "light_purple"
	| "yellow"
	| "white";

// MOTD JSON bits
type MotdTextStyles = {
	bold?: boolean;
	italic?: boolean;
	underlined?: boolean;
	strikethrough?: boolean;
	obfuscated?: boolean;
};

type MotdTextChunk = {
	text: string;
	color?: MinecraftColor;
} & MotdTextStyles;

// The MOTD "extra" array can contain formatted chunks AND raw newline strings.
type MotdExtraPart = MotdTextChunk | "\n" | string;

type MotdJson = {
	text: string; // often empty when "extra" is used
	extra?: MotdExtraPart[]; // optional in some server libs
};

// Players section
type PlayerSample = {
	name: string;
	id: UUID;
};

type Players = {
	max: number;
	now: number;
	sample?: PlayerSample[]; // some servers omit this when empty
};

// Server section
type ServerInfo = {
	name: string; // e.g., "Paper 1.21.8"
	protocol: number; // e.g., 772
};

// Root payload
export type MinecraftStatus = {
	status: "success" | "error";
	online: boolean;
	motd: string; // plain-text MOTD
	motd_json: MotdJson; // structured MOTD
	favicon?: DataUrlPng; // some APIs omit this; keep optional
	error: string | null;

	players: Players;
	server: ServerInfo;

	last_updated: UnixTimestampString; // looks like seconds-as-string in your sample
	duration: `${number}`; // number-as-string per your sample (e.g., uptime)
};

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
	const [minecraftStatus, setMinecraftStatus] = useState<
		MinecraftStatus | undefined
	>();

	/***** HOOKS *****/
	const getServerStatus = async () => {
		const response = await fetch(
			"https://mcapi.us/server/status?ip=mc.joshandnathan.au",
		);
		const successResponse = await response.json();
		console.log(successResponse);

		setMinecraftStatus(successResponse);
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
				<p className={minecraftStatus?.online ? "" : "opacity-50"}>
					{minecraftStatus?.online ? "Online" : "Offline"}
				</p>
				<div
					className={`rounded-full ${minecraftStatus?.online ? "bg-green-500" : "bg-red-500"} h-2.5 w-2.5`}
				/>
				{minecraftStatus?.online && (
					<p>
						{minecraftStatus.players.now}/{minecraftStatus.players.max}
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

import clsx from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type TailwindBaseColor =
	| "slate"
	| "gray"
	| "zinc"
	| "neutral"
	| "stone"
	| "red"
	| "orange"
	| "amber"
	| "yellow"
	| "lime"
	| "green"
	| "emerald"
	| "teal"
	| "cyan"
	| "sky"
	| "blue"
	| "indigo"
	| "violet"
	| "purple"
	| "fuchsia"
	| "pink"
	| "rose";

type Card = React.FC<{
	url: string;
	title: string;
	icon: string;
	description: string;
	linkDescription: string;
	noLink?: boolean;
	gradient1: TailwindBaseColor;
	gradient2?: TailwindBaseColor;
}>;

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Card: Card = ({
	title,
	description,
	linkDescription,
	icon,
	url,
	gradient1,
	gradient2,
	noLink,
}) => {
	/***** STATE *****/
	const [isOnline, setIsOnline] = useState(false);
	const [isHover, setIsHover] = useState(false);

	/***** FUNCTIONS *****/
	const checkURL = async () => {
		try {
			await fetch(url, { method: "HEAD", mode: "no-cors" });
			return true;
		} catch (e) {
			console.error(e);
			return false;
		}
	};

	/***** EFFECTS *****/
	useEffect(() => {
		checkURL().then((isReachable) => setIsOnline(isReachable));
	});

	/***** RENDER *****/
	const Component = noLink ? "div" : "a";
	return (
		<Component
			href={url}
			target="_blank"
			rel="noreferer noopener"
			className="max-w-90 w-full h-37 p-5 relative flex items-center gap-5 z-1"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div
				className={twMerge(
					clsx(
						"absolute top-0 left-0 h-full w-full rounded-2xl -z-1 bg-gradient-to-br opacity-75 from-(--tw-gradient-from) to-(--tw-gradient-to)",
						{
							"opacity-60": isHover,
						},
					),
				)}
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
				{!noLink && (
					<img
						className="opacity-50"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA50lEQVR4nO3WPUpDQRSA0SEgVnaCYGXhAiy0tEplG5u4B+MmjIuw0i24AMVGSMA1CAmkEjsRRPHIgxd8jpbOfRLybeAww52flJb9p3DjqzHWouB737tCJwLewmOGD4vDVdjHawP+wFGKCINs1S/Yi8LPM3yGzQh4BbcZfofVCHwdDxl+WRyuwg6eM3yQIkKvnu557ziIwofZqp+wHQF36pus2Xih4bPwrcZhNlxv6LZxnI5LoxuYZujFYl6Zfj4Sk2oHSqMnvzyLu6XRbj2186pp7rfx9Tktirb92btuoKOw7+2y9Ad9AgQCGZzIW/lQAAAAAElFTkSuQmCC"
						alt="chevron-right"
					/>
				)}
			</div>
			<p className="absolute bottom-1.5 right-3 opacity-50">
				{linkDescription}
			</p>
		</Component>
	);
};

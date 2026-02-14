import { useEffect, useState } from "react";

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

type CardV2Props = {
  title: string;
  icon: React.ReactNode;
  className?: string;
  link: string;
};

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const MinecraftCard = ({
  title,
  icon,
  className,
  link,
}: CardV2Props) => {
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
    setMinecraftStatus(successResponse);
  };

  /***** EFFECTS *****/
  useEffect(() => {
    getServerStatus();
  }, []);

  /***** RENDER *****/
  return (
    <a href={link}>
      <div className={`Card ${className}`}>
        <div className="minecraft--overlay" />
        <div
          className={`Card__heartbeat Card__heartbeatMinecraft Card__heartbeat--${minecraftStatus?.online ? "online" : "offline"}`}
        >
          {minecraftStatus?.online && (
            <p>
              {minecraftStatus.players.now}/{minecraftStatus.players.max}
            </p>
          )}
        </div>

        {icon}
        <h1>{title}</h1>
      </div>
    </a>
  );
};

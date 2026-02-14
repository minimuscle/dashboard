import { useEffect, useState } from "react";
import "./cardV2.scss";

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type CardV2Props = {
  title: string;
  icon: React.ReactNode;
  className?: string;
  link: string;
  heartbeat?: string;
  hasOverlay?: boolean;
};

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const CardV2 = ({
  title,
  icon,
  className,
  link,
  heartbeat,
  hasOverlay,
}: CardV2Props) => {
  /***** HOOKS *****/
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  /***** FUNCTIONS *****/
  const checkURL = async () => {
    if (!heartbeat) return null;
    try {
      await fetch(heartbeat, { method: "HEAD", mode: "no-cors" });
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

  return (
    <a href={link}>
      <div className={`Card ${className}`}>
        {hasOverlay && <div className="Card__overlay" />}
        {isOnline !== null && (
          <div
            className={`Card__heartbeat Card__heartbeat--${isOnline ? "online" : "offline"}`}
          >
            <p>{isOnline ? "Online" : "Offline"}</p>
          </div>
        )}
        {icon}
        <h1>{title}</h1>
      </div>
    </a>
  );
};

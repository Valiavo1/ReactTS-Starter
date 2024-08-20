import React, { useState, useEffect, ReactElement } from "react";
import Icon from "../Icon/Icon";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../Icon/IconFile";
import { Progress } from "@nextui-org/react";
import {FlashMessageProps} from "../../utils/types/for_components/flash_message_types";
import {ColorType} from "../../utils/types/for_components/color_types";

const FlashMessage: React.FC<FlashMessageProps> = ({ message, type }) => {
  const [colorClass, setColorClass] = useState<ColorType>();
  const [textClass, setTextClass] = useState<string>("");
  const [icon, setIcon] = useState<ReactElement | null>(null);

  useEffect(() => {
    switch (type) {
      case "success":
        setColorClass("success");
        setTextClass("text-success");
        setIcon(<Icon icon={SuccessIcon} />);
        break;
      case "info":
        setColorClass("primary");
        setTextClass("text-primary");
        setIcon(<Icon icon={InfoIcon} />);
        break;
      case "warning":
        setColorClass("warning");
        setTextClass("text-warning");
        setIcon(<Icon icon={WarningIcon} />);
        break;
      case "error":
        setColorClass("danger");
        setTextClass("text-danger");
        setIcon(<Icon icon={ErrorIcon} />);
        break;
      default:
        break;
    }
  }, [type]);

  return (
      <div className="flash-message-container shadow w-full">
        <div className="flash-message flex justify-center w-full shadow-2xl flex-col">
          <div className={`flex items-center max-w-screen-md text-sm justify-center space-x-1 px-5 ${textClass}`}>
            {icon && <div className="mt-0.5">{icon}</div>}
            <p className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap break-all">
              {message}
            </p>
          </div>
          <Progress
              isIndeterminate
              aria-label="Loading..."
              color={colorClass}
              value={100}
              className="max-w mt-5"
              radius="md"
              size="sm"
          />
        </div>
      </div>
  );
};

export default FlashMessage;

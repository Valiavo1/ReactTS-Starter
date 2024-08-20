import React, { ReactElement, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: ReactElement;
}

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  return React.cloneElement(icon, { ...props });
};

export default Icon;

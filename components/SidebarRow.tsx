import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}
function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit items-center space-x-2  px-4 py-3 rounded-full hover:bg-gray-300 transition-all duration-200 group">
      <Icon className="h-6 w-6" />
      <p className="lg:text-xl hidden md:inline-flex group-hover:text-twitter">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;

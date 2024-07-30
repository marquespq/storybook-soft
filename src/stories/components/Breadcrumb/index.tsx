import React from "react";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  className,
}) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-500 mx-2">{separator}</span>}
          {item.url ? (
            <a href={item.url} className="text-blue-600 hover:text-blue-800">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-600">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

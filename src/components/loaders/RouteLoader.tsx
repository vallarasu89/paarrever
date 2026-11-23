import React from 'react';

export const RouteLoader: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 bg-[#FFF9F0]">
      <div className="w-10 h-10 border-2 border-[#F7EAF0] border-t-[#7A1034] rounded-full animate-spin" />
      <span className="sr-only">Loading page content...</span>
    </div>
  );
};

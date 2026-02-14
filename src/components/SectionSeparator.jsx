import React from 'react';

const SectionSeparator = () => {
  return (
    <div className="w-full flex justify-center items-center py-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </div>
  );
};

export default SectionSeparator;
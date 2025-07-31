import React from "react";

const CopyRight = () => {
  return (
    <div className="bg-primary/80 flex items-center justify-between Container py-1">
      <p className="sm:text-sm text-[10px] text-white/85">
        © 2025 Titasweb store. All rights reserved.
      </p>
      <p className="sm:text-sm text-[10px] text-white/85">
        Develop by <span className="cursor-pointer">Titasweb</span>
      </p>
    </div>
  );
};

export default CopyRight;

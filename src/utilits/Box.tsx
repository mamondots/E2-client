const Box = ({ cuntorBtn = true, addcartBtn = true }) => {
  return (
    <div className="flex items-center gap-4 mt-12">
      {cuntorBtn && (
        <button className="px-4 py-2 rounded bg-[red] text-[#fff]">
          first button
        </button>
      )}
      {addcartBtn && (
        <button className="px-4 py-2 rounded bg-[red] text-[#fff]">
          second button
        </button>
      )}
    </div>
  );
};

export default Box;

const SearchedImageItemTemplate = ({data}) => {
  return (
    <>
    <div className="grow flex flex-col py-3 cursor-pointer" onClick={() =>window.open(data.image.contextLink)}>
        <div className="rounded-xl overflow-hidden bg-black h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow-c">
            <img src={data.link} className="h-full w-full object-contain" alt="" />
        </div>
        <div className="text-xs text-[#6e73ba] pt-2 hover:underline">
            {data.displayLink}
        </div>
        <div className="text-sm text-[#3c4043] truncate pt-1 hover:underline">
            {data.title}
        </div>
    </div>
    </>
  );
};

export default SearchedImageItemTemplate;

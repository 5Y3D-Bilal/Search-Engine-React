const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }
  return (
    <div>
      <div className="flex flex-col max-w-[700px] ">
        <div
          className="group cursor-pointer"
          onClick={() => window.open(data.link)}
        >
          <div className="text-sm truncate py-2 text-[#202124] ">
            {data.formattedUrl}
          </div>
          <div className="group-hover:underline text-xl text-blue-700 ">
            {data.title}
          </div>
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] leading-6"
        dangerouslySetInnerHTML={createMarkup(
          `${data.htmlSnippet.slice(0, 100)}...`
        )}
      />
    </div>
  );
};

export default SearchedItemTemplate;

export const SkeletonLoader = () => {
  return (
    <div className="w-full animate-pulse flex flex-col gap-4 font-mono p-5 border border-[#1E202B] bg-[#121319]/40 rounded-lg">
      {/* Label Shimmer */}
      <div className="h-3 w-1/4 bg-[#1E202B] rounded"></div>
      
      {/* Title Shimmer */}
      <div className="h-6 w-3/4 bg-[#1E202B] rounded"></div>
      
      {/* Content Block Shimmer */}
      <div className="h-20 w-full bg-[#1E202B] rounded"></div>
      
      {/* Badges List Shimmer */}
      <div className="flex gap-2 mt-2">
        <div className="h-4 w-12 bg-[#1E202B] rounded"></div>
        <div className="h-4 w-16 bg-[#1E202B] rounded"></div>
        <div className="h-4 w-14 bg-[#1E202B] rounded"></div>
      </div>
    </div>
  );
};

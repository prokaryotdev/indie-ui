//======================================
export const Dot_Loader_v1 = () => {
  const dotStyle = "size-8 bg-zinc-900 rounded-full border-2 shadow-sm transition animate-bounce dark:bg-zinc-50"
  return (
    <div className="flex space-x-2 justify-center items-center">
      {/* Animated bouncing Dots */}
      <div className={`${dotStyle} delay-[200ms]`}></div>
      <div className={`${dotStyle} delay-[100ms]`}></div>
      <div className={`${dotStyle}`}></div>
    </div>
  )
}

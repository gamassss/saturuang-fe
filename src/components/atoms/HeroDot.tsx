import { HeroDotProps } from "@/types/root";

const HeroDot: React.FC<HeroDotProps> = ({top, left, right, bottom, size, bgColor, className}) => {
  return (
    <div
      className={`absolute rounded-full hidden md:block ${className}`}
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        width: size,
        height: size,
        backgroundColor: bgColor,
      }}
    ></div>
  );
}

export default HeroDot;
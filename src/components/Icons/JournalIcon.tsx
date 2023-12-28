import { cx } from "@/utils";
import Image from "next/image";

interface JournalIconProps {
  className?: string
}

function JournalIcon({ className = "" }: JournalIconProps) {
  return (
    <Image 
      className={cx("inline-block ml-1", className)}
      src="/journal.png"
      alt="Journal Icon"
      width={32}
      height={32}
    />
  );
}

export default JournalIcon;
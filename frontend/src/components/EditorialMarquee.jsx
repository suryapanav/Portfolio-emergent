import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";
import { MARQUEE_ITEMS } from "../data";

export const EditorialMarquee = () => (
  <div className="py-12 border-y border-[#E5E5DF] bg-[#EBEBE5]/50" data-testid="editorial-marquee">
    <Marquee speed={32} gradient={false} autoFill>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8 mx-8 font-display font-bold text-2xl md:text-3xl tracking-tighter text-[#1A1A1A]">
          {item}
          <Asterisk size={22} className="text-[#D8B4E2]" />
        </span>
      ))}
    </Marquee>
  </div>
);

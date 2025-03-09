// import { Button } from "@/components/ui/button";
import React from "react";
import './tailwind.css';
import './PanicButton.css';

export default function PanicButton() {
  return (
    // <div className="relative w-[264px] h-[210px]">
    //   <button
    //     className="w-full h-full rounded-full bg-red-600 hover:bg-red-700 border-2 border-red-800 shadow-lg flex items-center justify-center p-0 relative overflow-hidden"
    //     onClick={() => console.log("Panic button pressed!")}
    //   >
    //     <div className="absolute w-[203px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[64px] tracking-[-1.09px] leading-[normal] whitespace-nowrap">
    //       PANIC
    //     </div>
    //     {/* Create 3D effect with pseudo-elements via tailwind classes */}
    //     <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500 to-red-700 opacity-50 pointer-events-none"></div>
    //     <div className="absolute bottom-0 w-full h-1/3 bg-black/10 rounded-b-full pointer-events-none"></div>
    //   </button>
    // </div>
    <div class="PANIC-BUTTON">
      <div class="p-BUTTON">
        <div class="overlap-group"><div class="text-wrapper">PANIC</div></div>
      </div>
    </div>
  );
}

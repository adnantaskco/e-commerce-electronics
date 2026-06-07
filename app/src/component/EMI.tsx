"use client";

import { CreditCard, Clock, ShieldCheck } from "lucide-react";

export default function EMIBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-white/5 to-white/10 ">
      
      <div className=" mx-auto px-4 sm:px-6 lg:px-28 md:px-28">
        
        {/* Top Text */}
        {/* <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Easy EMI Facilities Available
          </h2>
          <p className=" text-sm md:text-base">
            Buy now and pay later with flexible EMI options from top banks in Bangladesh
          </p>
        </div> */}

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-primary/10 to-white border border-primary rounded-xl p-6 text-center hover:scale-105 transition">
            <CreditCard className="mx-auto mb-3 text-primary" size={40} />
            <h3 className="font-semibold text-lg">0% Interest EMI</h3>
            <p className="text-zinc-900 text-sm mt-2">
              Pay in easy monthly installments without extra cost
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-primary/5 border border-primary/80 rounded-xl p-6 text-center hover:scale-105 transition">
            <Clock className="mx-auto mb-3 text-primary" size={40} />
            <h3 className="font-semibold text-lg">Flexible Tenure</h3>
            <p className="text-zinc-900 text-sm mt-2">
              Choose 3, 6, 9 or 12 months EMI plan
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-white to-primary/10 border border-primery rounded-xl p-6 text-center hover:scale-105 transition">
            <ShieldCheck className="mx-auto mb-3 text-primary" size={40} />
            <h3 className="font-semibold text-lg">Trusted Banks</h3>
            <p className="text-zinc-900 text-sm mt-2">
              Supported by leading banks & secure payment system
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
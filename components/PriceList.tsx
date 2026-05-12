
import React from 'react';
import { Banknote, TrendingUp, Calendar } from 'lucide-react';

interface PriceRow {
  title: string;
  g2_5: string;
  g4: string;
  g6: string;
  g10: string;
  g16: string;
  g25: string;
  g40: string;
  g65: string;
}

const PRICE_DATA: PriceRow[] = [
  { title: 'نظارت سامانه گاز روکار', g2_5: '24,000,000', g4: '28,000,000', g6: '31,000,000', g10: '34,000,000', g16: '-', g25: '-', g40: '-', g65: '-' },
  { title: 'طراحی سامانه گاز روکار', g2_5: '10,800,000', g4: '12,600,000', g6: '13,950,000', g10: '15,300,000', g16: '-', g25: '-', g40: '-', g65: '-' },
  { title: 'نظارت سامانه گاز توکار', g2_5: '34,000,000', g4: '39,000,000', g6: '44,000,000', g10: '48,000,000', g16: '-', g25: '-', g40: '-', g65: '-' },
  { title: 'طراحی سامانه گاز توکار', g2_5: '15,300,000', g4: '17,550,000', g6: '19,800,000', g10: '21,600,000', g16: '-', g25: '-', g40: '-', g65: '-' },
  { title: 'بازرسی آنکال و منقضی', g2_5: '10,800,000', g4: '12,600,000', g6: '13,950,000', g10: '15,300,000', g16: '-', g25: '-', g40: '-', g65: '-' },
];

export const PriceList: React.FC = () => {
  return (
    <div className="space-y-4 lg:space-y-6 max-w-4xl mx-auto">
      
      <div className="bg-blue-600 rounded-2xl p-4 lg:p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg shadow-blue-100">
         <div className="flex items-center gap-3 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
               <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div>
               <h3 className="text-sm lg:text-lg font-black">تعرفه‌های مصوب 1405</h3>
               <p className="text-blue-100 text-[9px] lg:text-xs mt-0.5">بروزرسانی ابلاغیه سازمان نظام مهندسی آذربایجانغربی</p>
            </div>
         </div>
         <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-bold text-[10px]">اجرا از 15 اردیبهشت</span>
         </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-[11px] lg:text-sm text-right">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-4 py-3 lg:px-6 lg:py-4 font-black text-slate-400 text-[9px] uppercase tracking-wider sticky right-0 bg-slate-50 z-10 border-l border-slate-100 min-w-[140px]">شرح خدمات</th>
                <th className="px-3 py-3 lg:px-4 lg:py-4 font-black text-slate-400 text-[9px] uppercase tracking-wider text-center">G2.5</th>
                <th className="px-3 py-3 lg:px-4 lg:py-4 font-black text-slate-400 text-[9px] uppercase tracking-wider text-center">G4</th>
                <th className="px-3 py-3 lg:px-4 lg:py-4 font-black text-slate-400 text-[9px] uppercase tracking-wider text-center">G6</th>
                <th className="px-3 py-3 lg:px-4 lg:py-4 font-black text-slate-400 text-[9px] uppercase tracking-wider text-center">G10</th>
                <th className="px-3 py-3 lg:px-4 lg:py-4 font-black text-slate-400 text-[9px] uppercase tracking-wider text-center">G16+</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {PRICE_DATA.map((row, index) => (
                <tr key={index} className="group hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2.5 lg:px-6 lg:py-3.5 font-bold text-slate-700 sticky right-0 bg-white group-hover:bg-slate-50 z-10 border-l border-slate-100">{row.title}</td>
                  <td className="px-3 py-2.5 lg:px-4 lg:py-3.5 text-center font-mono font-medium text-slate-600 ltr" dir="ltr">{row.g2_5}</td>
                  <td className="px-3 py-2.5 lg:px-4 lg:py-3.5 text-center font-mono font-medium text-slate-600 ltr" dir="ltr">{row.g4}</td>
                  <td className="px-3 py-2.5 lg:px-4 lg:py-3.5 text-center font-mono font-medium text-slate-600 ltr" dir="ltr">{row.g6}</td>
                  <td className="px-3 py-2.5 lg:px-4 lg:py-3.5 text-center font-mono font-medium text-slate-600 ltr" dir="ltr">{row.g10}</td>
                  <td className="px-3 py-2.5 lg:px-4 lg:py-3.5 text-center font-mono font-bold text-blue-600 ltr" dir="ltr">{row.g16}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-center text-[9px] font-black text-slate-400 uppercase tracking-widest">مبالغ به واحد ریال می‌باشد</div>
      <div className="text-center text-[9px] font-black text-slate-400 uppercase tracking-widest">مبالغ بازرسی و طراحی روستایی با اعمال ضریب 1.25 می باشد</div>
    </div>
  );
};

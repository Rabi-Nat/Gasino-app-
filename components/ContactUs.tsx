
import React from 'react';
import { Mail, MessageSquare, Send, Heart, ExternalLink } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const emails = ['rabi.nateghi@gmail.com'];

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      
      <div className="bg-white rounded-[3rem] premium-shadow border border-slate-200/60 p-10 lg:p-12 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
         
         <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-inner border border-blue-100">
               <MessageSquare className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-slate-800 mb-6">ارتباط با ما</h3>
            <p className="text-slate-500 font-medium leading-relaxed text-lg">
               این پلتفرم با هدف ساده‌سازی محاسبات مهندسی طراحی شده است. 
               هرگونه ایده یا گزارش خطا، گامی است به سوی کمال این ابزار.
            </p>
         </div>
      </div>

                    <div className="grid md:grid-cols-1 max-w-lg mx-auto gap-6">
        {emails.map((email, idx) => (
          <a 
            key={idx}
            href={`mailto:${email}`} 
            className="bg-white rounded-[2.5rem] p-8 border border-slate-200/60 shadow-sm group hover:border-blue-400 hover:scale-[1.02] transition-all duration-500 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Mail className="w-7 h-7" />
               </div>
               <span className="font-mono text-lg font-black text-slate-700 group-hover:text-blue-600 transition-colors ltr" dir="ltr">
                 {email}
               </span>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 py-8">
         <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
            <span>ساخته شده با</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>برای جامعه مهندسی ایران</span>
         </div>
      </div>
    </div>
  );
};

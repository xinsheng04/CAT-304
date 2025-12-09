import SkillOptions from "@/page/profile/SkillOptions";

export function SkillContent({ email }: { email: string }) {
  return (
    <div space-y-2>
      <label className="block text-center text-white text-4xl font-bold pt-1 mt-2 -mb-2 ">Skills</label>
       <div className="w-full flex justify-center items-center py-8">
        <div className="w-[600px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl pt-4 pb-10 space-y-6">
        <label className="block text-start text-white text-2xl font-semibold pt-1 pl-7 mb-2 mt-2 ">Add Your Skills</label>
          <div className="p-6">
          
            <SkillOptions userEmail={email} />
          </div> 
        </div>
        </div> 
    </div>
    
  );
}


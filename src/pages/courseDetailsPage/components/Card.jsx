export const Card = () => {
    return(
        <div className="flex flex-col p-8 gap-6 rounded-xl border border-[#1B40B3]">
        <h3 className="font-bold text-[60px] text-[#262626] self-end">
          01
        </h3>
        <p className='text-lg font-semibold text-[#333333]'>
          Exploratory Data Analysis (EDA)
        </p>
        <div className='flex flex-col gap-4 w-full'>
          <div className='w-full py-4 px-4 rounded-md border border-[#F1F1F3] flex flex-col gap-1'>
            <h5 className = "font-medium text-base text-[#333333]">
              Visualization Techniques
            </h5>
            <p className='font-normal text-[#59595A] text-sm'>
              Lesson 02
            </p>
          </div>
          <div className='w-full py-5 px-6 rounded-md border border-[#F1F1F3] flex flex-col gap-1'>
            <h5 className = "font-medium text-base text-[#333333]">
              Visualization Techniques
            </h5>
            <p className='font-normal text-[#59595A] text-sm'>
              Lesson 02
            </p>
          </div>
        </div>
      </div>
    )
  };

export const Card = (props) => {
    return(
        <div className=" flex flex-col px-12 py-6 gap-2 rounded-xl border border-[#1B40B3]">
        <h3 className="font-bold text-[40px] text-[#262626] self-end">
          {props.id}
        </h3>
        <p className='text-lg font-semibold text-[#333333]'>
          {props.title}
        </p>
        <div className='flex flex-col gap-1 w-full'>
            {props.topics.map(( item, index) =>{
                return(
                    <div key={index} className='w-full py-3 px-4 rounded-md border border-[#F1F1F3] flex flex-col gap-1'>
                    <h5 className = "font-medium text-base text-[#333333]">
                      {item[0]}
                    </h5>
                    <p className='font-normal text-[#59595A] text-sm'>
                      {item[1]}
                    </p>
                  </div>
                )
            })}
        </div>
      </div>
    )
  };
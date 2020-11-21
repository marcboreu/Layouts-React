import React from 'react';


const Datepicker = () => {
        return (
          <div className="block rounded-t overflow-hidden bg-white text-center w-24">
            <div className="bg-red text-white py-1">Feb</div>
            <div className="pt-1 border-l border-r">
              <span className="text-4xl font-bold">9</span>
            </div>
            <div className="pb-2 px-2 border-l border-r border-b rounded-b flex justify-between">
              <span className="text-xs font-bold">Fri</span>
              <span className="text-xs font-bold">2018</span>
            </div>
          </div>
        );
};




export default Datepicker;

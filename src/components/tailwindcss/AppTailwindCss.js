import React from 'react';
import DropdownLayout from './DropdownLayout';
import BreadcrumbLayout from './BreadcrumbLayout';
import CardLayout from './CardLayout';
import Checkbox from './Checkbox';
import Slider from './Slider';
import FormLayout from './FormLayout';
import Datepicker from './Datepicker';

import './Styles.css';



const AppTailwindCss = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-1-black containerLayout">
      <div className="col-span-4 row-span-1 Breadcrumb">
        <BreadcrumbLayout/>
      </div>
      <div className="col-span-2 row-span-1 Card">
        <CardLayout/>
      </div>
      <div className="col-span-3 row-span-2 Form">
        <FormLayout/>
      </div>
      <div className="col-span-3 row-span-1 Slider">
        <Slider/>
      </div>
      <div className="col-span-2 row-span-1 Datepicker">
        <Datepicker/>
      </div>
      <div className="col-span-4 row-span-1 DropdownLayout">
        <DropdownLayout/>
      </div>
      <div className="col-span-3 row-span-1 CheckboxLayout">
        <Checkbox/>
      </div>
    </div>
  )
}

export default AppTailwindCss;

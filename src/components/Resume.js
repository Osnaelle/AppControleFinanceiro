import React from 'react'
import ResumeItem from './ResumeItem';
import ResumeItem2 from './ResumeItem2';
import ResumeItem3 from './ResumeItem3';

import{FaRegArrowAltCircleUp,FaRegArrowAltCircleDown,FaDollarSign,} from 'react-icons/fa'

    const Resume=({income, expense, total}) =>{
        return (
            <div className='Resume'>
            
                <ResumeItem title="Entradas:" Icon={FaRegArrowAltCircleUp} value={income}/>
                <ResumeItem2   title="Saídas:" Icon={FaRegArrowAltCircleDown} value={expense}/>
                <ResumeItem3  title="Total:" Icon={FaDollarSign} value={total}/>
                
                </div>
                
        );
    }

export default Resume
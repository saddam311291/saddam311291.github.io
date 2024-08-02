'use client';
import { useEffect, useState } from 'react';

const DateDifference = () => {
  const [difference, setDifference] = useState({ years: 0, months: 0 });

  const calculateDateDifference = (startDate: string,endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  useEffect(() => {
    const startDate = '2012-01-01';
    const currentDate = new Date().toISOString().split('T')[0];
    const diff = calculateDateDifference(startDate, currentDate);
    setDifference(diff);
  }, []);

  return (
    
    <p className="text-sm">Total Employment {difference.years} Years and {difference.months} Months</p>
 
  );
};

export default DateDifference;

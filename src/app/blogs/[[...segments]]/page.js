import React from 'react';

const DynamicPage = ({params}) => {
    const [year, id]= params.segments || [];
    console.log(year, id);
    return (
        <div>
            single blog {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default DynamicPage;
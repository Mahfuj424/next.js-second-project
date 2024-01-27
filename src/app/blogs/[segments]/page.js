import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    const [year, id]= params.segments || [];
    console.log(year, id);
    return (
        <div>
            single blog {year || new Date().getFullYear()} for {id}
            <br></br>
            {searchParams.title}
        </div>
    );
};

export default DynamicPage;
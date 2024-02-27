import React from 'react';

const DynamicPage = ({params}) => {
    return (
        <div>
            single blog {params?.id}
        </div>
    );
};

export default DynamicPage;
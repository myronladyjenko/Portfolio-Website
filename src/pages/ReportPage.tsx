import React from 'react';
import { useParams } from 'react-router-dom';

const ReportPage: React.FC = () => {
    const params = useParams()
    const reportName = params?.reportName

    return <>ReportPage: {reportName}</>
}

export default ReportPage; 
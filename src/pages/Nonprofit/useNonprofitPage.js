import { useState } from "react";
import { useCreateNonprofit, useNonprofit } from "../../services/nonprofit";


const useNonprofitPage = () => {

    const initialState = { name: '', address: '', email: '' };
    const [tableData, setTableData] = useState(initialState);

    const { data } = useNonprofit();
    const { mutateAsync } = useCreateNonprofit();

    const handleField = (e) => {
        const {name, value} = e.target;
        setTableData((p) => ({...p, [name]: value}));
    }

    const handleSave = () => {
        mutateAsync(tableData);
        setTableData(initialState);
        document.getElementById('name').focus();
    }

    return { initialState, tableData, data, handleField, handleSave };
}

export default useNonprofitPage;
import { useState } from "react";
import { useCreateEmailSent, useDeleteAllEmailSent, useEmailSent } from "../../services/sendemail";


const useSendemailPage = () => {

    const { data } = useEmailSent();
    const [templateMsg, setTemplateMsg] = useState('Sending money to nonprofit {name} at address {address}');

    const { mutateAsync } = useCreateEmailSent();
    const deleteAllEmails = useDeleteAllEmailSent();

    const handleField = (e) => {
        const { value } = e.target;
        setTemplateMsg(value);
    }

    const handleSendemail = () => {
        const payload = {sendEmail: true, templateMessage: templateMsg};
        mutateAsync(payload);
    }

    return { templateMsg, data, handleField, handleSendemail, deleteAllEmails };
}

export default useSendemailPage;
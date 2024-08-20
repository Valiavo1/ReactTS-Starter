import React from "react";
import {Button} from "@nextui-org/react";
import {useAuthStore} from "../../data/store/AuthStore";

export const Dashboard: React.FC = () => {
    const {logout} = useAuthStore()

    return (
        <div>
            Dashboard
            <Button variant={'flat'} color={'danger'} onClick={logout}>Logout</Button>
        </div>
    )
}
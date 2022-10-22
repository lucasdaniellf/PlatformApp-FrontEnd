import React from "react";
import { PopupBox } from "./style-components/popup-box";
import { Button } from "./button";

export const ConfirmationBox = ({clickYesEvent, clickNoEvent}) => {
    return (
        <PopupBox>
            <h3>
                Você tem certeza?
            </h3>
            <Button onClick={clickYesEvent} text={"Sim"}></Button>
            <Button onClick={clickNoEvent} text={"Não"}></Button>
        </PopupBox>
    );
};
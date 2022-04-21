import React, { FC, FormEventHandler, useState } from "react";
import './loader.css';

interface LoaderProps {
    isLoading?: boolean;
}
  
export const Loader: FC<LoaderProps> = (props) => {
    
    if (props.isLoading) {
        return (
            <div id='outer'>
                <div id='middle'>

                    <div id='inner'>
                    </div>
                </div>
            </div>
        );

    }
    else {
        return <></>
    }


};
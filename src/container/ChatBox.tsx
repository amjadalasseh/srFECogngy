import { History } from "../components/History";
import { Message } from "../components/Message";
import { Input } from "../components/Input";
import { Loader } from "../components/Loader/Loader";
import { socket } from '../api'
import { RootStateOrAny, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function ChatBox() {

    const {messags,loader} = useSelector((state: RootStateOrAny) => state);

    useEffect(() => {
        const objDiv: any = document.getElementById("History-id");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [messags]);

    const onSubmit = (message: string) => {

        socket.sendMessage(message)
    }

    const dispalyMessages = () => {

        const list: any = []
        messags.list.forEach((element: any) => {
 
            const words = element.text.split(':');
            if (words[0] === "You said") {
                list.push(<Message key={element.traceId+words[1]} direction="outgoing">{words[1]}</Message>)

            } else {
                list.push(<Message key={element.traceId+words[0]} direction="incoming">{words[0]}</Message>)
            }

        }
        )
        return list;

    }

    return (

        <div
            style={{
                width: 300,
                height: 400,
                display: "flex",
                flexDirection: "column",
                position:"relative"

            }}
        >
            <History>

                {dispalyMessages()}

            </History>
            <Loader isLoading={loader.isLoading}/>
            {/* TODO: send message on submit */}
            <Input onSubmit={onSubmit} />
        </div >

    );
}

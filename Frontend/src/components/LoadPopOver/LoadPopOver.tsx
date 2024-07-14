import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

import { useState, useRef } from 'react';

const SERVER = 'https://course-planner-dl32.onrender.com';
export default function LoadPopOver() {
    const [passCode, setPasscode] = useState<string>("");

    async function handleLoad() {

        const promise = await fetch(`${SERVER}/load-schedule-db`, {
            method: "POST",
            body: passCode
        })

        const data = await promise.json();
        console.log('saved schedule data: ');
        console.log(data);

    }

    return (
        <Popover closeOnBlur={true}>
            <PopoverTrigger>
                <button className="settingButton"
                    onClick={() => {
                    }}> Load </button>

            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton margin="0px 0px" />
                <PopoverHeader><b>Load Schedule</b> </PopoverHeader>
                <PopoverBody>
                    Enter passcode to load your schedule.
                    <InputGroup marginTop="1em">
                        <Input placeholder="Passcode" width="50%" onChange={(e) => setPasscode(e.target.value)} />
                        <InputRightAddon padding={"0px 0px"}> <Button marginTop="2px" width="100%" height="110%" borderTopLeftRadius="0px"
                            borderBottomLeftRadius="0px" backgroundColor='#0a74ed;' color="white"
                            onClick={handleLoad}>Submit</Button></InputRightAddon>
                    </InputGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}


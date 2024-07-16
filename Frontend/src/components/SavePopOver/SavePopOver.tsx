import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react'

import { useState, useRef } from 'react';


const SERVER = 'https://course-planner-dl32.onrender.com';
export default function SavePopOver({ addedCourses }: any) {
    const [passCode, setPasscode] = useState<string>("");
    let inputRef = useRef<any>(null);


    async function handleSubmit() {
        console.log('passcode');
        console.log(passCode);

        const orderedCourses: string[][] = [];
        for (let currentQuarter of Object.keys(addedCourses).sort()) {
            const courseList = [];
            for (let element of addedCourses[currentQuarter]) {
                courseList.push(element.id);
            }
            orderedCourses.push(courseList);
        }

        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: passCode,
                scheduleA: orderedCourses,
                scheduleB: [[]],
                scheduleC: [[]]
            }),
        }

        const promise = await fetch(`${SERVER}/save-schedule-db`, options);
        const data = await promise.text()
        // console.log('endpoint output: ')
        console.log(data);
    }


    const inputField = <Input placeholder="Passcode" width="50%" value={passCode} onChange={(e) => setPasscode(e.target.value)}
        ref={inputRef} />


    return (
        <Popover closeOnBlur={true} closeOnEsc={true} returnFocusOnClose={true} initialFocusRef={inputRef}>
            <PopoverTrigger>
                <button className="settingButton"
                    onClick={() => {
                        inputRef.current.focus()
                    }}> Save </button>

            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton margin="0px 0px" />
                <PopoverHeader><b>Save Schedule</b> </PopoverHeader>
                <PopoverBody zIndex="200">
                    Enter a unique and secret passcode to save your schedule.
                    Anyone can modify your schedule if they use the same passcode!
                    <InputGroup marginTop="1em">
                        {/* <Input placeholder="Passcode" width="50%" value={passCode} onChange={(e) => setPasscode(e.target.value)}
                            ref={inputRef} /> */}
                        {inputField}
                        <InputRightAddon padding={"0px 0px"}>
                            <Button marginTop="2px" width="100%" height="110%" borderTopLeftRadius="0px"
                                borderBottomLeftRadius="0px" backgroundColor='#0a74ed;' color="white"
                                onClick={handleSubmit}>Submit</Button>
                        </InputRightAddon>
                    </InputGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}